"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "GitHub",   href: "https://github.com/Harsha-03",                          icon: <Github size={15} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/baba-sriharsha-asapu/",     icon: <Linkedin size={15} /> },
  { label: "Resume",   href: "/cv.pdf",                                                icon: <FileText size={15} /> },
];

export default function Footer() {
  const year  = new Date().getFullYear();
  const email = "harshaasapu.b@gmail.com";

  return (
    <footer className="relative mt-32 overflow-hidden md:pl-[300px] md:pr-10">

      {/* ── Closing statement ── */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-widest text-blue-500 font-semibold">
            AVAILABLE FOR WORK
          </p>

          <h2
            className="mt-3 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's build something
            <span className="block text-zinc-500"> worth using.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm text-zinc-500 leading-relaxed">
            I design with clarity and ship with precision. If you're looking
            for a designer who can own a product from research to production —
            let's talk.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl
                       bg-white text-zinc-900 font-semibold
                       px-3 py-2 text-xs md:px-5 md:py-3 md:text-sm
                       hover:bg-zinc-100 transition-colors"
          >
            <Mail size={13} />
            <span className="hidden sm:inline">{email}</span>
            <span className="sm:hidden">Email Me</span>
          </motion.a>

            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <motion.span
                className="h-2 w-2 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Open to full-time roles
            </div>
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 border-l-2 border-white/10 pl-5"
          >
            <p
              className="text-lg text-zinc-400 italic leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "Make it simple, but significant."
            </p>
            <cite className="mt-2 block text-xs text-zinc-600 not-italic">
              — Don Draper
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>

      {/* ── Large watermark ── */}
      <div
        className="relative z-0 pointer-events-none mt-16 text-center hidden md:block
                   [mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_85%)]
                   [-webkit-mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_95%)]"
      >
        <span
          className="block text-[12vw] leading-none tracking-[0.1em]
                     text-white/[0.04] select-none font-extrabold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          HARSHA ASAPU
        </span>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container relative z-10 -mt-20">
        <div className="h-px w-full bg-gradient-to-r
                        from-transparent via-white/10 to-transparent" />

        <div className="py-4 flex flex-col gap-3 md:flex-row
                        md:items-center md:justify-between">

          {/* Left — credit */}
          <p className="text-[11px] text-zinc-600">
            © {year} Harsha Asapu · Designed & built by Harsha
          </p>

          {/* Center — role tag */}
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
            UI/UX Designer · Product Designer · Frontend Engineer
          </div>

          {/* Right — links */}
          <div className="flex items-center gap-2">
            {LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg
                         bg-white/5 border border-white/8
                         px-2.5 py-1.5 text-[11px] text-zinc-400
                         hover:text-white transition-colors"
              >
                {link.icon}
                {link.label}
                <ArrowUpRight size={10} className="opacity-40" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}