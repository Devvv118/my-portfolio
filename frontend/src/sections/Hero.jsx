import { profile } from "../data/projects";
import { SocialIcon } from "../components/heroShared";

// Idea 05 — Blueprint
// Fits the data / systems theme: a faint engineering grid replaces the beige
// wash, the old curve survives as a single thin contour, and the three colours
// each get a clear job — navy = the Connect card + button (weight), gold =
// the registration marks (spark), cream/ink = the reading
// surface. Dark mode uses a gold grid on near-black cards.
const CURVE = "M 1200 -40 C 1010 90, 990 240, 1120 350 C 1250 460, 1170 610, 970 630 C 800 648, 758 495, 600 515 C 470 532, 445 680, 280 705";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream px-8 pt-8 pb-10 [--grid:rgba(44,66,116,0.10)] dark:bg-navy-deep dark:[--grid:rgba(193,154,91,0.10)] md:pl-40 md:pr-16 md:pt-10 md:pb-12 lg:pl-52">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage: "radial-gradient(120% 90% at 30% 35%, #000 25%, transparent 80%)",
          maskImage: "radial-gradient(120% 90% at 30% 35%, #000 25%, transparent 80%)",
        }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d={CURVE} fill="none" className="stroke-navy/30 dark:stroke-gold/40" strokeWidth="1.4" />
        <path d={CURVE} fill="none" className="stroke-gold" strokeWidth="1" strokeDasharray="2 8" transform="translate(18 14)" opacity="0.8" />
      </svg>
      {/* registration marks */}
      <span className="pointer-events-none absolute left-6 top-16 font-mono text-lg leading-none text-gold md:left-10" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute bottom-6 right-6 font-mono text-lg leading-none text-gold md:right-10" aria-hidden="true">+</span>

      <div className="relative z-10 max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-xl">
            <h1 className="font-warm-display text-4xl tracking-tight text-navy dark:text-cream md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-lg border-t border-cream-line pt-4 text-base font-medium leading-relaxed text-warm-ink dark:border-white/10 dark:text-cream/90 md:mt-5 md:pt-5 md:text-lg">
              {profile.bio}
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-navy py-2.5 pl-6 pr-2.5 text-[15px] font-medium text-cream transition-transform duration-300 hover:-translate-y-0.5 dark:bg-gold dark:text-navy-deep"
            >
              Get in touch
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy-deep transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-navy-deep/15">→</span>
            </a>
          </div>

          <div className="w-full shrink-0 rounded-2xl border border-transparent bg-navy p-4 text-cream shadow-[0_28px_50px_-24px_rgba(26,40,72,0.6)] dark:border-gold/40 dark:bg-warm-ink md:mt-10 md:w-auto md:p-5">
            <span className="font-mono text-[10px] tracking-[0.2em] text-gold">CONNECT</span>
            <div className="mt-3 flex flex-row flex-wrap gap-2 md:flex-col md:flex-nowrap">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-4 py-2 font-mono text-[11px] tracking-[0.08em] text-cream transition-colors hover:border-gold hover:text-gold md:justify-start"
                >
                  <SocialIcon label={s.label} />
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
