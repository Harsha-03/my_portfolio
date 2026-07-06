"use client";

import { type ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-[1] min-h-screen pb-32 md:pb-0">
      <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 md:pt-24 lg:px-8">
        {children}
      </div>
    </main>
  );
}
