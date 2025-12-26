"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

type View = "email" | "form";
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactFancy() {
  const email = "harshaasapu.b@gmail.com";
  const [view, setView] = useState<View>("email");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzvnzvw";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 text-center">
          Get In Touch
        </h2>
        <p className="mt-2 text-center text-zinc-400">
          Open to conversations, opportunities, and collaborations.
        </p>

        {/* Toggle */}
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => setView("email")}
            className={`px-5 py-2 rounded-full text-sm transition ${
              view === "email"
                ? "bg-blue-500/25 text-blue-100"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            Email
          </button>
          <button
            onClick={() => setView("form")}
            className={`px-5 py-2 rounded-full text-sm transition ${
              view === "form"
                ? "bg-blue-500/25 text-blue-100"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            Message
          </button>
        </div>

        {/* Card */}
        <div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
          {view === "email" ? (
            <div className="space-y-4">
              <p className="text-zinc-300">
                You can reach me directly at:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-2xl bg-white/5 ring-1 ring-white/10">
                  {email}
                </span>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-500/25 text-blue-100 hover:bg-blue-500/30 transition"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href="https://github.com/Harsha-03"
                  target="_blank"
                  className="px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/baba-sriharsha-asapu/"
                  target="_blank"
                  className="px-4 py-2 rounded-2xl bg-[#0077B5] text-white hover:opacity-90 transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              {status === "success" && (
                <p className="text-emerald-300 text-sm">
                  Message sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-rose-300 text-sm">{error}</p>
              )}

              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none"
              />
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500/25 text-blue-100 hover:bg-blue-500/30 transition"
              >
                <Send className="w-4 h-4" />
                {status === "submitting" ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
