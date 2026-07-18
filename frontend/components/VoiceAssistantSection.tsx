"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Languages } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sampleQueries = {
  en: "What should I plant this season?",
  or: "ମୋ ଜମିରେ ଏହି ମାସରେ କ'ଣ ଲଗାଇବି?",
};

const sampleReplies = {
  en: "Based on your soil and this week's rainfall, groundnut is your best bet — expected yield is 18% above last season.",
  or: "ଆପଣଙ୍କ ମାଟି ଏବଂ ବର୍ଷା ଅନୁସାରେ, ବାଦାମ ଚାଷ ଉପଯୁକ୍ତ — ଗତ ଥର ଠାରୁ 18% ଅଧିକ ଅମଳ ଆଶା କରାଯାଏ।",
};

export default function VoiceAssistantSection() {
  const [lang, setLang] = useState<"en" | "or">("en");
  const [listening, setListening] = useState(false);

  return (
    <section id="voice-assistant" className="py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            Voice assistant
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-canopy-900">
            Just ask. In English or Odia.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-canopy-700/70">
            No typing, no menus. Speak your question the way you&apos;d ask a
            neighbor, and get a straight answer back.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass mx-auto mt-12 max-w-xl rounded-3xl p-8 shadow-glass-lg">
            <div className="mb-6 flex justify-center gap-2">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "en"
                    ? "bg-canopy-900 text-white"
                    : "bg-canopy-900/5 text-canopy-700/70"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("or")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "or"
                    ? "bg-canopy-900 text-white"
                    : "bg-canopy-900/5 text-canopy-700/70"
                }`}
              >
                ଓଡ଼ିଆ · Odia
              </button>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-500/10 text-sky-600">
                <Languages size={13} />
              </span>
            </div>

            <button
              onClick={() => setListening((v) => !v)}
              className="group relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-glass-lg transition-transform hover:scale-105"
            >
              {listening && (
                <>
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-emerald-400" />
                  <span
                    style={{ animationDelay: "0.4s" }}
                    className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-sky-400"
                  />
                </>
              )}
              <Mic size={26} />
            </button>
            <p className="mt-3 text-xs text-canopy-700/50">
              {listening ? "Listening…" : "Tap to try a sample question"}
            </p>

            <motion.div
              initial={false}
              animate={{ opacity: listening ? 1 : 0, height: listening ? "auto" : 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-3 text-left">
                <div className="rounded-xl bg-canopy-900/5 px-4 py-3 text-sm text-canopy-800">
                  {sampleQueries[lang]}
                </div>
                <div className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-canopy-900">
                  {sampleReplies[lang]}
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
