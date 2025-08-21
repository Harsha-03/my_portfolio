"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Client-only import for react-typed
const TypedNoSSR = dynamic(
  () => import("react-typed").then((m) => m.ReactTyped),
  { ssr: false }
);

export default function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      className="
        relative rounded-2xl
        border border-white/10
        bg-white/8 dark:bg-zinc-900/60
        backdrop-blur-xl
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]
        overflow-hidden
        w-[min(85vw,480px)] sm:w-[420px] md:w-[460px] lg:w-[480px]
      "
      aria-label="Portfolio terminal"
    >
      {/* Title bar */}
      <div
        className="
          flex items-center justify-between
          px-4 py-2
          bg-gradient-to-b from-white/10 to-white/5 dark:from-zinc-800/80 dark:to-zinc-800/50
          border-b border-white/10
        "
      >
        {/* Windows PowerShell symbol instead of circles */}
        <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
          <span>{">_"}</span>
        </div>

        <div className="text-[11px] md:text-xs text-zinc-700 dark:text-zinc-300 font-medium">
          harsha@portfolio:~
        </div>
      </div>

      {/* Scrollable terminal body */}
      <div
        className="
          relative font-mono text-[12px] md:text-sm leading-relaxed
          text-zinc-800 dark:text-zinc-200
          p-4 md:p-5
          max-h-[300px] md:max-h-[360px] overflow-y-auto
        "
      >
        {/* subtle top & bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/10 dark:from-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/15 dark:from-black/40 to-transparent" />

        <div className="space-y-3">
          <Line prompt="$" text="whoami" />
          <TypedBlock
            strings={[
              `<span class='text-brand font-semibold'>Baba Sriharsha Asapu</span> — AI Full-Stack developer (MIS @ SLU). I build accessible, data-driven apps.`,
            ]}
          />

          <Line prompt="$" text="projects" />
          <TypedBlock
            strings={[
              `• <a href="#projects" class="underline decoration-dotted hover:no-underline">AI Resume Editor</a> — Tailoring, match scores, cover letters.`,
              `• <a href="#projects" class="underline decoration-dotted hover:no-underline">Airline Performance Tracker</a> — Power BI, DAX, insights.`,
              `• Next up: <span class='opacity-80'>Coming soon…</span>`,
            ]}
          />

          <Line prompt="$" text="education" />
          <TypedBlock
            strings={[
              `• Saint Louis University — MS in Information Systems`,
              `• B.Tech in Computer Science Engineering`,
            ]}
          />

          <Line prompt="$" text="skills" />
          <TypedBlock
            strings={[
              `• Frontend: React/Next.js, TypeScript, Tailwind`,
              `• Backend: Flask, Node.js, REST, Firebase`,
              `• Data: SQL, Python, Power BI`,
              `• AI: OpenAI APIs, RAG basics`,
            ]}
          />

          <Line prompt="$" text="contact" />
          <TypedBlock
            strings={[
              `• <a href="mailto:harshaasapu.b@gmail.com" class="underline decoration-dotted hover:no-underline">harshaasapu.b@gmail.com</a>`,
              `• <a href="https://github.com/Harsha-03" target="_blank" rel="noopener" class="underline decoration-dotted hover:no-underline">GitHub</a>  |  <a href="https://www.linkedin.com/in/baba-sriharsha-asapu/" target="_blank" rel="noopener" class="underline decoration-dotted hover:no-underline">LinkedIn</a>`,
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}

/** Prompt line */
function Line({ prompt, text }: { prompt: string; text: string }) {
  return (
    <div className="text-zinc-500 dark:text-zinc-400">
      <span className="text-brand">{prompt}&nbsp;</span>
      <span>{text}</span>
    </div>
  );
}

/** Typed block: continuous, slower, endless */
function TypedBlock({ strings }: { strings: string[] }) {
  return (
    <div className="pl-5">
      <TypedNoSSR
        strings={strings}
        typeSpeed={85}
        backSpeed={0}
        backDelay={1000}
        loop={true}
        smartBackspace
        showCursor
        cursorChar="▋"
        fadeOut
        fadeOutDelay={2000}
        contentType="html"
      />
    </div>
  );
}
