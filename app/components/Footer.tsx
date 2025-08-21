"use client";

import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const email = "harshaasapu.b@gmail.com";

  return (
    <footer className="mt-16">
      <div className="container">
        {/* subtle separator that works on both themes */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

        <div className="py-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Get in touch */}
          <div className="space-y-1">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
          </div>

          {/* Center: copyright */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            © {year} Harsha Asapu. All rights reserved.
          </p>

          {/* Right: social icons + resume */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Harsha-03"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full
                         bg-white/40 dark:bg-white/5 backdrop-blur
                         ring-1 ring-black/10 dark:ring-white/10
                         hover:bg-white/60 dark:hover:bg-white/10 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full
                           bg-[#0077B5] text-white hover:bg-[#005582]
                           focus:outline-none focus:ring-2 focus:ring-[#005582]"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium
                         bg-white/40 dark:bg-white/5 backdrop-blur
                         ring-1 ring-black/10 dark:ring-white/10
                         hover:bg-white/60 dark:hover:bg-white/10 transition"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
