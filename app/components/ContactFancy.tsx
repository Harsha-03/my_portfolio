"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type View = "email" | "form";
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactFancy() {
  const email = "harshaasapu.b@gmail.com";
  const [view, setView] = useState<View>("email");
  const formRef = useRef<HTMLFormElement | null>(null);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzvnzvw";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const showEmail = () => setView("email");
  const showForm = () => {
    setView("form");
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setError(
          json?.errors?.[0]?.message || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  // Calm, consistent motion language
  const ease = "easeInOut" as const;

  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
    }),
    []
  );

  const swapVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
      exit: { opacity: 0, y: -6, transition: { duration: 0.35, ease } },
    }),
    []
  );

  // Optional: auto-clear success after a bit (keeps UI calm)
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 4500);
    return () => clearTimeout(t);
  }, [status]);

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center"
        >
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-zinc-100">
            Get In Touch
          </h2>
          <p className="mt-2 text-center text-zinc-400 max-w-2xl mx-auto">
            Looking forward to hearing your thoughts and opportunities.
          </p>

          {/* Segmented toggle (premium, animated pill) */}
          <div className="mx-auto mt-6 w-fit p-1 flex gap-1 rounded-full bg-white/5 backdrop-blur ring-1 ring-white/10">
            <button
              type="button"
              aria-pressed={view === "email"}
              onClick={showEmail}
              className="relative px-5 py-2 rounded-full text-sm font-medium text-zinc-300 transition"
            >
              {view === "email" && (
                <motion.span
                  layoutId="contact-pill"
                  className="absolute inset-0 rounded-full bg-blue-500/25 ring-1 ring-blue-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">Email Me</span>
            </button>

            <button
              type="button"
              aria-pressed={view === "form"}
              onClick={showForm}
              className="relative px-5 py-2 rounded-full text-sm font-medium text-zinc-300 transition"
            >
              {view === "form" && (
                <motion.span
                  layoutId="contact-pill"
                  className="absolute inset-0 rounded-full bg-blue-500/25 ring-1 ring-blue-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">Send Message</span>
            </button>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8"
        >
          <div
            className="relative overflow-hidden rounded-3xl
                       bg-white/[0.04] backdrop-blur
                       ring-1 ring-white/10"
          >
            {/* Subtle character tint (red) + calm blue glow. Very low opacity. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-24 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-28 left-1/3 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-rose-500/6 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
            </div>

            <div className="relative p-6 sm:p-8">
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/15 ring-1 ring-blue-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-300" />
                  </div>
                </div>

                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {view === "email" ? (
                      <motion.div
                        key="email"
                        {...swapVariants}
                        className="min-h-[220px]"
                      >
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                          Send Me an Email
                        </h3>
                        <p className="mt-1 text-zinc-400">
                          Email me anytime — I usually respond promptly.
                        </p>

                        {/* Email + CTA */}
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          <span className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm font-medium text-zinc-100">
                            {email}
                          </span>

                          <motion.a
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 0 }}
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium
                                       bg-blue-500/20 text-blue-100 ring-1 ring-blue-500/25
                                       hover:bg-blue-500/25 hover:ring-blue-500/35 transition"
                          >
                            <Mail className="w-4 h-4" />
                            Let&apos;s Connect
                          </motion.a>
                        </div>

                        {/* Social */}
                        <div className="mt-6 flex flex-wrap gap-3">
                          <motion.a
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 0 }}
                            href="https://github.com/Harsha-03"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium
                                       bg-white/5 ring-1 ring-white/10 text-zinc-200
                                       hover:bg-white/10 hover:ring-white/20 transition"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </motion.a>

                          <motion.a
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 0 }}
                            href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium
                                       bg-white/5 ring-1 ring-white/10 text-zinc-200
                                       hover:bg-white/10 hover:ring-white/20 transition"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </motion.a>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        {...swapVariants}
                        className="min-h-[220px]"
                      >
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                          Send a Message
                        </h3>
                        <p className="mt-1 text-zinc-400">
                          Write me a quick note — I’ll reach out soon.
                        </p>

                        {/* Status banners */}
                        <AnimatePresence>
                          {status === "success" && (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.35, ease }}
                              role="status"
                              aria-live="polite"
                              className="mt-4 rounded-2xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200 ring-1 ring-emerald-500/25"
                            >
                              Thanks — your message has been sent.
                            </motion.div>
                          )}

                          {status === "error" && (
                            <motion.div
                              key="error"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.35, ease }}
                              role="alert"
                              className="mt-4 rounded-2xl bg-rose-500/10 px-3 py-2 text-sm text-rose-200 ring-1 ring-rose-500/25"
                            >
                              {error}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Form */}
                        <form
                          id="contact-form"
                          ref={formRef}
                          className="mt-6 grid gap-4 sm:max-w-xl"
                          onSubmit={onSubmit}
                        >
                          {/* Honeypot (spam trap) */}
                          <input
                            type="text"
                            name="_gotcha"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                          />
                          <input
                            type="hidden"
                            name="_subject"
                            value="New message from portfolio site"
                          />

                          <div className="grid gap-2">
                            <label className="text-sm text-zinc-400">
                              Your Name
                            </label>
                            <input
                              name="name"
                              required
                              placeholder="John..."
                              className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3
                                         text-zinc-100 placeholder:text-zinc-500
                                         focus:outline-none focus:ring-2 focus:ring-blue-500/50
                                         transition"
                            />
                          </div>

                          <div className="grid gap-2">
                            <label className="text-sm text-zinc-400">
                              Your Email
                            </label>
                            <div className="relative">
                              <input
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 pl-11
                                           text-zinc-100 placeholder:text-zinc-500
                                           focus:outline-none focus:ring-2 focus:ring-blue-500/50
                                           transition"
                              />
                              <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <label className="text-sm text-zinc-400">
                              Your Message
                            </label>
                            <textarea
                              name="message"
                              required
                              rows={5}
                              placeholder="Hi Harsha — I’d like to discuss..."
                              className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3
                                         text-zinc-100 placeholder:text-zinc-500
                                         focus:outline-none focus:ring-2 focus:ring-blue-500/50
                                         transition"
                            />
                          </div>

                          <motion.button
                            type="submit"
                            disabled={status === "submitting"}
                            whileHover={status === "submitting" ? {} : { y: -1 }}
                            whileTap={status === "submitting" ? {} : { y: 0 }}
                            className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl
                                       w-full sm:w-auto px-6 py-3 text-sm font-medium
                                       bg-blue-500/25 text-blue-100 ring-1 ring-blue-500/25
                                       hover:bg-blue-500/30 hover:ring-blue-500/35
                                       disabled:opacity-60 disabled:cursor-not-allowed transition"
                          >
                            <Send className="w-4 h-4" />
                            {status === "submitting" ? "Sending..." : "Send Message"}
                          </motion.button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Quiet bottom divider (optional but ties to your global language) */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
