"use client";

import { useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "The fertilizer guidance alone saved me money I used to waste every season.",
    name: "Rasmita Behera",
    role: "Farmer, Balasore",
  },
  {
    quote:
      "I know exactly where my vegetables come from now — the freshness timeline changed how I buy.",
    name: "Arjun Mehta",
    role: "Buyer, Bhubaneswar",
  },
  {
    quote:
      "Verifying farmers used to take days. Now it's a checklist I clear before lunch.",
    name: "Priya Nair",
    role: "Platform Admin",
  },
];

const faqs = [
  {
    q: "Do I need a smartphone with internet to use the voice assistant?",
    a: "A basic smartphone with an internet connection is enough — no special hardware is required. We're also working on a low-bandwidth mode for weaker connections.",
  },
  {
    q: "Is my farm data shared with anyone else?",
    a: "No. Your farm diary, listings, and diagnostics are private to your account unless you choose to publish a listing to the marketplace.",
  },
  {
    q: "How accurate are the crop and yield predictions?",
    a: "Our models are validated against regional agricultural data and currently average above 90% accuracy, improving as more local data is collected.",
  },
  {
    q: "Can buyers negotiate prices directly with farmers?",
    a: "Yes — the marketplace shows a transparent price range, and buyers and farmers can message directly before confirming an order.",
  },
];

export default function TestimonialsFAQContact() {
  return (
    <>
      <section id="testimonials" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Voices from the field
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-canopy-900">
              Trusted by farmers and buyers alike
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-canopy-900/8 bg-white/70 p-7">
                  <p className="text-sm leading-relaxed text-canopy-800/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="font-display text-sm font-semibold text-canopy-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-canopy-700/55">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white/60 py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Questions
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-canopy-900">
              Frequently asked
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <FaqItem q={f.q} a={f.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal className="glass grid gap-10 rounded-3xl p-10 shadow-glass-lg md:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Get in touch
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-canopy-900">
                Talk to the team
              </h2>
              <p className="mt-4 text-sm text-canopy-700/70">
                Questions about onboarding, partnerships, or the platform in
                general — we read every message.
              </p>

              <div className="mt-8 space-y-4 text-sm text-canopy-800">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-emerald-600" />
                  hello@smartfarming.ai
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-600" />
                  +91 98765 43210
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-emerald-600" />
                  Bhubaneswar, Odisha, India
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-canopy-900/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-canopy-900/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full rounded-xl border border-canopy-900/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-canopy-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-canopy-900/8 bg-white/70">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-sm font-semibold text-canopy-900">{q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-canopy-700/50 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm leading-relaxed text-canopy-700/70">
          {a}
        </p>
      )}
    </div>
  );
}
