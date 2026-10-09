import { useState } from "react";
import { motion } from "framer-motion";
import AmbientGlow from "../components/AmbientGlow";
import { profile } from "../data/projects";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const rise = (i) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] },
});

// Copies text to the clipboard, with a fallback for browsers/contexts without the Clipboard API.
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const direct = [
    { label: "EMAIL", value: profile.email },
    { label: "PHONE", value: profile.phone },
  ];

  const onCopy = async (d) => {
    if (await copyText(d.value)) {
      setCopied(d.label);
      setTimeout(() => setCopied((c) => (c === d.label ? null : c)), 1800);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-navy px-6 py-14 md:px-12 md:py-16">
      <AmbientGlow variant="footer" />

      <div className="relative z-10">
        <span className="mb-8 block font-mono text-[11px] tracking-[0.2em] text-gold">CONTACT</span>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {direct.map((d, i) => (
            <motion.button
              key={d.label}
              type="button"
              {...rise(i)}
              onClick={() => onCopy(d)}
              aria-label={`Copy ${d.label.toLowerCase()}: ${d.value}`}
              className="group flex w-full cursor-pointer flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-5 text-left backdrop-blur-sm transition-colors hover:border-gold"
            >
              <span className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white/50">
                {d.label}
                <span className="text-gold-soft" aria-live="polite">{copied === d.label ? "COPIED ✓" : "CLICK TO COPY"}</span>
              </span>
              <span className="break-all font-warm-display text-lg font-medium text-cream transition-colors group-hover:text-gold md:text-xl">
                {d.value}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profile.socials.map((s, i) => (
            <motion.a
              key={s.label}
              {...rise(i + 3)}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 font-mono text-[12px] tracking-[0.2em] text-cream backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              {s.label.toUpperCase()}
              <Arrow />
            </motion.a>
          ))}
        </div>

        <motion.div {...rise(6)} className="mt-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-white/50">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
            <path d="M6 13s5-4.2 5-7.6A5 5 0 0 0 1 5.4C1 8.8 6 13 6 13Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="6" cy="5.4" r="1.7" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {profile.location.toUpperCase()}
        </motion.div>
      </div>
    </section>
  );
}
