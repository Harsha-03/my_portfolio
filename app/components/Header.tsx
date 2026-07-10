"use client";

import { FocusEvent, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

const NAV_ITEMS = [
  { id: "projects", label: "My Work" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;
const morph = { duration: 0.34, ease };

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const suppressObserverRef = useRef(false);

  const isHomePage = pathname === "/";
  const compactMode = false;
  const expanded = !compactMode || navOpen;

  // Sanjay-style collapsed pill:
  // avatar + name on the left, simple dots on the far right.
  const navWidth = expanded ? (compactMode ? 420 : 468) : 330;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const shouldCompact = y > 120;

      setScrolled(shouldCompact);

      if (y < 100) {
        setActive("home");
        setNavOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((element): element is HTMLElement => element !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 100) return;
        if (suppressObserverRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -42% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  function openCompactNav() {
    if (compactMode) setNavOpen(true);
  }

  function closeCompactNav() {
    if (compactMode) setNavOpen(false);
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      closeCompactNav();
    }
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleNav(id: string) {
    setActive(id);
    setNavOpen(false);
    suppressObserverRef.current = true;

    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push("/#" + id);
    }

    setTimeout(() => {
      suppressObserverRef.current = false;
    }, 950);
  }

  function handleHome() {
    setActive("home");
    setNavOpen(false);
    suppressObserverRef.current = true;

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }

    setTimeout(() => {
      suppressObserverRef.current = false;
    }, 950);
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="hidden md:block fixed top-0 left-0 right-0 z-40 pointer-events-none"
      >
        <div className="w-full flex justify-center pt-4 px-4">
          <motion.div
            onPointerLeave={closeCompactNav}
            onBlur={handleBlur}
            initial={false}
            animate={{
              width: navWidth,
              paddingLeft: compactMode ? 14 : 18,
              paddingRight: compactMode ? 18 : 18,
              height: compactMode ? 62 : 62,
              backgroundColor: compactMode
                ? "rgba(9,9,11,0.86)"
                : "rgba(9,9,11,0.58)",
              borderColor: expanded
                ? "rgba(255,255,255,0.13)"
                : "rgba(255,255,255,0.10)",
              boxShadow: expanded
                ? "0 12px 42px rgba(0,0,0,0.42)"
                : "0 10px 30px rgba(0,0,0,0.34)",
            }}
            transition={morph}
            style={{ borderRadius: 999 }}
            className="pointer-events-auto relative flex items-center gap-3 overflow-hidden border backdrop-blur-xl"
          >
            <motion.button
              type="button"
              onClick={handleHome}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="flex shrink-0 items-center gap-3 group focus:outline-none"
              aria-label="Home"
            >
              <motion.div
                animate={{
                  height: compactMode ? 40 : 36,
                  width: compactMode ? 40 : 36,
                }}
                transition={morph}
                className="shrink-0 overflow-hidden rounded-full bg-zinc-900 ring-1 ring-white/15"
              >
                <img
                  src="/images/memoji.png"
                  alt="Harsha"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>

              <span
                className="whitespace-nowrap text-[15px] font-bold tracking-[0.08em] text-white transition-colors group-hover:text-blue-300"
                style={{ fontFamily: "var(--font-wordmark)" }}
              >
                HARSHA
              </span>
            </motion.button>

            <div className="relative flex min-w-0 flex-1 items-center justify-end overflow-hidden">
              <motion.button
                type="button"
                onPointerEnter={openCompactNav}
                onFocus={openCompactNav}
                onClick={openCompactNav}
                animate={{
                  opacity: expanded ? 0 : 1,
                  x: expanded ? 8 : 0,
                  filter: expanded ? "blur(5px)" : "blur(0px)",
                }}
                transition={{ duration: 0.18, ease }}
                className="absolute right-0 z-10 flex h-11 w-[76px] shrink-0 items-center justify-center gap-[8px] text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                style={{ pointerEvents: expanded ? "none" : "auto" }}
                aria-label="Open navigation"
              >
                <span className="h-2 w-2 rounded-full bg-zinc-200/90" />
                <span className="h-2 w-2 rounded-full bg-zinc-200/90" />
                <span className="h-2 w-2 rounded-full bg-zinc-200/90" />
              </motion.button>

              <motion.nav
                animate={{
                  opacity: expanded ? 1 : 0,
                  x: expanded ? 0 : 8,
                  filter: expanded ? "blur(0px)" : "blur(5px)",
                }}
                transition={{ duration: 0.2, ease }}
                className="relative flex items-center gap-0.5 overflow-hidden"
                style={{ pointerEvents: expanded ? "auto" : "none" }}
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => handleNav(item.id)}
                      whileTap={{ scale: 0.96 }}
                      className={
                        "relative flex items-center rounded-full px-3 py-1.5 text-xs whitespace-nowrap transition-colors " +
                        (isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white")
                      }
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 50%, rgba(148,163,184,0.20) 0%, rgba(100,116,139,0.13) 48%, rgba(100,116,139,0.03) 75%)",
                            boxShadow: "0 0 14px rgba(100,116,139,0.24)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      )}

                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  );
                })}
              </motion.nav>
            </div>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                opacity: !compactMode ? 1 : 0,
                width: !compactMode ? "auto" : 0,
                x: !compactMode ? 0 : -6,
                filter: !compactMode ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ duration: 0.22, ease }}
              className="shrink-0 overflow-hidden"
              style={{ pointerEvents: !compactMode ? "auto" : "none" }}
            >
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-200 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 transition-colors whitespace-nowrap">
                Resume
                <ArrowUpRight size={11} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      {compactMode && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, x: 24, y: -4 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 24, y: -4 }}
          transition={{ duration: 0.35, ease }}
          className="hidden md:flex fixed top-4 right-6 z-50 items-end pointer-events-auto"
        >
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              boxShadow: [
                "0 0 0 rgba(59,130,246,0)",
                "0 0 20px rgba(59,130,246,0.28)",
                "0 0 0 rgba(59,130,246,0)",
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-zinc-950/70 backdrop-blur-xl px-4 py-2 text-xs font-medium text-zinc-200 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors whitespace-nowrap"
          >
            Resume
            <Download size={12} />
          </motion.a>
        </motion.div>
      )}
    </>
  );
}
