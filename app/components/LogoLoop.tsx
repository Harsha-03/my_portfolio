"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface Logo {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number; // seconds for one full loop
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  fadeWidth?: number;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  containerStyle?: CSSProperties;
}

export default function LogoLoop({
  logos,
  speed = 40,
  direction = "left",
  logoHeight = 40,
  gap = 60,
  fadeOut = true,
  fadeOutColor = "#000000",
  fadeWidth = 100,
  scaleOnHover = true,
  ariaLabel,
  className = "",
  containerStyle,
}: LogoLoopProps) {
  // Duplicate for seamless loop
  const duplicated = [...logos, ...logos];
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo = direction === "left" ? "-50%" : "0%";

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      aria-label={ariaLabel}
      style={containerStyle}
    >
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full"
            style={{
              width: fadeWidth,
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full"
            style={{
              width: fadeWidth,
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}
      <motion.div
        className="flex items-center"
        style={{
          gap: `${gap}px`,
          width: "max-content",
        }}
        animate={{ x: [xFrom, xTo] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((logo, i) => {
          const content = (
            <div
              className={`flex shrink-0 items-center justify-center text-zinc-400 transition-all duration-300 hover:text-white ${
                scaleOnHover ? "hover:scale-110" : ""
              }`}
              style={{
                height: logoHeight,
                fontSize: logoHeight * 0.7,
              }}
              title={logo.title || logo.alt}
              aria-label={logo.title || logo.alt}
            >
              {logo.node || (logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || ""}
                  style={{ height: logoHeight, width: "auto" }}
                />
              ) : null)}
            </div>
          );

          return logo.href ? (
            <a
              key={i}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              {content}
            </a>
          ) : (
            <div key={i} className="shrink-0">
              {content}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
