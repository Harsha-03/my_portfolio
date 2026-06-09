"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import type { TargetAndTransition, Variants } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function BehanceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.484.102.9.273 1.25.507.346.235.617.55.812.946.191.396.289.881.289 1.466 0 .627-.143 1.15-.428 1.572-.286.418-.71.762-1.272 1.031.768.221 1.338.611 1.718 1.17.378.557.568 1.226.568 2.011 0 .642-.123 1.193-.376 1.654-.247.465-.583.85-1.005 1.146-.422.296-.911.514-1.461.654a6.937 6.937 0 0 1-1.677.207H2V5.698h5.799zm-.357 4.876c.486 0 .885-.115 1.198-.345.314-.23.466-.604.466-1.12 0-.288-.05-.524-.156-.7a1.061 1.061 0 0 0-.42-.428 1.752 1.752 0 0 0-.594-.213 4.077 4.077 0 0 0-.71-.06h-2.59v2.866h2.806zm.157 5.117c.265 0 .519-.024.762-.077.243-.054.453-.137.628-.262.179-.121.32-.281.428-.494.107-.207.157-.475.157-.804 0-.643-.183-1.103-.546-1.385-.357-.282-.832-.421-1.418-.421H5.06v3.443h2.539zm10.404-.451c.448.43.984.629 1.622.629.46 0 .857-.119 1.183-.353.328-.236.527-.484.605-.745h2.236c-.355 1.117-.901 1.916-1.642 2.401-.733.482-1.626.726-2.66.726-.737 0-1.408-.117-1.984-.349a3.953 3.953 0 0 1-1.448-.989 4.31 4.31 0 0 1-.881-1.485 5.42 5.42 0 0 1-.317-1.928c0-.679.103-1.31.311-1.895a4.5 4.5 0 0 1 .886-1.528c.39-.434.853-.776 1.413-1.022.557-.247 1.181-.367 1.866-.367.766 0 1.435.149 2.001.443a4.13 4.13 0 0 1 1.402 1.182c.371.49.632 1.052.804 1.682.165.628.225 1.282.18 1.96h-6.4c0 .697.235 1.36.681 1.79l.142.948zm2.831-4.844c-.358-.396-.969-.614-1.61-.614-.42 0-.766.072-1.052.213a2.236 2.236 0 0 0-.692.519c-.18.207-.302.428-.366.658-.069.231-.107.43-.122.605h3.963c-.057-.622-.255-1.077-.611-1.381h.49zM17.973 5.71h4.967V6.92h-4.967V5.71z" />
    </svg>
  );
}

const CYCLING_TAGS = [
  "Interaction Design",
  "Product Thinking",
  "UX Research",
  "Design Systems",
  "Behavioral Design",
  "AI Integration",
];

const FADE = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

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
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
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
      className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-xl ring-1 ring-white/10 hover:ring-white/30 hover:shadow-lg hover:shadow-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 overflow-hidden"
    >
      <span
        className="absolute inset-0 rounded-xl transition-all duration-200"
        style={{ background: hovered ? social.hoverBg : "rgb(24,24,27)" }}
      />
      <span
        className="relative z-10 transition-colors duration-200"
        style={{ color: hovered ? "#ffffff" : social.brandColor }}
      >
        {social.icon(18)}
      </span>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-950/90 border border-white/10 px-2 py-1 text-[10px] tracking-wide text-zinc-300 backdrop-blur z-20"
          >
            {social.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTagIndex((i) => (i + 1) % CYCLING_TAGS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="section relative">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="absolute top-0 right-0"
        >
          <span className="relative flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] md:text-xs text-green-400">
            <motion.span
              className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Open to work
          </span>
        </motion.div>

        <motion.div className="pt-20 md:pt-24 max-w-4xl" variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block">
              Hello, I&apos;m <span className="text-brand">Harsha Asapu</span>.
            </span>
            <span className="block mt-1">I don&apos;t just design screens.</span>
            <span className="block text-zinc-400">I design decisions.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed"
          >
            Every product has a moment where the experience quietly falls apart.
            Not where it looks broken, but where it actually breaks. I start there. Research first, assumptions last. Define the problem clearly, design the solution, ship it, and keep improving based on what real usage reveals. That loop is not a process. It&apos;s how I think.
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm">
            {["UI Design", "UX Design", "Product Thinking"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-2.5 py-0.5 md:px-3 md:py-1 ring-1 ring-white/30 text-white/90 text-[11px] md:text-sm"
              >
                {tag}
              </span>
            ))}
            <span className="relative rounded-full bg-blue-500/15 px-2.5 py-0.5 md:px-3 md:py-1 ring-1 ring-blue-400/40 text-blue-300 min-w-[140px] md:min-w-[160px] h-[26px] md:h-[30px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={tagIndex}
                  variants={FADE}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="absolute whitespace-nowrap text-[11px] md:text-xs font-medium"
                >
                  + {CYCLING_TAGS[tagIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm font-semibold text-white hover:bg-red-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
            >
              Explore Projects
              <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight size={13} />
              </motion.span>
            </motion.a>

            <motion.div variants={socialRow} initial="hidden" animate="show" className="flex items-center gap-2 md:gap-3">
              {SOCIALS.map((s) => <SocialButton key={s.label} social={s} />)}
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mt-10 md:mt-12 flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-[10px] md:text-xs tracking-wide">Scroll</span>
            <div className="flex h-8 w-5 md:h-10 md:w-6 items-start justify-center rounded-full border border-white/20">
              <motion.span
                className="mt-2 h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white/60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
