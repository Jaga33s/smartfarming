"use client";

import { motion } from "framer-motion";
import { Mic, ArrowRight, Store, Leaf, CloudSun, Sprout } from "lucide-react";

const floaters = [
  { Icon: Leaf, top: "14%", left: "8%", delay: 0, size: 22 },
  { Icon: Sprout, top: "68%", left: "6%", delay: 1.2, size: 26 },
  { Icon: CloudSun, top: "22%", left: "88%", delay: 0.6, size: 24 },
  { Icon: Leaf, top: "75%", left: "90%", delay: 1.8, size: 18 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-mesh-day pb-28 pt-40"
    >
      {/* Floating ambient icons */}
      {floaters.map(({ Icon, top, left, delay, size }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden text-emerald-600/25 md:block"
          style={{ top, left }}
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Copy column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            AI Voice & Crop Intelligence Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-canopy-900 sm:text-6xl"
          >
            Empowering farmers
            <br />
            through <span className="text-gradient">artificial intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-canopy-800/75"
          >
            Speak a question in English or Odia and get a crop plan back.
            Smart Farming Assistant reads your soil, your weather, and your
            market — then tells you what to plant, what to spray, and what
            it&apos;s worth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#voice-assistant"
              className="group inline-flex items-center gap-2.5 rounded-full bg-canopy-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              <Mic size={16} />
              Try AI Assistant
            </a>
            <a
              href="#marketplace"
              className="group inline-flex items-center gap-2 rounded-full border border-canopy-900/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-canopy-900 transition-all hover:border-emerald-500/40 hover:bg-white"
            >
              <Store size={16} />
              Explore Marketplace
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Live voice waveform strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass mt-10 inline-flex items-center gap-3 rounded-2xl px-5 py-3.5"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
              <Mic size={14} />
            </span>
            <div className="flex h-6 items-end gap-1">
              <span className="w-1 animate-wave-1 rounded-full bg-emerald-500" />
              <span className="w-1 animate-wave-2 rounded-full bg-sky-500" />
              <span className="w-1 animate-wave-3 rounded-full bg-emerald-500" />
              <span className="w-1 animate-wave-4 rounded-full bg-harvest-500" />
              <span className="w-1 animate-wave-2 rounded-full bg-sky-500" />
            </div>
            <span className="font-mono text-xs text-canopy-700/70">
              &ldquo;ମୋ ଜମିରେ କ&apos;ଣ ଲଗାଇବି?&rdquo; — listening…
            </span>
          </motion.div>
        </div>

        {/* Signature visual: AI leaf scan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto grid h-[380px] w-[380px] place-items-center sm:h-[440px] sm:w-[440px]"
        >
          {/* Pulse rings */}
          {[0, 0.6, 1.2].map((delay) => (
            <span
              key={delay}
              style={{ animationDelay: `${delay}s` }}
              className="absolute h-56 w-56 rounded-full border-2 border-emerald-500/30 animate-pulse-ring sm:h-64 sm:w-64"
            />
          ))}

          {/* Orbit ring with data points */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-canopy-900/10 sm:h-[400px] sm:w-[400px]"
          >
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-500 shadow-glass" />
            <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-harvest-500 shadow-glass" />
            <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-emerald-500 shadow-glass" />
          </motion.div>

          {/* Core glass card */}
          <div className="glass relative grid h-48 w-48 place-items-center rounded-full shadow-glass-lg sm:h-56 sm:w-56">
            <div className="grid place-items-center">
              <Leaf size={64} className="text-emerald-600" strokeWidth={1.5} />
              <span className="mt-2 font-mono text-[11px] font-medium text-emerald-700">
                97% healthy
              </span>
            </div>
          </div>

          {/* Floating readout cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 top-6 rounded-xl px-3.5 py-2.5 text-left shadow-glass sm:-left-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-wide text-canopy-700/60">
              Soil moisture
            </p>
            <p className="font-display text-sm font-semibold text-canopy-900">
              62%
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 bottom-8 rounded-xl px-3.5 py-2.5 text-left shadow-glass sm:-right-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-wide text-canopy-700/60">
              Yield forecast
            </p>
            <p className="font-display text-sm font-semibold text-emerald-600">
              +18% ↑
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
