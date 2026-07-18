import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canopy: {
          950: "#07160F",
          900: "#0B1F17",
          800: "#0F2B20",
          700: "#14392A",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#065F46",
        },
        sky: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        harvest: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        mist: {
          50: "#FAFAF7",
          100: "#F2F4EF",
          200: "#E4E9DF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "mesh-day":
          "radial-gradient(at 20% 10%, rgba(16,185,129,0.16) 0px, transparent 55%), radial-gradient(at 85% 0%, rgba(14,165,233,0.14) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(245,158,11,0.10) 0px, transparent 55%)",
        "mesh-night":
          "radial-gradient(at 15% 0%, rgba(16,185,129,0.28) 0px, transparent 50%), radial-gradient(at 90% 20%, rgba(56,189,248,0.20) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(251,191,36,0.14) 0px, transparent 55%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 31, 23, 0.10)",
        "glass-lg": "0 20px 60px -10px rgba(11, 31, 23, 0.25)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "wave-1": "wave 1.2s ease-in-out infinite",
        "wave-2": "wave 1.2s ease-in-out 0.15s infinite",
        "wave-3": "wave 1.2s ease-in-out 0.3s infinite",
        "wave-4": "wave 1.2s ease-in-out 0.45s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        wave: {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
