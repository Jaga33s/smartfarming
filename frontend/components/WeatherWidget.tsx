"use client";

import { motion } from "framer-motion";
import { CloudSun, Droplets, Wind, Sun } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const forecast = [
  { day: "Mon", Icon: Sun, temp: "32°" },
  { day: "Tue", Icon: CloudSun, temp: "29°" },
  { day: "Wed", Icon: CloudSun, temp: "27°" },
  { day: "Thu", Icon: Sun, temp: "31°" },
  { day: "Fri", Icon: CloudSun, temp: "28°" },
];

export default function WeatherWidget() {
  return (
    <section id="weather" className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
            Weather intelligence
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-canopy-900">
            Know the sky before it changes
          </h2>
          <p className="mt-4 max-w-md text-canopy-700/70">
            Hyperlocal forecasts pulled to your exact plot — so irrigation,
            spraying, and harvest timing are never a guessing game again.
          </p>
          <div className="mt-8 flex gap-6">
            <div>
              <p className="font-display text-2xl font-semibold text-canopy-900">
                92%
              </p>
              <p className="text-xs text-canopy-700/60">Forecast accuracy</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-canopy-900">
                7-day
              </p>
              <p className="text-xs text-canopy-700/60">Outlook window</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass relative overflow-hidden rounded-3xl p-8 shadow-glass-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-10 -top-10 text-harvest-400/20"
            >
              <Sun size={160} strokeWidth={1} />
            </motion.div>

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm text-canopy-700/60">Balasore, Odisha</p>
                <p className="font-display text-5xl font-semibold text-canopy-900">
                  30°C
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm text-canopy-700/60">
                  <CloudSun size={15} /> Partly cloudy
                </p>
              </div>
              <div className="grid gap-3 text-right">
                <div className="flex items-center justify-end gap-2 text-sm text-canopy-700/70">
                  <Droplets size={15} className="text-sky-500" />
                  64% humidity
                </div>
                <div className="flex items-center justify-end gap-2 text-sm text-canopy-700/70">
                  <Wind size={15} className="text-sky-500" />
                  12 km/h wind
                </div>
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-5 gap-2 border-t border-canopy-900/8 pt-6">
              {forecast.map((f) => (
                <div key={f.day} className="text-center">
                  <p className="text-xs text-canopy-700/55">{f.day}</p>
                  <f.Icon size={18} className="mx-auto my-2 text-harvest-500" />
                  <p className="text-xs font-semibold text-canopy-900">
                    {f.temp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
