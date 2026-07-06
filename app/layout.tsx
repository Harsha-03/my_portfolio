import type { Metadata } from "next";
import "./globals.css";
import {
  Bricolage_Grotesque,
  Figtree,
  Instrument_Serif,
  Pinyon_Script,
  Space_Grotesk,
} from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AppShell from "@/app/components/Appshell";
import ChatWidget from "@/app/components/ChatWidget";
import ShootingStars from "@/app/components/ShootingStars";
import MobileNav from "@/app/components/MobileNav";
import SplashGate from "@/app/components/SplashGate";
import ChatHint from "@/app/components/ChatHint";

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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-wordmark",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harsha Asapu",
  description:
    "UX Designer building products that actually ship. UI/UX and Product Design work — Starbucks, LifeOS, SLU Alumni Connect, Resume Tailor.",
  keywords: [
    "UX Designer",
    "UI/UX Designer",
    "Product Designer",
    "Harsha Asapu",
    "Figma",
    "Design Systems",
    "Interaction Design",
    "AI Product Design",
    "Portfolio",
  ],
  authors: [{ name: "Harsha Asapu" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Harsha Asapu",
    description:
      "UX Designer building products that actually ship. Identifying the real break, not the surface bug.",
    url: "https://harshaasapu.com",
    siteName: "Harsha Asapu",
    type: "website",
    images: [
      {
        url: "https://harshaasapu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harsha Asapu — UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Asapu",
    description:
      "UX Designer building products that actually ship.",
    images: ["https://harshaasapu.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        bricolage.variable +
        " " +
        figtree.variable +
        " " +
        instrumentSerif.variable +
        " " +
        pinyonScript.variable +
        " " +
        spaceGrotesk.variable
      }
    >
      <body>
        <div className="starfield" aria-hidden="true" />
        <ShootingStars />

        <MobileNav />
        <Header />

        <AppShell>{children}</AppShell>

        <Footer />

        <ChatWidget />
        

        <SplashGate />
      </body>
    </html>
  );
}