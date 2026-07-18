"use client";

import {
  Sprout,
  FlaskConical,
  ScanEye,
  Layers,
  CloudRain,
  TrendingUp,
  BadgeIndianRupee,
  BotMessageSquare,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Sprout,
    title: "Crop prediction",
    desc: "Recommends the right crop for your soil, season, and region before you sow a single seed.",
  },
  {
    icon: FlaskConical,
    title: "Fertilizer guidance",
    desc: "Matches nutrients to your soil report so you spend less and grow more.",
  },
  {
    icon: ScanEye,
    title: "Disease detection",
    desc: "Photograph a leaf and get a diagnosis with treatment steps in seconds.",
  },
  {
    icon: Layers,
    title: "Soil health analysis",
    desc: "Tracks pH, moisture, and nutrient trends across every season you farm.",
  },
  {
    icon: CloudRain,
    title: "Weather forecasting",
    desc: "Hyperlocal rain and temperature forecasts tuned to your exact plot.",
  },
  {
    icon: TrendingUp,
    title: "Yield prediction",
    desc: "Projects your harvest weeks in advance so you can plan storage and sale.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Market price forecast",
    desc: "See where mandi prices are heading before you decide when to sell.",
  },
  {
    icon: BotMessageSquare,
    title: "Voice & chat assistant",
    desc: "Ask anything in English or Odia — by voice or by text — and get a straight answer.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            What it does
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-canopy-900">
            Ten AI modules, one assistant
          </h2>
          <p className="mt-4 text-canopy-700/70">
            Each module runs on real agronomic and market data — not
            guesswork — so every recommendation holds up in the field.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-2xl border border-canopy-900/8 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-glass-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <f.icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-canopy-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-canopy-700/65">
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
