import { Sprout } from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: ["Features", "AI Technology", "Marketplace", "Weather Intelligence"],
  },
  {
    title: "For you",
    links: ["Farmers", "Buyers", "Admins", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-canopy-900/8 bg-canopy-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500">
                <Sprout size={18} strokeWidth={2.4} />
              </span>
              <span className="font-display text-[17px] font-semibold">
                Smart Farming Assistant
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Empowering farmers through artificial intelligence — one field,
              one forecast, one fair price at a time.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Smart Farming Assistant. All rights reserved.</p>
          <p>Made for farmers, by design.</p>
        </div>
      </div>
    </footer>
  );
}
