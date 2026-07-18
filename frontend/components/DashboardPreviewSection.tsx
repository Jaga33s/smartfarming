"use client";

import {
  Sprout,
  ShoppingBasket,
  ShieldCheck,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const previews = [
  {
    id: "farmer",
    icon: Sprout,
    role: "Farmer",
    title: "Grow with confidence",
    desc: "Track your farm diary, list produce, and watch earnings update in real time.",
    accent: "from-emerald-500 to-emerald-600",
    stat: { label: "Active listings", value: "12" },
  },
  {
    id: "marketplace",
    icon: ShoppingBasket,
    role: "Buyer",
    title: "Source with transparency",
    desc: "See freshness timelines, fair pricing, and nearby farmers before you buy.",
    accent: "from-sky-500 to-sky-600",
    stat: { label: "Price transparency", value: "98%" },
  },
  {
    id: "admin",
    icon: ShieldCheck,
    role: "Admin",
    title: "Govern with clarity",
    desc: "Verify farmers, resolve complaints, and monitor platform health from one view.",
    accent: "from-harvest-500 to-harvest-600",
    stat: { label: "Farmers verified", value: "94%" },
  },
];

export default function DashboardPreviewSection() {
  return (
    <section id="marketplace" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            Built for everyone on the platform
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-canopy-900">
            One assistant, three dashboards
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {previews.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-canopy-900/8 bg-white/70 p-7 transition-all hover:-translate-y-1.5 hover:shadow-glass-lg">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-white`}
                >
                  <p.icon size={22} strokeWidth={1.8} />
                </div>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-canopy-700/50">
                  <BadgeCheck size={13} /> {p.role} dashboard
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-canopy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-canopy-700/65">
                  {p.desc}
                </p>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-canopy-900/[0.03] px-4 py-3">
                  <span className="text-xs text-canopy-700/60">
                    {p.stat.label}
                  </span>
                  <span className="font-display text-sm font-semibold text-canopy-900">
                    {p.stat.value}
                  </span>
                </div>

                <a
                  href="#get-started"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-transform group-hover:translate-x-0.5"
                >
                  Preview dashboard <ArrowUpRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
