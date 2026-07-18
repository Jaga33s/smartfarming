"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Radar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pipeline = [
  {
    icon: Database,
    title: "Sense",
    desc: "Soil sensors, satellite imagery, mandi prices, and weather stations feed the model continuously.",
  },
  {
    icon: Cpu,
    title: "Reason",
    desc: "A blend of forecasting and vision models cross-checks your inputs against regional agronomic data.",
  },
  {
    icon: Radar,
    title: "Advise",
    desc: "You get one clear recommendation — in your language, by voice or text — not a wall of charts.",
  },
];

export default function AITechnologySection() {
  return (
    <section
      id="ai-technology"
      className="relative overflow-hidden bg-canopy-900 py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-night opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Under the hood
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
            AI trained on real fields, not lab data
          </h2>
          <p className="mt-4 text-white/60">
            Every recommendation is traceable back to a sensor reading, a
            satellite pass, or a mandi price — so you can trust what it tells
            you.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pipeline.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="glass-dark relative h-full rounded-2xl p-7">
                <span className="font-mono text-xs text-emerald-400">
                  0{i + 1}
                </span>
                <span className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <step.icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI typing readout */}
        <ScrollReveal delay={0.3} className="mt-12">
          <div className="glass-dark mx-auto max-w-2xl rounded-2xl px-6 py-5 font-mono text-sm">
            <span className="text-emerald-400">assistant@smart-farming</span>
            <span className="text-white/40"> ~ </span>
            <TypingLine />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TypingLine() {
  return (
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "auto" }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "linear" }}
      className="inline-block overflow-hidden whitespace-nowrap align-bottom text-white/80"
    >
      Rain expected in 36 hours — recommend delaying urea application.
    </motion.span>
  );
}
