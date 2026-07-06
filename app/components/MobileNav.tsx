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
      className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 rounded-[1.65rem]"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(148,163,184,0.26) 0%, rgba(100,116,139,0.16) 42%, rgba(100,116,139,0.06) 58%, rgba(100,116,139,0) 78%)",
        boxShadow:
          "0 0 22px rgba(100,116,139,0.30), inset 0 1px 0 rgba(255,255,255,0.06)",
        filter: "blur(0.2px)",
      }}
      transition={{ type: "spring", stiffness: 420, damping: 34 }}
    />
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
        className="pointer-events-auto flex h-[78px] max-w-[calc(100vw-20px)] items-center gap-3 rounded-full border px-3.5"
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

          <span className="relative z-10 block h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full bg-zinc-900 ring-1 ring-white/25">
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
          <span className="relative z-10 flex h-[44px] w-[44px] items-center justify-center overflow-hidden rounded-full bg-blue-500/10 text-[10px] font-semibold text-blue-200 ring-1 ring-blue-400/40">
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
          className="relative flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full text-zinc-200 transition-colors hover:text-white"
          style={{ touchAction: "manipulation" }}
        >
          <Download size={23} strokeWidth={2.25} />
        </motion.a>
      </div>
    </motion.nav>
  );
}