"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Github, Linkedin, Copy, Check, ArrowRight } from "lucide-react";

type View   = "email" | "form";
type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE = "https://formspree.io/f/xzzvnzvw";
const EMAIL     = "harshaasapu.b@gmail.com";

const inputClass = `w-full rounded-xl bg-white/5 border border-white/10
  px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600
  focus:border-blue-500/50 focus:outline-none
  transition-colors duration-150`;

/* ── Field wrapper with focus-glow ── */
function Field({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileFocus-within={{ scale: 1.01 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

export default function ContactFancy() {
  const [view,    setView]    = useState<View>("email");
  const [status,  setStatus]  = useState<Status>("idle");
  const [error,   setError]   = useState("");
  const [copied,  setCopied]  = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  /* copy email */
  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  /* submit */
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
    <section id="contactfancy" className="section">
      <div className="container max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs tracking-widest text-blue-500 font-semibold">
            CONTACT
          </p>
          <h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's work together.
          </h2>
          <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
            Open to UI/UX, Product Designer, and Web Designer roles.
            Also happy to talk about freelance, collabs, or just design.
          </p>
        </motion.div>

        {/* Toggle pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <div className="relative flex rounded-xl bg-white/5
                          border border-white/10 p-1 gap-1">
            {(["email", "form"] as View[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`relative px-5 py-2 rounded-lg text-sm
                            transition-colors duration-150 z-10
                            ${view === v ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {view === v && (
                  <motion.span
                    layoutId="contact-tab"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{v === "email" ? "Email" : "Send a Message"}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-6 rounded-2xl border border-white/10
                     bg-white/3 p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">

            {/* ── Email view ── */}
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

                {/* Email row */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl bg-white/5 border border-white/10
                                   px-4 py-2.5 text-sm text-zinc-300 font-mono">
                    {EMAIL}
                  </span>

                  <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-1.5 rounded-xl
                               bg-white/8 border border-white/10
                               px-3 py-2.5 text-sm text-zinc-400
                               hover:text-white transition-colors"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span key="check"
                          initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                          className="text-emerald-400">
                          <Check size={14} />
                        </motion.span>
                      ) : (
                        <motion.span key="copy"
                          initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
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
                    className="flex items-center gap-1.5 rounded-xl
                               bg-blue-500 px-4 py-2.5 text-sm
                               text-white hover:bg-blue-400 transition-colors"
                  >
                    <Mail size={14} />
                    Email Me
                  </motion.a>
                </div>

                {/* Social links */}
                <div className="pt-2 border-t border-white/8">
                  <p className="text-xs text-zinc-600 mb-3">Also find me on</p>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com/Harsha-03"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-xl
                                 bg-white/5 border border-white/10
                                 px-4 py-2.5 text-sm text-zinc-300
                                 hover:text-white transition-colors"
                    >
                      <Github size={15} /> GitHub
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-xl
                                 bg-[#0A66C2] px-4 py-2.5 text-sm
                                 text-white hover:bg-[#004182] transition-colors"
                    >
                      <Linkedin size={15} /> LinkedIn
                    </motion.a>
                  </div>
                </div>

                {/* Switch to form nudge */}
                <motion.button
                  onClick={() => setView("form")}
                  className="flex items-center gap-1.5 text-xs text-zinc-600
                             hover:text-zinc-400 transition-colors group"
                  whileHover="hovered"
                >
                  Prefer to send a message instead?
                  <motion.span
                    variants={{ hovered: { x: 3 } }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight size={11} />
                  </motion.span>
                </motion.button>
              </motion.div>
            )}

            {/* ── Form view ── */}
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
                      className="flex items-center gap-2 text-sm text-emerald-400
                                 bg-emerald-500/10 border border-emerald-500/20
                                 rounded-xl px-4 py-3"
                    >
                      <Check size={14} /> Message sent. I'll be in touch.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-rose-400 bg-rose-500/10
                                 border border-rose-500/20 rounded-xl px-4 py-3"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className={inputClass}
                  />
                </div>

                <input
                  name="subject"
                  placeholder="Subject (optional)"
                  className={inputClass}
                />

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                />

                <div className="flex items-center justify-between gap-4">
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-xl
                               bg-blue-500 px-6 py-3 text-sm font-medium
                               text-white hover:bg-blue-400
                               disabled:opacity-50 transition-colors"
                  >
                    {status === "submitting" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-3.5 w-3.5 rounded-full border-2
                                     border-white/30 border-t-white"
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
                    className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
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