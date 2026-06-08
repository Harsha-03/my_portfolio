"use client";

import { type ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-[1] min-h-screen pb-24 md:pb-0">
      <div className="mx-auto max-w-8xl px-4 pt-16 md:pt-0">{children}</div>
    </main>
  );
}
