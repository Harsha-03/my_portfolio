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
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  return loading ? (
    <SplashLoader />
  ) : (
    <main id="home">{children}</main>
  );
}
