"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

/*
  Fixed behavior:
  - Hero does NOT appear behind the HA loader.
  - Old loader content stays the same.
  - After loader content fades out, the black overlay opens like a smooth curtain.
*/

const LETTERS = ["H", "A"];
const ease = [0.16, 1, 0.3, 1] as const;

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -16,
    transition: { delay: i * 0.04, duration: 0.22 },
  }),
};

export default function SplashGate() {
  const [phase, setPhase] = useState<"loader" | "open" | "done">("loader");

  useEffect(() => {
    const openTimer = setTimeout(() => setPhase("open"), 1600);
    const doneTimer = setTimeout(() => setPhase("done"), 2850);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 0 0)" }}
      animate={
        phase === "open"
          ? { clipPath: "inset(0 0 0 100%)" }
          : { clipPath: "inset(0 0 0 0)" }
      }
      transition={
        phase === "open"
          ? { duration: 0.95, delay: 0.18, ease }
          : { duration: 0 }
      }
      className="fixed inset-0 z-[220] overflow-hidden bg-zinc-950"
    >
      {/* Ambient glow from the original loader */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: phase === "loader" ? [0.3, 0.65, 0.3] : 0.18 }}
        transition={
          phase === "loader"
            ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.25, ease: "easeOut" }
        }
        style={{
          background:
            "radial-gradient(520px 240px at 50% 55%, rgba(59,130,246,0.18), transparent 70%)",
        }}
      />

      <AnimatePresence>
        {phase === "loader" && (
          <motion.div
            key="old-loader-content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            {/* Initials */}
            <div className="relative flex items-end gap-1">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={letter}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="select-none text-[clamp(3.5rem,10vw,5.5rem)] font-extrabold leading-none tracking-tighter text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Dot accent */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400,
                }}
                className="mb-2 h-2 w-2 shrink-0 rounded-full bg-blue-400"
              />
            </div>

            {/* Name underneath */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500"
            >
              Harsha Asapu
            </motion.p>

            {/* Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, originX: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="mt-4 h-px w-20 origin-left bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
            />

            {/* Loading dots */}
            <div className="mt-8 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1 w-1 rounded-full bg-zinc-600"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening edge only appears after the HA loader is gone */}
      {phase === "open" && (
        <>
          <motion.div
            className="absolute inset-y-0 right-0 w-[18vw] bg-gradient-to-r from-transparent via-blue-300/16 to-white/10 blur-sm"
            initial={{ opacity: 0, x: "-16vw" }}
            animate={{ opacity: [0, 1, 0.35], x: "12vw" }}
            transition={{ duration: 0.95, delay: 0.18, ease }}
          />

          <motion.div
            className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-300/70 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.95, delay: 0.18, ease }}
          />
        </>
      )}
    </motion.div>
  );
}
