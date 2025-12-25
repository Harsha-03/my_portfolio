"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-black/70 backdrop-blur md:hidden">
        <span className="font-semibold">Harsha Asapu</span>
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-6 px-6 text-lg">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
