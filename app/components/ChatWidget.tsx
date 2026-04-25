"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, Trash2, Sparkles } from "lucide-react";

/* ── Types ── */
type Role = "user" | "assistant";
type ChatMsg = { id: string; role: Role; content: string };

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

/* ── Constants (outside component is fine for these) ── */
const QUICK_QUESTIONS = [
  "What roles is Harsha open to?",
  "Tell me about LifeOS.",
  "What's his design process?",
  "What is he working on now?",
];

const ALIVE_THOUGHTS = [
  "Curious about my design process?",
  "Ask me about LifeOS →",
  "What roles am I targeting?",
  "How do I approach UX research?",
  "What's the story behind this portfolio?",
  "Ask me anything — I'm grounded in real work.",
];

const STATUS_CYCLE = ["online", "ready", "ask me →"];

/* ── Typing dots ── */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-zinc-400"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

/* ── Message renderer ── */
function renderFormattedAnswer(text: string) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line, i) => {
      if (line.endsWith(":") && line.length < 60)
        return (
          <div key={i} className="mt-3 mb-1 text-xs uppercase tracking-wider text-blue-400">
            {line.replace(":", "")}
          </div>
        );
      if (/^[-•]\s+/.test(line))
        return (
          <div key={i} className="flex gap-2 pl-2 text-sm leading-relaxed">
            <span className="mt-[2px] text-emerald-400">•</span>
            <span>{line.replace(/^[-•]\s+/, "")}</span>
          </div>
        );
      return (
        <div key={i} className="text-sm leading-relaxed opacity-90">
          {line}
        </div>
      );
    });
}

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function ChatWidget() {
  const [open,         setOpen]         = useState(false);
  const [input,        setInput]        = useState("");
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState<string | null>(null);
  const [nudge,        setNudge]        = useState(false);
  const [thought,      setThought]      = useState<string | null>(null);
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [statusIdx,    setStatusIdx]    = useState(0);

  const panelRef = useRef<HTMLDivElement>(null);
  const listRef  = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* persist messages */
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
    window.localStorage.setItem("portfolio_chat_messages", JSON.stringify(messages));
  }, [messages]);

  /* auto-scroll */
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  /* focus input on open */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  /* initial nudge — once per session at 5s */
  useEffect(() => {
    const seen = sessionStorage.getItem("chat_nudge_seen");
    if (seen) return;
    const t = setTimeout(() => {
      setNudge(true);
      sessionStorage.setItem("chat_nudge_seen", "1");
      setTimeout(() => setNudge(false), 4000);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  /* persistent rotating thoughts — every 20s while chat is closed */
  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setThought(ALIVE_THOUGHTS[thoughtIndex % ALIVE_THOUGHTS.length]);
      setThoughtIndex((i) => i + 1);
      setTimeout(() => setThought(null), 3500);
    }, 20000);
    return () => clearInterval(interval);
  }, [open, thoughtIndex]);

  /* click outside + ESC */
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node))
        setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  /* status cycle — every 3s while closed */
  useEffect(() => {
    if (open) return;
    const t = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUS_CYCLE.length);
    }, 3000);
    return () => clearInterval(t);
  }, [open]);

  /* send message */
  async function send(q?: string) {
    const question = (q ?? input).trim();
    if (!question || loading) return;
    setLoading(true);
    setError(null);
    setMessages((m) => [...m, { id: uid(), role: "user", content: question }]);
    setInput("");
    try {
      const res = await fetch("/api/chat", {
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
            "I don't have enough info on that.",
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

  /* ── Render ── */
  return (
    <>
      {/* ── FAB pill ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Initial nudge */}
        <AnimatePresence>
          {nudge && !open && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="mb-1 max-w-[220px] rounded-2xl
                         bg-zinc-800 border border-white/10
                         px-4 py-2 text-sm text-zinc-200 shadow-xl"
            >
              👋 Ask me anything about Harsha
            </motion.div>
          )}
        </AnimatePresence>

        {/* Persistent rotating thoughts */}
        <AnimatePresence>
          {thought && !nudge && !open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.93 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-1 max-w-[210px] rounded-2xl
                         bg-zinc-900/95 border border-blue-500/20
                         px-3.5 py-2 text-xs text-blue-300
                         shadow-[0_4px_20px_rgba(59,130,246,0.15)]
                         backdrop-blur"
            >
              <span className="flex items-center gap-1.5">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"
                />
                {thought}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill button */}
        <motion.button
          onClick={() => { setOpen((v) => !v); setNudge(false); }}
          aria-label="Open portfolio assistant"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex items-center gap-2 rounded-full
                     bg-zinc-900 border border-white/15
                     pl-1.5 pr-3 py-1.5 md:pl-2 md:pr-5 md:py-2 md:gap-3
                     shadow-[0_4px_24px_rgba(0,0,0,0.5)]
                     overflow-hidden backdrop-blur"
        >
          {/* Shimmer */}
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full"
            animate={{
              background: [
                "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.06) 50%, transparent 100%)",
                "linear-gradient(90deg, transparent 100%, rgba(96,165,250,0.06) 150%, transparent 200%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          {/* Pulse rings + avatar */}
          <span className="relative flex h-9 w-9 md:h-11 md:w-11 shrink-0">
            <motion.span
              className="absolute inset-0 rounded-full bg-blue-500/20"
              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-blue-400/10"
              animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
            <motion.img
              src="/images/ai-agent-dark.png"
              alt="AI"
              className="relative z-10 h-9 w-9 md:h-11 md:w-11 rounded-full object-cover
                         ring-1 ring-blue-400/30"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(96,165,250,0)",
                  "0 0 10px rgba(96,165,250,0.4)",
                  "0 0 0px rgba(96,165,250,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
          </span>

          {/* Label + status */}
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[11px] md:text-[13px] text-zinc-300 font-medium tracking-wide">
              Ask Harsha's AI
            </span>
            <span className="flex items-center gap-1 text-[10px] md:text-[11px] text-emerald-400 min-w-[52px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {STATUS_CYCLE[statusIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>

          {/* Sparkle */}
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          >
            <Sparkles size={13} className="text-blue-400 ml-0.5" />
          </motion.span>
        </motion.button>
      </div>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-24 right-6 z-50
                       w-[94vw] max-w-[420px]
                       rounded-2xl
                       bg-zinc-900/95 text-white
                       border border-white/10
                       shadow-[0_8px_48px_rgba(0,0,0,0.6)]
                       backdrop-blur-xl
                       overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3
                            border-b border-white/8 bg-white/3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/ai-agent-dark.png"
                  alt="AI"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Harsha's Portfolio AI</p>
                  <p className="text-[11px] text-zinc-400">
                    Grounded answers from my actual work
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <motion.button
                  onClick={clearChat}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white
                             hover:bg-white/8 transition"
                  aria-label="Clear chat"
                >
                  <Trash2 size={14} />
                </motion.button>
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white
                             hover:bg-white/8 transition"
                  aria-label="Close"
                >
                  <X size={14} />
                </motion.button>
              </div>
            </div>

            {/* Quick questions */}
            <div className="px-4 py-3 border-b border-white/8">
              <p className="text-[11px] text-zinc-500 mb-2 tracking-wide uppercase">
                Quick questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <motion.button
                    key={q}
                    onClick={() => send(q)}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                    className="text-[11px] px-3 py-1.5 rounded-full
                               border border-white/10 text-zinc-300
                               bg-white/5 transition-colors"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="max-h-[48vh] overflow-y-auto px-4 py-4 space-y-3
                         scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.length === 0 && (
                <p className="text-sm text-zinc-500 text-center py-4">
                  Ask about my projects, experience, or skills.
                </p>
              )}

              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm
                        ${m.role === "user"
                          ? "bg-blue-500 text-white rounded-br-sm"
                          : "bg-white/6 text-zinc-100 border border-white/10 rounded-bl-sm"
                        }`}
                    >
                      {m.role === "assistant"
                        ? renderFormattedAnswer(m.content)
                        : m.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/6 border border-white/10 rounded-2xl rounded-bl-sm">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              {error && (
                <p className="text-xs text-red-400 text-center">{error}</p>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/8 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask anything about Harsha…"
                className="flex-1 rounded-xl px-3.5 py-2.5 text-sm
                           bg-zinc-800/80 border border-white/10
                           focus:border-blue-500/60 focus:outline-none
                           placeholder:text-zinc-600 transition-colors"
              />
              <motion.button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3.5 py-2.5 rounded-xl
                           bg-blue-500 text-white
                           hover:bg-blue-400 disabled:opacity-40
                           transition-colors flex items-center justify-center"
              >
                <Send size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}