import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Dancing_Script, Caveat } from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AppShell from "@/app/components/Appshell";
import ChatWidget from "@/app/components/ChatWidget";
import ShootingStars from "@/app/components/ShootingStars";
import MobileNav from "@/app/components/MobileNav";

/* ---------------- Fonts ---------------- */

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const signature = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-signature",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-caveat",
});

/* ---------------- Metadata ---------------- */

export const metadata: Metadata = {
  title: "Harsha Asapu | Portfolio",
  description: "Portfolio of Harsha Asapu",
};

/* ---------------- Layout ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${signature.variable} ${caveat.variable}`}
    >
      <body>
        {/* Background layers */}
        <div className="starfield" aria-hidden="true" />
        <ShootingStars />

        {/* Mobile navigation */}
        <MobileNav />

        {/* Desktop sidebar */}
        <Header />

        {/* Main app shell */}
        <AppShell>{children}</AppShell>

        {/* Footer */}
        <Footer />

        {/* Global floating UI */}
        <ChatWidget />
      </body>
    </html>
  );
}
