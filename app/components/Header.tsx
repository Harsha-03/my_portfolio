"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, FolderGit2, Sparkles, Mail } from "lucide-react";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useEffect, useState, type ReactNode } from "react";

export default function Header() {
  // Which section is currently in view
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const ids = ["home", "projects", "skills", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // choose the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        // fire before the section reaches center to feel snappier
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="
        fixed left-4 top-4 bottom-4 z-20
        w-14 sm:w-16
        rounded-3xl
        bg-white/30 dark:bg-zinc-900/60
        backdrop-blur-xl border border-black/10 dark:border-white/10
        flex flex-col items-center justify-between
        shadow-[0_0_60px_-20px_rgba(59,130,246,0.25)]
      "
      aria-label="Primary"
    >
      {/* Top: avatar */}
      <div className="pt-3">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden ring-2 ring-black/10 dark:ring-white/15">
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
      <nav className="flex flex-col items-center gap-4 sm:gap-5">
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
  );
}

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
        group relative inline-flex h-10 w-10 items-center justify-center
        rounded-2xl border transition-colors outline-none
        text-zinc-700 dark:text-zinc-300
        bg-black/5 dark:bg-white/5
        hover:text-zinc-900 dark:hover:text-white
        hover:bg-black/10 dark:hover:bg-white/10
        border-black/10 dark:border-white/10
        focus:ring-2 focus:ring-blue-500
        ${active ? "ring-2 ring-blue-500/60 bg-black/10 dark:bg-white/10" : ""}
      `}
    >
      {/* icon */}
      <span
        className={`
          inline-flex items-center justify-center
          ${active ? "scale-105" : "scale-100"}
          transition-transform
        `}
      >
        {icon}
      </span>

      {/* tooltip */}
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
