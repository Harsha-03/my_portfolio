"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   The state model as a live artifact.
   One reusable card. Four downstream surfaces.
   Cycles through In Queue → Being Made → Ready → Waiting.
   ───────────────────────────────────────────── */

type StateKey = "in-queue" | "being-made" | "ready" | "waiting";

interface StateDef {
  key: StateKey;
  pill: string;
  headline: string;
  body: string;
  meta: string;
  accent: string; // Tailwind text color
  ring: string; // Tailwind ring color
  dot: string; // Tailwind bg color for status dot
  bg: string; // Tailwind bg for pill
  border: string; // Tailwind border for pill
}

const STATES: StateDef[] = [
  {
    key: "in-queue",
    pill: "In Queue",
    headline: "You're #3 in line.",
    body: "Barista hasn't started your drink yet. We'll tell you when they do.",
    meta: "~ 4 min until we start",
    accent: "text-zinc-300",
    ring: "ring-zinc-500/40",
    dot: "bg-zinc-400",
    bg: "bg-zinc-500/10",
    border: "border-zinc-400/30",
  },
  {
    key: "being-made",
    pill: "Being Made",
    headline: "Your Iced Matcha is being made.",
    body: "Barista started your drink 40 seconds ago.",
    meta: "~ 2 min left",
    accent: "text-amber-300",
    ring: "ring-amber-400/40",
    dot: "bg-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
  },
  {
    key: "ready",
    pill: "Ready",
    headline: "Your drink is on the counter.",
    body: "Grab it from the pickup shelf. It's marked with your name.",
    meta: "Just now",
    accent: "text-emerald-300",
    ring: "ring-emerald-400/40",
    dot: "bg-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
  {
    key: "waiting",
    pill: "Still Waiting?",
    headline: "Your drink has been on the counter for a while.",
    body: "If it's not there or something's off, tap below and we'll remake it.",
    meta: "Sitting for 6 min",
    accent: "text-amber-200",
    ring: "ring-amber-300/40",
    dot: "bg-amber-300",
    bg: "bg-amber-300/10",
    border: "border-amber-300/30",
  },
];

const CYCLE_MS = 3200;
const smoothEase = [0.2, 0.8, 0.2, 1] as const;

export default function FourStateCycler() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const current = STATES[index];

  return (
    <section className="max-w-5xl mx-auto px-6 mb-16 md:mb-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-zinc-900/40 p-6 md:p-10 backdrop-blur-xl">
        {/* Header row */}
        <div className="mb-6 flex items-baseline justify-between">
          <p className="text-[10px] tracking-[0.2em] text-zinc-500 font-semibold uppercase">
            The State Model · Live
          </p>
          <p className="hidden md:block text-[10px] tracking-[0.15em] text-zinc-600 font-medium uppercase">
            One card · Four surfaces
          </p>
        </div>

        {/* State card frame - fixed height to prevent layout shift on state change */}
        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className={`relative overflow-hidden rounded-2xl border ${current.border} bg-zinc-950/60 p-6 md:p-8`}
            >
              {/* Left border accent - the reusable state card signature */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.05 }}
                style={{ transformOrigin: "top" }}
                className={`absolute left-0 top-0 h-full w-[3px] ${current.dot}`}
              />

              {/* Pill */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full ${current.bg} ${current.border} border px-3 py-1 text-xs font-semibold ${current.accent}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${current.dot}`}>
                    {!prefersReducedMotion && (
                      <motion.span
                        className={`block h-full w-full rounded-full ${current.dot}`}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.9, 0, 0.9],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </span>
                  {current.pill}
                </span>
              </div>

              {/* Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                className="text-xl md:text-2xl font-semibold text-zinc-100 leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {current.headline}
              </motion.h3>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.16 }}
                className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl"
              >
                {current.body}
              </motion.p>

              {/* Meta */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.24 }}
                className="mt-6 text-[11px] tracking-wide text-zinc-500 font-mono uppercase"
              >
                {current.meta}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* State index dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {STATES.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.pill} state`}
              className="group relative h-1.5 rounded-full transition-all"
              style={{ width: i === index ? 28 : 10 }}
            >
              <span
                className={`block h-full w-full rounded-full transition-colors ${
                  i === index ? s.dot : "bg-zinc-700 group-hover:bg-zinc-500"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-5 text-center text-[11px] tracking-wide text-zinc-600 font-medium uppercase">
          Same component. Four states. Non-punishing language, even on the failure state.
        </p>
      </div>
    </section>
  );
}