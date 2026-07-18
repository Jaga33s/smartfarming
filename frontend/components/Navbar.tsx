"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sprout, Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "AI Technology", href: "#ai-technology" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Weather", href: "#weather" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass shadow-glass" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-glass">
              <Sprout size={18} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-canopy-900">
              Smart Farming Assistant
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-canopy-700/80 transition-colors hover:text-emerald-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#login"
              className="text-sm font-medium text-canopy-700/80 hover:text-canopy-900"
            >
              Log in
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-canopy-900 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-canopy-800"
            >
              Get started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl px-5 py-4 shadow-glass lg:hidden">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-canopy-800"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-full bg-canopy-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
