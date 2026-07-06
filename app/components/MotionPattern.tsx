"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: smoothEase },
  },
};

export const revealSoft: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: smoothEase },
  },
};

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.p
      variants={revealSoft}
      className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400/80"
    >
      {children}
    </motion.p>
  );
}

export function RevealBlock({
  children,
  className = "",
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(5px)", scale: 0.998 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once, margin: "0px", amount: 0.04 }}
      transition={{ duration: 0.56, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: "0.35em", filter: "blur(5px)", scale: 0.998 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "0px", amount: 0.06 }}
      transition={{ duration: 0.58, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export function StaggeredWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px", amount: 0.06 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.028,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 8, filter: "blur(5px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.52, ease: smoothEase },
            },
          }}
          className={"inline-block " + wordClassName}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Kept for About.tsx / Skills.tsx compatibility.
// This is now a smoother auto blur-in reveal, not a scroll-scrub animation.
export function ScrollSentence({
  text,
  className = "",
  wordClassName = "",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  return (
    <StaggeredWords
      text={text}
      className={className}
      wordClassName={wordClassName}
    />
  );
}

export function ScrollParagraph({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={className}>
      <ScrollSentence text={text} />
    </p>
  );
}

export function ScrollAccent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8, filter: "blur(5px)", scale: 0.998 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "0px", amount: 0.06 }}
      transition={{ duration: 0.56, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
