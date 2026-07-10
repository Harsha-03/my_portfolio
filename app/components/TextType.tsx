"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

interface TextTypeProps {
  text: string;
  typingSpeed?: number; // ms per character
  startDelay?: number; // seconds before typing begins
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number; // seconds for one blink cycle
  hideCursorOnComplete?: boolean;
  onComplete?: () => void;
  className?: string;
  as?: React.ElementType;
  style?: CSSProperties;
  triggerOnScroll?: boolean;
}

export default function TextType({
  text,
  typingSpeed = 40,
  startDelay = 0,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.6,
  hideCursorOnComplete = true,
  onComplete,
  className = "",
  as: Tag = "span",
  style,
  triggerOnScroll = true,
}: TextTypeProps) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });
  const shouldRun = triggerOnScroll ? inView : true;
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset when out of view so re-entering replays
    if (!shouldRun) {
      setDisplayed("");
      setIsDone(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    let charIndex = 0;
    setDisplayed("");
    setIsDone(false);

    const startTimeout = window.setTimeout(() => {
      const typeNextChar = () => {
        if (charIndex >= text.length) {
          setIsDone(true);
          onComplete?.();
          return;
        }
        charIndex++;
        setDisplayed(text.slice(0, charIndex));
        timeoutRef.current = window.setTimeout(typeNextChar, typingSpeed);
      };
      typeNextChar();
    }, startDelay * 1000);

    return () => {
      window.clearTimeout(startTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRun, text, typingSpeed, startDelay]);

  const cursorVisible = showCursor && !(isDone && hideCursorOnComplete);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={className}
      style={style}
    >
      {displayed}
      {cursorVisible && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: cursorBlinkDuration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {cursorCharacter}
        </motion.span>
      )}
    </Tag>
  );
}
