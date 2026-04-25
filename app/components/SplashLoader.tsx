"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Letter stagger for "HA" initials */
const LETTERS = ["H", "A"];

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -16,
    transition: { delay: i * 0.06, duration: 0.3 },
  }),
};

export default function SplashLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center
                     justify-center bg-zinc-950"
        >
          {/* Ambient glow */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            animate={{ opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(520px 240px at 50% 55%, rgba(59,130,246,0.18), transparent 70%)",
            }}
          />

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
                className="text-[clamp(3.5rem,10vw,5.5rem)] font-extrabold
                           leading-none tracking-tighter text-white select-none"
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
              transition={{ delay: 0.5, duration: 0.3, type: "spring", stiffness: 400 }}
              className="mb-2 h-2 w-2 rounded-full bg-blue-400 shrink-0"
            />
          </div>

          {/* Name underneath */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="mt-3 text-sm tracking-[0.25em] text-zinc-500 uppercase"
          >
            Harsha Asapu
          </motion.p>

          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, originX: 1 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="mt-4 h-px w-20 bg-gradient-to-r
                       from-transparent via-blue-400/60 to-transparent
                       origin-left"
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
  );
}