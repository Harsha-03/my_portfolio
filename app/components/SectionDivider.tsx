"use client";

import { motion } from "framer-motion";
import { smoothEase } from "./MotionPattern";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: smoothEase }}
      className={"relative mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-8 sm:px-6 lg:px-8 " + className}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
      <span className="select-none text-lg font-light leading-none text-zinc-600">+</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
    </motion.div>
  );
}
