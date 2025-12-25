"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Role = "user" | "assistant";

type ChatMsg = {
  id: string;
  role: Role;
  content: string;
};

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

const SUGGESTED = [
  "Give me your timeline in 20 seconds.",
  "What are your top projects?",
  "Explain the airline dashboard thing.",
  "Explain your resume project.",
  "What did you do on SLU Alumni Connect?",
  "What’s your tech stack?",
];

function renderFormattedAnswer(text: string) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return lines.map((line, i) => {
    // Section header (ends with :)
    if (line.endsWith(":") && line.length < 60) {
      return (
        <div
          key={i}
          className="mt-4 mb-1 text-sm font-semibold tracking-wide opacity-90"
        >
          {line.replace(":", "")}
        </div>
      );
    }

    // Bullet-like lines
    if (/^[-•]\s+/.test(line)) {
      return (
        <div key={i} className="flex gap-2 pl-2 text-sm leading-relaxed">
          <span className="mt-[3px] opacity-60">•</span>
          <span>{line.replace(/^[-•]\s+/, "")}</span>
        </div>
      );
    }

    // Normal paragraph
    return (
      <div key={i} className="text-sm leading-relaxed opacity-90">
        {line}
      </div>
    );
  });
}


export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debug = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("chat_debug") === "1";
  }, []);

  const [messages, setMessages] = useState<ChatMsg[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem("portfolio_chat_messages");
      return raw ? (JSON.parse(raw) as ChatMsg[]) : [];
    } catch {
      return [];
    }
  });

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio_chat_messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  async function send(q?: string) {
    const question = (q ?? input).trim();
    if (!question || loading) return;

    setError(null);
    setLoading(true);

    const userMsg: ChatMsg = { id: uid(), role: "user", content: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch(`/api/chat${debug ? "?debug=1" : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();

      const assistantMsg: ChatMsg = {
        id: uid(),
        role: "assistant",
        content:
          data?.answer?.trim() ||
          data?.follow_up_question?.trim() ||
          "I don’t have enough information from the portfolio content for that.",
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("portfolio_chat_messages");
    }
  }

  return (
    <>
      {/* Floating Chat FAB */}
      <button
      onClick={() => setOpen((v) => !v)}
      aria-label="Open AI assistant chat"
      className="
        fixed bottom-5 right-5 z-50
        w-14 h-14 sm:w-16 sm:h-16
        rounded-full
        flex items-center justify-center
        transition-transform duration-300
        hover:scale-110 active:scale-95
        "
      >
        {/* Light theme AI agent */}
        <img
          src="/images/ai-agent-light.png"
          alt="AI Assistant"
          className="
            absolute w-full h-full rounded-full
            animate-[idlePulse_5s_ease-in-out_infinite]
            hover:animate-[hoverFloat_1.8s_ease-in-out_infinite]
            dark:hidden
          "
        />

        {/* Dark theme AI agent */}
        <img
          src="/images/ai-agent-dark.png"
          alt="AI Assistant"
          className="
            absolute w-full h-full rounded-full
            animate-[idlePulse_5s_ease-in-out_infinite,glowPulse_4s_ease-in-out_infinite]
            hover:animate-[hoverFloat_1.8s_ease-in-out_infinite,glowPulse_4s_ease-in-out_infinite]
            hidden dark:block
          "
        />
      </button>


      {/* Chat Panel */}
      {open && (
        <div
          className="
            fixed bottom-20 right-5 z-50
            w-[94vw] max-w-md
            rounded-2xl
            backdrop-blur shadow-2xl
            border

            bg-white/90 text-black border-black/10
            dark:bg-zinc-900/90 dark:text-white dark:border-white/10
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="font-semibold">Harsha’s Portfolio Assistant</div>
              <div className="text-xs opacity-70">Grounded answers from documented projects.</div>
            </div>
            <button
              onClick={clearChat}
              className="text-xs px-2 py-1 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            >
              Clear
            </button>
          </div>

          {/* Suggestions */}
          <div className="px-4 py-3 border-b border-black/10 dark:border-white/10">
            <div className="text-xs opacity-70 mb-2">Quick questions</div>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  disabled={loading}
                  className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="max-h-[52vh] overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-sm opacity-70">
                Ask about my projects, timeline, or what I did on each one.
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm border ${
                    m.role === "user"
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 text-black dark:bg-white/5 dark:text-white"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <div className="space-y-2">
                    {renderFormattedAnswer(m.content)}
                    </div>
                  ) : (
                    <span className="whitespace-pre-wrap">{m.content}</span>
                  )}
                </div>
              </div>
            ))}

            {loading && (
                <div className="flex items-center gap-1 text-sm opacity-70">
                <span>Typing</span>
                <span className="animate-pulse motion-reduce:animate-none">▍</span>
                </div>
            )}

            {error && (
              <div className="text-xs text-red-500">{error}</div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-black/10 dark:border-white/10">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                disabled={loading}
                placeholder="Ask a quick question…"
                className="
                  flex-1 rounded-xl px-3 py-2 text-sm outline-none
                  bg-white/80 border border-black/10
                  focus:border-black/30

                  dark:bg-zinc-900/80 dark:border-white/10 dark:focus:border-white/30
                "
              />
              <button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                className="
                  rounded-xl px-3 py-2 text-sm font-medium
                  bg-black text-white hover:bg-black/80
                  dark:bg-white dark:text-black dark:hover:bg-white/80
                  disabled:opacity-50
                "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
