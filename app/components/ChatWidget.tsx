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

const QUICK_QUESTIONS = [
  "Give me your timeline in 20 seconds.",
  "What are your top projects?",
  "Explain the airline dashboard thing.",
  "Explain your resume project.",
  "What did you do on SLU Alumni Connect?",
  "What’s your tech stack?",
];

function renderFormattedAnswer(text: string) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line, i) => {
      if (line.endsWith(":") && line.length < 60) {
        return (
          <div
            key={i}
            className="mt-3 mb-1 text-xs uppercase tracking-wider text-blue-400"
          >
            {line.replace(":", "")}
          </div>
        );
      }

      if (/^[-•]\s+/.test(line)) {
        return (
          <div key={i} className="flex gap-2 pl-2 text-sm leading-relaxed">
            <span className="mt-[2px] text-emerald-400">•</span>
            <span>{line.replace(/^[-•]\s+/, "")}</span>
          </div>
        );
      }

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

  const panelRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const debug = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("chat_debug") === "1";
  }, []);

  const [messages, setMessages] = useState<ChatMsg[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem("portfolio_chat_messages");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      "portfolio_chat_messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, loading]);

  // Click outside + ESC
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  async function send(q?: string) {
    const question = (q ?? input).trim();
    if (!question || loading) return;

    setLoading(true);
    setError(null);

    setMessages((m) => [...m, { id: uid(), role: "user", content: question }]);
    setInput("");

    try {
      const res = await fetch(`/api/chat${debug ? "?debug=1" : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "assistant",
          content:
            data.answer ||
            data.follow_up_question ||
            "I don’t have enough information to answer that.",
        },
      ]);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    window.localStorage.removeItem("portfolio_chat_messages");
  }

  return (
    <>
      {/* Floating FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open portfolio assistant"
        className="
          fixed bottom-5 right-5 z-50
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 active:scale-95
        "
      >
        <img
          src="/images/ai-agent-dark.png"
          alt="AI Assistant"
          className="absolute w-full h-full rounded-full ai-idle ai-hover"
        />
      </button>

      {open && (
        <div
          ref={panelRef}
          className="
            fixed bottom-20 right-5 z-50
            w-[94vw] max-w-md
            rounded-2xl
            bg-zinc-900/95 text-white
            border border-white/10
            ring-1 ring-blue-500/30
            shadow-2xl backdrop-blur
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <div className="font-semibold">
                Harsha’s Portfolio Assistant
              </div>
              <div className="text-xs opacity-70">
                Grounded answers from documented projects.
              </div>
            </div>
            <button
              onClick={clearChat}
              className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/10"
            >
              Clear
            </button>
          </div>

          {/* Quick questions */}
          <div className="px-4 py-3 border-b border-white/10">
            <div className="text-xs opacity-70 mb-2">Quick questions</div>
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="
                    text-xs px-2 py-1 rounded-full
                    border border-white/10
                    hover:bg-white/10
                  "
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="max-h-[52vh] overflow-y-auto px-4 py-3 space-y-3"
          >
            {messages.length === 0 && (
              <div className="text-sm opacity-70">
                Ask about my projects, timeline, or what I worked on.
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-blue-500 text-black"
                      : "bg-white/5 text-white border border-white/10"
                  }`}
                >
                  {m.role === "assistant"
                    ? renderFormattedAnswer(m.content)
                    : m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-xs opacity-60">Thinking…</div>
            )}

            {error && (
              <div className="text-xs text-red-400">{error}</div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask a question…"
              className="
                flex-1 rounded-xl px-3 py-2 text-sm
                bg-zinc-800 border border-white/10
                focus:border-blue-400 outline-none
              "
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="
                px-3 py-2 rounded-xl text-sm font-medium
                bg-blue-400 text-black
                hover:bg-blue-300 disabled:opacity-50
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
