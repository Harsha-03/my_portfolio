"use client";

import { useEffect, useState } from "react";
import {
  Home,
  FolderGit2,
  Briefcase,
  User,
  Mail,
  FileText,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: <Home size={18} /> },
  { id: "projects", label: "Projects", icon: <FolderGit2 size={18} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
  { id: "skills", label: "Skills", icon: <User size={18} /> },
  { id: "contactfancy", label: "Contact", icon: <Mail size={18} /> },
];

export default function Header() {
  const [dateTime, setDateTime] = useState<string>("");
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const date = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setDateTime(`${date} · ${time}`);
    };

    updateTime(); // initial run
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden md:block fixed left-5 top-24 z-40">
      {/* Floating Profile */}
      <div className="relative z-50 mb-4 flex items-center gap-4 px-2">
        <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-white/20">
          <img
            src="/images/myprofile.jpg"
            alt="Baba Sriharsha Asapu"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="leading-tight">
          <p
            style={{ fontFamily: "CrustaceansSignature" }}
            className="text-3xl text-white"
          >
            Harsha Asapu
          </p>
          <p className="text-sm text-zinc-400">Developer</p>
        </div>
      </div>

      {/* Sidebar Card */}
      <div
        className="
          w-64
          flex flex-col
          rounded-2xl
          border border-white/10
          bg-zinc-900/70
          backdrop-blur-xl
          px-4 py-5
        "
      >
        {/* Navigation */}
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                flex items-center gap-3
                rounded-xl
                px-3 py-2
                text-sm
                transition
                ${
                  active === item.id
                    ? "bg-slate-500/15 text-white shadow-[0_0_12px_rgba(100,116,139,0.35)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Spacer */}
        <div className="h-8" />

        {/* Location + Date + Time */}
        <div className="mb-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-zinc-400">
          <p className="mb-1">Missouri, USA</p>

          {dateTime ? (
            <div className="flex flex-col gap-0.5">
              <span>{dateTime.split("|")[0]}</span>
              <span>{dateTime.split("|")[1]}</span>
            </div>
          ) : (
            "—"
          )}
        </div>


        {/* Resume */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener"
          className="
            flex items-center justify-center gap-2
            rounded-xl
            border border-white/10
            bg-white/5
            px-3 py-2
            text-sm
            text-zinc-200
            hover:bg-white/10
            transition
          "
        >
          <FileText size={16} />
          Download Resume
        </a>
      </div>
    </aside>
  );
}
