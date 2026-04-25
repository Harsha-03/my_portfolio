import type { Metadata } from "next";
import "./globals.css";
import {
  Bricolage_Grotesque,
  Figtree,
  Instrument_Serif,
  Pinyon_Script,
} from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AppShell from "@/app/components/Appshell";
import ChatWidget from "@/app/components/ChatWidget";
import ShootingStars from "@/app/components/ShootingStars";
import MobileNav from "@/app/components/MobileNav";

/* ---------------- Fonts ---------------- */

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
});

/* ---------------- Metadata ---------------- */

export const metadata: Metadata = {
  title: "Harsha Asapu | UI/UX Designer & Product Designer",
  description:
    "UI/UX Designer based in Reno, Nevada. Designing clear, production-ready digital products. Open to full-time roles in UI/UX, Product Design, and Web Design. OPT Authorized.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Web Designer",
    "Harsha Asapu",
    "Reno Nevada",
    "Frontend Engineer",
    "Figma",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Harsha Asapu" }],
  openGraph: {
    title: "Harsha Asapu | UI/UX Designer",
    description:
      "Designing clear, usable, production-ready digital experiences. Open to UI/UX, Product Designer, and Web Designer roles.",
    url: "https://harshaasapu.com",
    siteName: "Harsha Asapu Portfolio",
    type: "website",
    images: [
      {
        url: "https://harshaasapu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harsha Asapu — UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Asapu | UI/UX Designer",
    description:
      "Designing clear, usable, production-ready digital experiences.",
    images: ["https://harshaasapu.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      className={`${bricolage.variable} ${figtree.variable} ${instrumentSerif.variable} ${pinyonScript.variable}`}
      
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
