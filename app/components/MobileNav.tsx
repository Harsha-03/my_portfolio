"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download, FolderGit2, PenLine } from "lucide-react";

const NAV_ITEMS = [
  {
    id: "projects",
    label: "Work",
    ariaLabel: "Go to My Work",
    icon: <FolderGit2 size={23} strokeWidth={2.25} />,
  },
  {
    id: "writing",
    label: "Writing",
    ariaLabel: "Go to Writing",
    icon: <PenLine size={23} strokeWidth={2.25} />,
  },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const lastActiveRef = useRef("home");
  const suppressObserverRef = useRef(false);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("home");
      lastActiveRef.current = "home";
      return;
    }

    const sections = [
      document.getElementById("home"),
      ...NAV_ITEMS.map((item) => document.getElementById(item.id)),
    ].filter((section): section is HTMLElement => section !== null);

    function syncActive() {
      if (suppressObserverRef.current) return;

      if (window.scrollY < 160) {
        if (lastActiveRef.current !== "home") {
          lastActiveRef.current = "home";
          setActive("home");
        }
        return;
      }

      let closestId = lastActiveRef.current;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight * 0.34);

        if (
          rect.top <= window.innerHeight * 0.55 &&
          rect.bottom >= window.innerHeight * 0.25
        ) {
          closestId = section.id;
          break;
        }

        if (distance < 140) {
          closestId = section.id;
        }
      }

      if (closestId && closestId !== lastActiveRef.current) {
        lastActiveRef.current = closestId;
        setActive(closestId);
      }
    }

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);

    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [pathname]);

  function sectionHref(id: string) {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  }

  function homeHref() {
    return pathname === "/" ? "#home" : "/";
  }

  function smoothScrollTo(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    setActive("home");
    lastActiveRef.current = "home";

    if (pathname !== "/") return;

    event.preventDefault();
    suppressObserverRef.current = true;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      suppressObserverRef.current = false;
    }, 850);
  }

  function handleSectionClick(
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    setActive(id);
    lastActiveRef.current = id;

    if (pathname !== "/") return;

    event.preventDefault();
    suppressObserverRef.current = true;

    smoothScrollTo(id);

    setTimeout(() => {
      suppressObserverRef.current = false;
    }, 850);
  }

  function openAI() {
    window.dispatchEvent(new CustomEvent("open-chat-widget"));
  }

  function navButtonClass(isActive: boolean) {
    return (
      "relative flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full transition-colors duration-150 " +
      (isActive
        ? "text-white"
        : "text-zinc-200 hover:text-white active:text-white")
    );
  }

  const activeGlow = (
    <motion.span
      layoutId="mobile-nav-active"
      className="pointer-events-none absolute inset-0 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(148,163,184,0.20) 0%, rgba(100,116,139,0.13) 48%, rgba(100,116,139,0.03) 75%)",
        boxShadow: "0 0 14px rgba(100,116,139,0.24)",
      }}
      transition={{ type: "spring", stiffness: 420, damping: 34 }}
    />
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.9 }}
      className="fixed inset-x-0 z-[60] flex justify-center px-3 md:hidden pointer-events-none isolate"
      style={{
        bottom: "max(1.35rem, calc(env(safe-area-inset-bottom) + 1rem))",
        WebkitTransform: "translate3d(0,0,0)",
        transform: "translate3d(0,0,0)",
        willChange: "transform",
      }}
      aria-label="Mobile navigation"
    >
      <div
        className="pointer-events-auto flex h-[66px] max-w-[calc(100vw-20px)] items-center gap-1 rounded-full border px-2"
        style={{
          background: "#050506",
          borderColor: "rgba(255,255,255,0.26)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.95), 0 0 0 1px rgba(59,130,246,0.16), inset 0 1px 0 rgba(255,255,255,0.08)",
          WebkitBackdropFilter: "none",
          backdropFilter: "none",
        }}
      >
        <motion.a
          href={homeHref()}
          onClick={handleHomeClick}
          aria-label="Go home"
          title="Home"
          whileTap={{ scale: 0.92 }}
          className={navButtonClass(active === "home")}
          style={{ touchAction: "manipulation" }}
        >
          {active === "home" && activeGlow}

          <span className="relative z-10 block h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full bg-zinc-900 ring-1 ring-white/25">
            <img
              src="/images/memoji.png"
              alt="Harsha"
              className="absolute inset-0 block h-full w-full rounded-full object-cover"
              draggable={false}
            />
          </span>
        </motion.a>

        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;

          return (
            <motion.a
              key={item.id}
              href={sectionHref(item.id)}
              onClick={(event) => handleSectionClick(event, item.id)}
              aria-label={item.ariaLabel}
              title={item.label}
              whileTap={{ scale: 0.92 }}
              className={navButtonClass(isActive)}
              style={{ touchAction: "manipulation" }}
            >
              {isActive && activeGlow}
              <span className="relative z-10">{item.icon}</span>
            </motion.a>
          );
        })}

        <motion.button
          type="button"
          onClick={openAI}
          aria-label="Open Harsha's AI"
          title="Ask Harsha's AI"
          whileTap={{ scale: 0.92 }}
          className="relative flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full text-zinc-200 transition-colors hover:text-white"
          style={{ touchAction: "manipulation" }}
        >
          <span className="relative z-10 flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full bg-blue-500/10 text-[10px] font-semibold text-blue-200 ring-1 ring-blue-400/40">
            <span className="absolute inset-0 flex items-center justify-center">
              AI
            </span>

            <img
              src="/images/ai-agent-dark.png"
              alt=""
              className="absolute inset-0 h-full w-full rounded-full object-cover"
              draggable={false}
            />
          </span>
        </motion.button>

        <motion.a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume"
          title="Resume"
          whileTap={{ scale: 0.92 }}
          className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full transition-colors"
          style={{ touchAction: "manipulation" }}
        >
          <motion.span
            aria-hidden
            className="absolute inset-1 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(244,63,94,0.22) 0%, rgba(244,63,94,0.08) 55%, rgba(244,63,94,0) 80%)",
              boxShadow: "0 0 18px rgba(244,63,94,0.25)",
            }}
            initial={{ opacity: 0.55, scale: 1 }}
            animate={{
              opacity: [0.55, 1, 0.55, 1, 0.55],
              scale: [1, 1.08, 1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 1],
              ease: "easeInOut",
              repeat: 0,
            }}
          />
          <span
            className="relative z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full ring-1 ring-rose-400/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(244,63,94,0.14), rgba(244,63,94,0.06))",
            }}
          >
            <Download
              size={20}
              strokeWidth={2.25}
              className="text-rose-200"
            />
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
}