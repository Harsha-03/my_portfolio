"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, FolderGit2, Sparkles, Mail } from "lucide-react";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** DOM ids that exist on the page.
 * NOTE: Contact section DOM id is #contactfancy, but the nav key is "contact".
 */
const SECTION_IDS = ["home", "projects", "skills", "contactfancy"] as const;

/** Map DOM section id -> nav key used in Header links */
function idToNavKey(id: string) {
  return id === "contactfancy" ? "contact" : id;
}

export default function Header() {
  const [activeId, setActiveId] = useState<string>("home");
  const ratiosRef = useRef<Record<string, number>>({}); // id -> latest intersectionRatio

  useEffect(() => {
    const els = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    // Start with home so we never show nothing on first paint
    ratiosRef.current = Object.fromEntries(SECTION_IDS.map((i) => [i, i === "home" ? 1 : 0]));

    // A range of thresholds gives smoother updates as more/less of a section is visible
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20); // [0, 0.05, ..., 1]

    const obs = new IntersectionObserver(
      (entries) => {
        // Update ratios map with the latest visibility info
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          ratiosRef.current[id] = e.intersectionRatio;
        }

        // Pick the section with the highest visible ratio
        let bestId: typeof SECTION_IDS[number] = SECTION_IDS[0];
        let bestRatio = -1;

        for (const id of SECTION_IDS) {
          const r = ratiosRef.current[id] ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        // If nothing is visible (e.g., at extreme edges), keep previous value.
        // Otherwise map to the nav key and set active.
        if (bestRatio >= 0) {
          setActiveId(idToNavKey(bestId));
        }
      },
      {
        // Bias a little toward the viewport center so the "middle" section wins
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: thresholds,
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Desktop / Tablet: left glass sidebar */}
      <aside
        className="
          hidden md:flex
          fixed left-4 top-4 bottom-4 z-20
          w-14 lg:w-16
          rounded-3xl
          bg-white/30 dark:bg-zinc-900/60
          backdrop-blur-xl border border-black/10 dark:border-white/10
          flex-col items-center justify-between
          shadow-[0_0_60px_-20px_rgba(59,130,246,0.25)]
        "
        aria-label="Primary"
      >
        {/* Top: avatar */}
        <div className="pt-3">
          <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden ring-2 ring-black/10 dark:ring-white/15">
            <Image
              src="/images/myprofile.jpg"
              alt="Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Middle: nav icons */}
        <nav className="flex flex-col items-center gap-4 lg:gap-5">
          <SidebarLink
            href="#home"
            icon={<Home className="h-5 w-5" />}
            label="Home"
            active={activeId === "home"}
          />
          <SidebarLink
            href="#projects"
            icon={<FolderGit2 className="h-5 w-5" />}
            label="Projects"
            active={activeId === "projects"}
          />
          <SidebarLink
            href="#skills"
            icon={<Sparkles className="h-5 w-5" />}
            label="Skills"
            active={activeId === "skills"}
          />
          {/* Contact link points to #contact (your anchor), activeId maps from #contactfancy */}
          <SidebarLink
            href="#contact"
            icon={<Mail className="h-5 w-5" />}
            label="Contact"
            active={activeId === "contact"}
          />
        </nav>

        {/* Bottom: theme toggle */}
        <div className="pb-3">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile: bottom dock */}
      <nav
        className="
          md:hidden
          fixed inset-x-4 bottom-4 z-20
          rounded-2xl
          bg-white/70 dark:bg-zinc-900/70
          border border-black/10 dark:border-white/10
          backdrop-blur-xl
          shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)]
          px-2 py-2
          flex items-center justify-between gap-1
          [padding-bottom:calc(env(safe-area-inset-bottom))]
        "
        role="navigation"
        aria-label="Primary"
      >
        <MobileLink
          href="#home"
          label="Home"
          icon={<Home className="h-5 w-5" />}
          active={activeId === "home"}
        />
        <MobileLink
          href="#projects"
          label="Projects"
          icon={<FolderGit2 className="h-5 w-5" />}
          active={activeId === "projects"}
        />
        <MobileLink
          href="#skills"
          label="Skills"
          icon={<Sparkles className="h-5 w-5" />}
          active={activeId === "skills"}
        />
        <MobileLink
          href="#contact"
          label="Contact"
          icon={<Mail className="h-5 w-5" />}
          active={activeId === "contact"}
        />

        {/* Theme toggle on mobile */}
        <div className="ml-1 mr-1">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}

/* === Desktop/Tablet sidebar button === */
function SidebarLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`
        group relative inline-flex h-11 w-11 items-center justify-center
        rounded-2xl border outline-none transition
        text-zinc-700 dark:text-zinc-300
        bg-black/5 dark:bg-white/5
        hover:text-zinc-900 dark:hover:text-white
        hover:bg-black/10 dark:hover:bg-white/10
        border-black/10 dark:border-white/10
        focus:ring-2 focus:ring-blue-500
        transform-gpu hover:-translate-y-1
        ${active ? "shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.6)] text-blue-500 dark:text-purple-400" : ""}
      `}
    >
      <span
        className={`
          inline-flex items-center justify-center transition-transform
          ${active ? "scale-110 icon-rainbow" : "scale-100 group-hover:icon-rainbow"}
        `}
      >
        {icon}
      </span>

      {/* tooltip (desktop only) */}
      <span
        className="
          pointer-events-none absolute left-12 whitespace-nowrap rounded-lg
          bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white
          border border-black/10 dark:border-white/10
          text-xs px-2 py-1 opacity-0
          transition-opacity group-hover:opacity-100
        "
      >
        {label}
      </span>
    </Link>
  );
}

/* === Mobile dock button === */
function MobileLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`
        group flex flex-col items-center justify-center
        min-w-[64px] px-2 py-1
        rounded-xl
        text-[11px] font-medium
        transition transform-gpu hover:-translate-y-0.5
        ${active
          ? "bg-black/10 dark:bg-white/10 shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.6)] text-blue-600 dark:text-purple-400"
          : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5"}
      `}
    >
      <span
        className={`
          inline-flex h-6 w-6 items-center justify-center
          ${active ? "icon-rainbow" : "group-hover:icon-rainbow"}
        `}
      >
        {icon}
      </span>
      <span className="mt-0.5 leading-none">{label}</span>
    </Link>
  );
}
