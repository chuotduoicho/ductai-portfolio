import { useState } from "react";
import { assistantSuggestions, getPortfolioAnswer } from "../utils/portfolioAssistant";
import { askAssistantApi } from "../utils/assistantApi";

const initialMessage = {
  role: "assistant",
  content:
    "Ask me about skills, experience, or any project. I can also suggest which portfolio section to review first.",
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("about");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([initialMessage]);
  const [isThinking, setIsThinking] = useState(false);
  const [runtimeSuggestions, setRuntimeSuggestions] = useState({
    about: assistantSuggestions.about,
    project: assistantSuggestions.project,
  });

  const suggestions = runtimeSuggestions[mode] || assistantSuggestions[mode];

  const askQuestion = async (question) => {
    const userMessage = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setIsThinking(true);

    try {
      const response = await askAssistantApi({
        question,
        mode,
        messages: [...messages, userMessage],
      });
      if (response.suggestedQuestions.length > 0) {
        setRuntimeSuggestions((prev) => ({
          ...prev,
          [mode]: response.suggestedQuestions,
        }));
      }

      const sourceText =
        response.sourceLinks.length > 0
          ? `\n\nSources:\n${response.sourceLinks.map((item) => `- ${item}`).join("\n")}`
          : "";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `${response.answer}${sourceText}` },
      ]);
    } catch (_error) {
      const fallback = getPortfolioAnswer(question, mode);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `[Local fallback]\n${fallback}`,
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    askQuestion(question);
    setInput("");
  };

  return (
    <div className="fixed right-4 bottom-4 z-[90] sm:right-6 sm:bottom-6">
      {isOpen ? (
        <div className="w-[min(94vw,380px)] overflow-hidden rounded-2xl border border-[#2a2a45] bg-[#0f172f]/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-[#2a2a45] bg-gradient-to-r from-[#174a74] to-[#1c7c8b] px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Portfolio AI Assistant</p>
              <p className="text-xs text-slate-100/80">API mode with local fallback</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-black/20 px-2 py-1 text-xs text-white transition hover:bg-black/40"
            >
              Close
            </button>
          </div>

          <div className="flex gap-2 border-b border-[#2a2a45] px-4 py-3">
            <button
              type="button"
              onClick={() => setMode("about")}
              className={`rounded-full px-3 py-1 text-xs ${
                mode === "about"
                  ? "bg-[#34d399] text-[#082f1f]"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              About Me
            </button>
            <button
              type="button"
              onClick={() => setMode("project")}
              className={`rounded-full px-3 py-1 text-xs ${
                mode === "project"
                  ? "bg-[#f59e0b] text-[#3b2500]"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              Project Q&A
            </button>
          </div>

          <div className="max-h-[340px] space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-xl px-3 py-2 text-sm leading-6 ${
                  message.role === "assistant"
                    ? "bg-[#16213e] text-slate-100"
                    : "ml-auto max-w-[85%] bg-[#274060] text-slate-50"
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            ))}
            {isThinking && (
              <div className="rounded-xl bg-[#16213e] px-3 py-2 text-sm text-slate-100">
                Assistant is thinking...
              </div>
            )}
          </div>

          <div className="border-t border-[#2a2a45] px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => {
                    if (!isThinking) askQuestion(question);
                  }}
                  className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200 transition hover:border-slate-300 hover:text-white"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about skills or a project..."
                disabled={isThinking}
                className="w-full rounded-xl border border-slate-600 bg-[#0b1225] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-slate-300"
              />
              <button
                type="submit"
                disabled={isThinking}
                className="rounded-xl bg-[#22c55e] px-4 py-2 text-sm font-medium text-[#052e16] transition hover:bg-[#4ade80]"
              >
                {isThinking ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-gradient-to-r from-[#16a34a] to-[#0284c7] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02]"
        >
          Open AI Assistant
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
