"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  FolderGit2,
  Briefcase,
  User,
  Mail,
  FileText,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home",         label: "Home",       icon: <Home size={16} /> },
  { id: "projects",    label: "Projects",   icon: <FolderGit2 size={16} /> },
  { id: "experience",  label: "Experience", icon: <Briefcase size={16} /> },
  { id: "skills",      label: "Skills",     icon: <User size={16} /> },
  { id: "contactfancy",label: "Contact",    icon: <Mail size={16} /> },
];

/* sidebar entrance */
const sidebarVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const, staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -12 },
  show:  { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Header() {
  const [dateTime, setDateTime] = useState("");
  const [active, setActive]     = useState("home");
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRefs      = useRef<Record<string, HTMLButtonElement | null>>({});

  /* live clock */
  useEffect(() => {
    const tick = () => {
      const now  = new Date();
      const date = now.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });
      const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      setDateTime(`${date} · ${time}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* move sliding indicator to active button */
  useEffect(() => {
    const btn = navRefs.current[active];
    const ind = indicatorRef.current;
    if (!btn || !ind) return;
    const { offsetTop, offsetHeight } = btn;
    ind.style.transform = `translateY(${offsetTop}px)`;
    ind.style.height    = `${offsetHeight}px`;
  }, [active]);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.aside
      className="hidden md:block fixed left-5 top-24 z-40"
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
    >
      {/* Profile */}
      <motion.div
        variants={childVariant}
        className="mb-4 flex items-center gap-4 px-2"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1,    opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="h-24 w-24 shrink-0 rounded-full overflow-hidden ring-2 ring-white/20"
        >
          <img
            src="/images/myprofile.jpg"
            alt="Harsha Asapu"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="leading-tight">
          <p
            style={{ fontFamily: "var(--font-signature)" }}
            className="text-3xl text-white"
          >
            Harsha Asapu
          </p>
          <p className="text-sm text-zinc-400">Designer</p>
        </div>
      </motion.div>

      {/* Sidebar card */}
      <motion.div
        variants={childVariant}
        className="w-64 flex flex-col rounded-2xl
                   border border-white/10 bg-zinc-900/70
                   backdrop-blur-xl px-4 py-5"
      >
        {/* Nav with sliding indicator */}
        <nav className="relative flex flex-col gap-0.5">

          {/* sliding background pill */}
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute left-0 right-0
                       rounded-xl bg-slate-500/15
                       shadow-[0_0_12px_rgba(100,116,139,0.3)]
                       transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ height: 36, transform: "translateY(0px)" }}
          />

          {NAV_ITEMS.map((navItem) => (
            <button
              key={navItem.id}
              ref={(el) => { navRefs.current[navItem.id] = el; }}
              onClick={() => scrollTo(navItem.id)}
              className={`
                relative z-10 flex items-center gap-3
                rounded-xl px-3 py-2 text-sm transition-colors duration-150
                ${active === navItem.id ? "text-white" : "text-zinc-400 hover:text-white"}
              `}
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

        <div className="h-8" />

        {/* Location + time */}
        <motion.div
          variants={childVariant}
          className="mb-3 rounded-xl border border-white/10
                     bg-white/5 px-3 py-3 text-xs text-zinc-400"
        >
          <p className="mb-1">Reno, Nevada</p>
          {dateTime ? (
            <div className="flex flex-col gap-0.5">
              <span>{dateTime.split("·")[0].trim()}</span>
              <span>{dateTime.split("·")[1]?.trim()}</span>
            </div>
          ) : "—"}
        </motion.div>

        {/* Resume */}
        <motion.a
          variants={childVariant}
          href="/cv.pdf"
          target="_blank"
          rel="noopener"
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2
                     rounded-xl border border-white/10
                     bg-white/5 px-3 py-2 text-sm
                     text-zinc-200 transition-colors"
        >
          <FileText size={16} />
          Download Resume
        </motion.a>
      </motion.div>
    </motion.aside>
  );
}