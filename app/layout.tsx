import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Providers from "@/app/components/Providers";
import dynamic from "next/dynamic";

// Client-only for starfield
const Starfield = dynamic(() => import("@/app/components/Starfield"), { ssr: false });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baba Sriharsha Asapu — AI Full-Stack Developer",
  description:
    "Modern, minimal portfolio of AI Builder & Data Explorer, Baba Sriharsha Asapu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          `${jakarta.variable} font-sans antialiased ` +
          " text-zinc-900 dark:text-zinc-100 " +
          " bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(99,102,241,0.06),transparent_60%)] " +
          " dark:bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(59,130,246,0.12),transparent_60%)] " +
          " bg-white dark:bg-zinc-950 overflow-x-hidden"
        }
      >
        <a href="#home" className="skip-link">Skip to content</a>
        <Providers>
          <div className="relative min-h-dvh">
            <Starfield />
            <div className="relative z-10">
              <Header />
              <main id="home">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
