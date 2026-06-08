"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Instagram } from "lucide-react";

function BehanceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.484.102.9.273 1.25.507.346.235.617.55.812.946.191.396.289.881.289 1.466 0 .627-.143 1.15-.428 1.572-.286.418-.71.762-1.272 1.031.768.221 1.338.611 1.718 1.17.378.557.568 1.226.568 2.011 0 .642-.123 1.193-.376 1.654-.247.465-.583.85-1.005 1.146-.422.296-.911.514-1.461.654a6.937 6.937 0 0 1-1.677.207H2V5.698h5.799zm-.357 4.876c.486 0 .885-.115 1.198-.345.314-.23.466-.604.466-1.12 0-.288-.05-.524-.156-.7a1.061 1.061 0 0 0-.42-.428 1.752 1.752 0 0 0-.594-.213 4.077 4.077 0 0 0-.71-.06h-2.59v2.866h2.806zm.157 5.117c.265 0 .519-.024.762-.077.243-.054.453-.137.628-.262.179-.121.32-.281.428-.494.107-.207.157-.475.157-.804 0-.643-.183-1.103-.546-1.385-.357-.282-.832-.421-1.418-.421H5.06v3.443h2.539zm10.404-.451c.448.43.984.629 1.622.629.46 0 .857-.119 1.183-.353.328-.236.527-.484.605-.745h2.236c-.355 1.117-.901 1.916-1.642 2.401-.733.482-1.626.726-2.66.726-.737 0-1.408-.117-1.984-.349a3.953 3.953 0 0 1-1.448-.989 4.31 4.31 0 0 1-.881-1.485 5.42 5.42 0 0 1-.317-1.928c0-.679.103-1.31.311-1.895a4.5 4.5 0 0 1 .886-1.528c.39-.434.853-.776 1.413-1.022.557-.247 1.181-.367 1.866-.367.766 0 1.435.149 2.001.443a4.13 4.13 0 0 1 1.402 1.182c.371.49.632 1.052.804 1.682.165.628.225 1.282.18 1.96h-6.4c0 .697.235 1.36.681 1.79l.142.948zm2.831-4.844c-.358-.396-.969-.614-1.61-.614-.42 0-.766.072-1.052.213a2.236 2.236 0 0 0-.692.519c-.18.207-.302.428-.366.658-.069.231-.107.43-.122.605h3.963c-.057-.622-.255-1.077-.611-1.381h.49zM17.973 5.71h4.967V6.92h-4.967V5.71z"/>
    </svg>
  );
}

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  hoverBg: string;
};

const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Harsha-03",
    icon: <Github size={18} />,
    hoverBg: "rgba(255,255,255,0.12)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baba-sriharsha-asapu/",
    icon: <Linkedin size={18} />,
    hoverBg: "#0A66C2",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rewire.harsha/",
    icon: <Instagram size={18} />,
    hoverBg: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/babasrasapu",
    icon: <BehanceIcon size={18} />,
    hoverBg: "#1769FF",
  },
  {
    label: "Resume",
    href: "/cv.pdf",
    icon: <FileText size={18} />,
    hoverBg: "rgba(255,255,255,0.12)",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 md:mt-32 overflow-hidden md:pl-[300px] md:pr-10">
      {/* Editorial blockquote — small breath before the bottom bar */}
      <div className="container relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl border-l-2 border-white/10 pl-5"
        >
          <p
            className="text-base md:text-lg text-zinc-400 italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;Make it simple, but significant.&rdquo;
          </p>
          <cite className="mt-2 block text-xs text-zinc-600 not-italic">
            &mdash; Don Draper
          </cite>
        </motion.blockquote>
      </div>

      {/* Watermark — subtle, fades in/out (desktop only) */}
      <div
        aria-hidden="true"
        className="relative z-0 pointer-events-none mt-20 hidden md:block text-center
                   [mask-image:linear-gradient(to_bottom,transparent_0%,black_45%,black_75%,transparent_100%)]
                   [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_45%,black_75%,transparent_100%)]"
      >
        <span
          className="block text-[14vw] leading-none tracking-[0.08em] text-white/[0.025] select-none font-extrabold whitespace-nowrap"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          HARSHA ASAPU
        </span>
      </div>

      {/* Bottom bar */}
      <div className="container relative z-10 mt-12 md:mt-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-zinc-600">
            &copy; {year} Harsha Asapu &middot; Designed &amp; built by Harsha
          </p>

          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
            UI/UX Designer &middot; Product Designer &middot; Frontend Engineer
          </div>

          {/* Social row */}
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("/") ? undefined : "_blank"}
                rel={s.href.startsWith("/") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                title={s.label}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  background: s.hoverBg,
                }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-900 ring-1 ring-white/10 text-zinc-300 hover:text-white hover:ring-white/30 hover:shadow-lg hover:shadow-white/5 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
