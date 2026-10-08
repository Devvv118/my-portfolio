import HeroCurve from "../components/HeroCurve";
import { profile } from "../data/projects";

const icons = {
  GitHub: (
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  ),
  LinkedIn: (
    <path d="M14.82 0H1.18C.53 0 0 .53 0 1.18v13.64C0 15.47.53 16 1.18 16h13.64c.65 0 1.18-.53 1.18-1.18V1.18C16 .53 15.47 0 14.82 0zM4.75 13.63H2.38V6.23h2.37v7.4zM3.56 5.2a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75zm10.07 8.43h-2.37V10.1c0-.85-.02-1.94-1.18-1.94-1.19 0-1.37.93-1.37 1.88v3.59H6.34V6.23h2.28v1.01h.03c.32-.6 1.09-1.24 2.24-1.24 2.4 0 2.84 1.58 2.84 3.63v4z" />
  ),
  Resume: (
    <path d="M9.5 0H2.5C1.67 0 1 .67 1 1.5v13c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V5.5L9.5 0zM9 5.5V1.25L13.25 5.5H9zM3.5 8h9v1.25h-9V8zm0 3h9v1.25h-9V11zm0-6h4v1.25h-4V5z" />
  ),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream dark:bg-navy-deep px-8 pt-14 pb-20 md:px-16 md:pt-20 md:pb-28">
      <HeroCurve />

      <div className="relative z-10 max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="max-w-xl">
            <span className="font-warm-display text-3xl md:text-5xl tracking-tight text-navy dark:text-cream">
              {profile.name}
            </span>
            <p className="mt-6 md:mt-8 max-w-lg border-t border-cream-line dark:border-white/10 pt-6 md:pt-8 text-base md:text-xl font-light leading-relaxed text-warm-ink-soft dark:text-cream/70">
              {profile.bio}
            </p>
          </div>

          <div className="w-full shrink-0 rounded-2xl border border-cream-line bg-cream-deep dark:border-white/10 dark:bg-warm-ink p-5 shadow-[0_20px_40px_-25px_rgba(16,24,43,0.25)] md:w-auto md:p-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-gold-deep dark:text-gold">CONNECT</span>
            <div className="mt-4 flex flex-row flex-wrap gap-2.5 md:flex-col md:flex-nowrap">
              {profile.socials.map((s) => (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2.5 rounded-full border border-cream-line bg-cream px-4 py-2 font-mono text-[11px] tracking-[0.08em] text-warm-ink transition-colors hover:border-gold hover:text-gold-deep dark:border-white/15 dark:bg-transparent dark:text-cream dark:hover:text-gold md:justify-start"
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                    {icons[s.label]}
                  </svg>
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <a
            href="#contact"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-warm-ink-soft text-warm-ink shadow-sm transition-colors hover:border-navy hover:bg-cream-deep dark:border-white/30 dark:text-cream dark:hover:border-gold dark:hover:bg-white/5"
          >
            →
          </a>
          <a href="#contact" className="font-body text-base text-warm-ink-soft dark:text-cream/70 hover:text-navy dark:hover:text-gold transition-colors">
            Have something to say? Let's talk
          </a>
        </div>

        {/* Reserves the vertical rhythm the old headline used to occupy, so the
            drop into Categories below stays the same as before. */}
        <div className="h-28 md:h-40 lg:h-48" aria-hidden="true" />
      </div>
    </section>
  );
}
