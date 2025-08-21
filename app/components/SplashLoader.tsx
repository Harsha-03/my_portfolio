"use client";

import { motion } from "framer-motion";

export default function SplashLoader() {
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center
                 bg-white dark:bg-zinc-950"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      {/* subtle backdrop accent that matches your theme */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        {/* spinner */}
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border-4 border-zinc-300 dark:border-zinc-800" />
          <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
        </div>

        {/* brand text */}
        <p className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300">
          Loading portfolio…
        </p>
      </motion.div>
    </div>
  );
}
