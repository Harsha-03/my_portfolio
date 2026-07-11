"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  animate,
  type PanInfo,
} from "framer-motion";
import { Send, X, Trash2, Sparkles, GripVertical } from "lucide-react";

/* ── Types ── */
type Role = "user" | "assistant";
type ChatMsg = { id: string; role: Role; content: string };
type Corner = "tl" | "tr" | "bl" | "br";

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

/* ── Constants ── */
const QUICK_QUESTIONS = [
  "What roles is Harsha open to?",
  "Tell me about LifeOS.",
  "What's his design process?",
  "What is he working on now?",
];

const ALIVE_THOUGHTS = [
  "Curious about my design process?",
  "Ask me about LifeOS \u2192",
  "What roles am I targeting?",
  "How do I approach UX research?",
  "What's the story behind this portfolio?",
  "Ask me anything \u2014 I'm grounded in real work.",
];

const STATUS_CYCLE = ["online", "ready", "ask me \u2192"];

const MARGIN = 24;
const FAB_FALLBACK_W = 200;
const FAB_FALLBACK_H = 60;
const PANEL_OFFSET = 80; // gap between FAB and chat panel

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
      if (/^[-\u2022]\s+/.test(line))
        return (
          <div key={i} className="flex gap-2 pl-2 text-sm leading-relaxed">
            <span className="mt-[2px] text-emerald-400">{"\u2022"}</span>
            <span>{line.replace(/^[-\u2022]\s+/, "")}</span>
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
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nudge, setNudge] = useState(false);
  const [thought, setThought] = useState<string | null>(null);
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [corner, setCorner] = useState<Corner>("br");
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fabRef = useRef<HTMLDivElement>(null);

  // Motion values for FAB position (in viewport coords)
  const fabX = useMotionValue(0);
  const fabY = useMotionValue(0);

  /* ── Helpers ── */
  function getCornerCoords(c: Corner) {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rect = fabRef.current?.getBoundingClientRect();
    const fabW = rect?.width ?? FAB_FALLBACK_W;
    const fabH = rect?.height ?? FAB_FALLBACK_H;
    return {
      x: c.endsWith("l") ? MARGIN : w - fabW - MARGIN,
      y: c.startsWith("t") ? MARGIN : h - fabH - MARGIN,
    };
  }

  function snapToCorner(c: Corner, withSpring = true) {
    const { x, y } = getCornerCoords(c);
    if (withSpring) {
      animate(fabX, x, { type: "spring", stiffness: 280, damping: 28 });
      animate(fabY, y, { type: "spring", stiffness: 280, damping: 28 });
    } else {
      fabX.set(x);
      fabY.set(y);
    }
  }

  /* ── Init: load free position (new) or fall back to corner (old users) ── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedPos = localStorage.getItem("chat_fab_pos");
    if (savedPos) {
      try {
        const { x, y } = JSON.parse(savedPos);
        requestAnimationFrame(() => {
          fabX.set(x);
          fabY.set(y);
          const w = window.innerWidth;
          const h = window.innerHeight;
          const c: Corner =
            y < h / 2 ? (x < w / 2 ? "tl" : "tr") : (x < w / 2 ? "bl" : "br");
          setCorner(c);
        });
        return;
      } catch {}
    }

    // First-time users or old-format fallback
    const saved = (localStorage.getItem("chat_fab_corner") as Corner) || "br";
    setCorner(saved);
    requestAnimationFrame(() => snapToCorner(saved, false));
  }, []);

  /* ── Mobile mode + nav-triggered open ── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(media.matches);

    sync();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const openFromNav = (event: Event) => {
      setOpen(true);
      setNudge(false);
      setThought(null);
      const custom = event as CustomEvent<{ prompt?: string }>;
      if (custom.detail?.prompt) {
        setInput(custom.detail.prompt);
      }
    };

    window.addEventListener("open-chat-widget", openFromNav);
    return () => window.removeEventListener("open-chat-widget", openFromNav);
  }, []);

  /* ── Resize: clamp free position back inside viewport ── */
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const rect = fabRef.current?.getBoundingClientRect();
      const fabW = rect?.width ?? FAB_FALLBACK_W;
      const fabH = rect?.height ?? FAB_FALLBACK_H;
      const currentX = fabX.get();
      const currentY = fabY.get();
      const clampedX = Math.max(MARGIN, Math.min(currentX, w - fabW - MARGIN));
      const clampedY = Math.max(MARGIN, Math.min(currentY, h - fabH - MARGIN));
      if (clampedX !== currentX) animate(fabX, clampedX, { duration: 0.25 });
      if (clampedY !== currentY) animate(fabY, clampedY, { duration: 0.25 });
      // Update corner state for panel positioning
      const c: Corner =
        clampedY < h / 2
          ? clampedX < w / 2 ? "tl" : "tr"
          : clampedX < w / 2 ? "bl" : "br";
      setCorner(c);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  /* ── Drag end: snap to nearest EDGE only, preserve other axis ── */
  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, _info: PanInfo) {
    setIsDragging(false);
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rect = fabRef.current?.getBoundingClientRect();
    const fabW = rect?.width ?? FAB_FALLBACK_W;
    const fabH = rect?.height ?? FAB_FALLBACK_H;

    const currentX = fabX.get();
    const currentY = fabY.get();
    const centerX = currentX + fabW / 2;
    const centerY = currentY + fabH / 2;

    const distLeft = centerX;
    const distRight = w - centerX;
    const distTop = centerY;
    const distBottom = h - centerY;
    const minDist = Math.min(distLeft, distRight, distTop, distBottom);

    let snapX = currentX;
    let snapY = currentY;

    if (minDist === distLeft) snapX = MARGIN;
    else if (minDist === distRight) snapX = w - fabW - MARGIN;
    else if (minDist === distTop) snapY = MARGIN;
    else snapY = h - fabH - MARGIN;

    // Clamp within viewport
    snapX = Math.max(MARGIN, Math.min(snapX, w - fabW - MARGIN));
    snapY = Math.max(MARGIN, Math.min(snapY, h - fabH - MARGIN));

    animate(fabX, snapX, { type: "spring", stiffness: 280, damping: 28 });
    animate(fabY, snapY, { type: "spring", stiffness: 280, damping: 28 });

    localStorage.setItem("chat_fab_pos", JSON.stringify({ x: snapX, y: snapY }));

    // Update corner so the panel opens in the right direction
    const nextCorner: Corner =
      snapY < h / 2
        ? snapX < w / 2 ? "tl" : "tr"
        : snapX < w / 2 ? "bl" : "br";
    setCorner(nextCorner);
  }

  /* ── persist messages ── */
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

  /* status cycle */
  useEffect(() => {
    if (open) return;
    const t = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUS_CYCLE.length);
    }, 3000);
    return () => clearInterval(t);
  }, [open]);

  /* send */
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

  /* Derived layout flags */
  const isTop = corner.startsWith("t");
  const isLeft = corner.endsWith("l");

  // Panel position style based on current corner.
  // Mobile opens from the bottom nav instead of the draggable FAB.
  const panelStyle: React.CSSProperties = isMobile
    ? {
        position: "fixed",
        zIndex: 65,
        left: "1rem",
        right: "1rem",
        bottom: "6.5rem",
      }
    : {
        position: "fixed",
        zIndex: 50,
        [isTop ? "top" : "bottom"]: MARGIN + PANEL_OFFSET + "px",
        [isLeft ? "left" : "right"]: MARGIN + "px",
      };

  return (
    <>
      {/* ── Draggable FAB container ── */}
      {/* Fixed overlay container — provides positioned parent for the draggable.
          pointer-events: none so it doesn't intercept clicks on the page;
          the draggable child re-enables them via pointer-events: auto. */}
      <div
        className="hidden md:block"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 50,
        }}
      >
        <motion.div
          ref={fabRef}
          drag
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          whileDrag={{ scale: 1.04 }}
          style={{
            x: fabX,
            y: fabY,
            position: "absolute",
            top: 0,
            left: 0,
            touchAction: "none",
            pointerEvents: "auto",
          }}
          className={
            "flex gap-2 select-none " +
            (isTop ? "flex-col-reverse " : "flex-col ") +
            (isLeft ? "items-start" : "items-end")
          }
        >
        {/* Initial nudge */}
        <AnimatePresence>
          {nudge && !open && !isDragging && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-[220px] rounded-2xl bg-zinc-800 border border-white/10 px-4 py-2 text-sm text-zinc-200 shadow-xl"
            >
              {"\uD83D\uDC4B"} Ask me anything about Harsha
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rotating thoughts */}
        <AnimatePresence>
          {thought && !nudge && !open && !isDragging && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.93 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[210px] rounded-2xl bg-zinc-900/95 border border-blue-500/20 px-3.5 py-2 text-xs text-blue-300 shadow-[0_4px_20px_rgba(59,130,246,0.15)] backdrop-blur"
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
          onClick={() => {
            if (isDragging) return;
            setOpen((v) => !v);
            setNudge(false);
          }}
          aria-label="Open portfolio assistant"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex items-center gap-2 rounded-full bg-zinc-900 border border-white/15 pl-1.5 pr-3 py-1.5 md:pl-2 md:pr-5 md:py-2 md:gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur cursor-grab active:cursor-grabbing"
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
              draggable={false}
              className="relative z-10 h-9 w-9 md:h-11 md:w-11 rounded-full object-cover ring-1 ring-blue-400/30 pointer-events-none"
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
              Ask Harsha&apos;s AI
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

          {/* Drag handle hint (subtle) + sparkle */}
          <span className="flex items-center gap-0.5 ml-0.5">
            <GripVertical
              size={11}
              className="text-zinc-600 opacity-60"
              aria-hidden="true"
            />
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            >
              <Sparkles size={13} className="text-blue-400" />
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
      </div>

      {/* ── Chat panel (positions itself to FAB corner) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            key="chat-panel"
            initial={{ opacity: 0, y: isTop ? -20 : 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isTop ? -20 : 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            style={panelStyle}
            className="w-auto max-w-none rounded-2xl bg-zinc-900/95 text-white border border-white/10 shadow-[0_8px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden md:w-[94vw] md:max-w-[420px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-white/3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/ai-agent-dark.png"
                  alt="AI"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Harsha&apos;s Portfolio AI</p>
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
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/8 transition"
                  aria-label="Clear chat"
                >
                  <Trash2 size={14} />
                </motion.button>
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/8 transition"
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
                    className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 text-zinc-300 bg-white/5 transition-colors"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="max-h-[42vh] overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10 md:max-h-[48vh]"
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
                    className={"flex " + (m.role === "user" ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={
                        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm " +
                        (m.role === "user"
                          ? "bg-blue-500 text-white rounded-br-sm"
                          : "bg-white/6 text-zinc-100 border border-white/10 rounded-bl-sm")
                      }
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

              {error && <p className="text-xs text-red-400 text-center">{error}</p>}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/8 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={"Ask anything about Harsha\u2026"}
                className="flex-1 rounded-xl px-3.5 py-2.5 text-sm bg-zinc-800/80 border border-white/10 focus:border-blue-500/60 focus:outline-none placeholder:text-zinc-600 transition-colors"
              />
              <motion.button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3.5 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-400 disabled:opacity-40 transition-colors flex items-center justify-center"
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
