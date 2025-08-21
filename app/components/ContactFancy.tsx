"use client";

import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactFancy() {
  const email = "harshaasapu.b@gmail.com";
  const [view, setView] = useState<"email" | "form">("email");
  const formRef = useRef<HTMLFormElement | null>(null);

  // ⬅️ Replace this with your real Formspree ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzvnzvw";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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
        setError(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center text-3xl font-extrabold">Get In Touch</h2>
        <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Looking forward to hearing your thoughts and opportunities.
        </p>

        {/* Segmented toggle */}
        <div className="mx-auto mt-6 w-fit p-1 flex gap-1 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur ring-1 ring-black/10 dark:ring-white/10">
          <button
            type="button"
            aria-pressed={view === "email"}
            onClick={showEmail}
            className={[
              "px-4 py-2 rounded-full text-sm font-medium transition",
              view === "email"
                ? "bg-blue-600 text-white shadow"
                : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10",
            ].join(" ")}
          >
            Email Me
          </button>
          <button
            type="button"
            aria-pressed={view === "form"}
            onClick={showForm}
            className={[
              "px-4 py-2 rounded-full text-sm font-medium transition",
              view === "form"
                ? "bg-blue-600 text-white shadow"
                : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10",
            ].join(" ")}
          >
            Send Message
          </button>
        </div>

        {/* Card */}
        <div className="mt-4 p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur ring-1 ring-black/10 dark:ring-white/10">
          <div className="flex items-start gap-4 rounded-2xl p-4 sm:p-6">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 dark:bg-blue-600/20 flex items-center justify-center">
              <Mail className="text-blue-500 dark:text-blue-400" />
            </div>

            <div className="flex-1">
              {view === "email" ? (
                <>
                  <h3 className="text-xl font-bold">Send Me an Email</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Email me anytime, I usually respond promptly.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-xl bg-zinc-900 text-white px-4 py-2 text-sm font-semibold">
                      {email}
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="btn-outline inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Let's Connect
                    </a>
                  </div>

                  {/* GitHub + LinkedIn */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href="https://github.com/Harsha-03"
                      target="_blank"
                      rel="noopener"
                      className="px-6 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
                      target="_blank"
                      rel="noopener"
                      className="px-6 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                      LinkedIn
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold">Send a Message</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Write me a quick message, and I’ll reach out soon.
                  </p>

                  {/* Success / Error banners */}
                  {status === "success" && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="mt-4 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 border border-emerald-500/30"
                    >
                      Thanks! Your message has been sent.
                    </div>
                  )}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="mt-4 rounded-lg bg-rose-500/10 px-3 py-2 text-sm text-rose-300 border border-rose-500/30"
                    >
                      {error}
                    </div>
                  )}

                  {/* Form */}
                  <form
                    id="contact-form"
                    ref={formRef}
                    className="mt-6 grid gap-3 sm:max-w-xl"
                    onSubmit={onSubmit}
                  >
                    {/* Honeypot (spam trap) */}
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                    {/* Optional: subject & redirect */}
                    <input type="hidden" name="_subject" value="New message from portfolio site" />
                    {/* <input type="hidden" name="_redirect" value="https://your-domain.com/thanks" /> */}

                    <div className="grid gap-1">
                      <label className="text-sm text-zinc-700 dark:text-zinc-400">Your Name</label>
                      <input
                        name="name"
                        required
                        placeholder="John ..."
                        className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-950/80 px-3 py-2 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="grid gap-1">
                      <label className="text-sm text-zinc-700 dark:text-zinc-400">Your Email</label>
                      <div className="relative">
                        <input
                          name="email" // Formspree expects 'email'
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-950/80 px-3 py-2 pl-10 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                      </div>
                    </div>

                    <div className="grid gap-1">
                      <label className="text-sm text-zinc-700 dark:text-zinc-400">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Hi Harsha! I’d like to discuss .."
                        className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-950/80 px-3 py-2 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="mt-2 btn-primary inline-flex items-center justify-center gap-2 rounded-xl w-full sm:w-auto px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
