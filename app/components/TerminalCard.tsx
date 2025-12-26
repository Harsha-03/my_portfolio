"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Client-only import for react-typed
const TypedNoSSR = dynamic(
  () => import("react-typed").then((m) => m.ReactTyped),
  { ssr: false }
);

export default function TerminalCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animation after mount
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      aria-label="Portfolio terminal"
      className={`
        relative rounded-2xl
        border border-white/10
        bg-white/8 dark:bg-zinc-900/60
        backdrop-blur-xl
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]
        overflow-hidden
        w-[min(85vw,480px)] sm:w-[420px] md:w-[460px] lg:w-[480px]
        transform-gpu transition-all duration-500 ease-out
        ${mounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.95] translate-y-2"}
      `}
    >
      {/* Title bar */}
      <div
        className="
          flex items-center justify-between
          px-4 py-2
          bg-gradient-to-b from-white/10 to-white/5
          dark:from-zinc-800/80 dark:to-zinc-800/50
          border-b border-white/10
        "
      >
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
              `<span class='text-brand font-semibold'>Baba Sriharsha Asapu</span> — frontend-focused engineer (MIS @ SLU) building thoughtful, accessible products.`,
            ]}
          />

          <Line prompt="$" text="projects" />
          <TypedBlock
            strings={[
              `• <a href="#projects" class="underline decoration-dotted hover:no-underline">AI Resume Editor</a> — tailoring, match scores, cover letters.`,
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
              `• Frontend: React, Next.js, TypeScript, Tailwind`,
              `• Backend: Flask, Node.js, REST, Firebase`,
              `• Data: SQL, Python, Power BI`,
              `• AI: OpenAI APIs, RAG fundamentals`,
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
    </div>
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

/** Typed block */
function TypedBlock({ strings }: { strings: string[] }) {
  return (
    <div className="pl-5">
      <TypedNoSSR
        strings={strings}
        typeSpeed={85}
        backSpeed={0}
        backDelay={1000}
        loop
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
