"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  FolderGit2,
  Briefcase,
  User,
  Mail,
  Film,
  MapPin,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

function BehanceIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.484.102.9.273 1.25.507.346.235.617.55.812.946.191.396.289.881.289 1.466 0 .627-.143 1.15-.428 1.572-.286.418-.71.762-1.272 1.031.768.221 1.338.611 1.718 1.17.378.557.568 1.226.568 2.011 0 .642-.123 1.193-.376 1.654-.247.465-.583.85-1.005 1.146-.422.296-.911.514-1.461.654a6.937 6.937 0 0 1-1.677.207H2V5.698h5.799zm-.357 4.876c.486 0 .885-.115 1.198-.345.314-.23.466-.604.466-1.12 0-.288-.05-.524-.156-.7a1.061 1.061 0 0 0-.42-.428 1.752 1.752 0 0 0-.594-.213 4.077 4.077 0 0 0-.71-.06h-2.59v2.866h2.806zm.157 5.117c.265 0 .519-.024.762-.077.243-.054.453-.137.628-.262.179-.121.32-.281.428-.494.107-.207.157-.475.157-.804 0-.643-.183-1.103-.546-1.385-.357-.282-.832-.421-1.418-.421H5.06v3.443h2.539zm10.404-.451c.448.43.984.629 1.622.629.46 0 .857-.119 1.183-.353.328-.236.527-.484.605-.745h2.236c-.355 1.117-.901 1.916-1.642 2.401-.733.482-1.626.726-2.66.726-.737 0-1.408-.117-1.984-.349a3.953 3.953 0 0 1-1.448-.989 4.31 4.31 0 0 1-.881-1.485 5.42 5.42 0 0 1-.317-1.928c0-.679.103-1.31.311-1.895a4.5 4.5 0 0 1 .886-1.528c.39-.434.853-.776 1.413-1.022.557-.247 1.181-.367 1.866-.367.766 0 1.435.149 2.001.443a4.13 4.13 0 0 1 1.402 1.182c.371.49.632 1.052.804 1.682.165.628.225 1.282.18 1.96h-6.4c0 .697.235 1.36.681 1.79l.142.948zm2.831-4.844c-.358-.396-.969-.614-1.61-.614-.42 0-.766.072-1.052.213a2.236 2.236 0 0 0-.692.519c-.18.207-.302.428-.366.658-.069.231-.107.43-.122.605h3.963c-.057-.622-.255-1.077-.611-1.381h.49zM17.973 5.71h4.967V6.92h-4.967V5.71z" />
    </svg>
  );
}

const NAV = [
  { id: "home", label: "Home", icon: <Home size={17} /> },
  { id: "projects", label: "Projects", icon: <FolderGit2 size={17} /> },
  { id: "motion", label: "Motion", icon: <Film size={17} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={17} /> },
  { id: "skills", label: "Skills", icon: <User size={17} /> },
  { id: "contactfancy", label: "Contact", icon: <Mail size={17} /> },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Harsha-03",
    icon: <Github size={15} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baba-sriharsha-asapu/",
    icon: <Linkedin size={15} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rewire.harsha/",
    icon: <Instagram size={15} />,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/babasrasapu",
    icon: <BehanceIcon size={15} />,
  },
];

function ProfileAvatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 ring-1 ring-white/20"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        }}
      >
        HA
      </div>
    );
  }

  return (
    <img
      src="/images/myprofile.jpg"
      alt="Harsha Asapu"
      onError={() => setFailed(true)}
      className="h-12 w-12 rounded-full object-cover shrink-0 ring-1 ring-white/20"
    />
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    function tick() {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setTime(now);
    }

    tick();

    const t = setInterval(tick, 60000);

    return () => clearInterval(t);
  }, []);

  function scrollToSection(id: string) {
    const target = document.getElementById(id);

    if (!target) {
      console.log("Section not found:", id);
      return;
    }

    const offset = 80;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
    console.log("Scrolling to:", id, y);
  }

  function handleNavClick(id: string) {
    setOpen(false);

    setTimeout(() => scrollToSection(id), 100);
    setTimeout(() => scrollToSection(id), 350);
    setTimeout(() => scrollToSection(id), 700);
  }

  return (
    <>
      <motion.div
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 backdrop-blur-xl border-b border-white/8 md:hidden"
      >
        <span
          className="text-white text-base leading-none"
          style={{
            fontFamily: "CrustaceansSignature, var(--font-signature), cursive",
          }}
        >
          Harsha Asapu
        </span>

        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          className="h-9 w-9 flex items-center justify-center rounded-xl bg-white/8 border border-white/10 text-zinc-300 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <Menu size={17} />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[82vw] max-w-[320px] bg-zinc-950 border-l border-white/8 flex flex-col overflow-y-auto"
            >
              <div className="px-5 pt-5 pb-5 border-b border-white/8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <ProfileAvatar />

                    <div>
                      <p
                        className="text-white text-lg leading-none"
                        style={{
                          fontFamily:
                            "CrustaceansSignature, var(--font-signature), cursive",
                        }}
                      >
                        Harsha Asapu
                      </p>

                      <p className="text-[11px] text-zinc-500 mt-1.5">
                        UI/UX &middot; Product Designer
                      </p>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    className="h-8 w-8 flex items-center justify-center rounded-xl bg-white/8 text-zinc-400 hover:text-white transition-colors shrink-0"
                    aria-label="Close menu"
                  >
                    <X size={14} />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] text-emerald-400"
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.4, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Open to full-time roles
                </motion.div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-500">
                  <MapPin size={11} />
                  <span>Reno, Nevada</span>
                  <span className="text-zinc-700">&middot;</span>
                  <span className="text-zinc-400 tabular-nums">{time}</span>
                </div>
              </div>

              <nav className="flex-1 flex flex-col gap-0.5 px-3 py-4">
                <p className="text-[10px] tracking-widest text-zinc-600 uppercase font-semibold px-3 mb-2">
                  Navigate
                </p>

                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.04, duration: 0.25 }}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/6 active:bg-white/8 transition-colors text-left w-full"
                  >
                    <span className="text-zinc-500 shrink-0">{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="px-5 py-5 border-t border-white/8 space-y-4">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-white text-zinc-900 font-semibold px-4 py-2.5 text-sm hover:bg-zinc-100 transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </a>

                <div>
                  <p className="text-[10px] tracking-widest text-zinc-600 uppercase font-semibold mb-2">
                    Connect
                  </p>

                  <div className="flex items-center gap-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                        className="h-9 w-9 flex items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-white/10 text-zinc-300 hover:text-white hover:ring-white/30 transition"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}