"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Home, FolderGit2, Briefcase, User, Mail, Film, Download } from "lucide-react";

const NAV_ITEMS = [
  { id: "home",         label: "Home",       icon: <Home size={16} /> },
  { id: "projects",     label: "Projects",   icon: <FolderGit2 size={16} /> },
  { id: "motion",       label: "Motion",     icon: <Film size={16} /> },
  { id: "experience",   label: "Experience", icon: <Briefcase size={16} /> },
  { id: "skills",       label: "Skills",     icon: <User size={16} /> },
  { id: "contactfancy", label: "Contact",    icon: <Mail size={16} /> },
];

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.55, ease: [0.25,0.1,0.25,1] as const, staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const childVariant: Variants = {
  hidden: { opacity: 0, x: -12 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Header() {
  const router   = useRouter();
  const pathname = usePathname();

  const [active, setActive]           = useState("home");
  const [resumePulse, setResumePulse] = useState(false);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRefs      = useRef<Record<string, HTMLButtonElement | null>>({});
  const [parts, setParts] = useState({ date: "", time: "" });

  /* Clock */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setParts({
        date: now.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }),
        time: now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* Pulse the resume button once after 3s */
  useEffect(() => {
    const t = setTimeout(() => {
      setResumePulse(true);
      setTimeout(() => setResumePulse(false), 2000);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  /* Slide indicator */
  useEffect(() => {
    const btn = navRefs.current[active];
    const ind = indicatorRef.current;
    if (!btn || !ind) return;
    ind.style.transform = "translateY(" + btn.offsetTop + "px)";
    ind.style.height    = btn.offsetHeight + "px";
  }, [active]);

  /* Smart nav: scroll on homepage, redirect on other pages */
  const handleNav = (id: string) => {
    setActive(id);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/#" + id);
    }
  };

  return (
    <motion.aside
      className="hidden md:block fixed left-5 top-24 z-40"
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={childVariant} className="mb-4 flex items-center gap-4 px-2">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="h-24 w-24 shrink-0 rounded-full overflow-hidden ring-2 ring-white/20"
        >
          <img src="/images/myprofile.jpg" alt="Harsha Asapu" className="h-full w-full object-cover" />
        </motion.div>
        <div className="leading-tight">
          <p style={{ fontFamily: "var(--font-signature)" }} className="text-3xl text-white">
            Harsha Asapu
          </p>
          <p className="text-sm text-zinc-400">Designer</p>
        </div>
      </motion.div>

      <motion.div
        variants={childVariant}
        className="w-64 flex flex-col rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl px-4 py-5"
      >
        <nav className="relative flex flex-col gap-0.5">
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute left-0 right-0 rounded-xl bg-slate-500/15 shadow-[0_0_12px_rgba(100,116,139,0.3)] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ height: 36, transform: "translateY(0px)" }}
          />
          {NAV_ITEMS.map((navItem) => (
            <button
              key={navItem.id}
              ref={(el) => { navRefs.current[navItem.id] = el; }}
              onClick={() => handleNav(navItem.id)}
              className={
                "relative z-10 flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-150 " +
                (active === navItem.id ? "text-white" : "text-zinc-400 hover:text-white")
              }
            >
              <motion.span
                animate={{ scale: active === navItem.id ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {navItem.icon}
              </motion.span>
              <span>{navItem.label}</span>
            </button>
          ))}
        </nav>

        <div className="h-6" />

        <motion.div
          variants={childVariant}
          className="mb-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-zinc-400"
        >
          <p className="mb-1">Reno, Nevada</p>
          <p>{parts.date}</p>
          <p>{parts.time}</p>
        </motion.div>

        {/* ── Resume button ── */}
        <motion.div variants={childVariant} className="relative">
          <AnimatePresence>
            {resumePulse && (
              <motion.span
                key="pulse"
                className="absolute inset-0 rounded-xl border border-emerald-400/60 pointer-events-none"
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{ opacity: 0, scale: 1.12 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener"
            initial={{ borderColor: "rgba(255,255,255,0.1)", boxShadow: "none" }}
            animate={
              resumePulse
                ? {
                    borderColor: ["rgba(52,211,153,0.6)", "rgba(52,211,153,0.2)", "rgba(255,255,255,0.1)"],
                    boxShadow: ["0 0 16px rgba(52,211,153,0.25)", "0 0 8px rgba(52,211,153,0.1)", "none"],
                  }
                : {}
            }
            whileHover={{
              scale: 1.03,
              y: -1,
              boxShadow: "0 4px 20px rgba(52,211,153,0.2)",
              borderColor: "rgba(52,211,153,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition-colors hover:text-emerald-300 hover:bg-emerald-500/8 group"
          >
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.06) 50%, transparent 100%)",
              }}
            />
            <motion.span
              className="relative z-10"
              animate={resumePulse ? { rotate: [0, -15, 15, -10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Download size={15} className="transition-colors group-hover:text-emerald-400" />
            </motion.span>
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.aside>
  );
}
