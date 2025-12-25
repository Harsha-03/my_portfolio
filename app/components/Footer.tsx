"use client";

import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- Quote Loop ---------------- */

const QUOTE = "“Make it simple, but significant.”";

function QuoteLoop() {
  const words = QUOTE.split(" ");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((c) => c + 1);
    }, 10000); // replay every 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16 text-center">
      <motion.p
        key={cycle}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-xl font-caveat text-xl sm:text-2xl leading-relaxed text-zinc-300"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{
              delay: i * 0.25,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      <motion.span
        className="mt-3 block text-sm text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: words.length * 0.25 + 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        — Don Draper
      </motion.span>
    </div>
  );
}

/* ---------------- Thank You ---------------- */

function ThankYou() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="relative z-0 pointer-events-none text-center
                 [mask-image:linear-gradient(to_bottom,black_45%,transparent_95%)]
                 [-webkit-mask-image:linear-gradient(to_bottom,black_45%,transparent_95%)]"
    >
      {/* SIZE CONTROL: adjust text-[7.5vw] if needed */}
      <span className="block font-playfair text-[7.5vw] leading-none tracking-[0.12em] text-white select-none">
        THANK YOU
      </span>
    </motion.div>
  );
}

/* ---------------- Footer ---------------- */

export default function Footer() {
  const year = new Date().getFullYear();
  const email = "harshaasapu.b@gmail.com";

  return (
    <footer className="relative mt-32">
      <div className="container relative z-10">
        {/* Quote + Thank You */}
        <QuoteLoop />
        <ThankYou />

        {/* Footer content overlaps THANK YOU */}
        <div className="-mt-32">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="py-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: email */}
            <div className="space-y-1">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-blue-400 transition-opacity hover:opacity-80"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
            </div>

            {/* Center: copyright */}
            <p className="text-sm text-zinc-400 text-center">
              © {year} Harsha Asapu. All rights reserved.
            </p>

            {/* Right: social + resume */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Harsha-03"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full
                           bg-white/5 backdrop-blur
                           ring-1 ring-white/10
                           transition-all duration-300
                           hover:bg-white/10 hover:ring-white/20"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full
                           bg-[#0077B5]/90 text-white
                           transition-all duration-300
                           hover:bg-[#0077B5]"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium
                           bg-white/5 backdrop-blur
                           ring-1 ring-white/10
                           transition-all duration-300
                           hover:bg-white/10 hover:ring-white/20"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
