import { buildPortfolioKnowledge } from "./portfolioAssistant";

const API_URL = import.meta.env.VITE_ASSISTANT_API_URL || "/api/assistant";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const askAssistantApi = async ({ question, mode, messages }) => {
  const history = messages
    .slice(-6)
    .map((item) => ({ role: item.role, content: item.content }));

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        mode,
        history,
        knowledge: buildPortfolioKnowledge(),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Assistant API failed: ${response.status}`);
    }

    const data = await response.json();
    if (!data?.answer) {
      throw new Error("Assistant API returned empty answer");
    }

    return {
      answer: data.answer,
      suggestedQuestions: data.suggestedQuestions || [],
      sourceLinks: data.sourceLinks || [],
      mode: data.mode || mode,
    };
  } catch (error) {
    await wait(250);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};
