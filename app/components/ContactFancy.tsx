"use client";

import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

type View = "email" | "form";
type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE = "https://formspree.io/f/xzzvnzvw";
const EMAIL = "sriharshaasapu48@gmail.com";

const inputClass = `w-full rounded-xl bg-white/5 border border-white/10
  px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600
  focus:border-blue-500/50 focus:outline-none
  transition-colors duration-150`;

function BehanceIcon({ size = 18 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="font-bold leading-none tracking-tight"
      style={{ fontSize: Math.max(13, size - 1) }}
    >
      Bē
    </span>
  );
}

function MediumIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.54 12a6.54 6.54 0 1 1-13.08 0 6.54 6.54 0 0 1 13.08 0Zm7.18 0c0 3.39-1.47 6.14-3.29 6.14s-3.29-2.75-3.29-6.14 1.47-6.14 3.29-6.14 3.29 2.75 3.29 6.14Zm2.95 0c0 3.03-.52 5.49-1.16 5.49-.64 0-1.16-2.46-1.16-5.49s.52-5.49 1.16-5.49c.64 0 1.16 2.46 1.16 5.49Z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Harsha-03",
    icon: <Github size={19} />,
    className: "hover:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsha-asapu/",
    icon: <Linkedin size={19} />,
    className: "text-blue-400 hover:text-blue-300",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rewire.harsha/",
    icon: <Instagram size={19} />,
    className: "text-pink-400 hover:text-pink-300",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/harshaasapu",
    icon: <BehanceIcon size={19} />,
    className: "text-blue-400 hover:text-blue-300",
  },
  {
    label: "Medium",
    href: "https://medium.com/@harshaasapu.b",
    icon: <MediumIcon size={20} />,
    className: "hover:text-white",
  },
];

function Field({ children }: { children: ReactNode }) {
  return (
    <div className="relative transition-transform duration-300 focus-within:scale-[1.01]">
      {children}
    </div>
  );
}
export default function ContactFancy() {
  const [view, setView] = useState<View>("email");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setError("Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <section id="contact" className="section relative" style={{ position: "relative" }}>
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400/80">
            <span className="h-px w-8 bg-blue-400/40" />
            Let&apos;s Talk
            <span className="h-px w-8 bg-blue-400/40" />
          </p>

          <h2
            className="mt-2 text-2xl font-extrabold sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s{" "}
            <span
              className="italic text-emerald-400"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              ship
            </span>{" "}
            something worth using.
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
            Open to Product Design and UX roles. Also happy to talk freelance,
            collabs, or just design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex justify-center"
        >
          <div className="relative flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            {(["email", "form"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`relative z-10 rounded-lg px-5 py-2 text-sm transition-colors duration-150 ${
                  view === v ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {view === v && (
                  <motion.span
                    layoutId="contact-tab"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {v === "email" ? "Email" : "Send A Message"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {view === "email" && (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.22 }}
                className="space-y-6"
              >
                <p className="text-sm text-zinc-400">
                  Reach me directly — I typically respond within 24 hours.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm text-zinc-300">
                    {EMAIL}
                  </span>

                  <motion.button
                    type="button"
                    onClick={copyEmail}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.08] px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-emerald-400"
                        >
                          <Check size={14} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy size={14} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {copied ? "Copied" : "Copy"}
                  </motion.button>

                  <motion.a
                    href={`mailto:${EMAIL}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-1.5 rounded-xl bg-blue-500 px-4 py-2.5 text-sm text-white transition-colors hover:bg-blue-400"
                  >
                    <Mail size={14} />
                    Email Me
                  </motion.a>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex flex-wrap gap-3">
                    {SOCIALS.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        whileHover={{ y: -4, scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 380, damping: 22 }}
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-zinc-300 shadow-lg shadow-black/20 transition-colors hover:border-white/20 hover:bg-white/[0.08] ${social.className}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={() => setView("form")}
                  className="group flex items-center gap-1.5 text-sm text-blue-300 transition-colors hover:text-blue-200"
                  whileHover="hovered"
                >
                  Prefer to send a message instead?
                  <motion.span
                    variants={{ hovered: { x: 5 } }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.button>
              </motion.div>
            )}

            {view === "form" && (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={onSubmit}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22 }}
                className="space-y-4"
              >
                <AnimatePresence>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                    >
                      <Check size={14} /> Message sent. I&apos;ll be in touch.
                    </motion.p>
                  )}

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-400"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>

                  <Field>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field>
                  <input
                    name="subject"
                    placeholder="Subject (optional)"
                    className={inputClass}
                  />
                </Field>

                <Field>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="What's on your mind?"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <div className="flex items-center justify-between gap-4">
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={14} /> Send Message
                      </>
                    )}
                  </motion.button>

                  <button
                    type="button"
                    onClick={() => setView("email")}
                    className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
                  >
                    or email directly →
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
