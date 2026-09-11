"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
import BlurText from "./BlurText";
import TextType from "./TextType";

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

const smoothEase = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: smoothEase } },
};

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0 } },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: smoothEase } },
};

const lineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const lineItem: Variants = {
  hidden: { opacity: 0, x: -6, filter: "blur(4px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: smoothEase } },
};

const socialRow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const socialItemVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 22 } },
};

type SocialVariant = "badge" | "ring" | "flash" | "underline" | "cursor";

type SocialDef = {
  label: string;
  href: string;
  icon: (size: number) => ReactNode;
  brandColor: string;
  hoverBg: string;
  variant: SocialVariant;
};

const SOCIALS: SocialDef[] = [
  {
    label: "GitHub",
    href: "https://github.com/Harsha-03",
    icon: (s) => <Github size={s} />,
    brandColor: "#e2e8f0",
    hoverBg: "#24292e",
    variant: "badge",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsha-asapu/",
    icon: (s) => <Linkedin size={s} />,
    brandColor: "#0A66C2",
    hoverBg: "#0A66C2",
    variant: "ring",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rewire.harsha/",
    icon: (s) => <Instagram size={s} />,
    brandColor: "#ee2a7b",
    hoverBg: "linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)",
    variant: "flash",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/harshaasapu",
    icon: (s) => <BehanceIcon size={s} />,
    brandColor: "#1769FF",
    hoverBg: "#1769FF",
    variant: "underline",
  },
  {
    label: "Medium",
    href: "https://medium.com/@harshaasapu.b",
    icon: (s) => <MediumIcon size={s} />,
    brandColor: "#e2e8f0",
    hoverBg: "#000000",
    variant: "cursor",
  },
];

