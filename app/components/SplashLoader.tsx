"use client";

import { motion } from "framer-motion";

export default function SplashLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Ambient radial glow */}
      <motion.div
        className="pointer-events-none absolute inset-0
                   bg-[radial-gradient(500px_220px_at_50%_55%,rgba(59,130,246,0.18),transparent_65%)]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Signature container */}
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -6, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Signature draw-on */}
        <motion.div
          initial={{
            clipPath: "inset(0 100% 0 0)",
            opacity: 1,
          }}
          animate={{
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="
            signature-font
            text-4xl sm:text-5xl
            text-white
            tracking-wide
            relative
          "
        >
          Harsha Asapu
        </motion.div>

        {/* Soft underline shimmer */}
        <motion.div
          className="mx-auto mt-2 h-[1px] w-28
                     bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.7, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
