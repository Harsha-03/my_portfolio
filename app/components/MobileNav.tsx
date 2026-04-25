"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, FolderGit2, Briefcase, User, Mail } from "lucide-react";

const NAV = [
  { id: "home",          label: "Home",       icon: <Home size={18} /> },
  { id: "projects",      label: "Projects",   icon: <FolderGit2 size={18} /> },
  { id: "experience",    label: "Experience", icon: <Briefcase size={18} /> },
  { id: "skills",        label: "Skills",     icon: <User size={18} /> },
  { id: "contactfancy",  label: "Contact",    icon: <Mail size={18} /> },
];

const NAV_HEIGHT = 64; // height of fixed top bar in px

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  function handleNavClick(id: string) {
    setOpen(false);
    // Wait for drawer exit animation to complete before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }, 450);
  }

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40
                   flex items-center justify-between
                   px-5 py-3.5
                   bg-zinc-950/90 backdrop-blur-xl
                   border-b border-white/8
                   md:hidden"
      >
        <span
          className="text-white text-lg leading-none"
          style={{ fontFamily: "var(--font-signature)" }}
        >
          Harsha Asapu
        </span>

        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          className="h-9 w-9 flex items-center justify-center
                     rounded-xl bg-white/8 border border-white/10
                     text-zinc-300 hover:text-white transition-colors"
        >
          <Menu size={18} />
        </motion.button>
      </motion.div>

      {/* Drawer overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50
                         w-[75vw] max-w-[300px]
                         bg-zinc-950 border-l border-white/8
                         flex flex-col overflow-hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between
                              px-5 py-4 border-b border-white/8">
                <div>
                  <p
                    className="text-white text-xl leading-none"
                    style={{ fontFamily: "var(--font-signature)" }}
                  >
                    Harsha Asapu
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    UI/UX Designer
                  </p>
                </div>
                <motion.button
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="h-8 w-8 flex items-center justify-center
                             rounded-xl bg-white/8 text-zinc-400
                             hover:text-white transition-colors"
                >
                  <X size={15} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1 px-3 py-5">
                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    className="flex items-center gap-3 rounded-xl
                               px-4 py-3 text-sm text-zinc-400
                               hover:text-white hover:bg-white/6
                               transition-colors text-left w-full"
                  >
                    <span className="text-zinc-600 shrink-0">{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom */}
              <div className="px-5 py-5 border-t border-white/8 space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Open to full-time roles
                </div>
                
                  <a href="/cv.pdf" target="_blank" rel="noopener" className="flex items-center justify-center gap-2 w-full rounded-xl bg-white/6 border border-white/10 px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/10 transition-colors">
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}