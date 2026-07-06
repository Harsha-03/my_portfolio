"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowDown } from "lucide-react";

export default function ChatHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = localStorage.getItem("chat-hint-seen");
    if (seen) return;

    const show = setTimeout(() => setVisible(true), 3000);
    const hide = setTimeout(() => {
      setVisible(false);
      localStorage.setItem("chat-hint-seen", "1");
    }, 14000);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("chat-hint-seen", "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:block fixed bottom-28 right-7 z-40 max-w-[220px] pointer-events-auto"
        >
          <div className="relative rounded-2xl border border-blue-400/25 bg-zinc-950/90 backdrop-blur-xl px-4 py-3 shadow-xl shadow-blue-500/10">
            <button
              onClick={dismiss}
              className="absolute top-2 right-2 text-zinc-600 hover:text-zinc-300 transition-colors"
              aria-label="Dismiss hint"
            >
              <X size={11} />
            </button>
            <p className="text-xs text-zinc-200 leading-relaxed pr-4">
              Try me. I&apos;m trained on Harsha&apos;s work.
            </p>
            <p className="mt-1 text-[10px] text-zinc-500 leading-relaxed pr-4">
              Drag me if I&apos;m in your way.
            </p>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2 text-blue-400"
            >
              <ArrowDown size={14} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
