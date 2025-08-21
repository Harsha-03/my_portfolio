"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Starfield from "./Starfield";
import { Github, Linkedin, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import TerminalCard from "./TerminalCard";

// Use the named export ReactTyped, but only on client
const TypedNoSSR = dynamic(
  () => import("react-typed").then((m) => m.ReactTyped),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="section bg-transparent text-zinc-900 dark:text-zinc-100 relative"
    >
      {/* Background */}
      <Starfield />

      {/* Content with gap from top */}
      <div className="container grid md:grid-cols-2 gap-10 items-center pt-20">
        {/* Left: text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="text-1xl sm:text-4xl md:text-5xl font-bold leading-tight 
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              dark:from-red-400 dark:via-purple-400 dark:to-blue-400 
              bg-clip-text text-transparent"
          >
            Baba Sriharsha Asapu
          </motion.h1>

          {/* Typed roles */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 text-xl font-medium text-brand"
            aria-label="Roles"
          >
            <TypedNoSSR
              strings={["AI Builder", "Data Explorer"]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1300}
              smartBackspace
              loop
              showCursor
              cursorChar="| "
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-prose"
          >
            I’m a Full-Stack Developer with a background in Information Systems (M.S.) and
            Computer Science (B.Tech). My passion lies in creating interactive web
            experiences, building AI automations that simplify workflows, and designing
            data-driven dashboards in Power BI. Whether it’s front-end interfaces,
            back-end systems, or data insights, I focus on turning ideas into products that
            are both impactful and intuitive.
          </motion.p>

          {/* CTA + socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6"
          >
            <div className="flex flex-wrap gap-4">
              {/* Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2
                           px-4 py-2 text-sm font-medium
                           rounded-md bg-brand text-white
                           hover:bg-blue-600 transition"
              >
                Explore Projects
              </a>

              {/* Resume */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                           rounded-md border border-zinc-300 dark:border-zinc-700
                           bg-zinc-900/80 text-white hover:bg-zinc-800
                           shadow-sm backdrop-blur transition
                           focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>

            {/* Socials under the button */}
            <div className="mt-4 flex items-center gap-3">
              {/* GitHub */}
              <motion.a
                href="https://github.com/Harsha-03"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full
                           border border-zinc-300 bg-white text-zinc-900
                           hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                <Github className="h-5 w-5" />
              </motion.a>

              {/* Linkedin */}
              <motion.a
                href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full
                           bg-[#0077B5] text-white hover:bg-[#005582]
                           focus:outline-none focus:ring-2 focus:ring-[#005582]"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right: Terminal box */}
        <div className="justify-self-center">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