function SocialButton({ social }: { social: SocialDef }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  // Bump this on each hover so the same variant re-animates every time
  const [playToken, setPlayToken] = useState(0);

  return (
    <motion.a
      variants={socialItemVariant}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      onHoverStart={() => {
        setHovered(true);
        setPlayToken((n) => n + 1);
      }}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:h-11 md:w-11"
    >
      {/* Background fill */}
      <span
        className="absolute inset-0 rounded-xl transition-all duration-200"
        style={{ background: hovered ? social.hoverBg : "rgb(24,24,27)" }}
      />

      {/* Icon */}
      <span
        className="relative z-10 transition-colors duration-200"
        style={{ color: hovered ? "#ffffff" : social.brandColor }}
      >
        {social.icon(17)}
      </span>

      {/* Per-icon micro-animation overlays */}
      {!reduced && (
        <AnimatePresence>
          {hovered && social.variant === "badge" && (
            <motion.span
              key={`badge-${playToken}`}
              aria-hidden
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="pointer-events-none absolute right-1.5 top-1.5 z-20 h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }}
            />
          )}

          {hovered && social.variant === "ring" && (
            <motion.span
              key={`ring-${playToken}`}
              aria-hidden
              initial={{ scale: 0.85, opacity: 0.7 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0 z-20 rounded-xl"
              style={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.55)" }}
            />
          )}

          {hovered && social.variant === "flash" && (
            <motion.span
              key={`flash-${playToken}`}
              aria-hidden
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1.6, opacity: [0, 0.55, 0] }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0 z-20 rounded-xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0) 60%)",
              }}
            />
          )}

          {hovered && social.variant === "underline" && (
            <motion.span
              key={`underline-${playToken}`}
              aria-hidden
              initial={{ scaleX: 0, opacity: 0.9 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute bottom-1.5 left-2 right-2 z-20 h-[1.5px] origin-left rounded-full bg-white/90"
            />
          )}

          {hovered && social.variant === "cursor" && (
            <motion.span
              key={`cursor-${playToken}`}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.9, times: [0, 0.15, 0.35, 0.55, 0.75, 1] }}
              className="pointer-events-none absolute bottom-1.5 right-1.5 z-20 h-2 w-[1.5px] rounded-[1px] bg-white/95"
            />
          )}
        </AnimatePresence>
      )}

      {/* Label tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -bottom-8 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-950/90 px-2 py-1 text-[10px] tracking-wide text-zinc-300 backdrop-blur"
          >
            {social.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="home" className="relative">
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-20 pb-36 md:min-h-[calc(100vh-5rem)] md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="fixed right-4 top-6 z-40 md:right-8 md:top-8"
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
          className="mx-auto w-full max-w-3xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-4 flex items-center justify-center text-sm italic text-zinc-400 sm:text-base md:mb-6 md:text-lg"
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
            <BlurText
              text="Hey, I'm Harsha"
              delay={60}
              duration={0.6}
              animateBy="words"
              direction="bottom"
            />
          </motion.p>

          <BlurText
            as="h1"
            text="a Product Designer building products that actually ship."
            delay={70}
            duration={0.7}
            startDelay={0.35}
            animateBy="words"
            direction="bottom"
            className="text-[2rem] font-extrabold leading-[1.06] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
            renderWord={(word) => {
              if (word === "ship.") {
                return (
                  <span
                    className="italic text-emerald-400"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                    }}
                  >
                    {word}
                  </span>
                );
              }
              return word;
            }}
          />

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:mt-5 md:text-base"
          >
            <BlurText
              text="Identifying the real break, not the surface bug."
              delay={40}
              duration={0.55}
              startDelay={1.0}
              animateBy="words"
              direction="bottom"
            />
          </motion.p>

          <motion.div
            variants={item}
            className="relative mx-auto mt-6 max-w-xl pl-4 text-left md:mt-8"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: smoothEase }}
              style={{ transformOrigin: "top" }}
              className="absolute left-0 top-0 h-full w-[2px] bg-emerald-500/40"
            />
            
            <motion.div
              variants={lineContainer}
              initial="hidden"
              animate="show"
              className="space-y-1.5 font-mono text-[11px] text-zinc-400 md:text-xs"
            >
              <p>
                <span className="text-emerald-400">Exploring:</span>{" "}
                <TextType
                  text="How small design patterns absorb complexity across a product at scale."
                  typingSpeed={15}
                  startDelay={1.0}
                  showCursor
                  cursorCharacter="▍"
                  hideCursorOnComplete
                />
              </p>
              <p>
                <span className="text-emerald-400">Recent:</span>{" "}
                <TextType
                  text="Shipping Phoenix AI to production alongside PM and engineering."
                  typingSpeed={15}
                  startDelay={1.8}
                  showCursor
                  cursorCharacter="▍"
                  hideCursorOnComplete
                />
              </p>
              <p>
                <span className="text-emerald-400">Reading:</span>{" "}
                <TextType
                  text="Don Norman on discoverability, and the Nielsen Norman archive on enterprise UX."
                  typingSpeed={15}
                  startDelay={2.75}
                  showCursor
                  cursorCharacter="▍"
                  hideCursorOnComplete
                />
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 3.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 md:text-sm md:px-5 md:py-3"
              style={{
                backgroundColor: "#f76a63",
                boxShadow: "0 6px 22px -8px rgba(247,106,99,0.55)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#ea564f";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#f76a63";
              }}
            >
              {/* Shimmer sweep — diagonal light band on a slow loop */}
              {!reducedMotion && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 z-0"
                  style={{
                    width: "40%",
                    background:
                      "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.38) 50%, transparent 100%)",
                    filter: "blur(2px)",
                  }}
                  initial={{ x: "-160%" }}
                  animate={{ x: "320%" }}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3.2,
                  }}
                />
              )}

              <span className="relative z-10">My Work</span>
              <motion.span
                className="relative z-10 inline-block"
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

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 4.1 }}
            className="mt-5 flex justify-center md:mt-6"
          >
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-chat-widget"));
                }
              }}
              className="group inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3.5 py-1.5 text-xs text-zinc-400 transition-colors hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-zinc-200"
              aria-label="Open Harsha's AI portfolio chat"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400/70"
                aria-hidden
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Ask my AI portfolio anything</span>
              <span
                aria-hidden
                className="text-blue-400/70 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — signals "there's more below" without adding weight */}
        <motion.a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 4.4 }}
          className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] tracking-[0.2em] font-medium text-zinc-500 uppercase transition-colors hover:text-emerald-400/80 focus:outline-none focus-visible:text-emerald-400"
          aria-label="Scroll to Case Studies"
        >
          <span className="pl-[0.2em]">Case Studies</span>
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-emerald-400/60"
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1V12M5 12L9 8M5 12L1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}