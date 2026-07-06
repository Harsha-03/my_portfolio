"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import type { TargetAndTransition, Variants } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

function BehanceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.484.102.9.273 1.25.507.346.235.617.55.812.946.191.396.289.881.289 1.466 0 .627-.143 1.15-.428 1.572-.286.418-.71.762-1.272 1.031.768.221 1.338.611 1.718 1.17.378.557.568 1.226.568 2.011 0 .642-.123 1.193-.376 1.654-.247.465-.583.85-1.005 1.146-.422.296-.911.514-1.461.654a6.937 6.937 0 0 1-1.677.207H2V5.698h5.799zm-.357 4.876c.486 0 .885-.115 1.198-.345.314-.23.466-.604.466-1.12 0-.288-.05-.524-.156-.7a1.061 1.061 0 0 0-.42-.428 1.752 1.752 0 0 0-.594-.213 4.077 4.077 0 0 0-.71-.06h-2.59v2.866h2.806zm.157 5.117c.265 0 .519-.024.762-.077.243-.054.453-.137.628-.262.179-.121.32-.281.428-.494.107-.207.157-.475.157-.804 0-.643-.183-1.103-.546-1.385-.357-.282-.832-.421-1.418-.421H5.06v3.443h2.539zm10.404-.451c.448.43.984.629 1.622.629.46 0 .857-.119 1.183-.353.328-.236.527-.484.605-.745h2.236c-.355 1.117-.901 1.916-1.642 2.401-.733.482-1.626.726-2.66.726-.737 0-1.408-.117-1.984-.349a3.953 3.953 0 0 1-1.448-.989 4.31 4.31 0 0 1-.881-1.485 5.42 5.42 0 0 1-.317-1.928c0-.679.103-1.31.311-1.895a4.5 4.5 0 0 1 .886-1.528c.39-.434.853-.776 1.413-1.022.557-.247 1.181-.367 1.866-.367.766 0 1.435.149 2.001.443a4.13 4.13 0 0 1 1.402 1.182c.371.49.632 1.052.804 1.682.165.628.225 1.282.18 1.96h-6.4c0 .697.235 1.36.681 1.79l.142.948zm2.831-4.844c-.358-.396-.969-.614-1.61-.614-.42 0-.766.072-1.052.213a2.236 2.236 0 0 0-.692.519c-.18.207-.302.428-.366.658-.069.231-.107.43-.122.605h3.963c-.057-.622-.255-1.077-.611-1.381h.49zM17.973 5.71h4.967V6.92h-4.967V5.71z" />
    </svg>
  );
}

function MediumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const socialRow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const socialItemVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 22 } },
};

type SocialDef = {
  label: string;
  href: string;
  icon: (size: number) => ReactNode;
  brandColor: string;
  hoverBg: string;
  hoverAnim: TargetAndTransition;
};

const SOCIALS: SocialDef[] = [
  {
    label: "GitHub",
    href: "https://github.com/Harsha-03",
    icon: (s) => <Github size={s} />,
    brandColor: "#e2e8f0",
    hoverBg: "#24292e",
    hoverAnim: { y: [-2, 2, -2, 0], scale: 1.15 },
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsha-asapu/",
    icon: (s) => <Linkedin size={s} />,
    brandColor: "#0A66C2",
    hoverBg: "#0A66C2",
    hoverAnim: { y: [-2, 2, -2, 0], scale: 1.15 },
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rewire.harsha/",
    icon: (s) => <Instagram size={s} />,
    brandColor: "#ee2a7b",
    hoverBg: "linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)",
    hoverAnim: { y: [-2, 2, -2, 0], scale: 1.15 },
  },
  {
    label: "Behance",
    href: "https://www.behance.net/harshaasapu",
    icon: (s) => <BehanceIcon size={s} />,
    brandColor: "#1769FF",
    hoverBg: "#1769FF",
    hoverAnim: { scale: [1, 1.25, 1.1, 1.2], x: [0, 2, -2, 0] },
  },
  {
    label: "Medium",
    href: "https://medium.com/@harshaasapu.b",
    icon: (s) => <MediumIcon size={s} />,
    brandColor: "#e2e8f0",
    hoverBg: "#000000",
    hoverAnim: { y: [-2, 2, -2, 0], scale: 1.15 },
  },
];

function SocialButton({ social }: { social: SocialDef }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      variants={socialItemVariant}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={social.hoverAnim}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:h-11 md:w-11"
    >
      <span
        className="absolute inset-0 rounded-xl transition-all duration-200"
        style={{ background: hovered ? social.hoverBg : "rgb(24,24,27)" }}
      />
      <span
        className="relative z-10 transition-colors duration-200"
        style={{ color: hovered ? "#ffffff" : social.brandColor }}
      >
        {social.icon(17)}
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-950/90 px-2 py-1 text-[10px] tracking-wide text-zinc-300 backdrop-blur"
          >
            {social.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative flex min-h-[60svh] flex-col justify-start pb-32 pt-[11.55rem] md:min-h-[calc(100vh-5rem)] md:justify-between md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="absolute right-5 top-[4.75rem] md:right-0 md:top-0"
        >
          <span className="relative flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] text-green-400 md:text-xs">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-green-400 md:h-2 md:w-2"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Open to work
          </span>
        </motion.div>

        <motion.div
          className="max-w-5xl pt-0 md:pt-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-4 flex items-center text-base italic text-zinc-400 sm:text-lg md:mb-6 md:text-xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <motion.span
              aria-hidden="true"
              className="mr-2 inline-block origin-bottom"
              animate={{ rotate: [0, 14, -8, 10, -4, 0] }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
            Hey, I&apos;m Harsha
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[2.35rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            a UX Designer building products that actually{" "}
            <span
              className="italic text-emerald-400"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              ship.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:mt-7 md:text-lg"
          >
            Identifying the real break, not the surface bug.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
            >
              Meet Me
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={13} />
              </motion.span>
            </motion.a>

            <motion.div
              variants={socialRow}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 md:gap-2.5"
            >
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} social={s} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}