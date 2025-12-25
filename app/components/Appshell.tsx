"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import SplashLoader from "@/app/components/SplashLoader";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Initial splash on first load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // Optional: show splash briefly on route changes
  useEffect(() => {
    if (!pathname) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [pathname]);

  if (loading) return <SplashLoader />;

  return (
    <main
      className="
        relative z-[1] min-h-screen
        pb-24 md:pb-0
      "
    >
      {/* Desktop & tablet */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-8xl px-4">
          {children}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4">
        {children}
      </div>
    </main>
  );
}
