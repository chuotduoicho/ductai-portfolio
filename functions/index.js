const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

const extractOutputText = (payload) => {
  if (typeof payload?.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  const blocks = [];
  const output = Array.isArray(payload?.output) ? payload.output : [];

  for (const item of output) {
    const content = Array.isArray(item?.content) ? item.content : [];
    for (const part of content) {
      if (typeof part?.text === "string" && part.text.trim()) {
        blocks.push(part.text.trim());
      }
    }
  }

  return blocks.join("\n").trim();
};

const parseModelJson = (text) => {
  if (!text) return null;
  const cleaned = text
    .replace(/^```json/i, "")
    .replace(/^```/i, "")
    .replace(/```$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (_error) {
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch (_error2) {
      return null;
    }
  }
};

exports.assistant = onRequest(
  {
    region: "us-central1",
    timeoutSeconds: 30,
    cors: true,
    secrets: [OPENAI_API_KEY],
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const { question, mode = "about", history = [], knowledge = {} } = req.body || {};
    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "Question is required" });
      return;
    }

    const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
    const apiKey = OPENAI_API_KEY.value();

    const systemPrompt = [
      "You are a recruiter-facing portfolio assistant.",
      "Rules:",
      "1) Answer only from the provided portfolio knowledge.",
      "2) If missing data, say it is unavailable in the portfolio.",
      "3) Keep answers concise and useful for hiring decisions.",
      "4) Prefer concrete technologies, outcomes, and links.",
      "5) Return strict JSON with keys: answer, suggestedQuestions, sourceLinks, mode.",
      "6) suggestedQuestions must have at most 3 strings.",
      "7) sourceLinks must only include URLs present in knowledge.",
    ].join("\n");

    const userPayload = {
      mode,
      question,
      history: Array.isArray(history) ? history.slice(-6) : [],
      knowledge,
    };

    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          temperature: 0.2,
          max_output_tokens: 700,
          input: [
            {
              role: "system",
              content: [{ type: "input_text", text: systemPrompt }],
            },
            {
              role: "user",
              content: [{ type: "input_text", text: JSON.stringify(userPayload) }],
            },
          ],
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        res.status(502).json({
          error: "Upstream model error",
          details: payload?.error?.message || "Unknown error",
        });
        return;
      }

      const text = extractOutputText(payload);
      const parsed = parseModelJson(text);

      if (!parsed) {
        res.json({
          answer: text || "I could not generate a valid answer at the moment.",
          suggestedQuestions: [],
          sourceLinks: [],
          mode,
        });
        return;
      }

      res.json({
        answer: typeof parsed.answer === "string" ? parsed.answer : "No answer generated.",
        suggestedQuestions: Array.isArray(parsed.suggestedQuestions)
          ? parsed.suggestedQuestions.slice(0, 3)
          : [],
        sourceLinks: Array.isArray(parsed.sourceLinks) ? parsed.sourceLinks.slice(0, 6) : [],
        mode: typeof parsed.mode === "string" ? parsed.mode : mode,
      });
    } catch (error) {
      res.status(500).json({
        error: "Assistant request failed",
        details: error?.message || "Unknown server error",
      });
    }
  }
);
