"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer className="relative min-h-[46vh] overflow-hidden" aria-label="Footer">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-[38%] h-px w-[86vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden">
        <motion.h2
          initial={{
            opacity: 0,
            y: -34,
            filter: "blur(14px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 1.35, ease }}
          className="select-none whitespace-nowrap text-center text-[30vw] font-black uppercase leading-[0.72] tracking-[-0.11em] text-transparent sm:text-[27vw] md:text-[23vw]"
          style={{
            fontFamily:
              "var(--font-wordmark), var(--font-heading), system-ui, sans-serif",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.075) 45%, rgba(255,255,255,0.025) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextStroke: "1px rgba(255,255,255,0.025)",
          }}
        >
          Harsha
        </motion.h2>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-full"
          initial={{ y: "-110%", opacity: 0.4 }}
          whileInView={{ y: "120%", opacity: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 1.45, delay: 0.08, ease }}
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.10) 45%, transparent 100%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.75, delay: 0.14, ease }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 pb-5 text-[11px] uppercase tracking-[0.22em] text-zinc-600 sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Harsha Asapu</span>
          <span className="hidden sm:inline">Product Designer</span>
        </div>
      </motion.div>
    </footer>
  );
}
