"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleToggle = () => {
    // Smooth global transition
    const html = document.documentElement;
    html.classList.add("theme-change");
    setTimeout(() => html.classList.remove("theme-change"), 300);

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="group p-2 rounded-lg border border-zinc-300 dark:border-zinc-700
                 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
    >
      {isDark ? (
        // Dark mode active → show Sun; keep it visibly active (yellow), and yellow on hover
        <Sun
          size={18}
          className="fill-orange-400 group-hover:fill-yellow-400 transition-colors"
        />
      ) : (
        // Light mode active → show Moon; keep it visibly active (black), and black on hover
        <Moon
          size={18}
          className="fill-black group-hover:fill-black transition-colors"
        />
      )}
    </button>
  );
}
