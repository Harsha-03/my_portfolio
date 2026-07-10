"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

type Direction = "top" | "bottom" | "left" | "right";
type AnimateBy = "words" | "letters";

interface BlurTextProps {
  text: string;
  delay?: number; // ms per word/letter
  startDelay?: number; // seconds before animation begins
  duration?: number; // seconds per element
  animateBy?: AnimateBy;
  direction?: Direction;
  className?: string;
  as?: React.ElementType;
  style?: CSSProperties;
  onAnimationComplete?: () => void;
  once?: boolean; // replay on scroll back in when false
  threshold?: string; // rootMargin
  renderWord?: (word: string, index: number) => ReactNode;
}

export default function BlurText({
  text,
  delay = 80,
  startDelay = 0,
  duration = 0.65,
  animateBy = "words",
  direction = "bottom",
  className = "",
  as: Tag = "span",
  style,
  onAnimationComplete,
  once = false,
  threshold = "-10% 0px",
  renderWord,
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: threshold as `${number}%` });

  const yFrom =
    direction === "top" ? -18 : direction === "bottom" ? 18 : 0;
  const xFrom =
    direction === "left" ? -18 : direction === "right" ? 18 : 0;

  const words = text.split(" ");

  const AnimatedWord = ({
    children,
    index,
    isLast,
  }: {
    children: ReactNode;
    index: number;
    isLast: boolean;
  }) => (
    <motion.span
      initial={{
        opacity: 0,
        y: yFrom,
        x: xFrom,
        filter: "blur(10px)",
      }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yFrom, x: xFrom, filter: "blur(10px)" }
      }
      transition={{
        duration,
        delay: startDelay + (index * delay) / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={
        isLast && onAnimationComplete ? onAnimationComplete : undefined
      }
      className="inline-block"
      style={{ willChange: "transform, filter, opacity" }}
    >
      {children}
    </motion.span>
  );

  if (animateBy === "letters") {
    // Split each word into letters, keep spaces between words intact
    let letterIndex = 0;
    const totalLetters = text.replace(/\s/g, "").length;

    return (
      <Tag
        ref={ref as React.RefObject<never>}
        className={className}
        style={style}
      >
        {words.map((word, wIdx) => (
          <span
            key={`w-${wIdx}`}
            className="inline-block"
            style={{ whiteSpace: "nowrap" }}
          >
            {word.split("").map((letter) => {
              const currentIndex = letterIndex++;
              return (
                <AnimatedWord
                  key={`l-${currentIndex}`}
                  index={currentIndex}
                  isLast={currentIndex === totalLetters - 1}
                >
                  {letter}
                </AnimatedWord>
              );
            })}
            {wIdx < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </Tag>
    );
  }

  // animateBy === "words"
  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={className}
      style={style}
    >
      {words.map((word, i) => (
        <AnimatedWord
          key={`w-${i}`}
          index={i}
          isLast={i === words.length - 1}
        >
          {renderWord ? renderWord(word, i) : word}
          {i < words.length - 1 && "\u00A0"}
        </AnimatedWord>
      ))}
    </Tag>
  );
}
