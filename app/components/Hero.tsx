"use client";

import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="section relative">
      <div className="container relative">
        {/* Top-right status */}
        <div className="absolute top-0 right-0 flex items-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Open to work
          </span>
          
        </div>

        {/* Hero content */}
        <div className="pt-28 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            {/* Name */}
            <span className="block hero-name">
              Hello, I’m{" "}
              <span className="text-brand">Harsha Asapu</span>.
            </span>

            {/* Line 2 – Part 1 */}
            <span className="block hero-line hero-line-1">
              I design & engineer
            </span>

            {/* Line 2 – Part 2 */}
            <span className="block hero-line hero-line-2 text-zinc-400">
              thoughtful digital experiences.
            </span>
          </h1>

          {/* Paragraph + Actions */}
          <div className="hero-content mt-6">
            <p className="max-w-2xl text-base md:text-lg text-zinc-400">
              I’m a frontend-focused developer with a strong foundation in
              full-stack systems, passionate about building fast, accessible,
              and thoughtfully engineered products that solve real problems.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-600 transition"
              >
                Explore Projects
              </a>

              <a
                href="https://github.com/Harsha-03"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 flex items-center justify-center rounded-xl bg-zinc-900 ring-1 ring-white/10 hover:bg-zinc-800 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#0A66C2] hover:bg-[#004182] transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-xs tracking-wide">Scroll</span>
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20">
              <span className="mt-2 h-2 w-2 rounded-full bg-white/60 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
