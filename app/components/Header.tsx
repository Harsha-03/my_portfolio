"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, FolderGit2, Sparkles, Mail, SunMedium, Moon } from "lucide-react";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useEffect, useState, type ReactNode } from "react";

export default function Header() {
  // Track which section is currently in view
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const ids = ["home", "projects", "skills", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
          [padding-bottom:calc(env(safe-area-inset-bottom))]  /* iOS safe area */
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
        ${active ? "ring-2 ring-blue-500/60 bg-black/10 dark:bg-white/10" : ""}
      `}
    >
      <span
        className={`
          inline-flex items-center justify-center transition-transform
          ${active ? "scale-110" : "scale-100"}
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
        flex flex-col items-center justify-center
        min-w-[64px] px-2 py-1
        rounded-xl
        text-[11px] font-medium
        transition
        ${active
          ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10"
          : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5"}
      `}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center">
        {icon}
      </span>
      <span className="mt-0.5 leading-none">{label}</span>
    </Link>
  );
}
