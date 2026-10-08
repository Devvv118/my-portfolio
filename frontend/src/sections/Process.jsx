import { motion } from "framer-motion";
import RevealText from "../components/RevealText";

const steps = [
  {
    id: "01",
    title: "Understand the load",
    desc: "Profile the real workload, the failure modes, and the SLOs before touching a line of code.",
  },
  {
    id: "02",
    title: "Design the system",
    desc: "Sketch the data flow and choose boring, provable components over clever ones.",
  },
  {
    id: "03",
    title: "Build & instrument",
    desc: "Ship with observability baked in from the first commit, not bolted on after an incident.",
  },
  {
    id: "04",
    title: "Measure & iterate",
    desc: "Let production data decide what gets optimized next — not intuition alone.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-cream-deep dark:bg-warm-ink px-6 py-24 md:px-12 md:py-32">
      <span className="font-mono text-[11px] tracking-[0.2em] text-gold-deep dark:text-gold">HOW I WORK</span>
      <RevealText
        as="h2"
        text="A quiet, repeatable process."
        className="mt-4 mb-14 font-warm-display text-4xl md:text-6xl tracking-tight text-warm-ink dark:text-cream"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-cream-deep dark:bg-warm-ink font-mono text-sm text-gold-deep shadow-[0_10px_20px_-10px_rgba(193,154,91,0.6)]">
              {s.id}
            </div>
            <h3 className="mt-5 font-warm-display text-lg font-medium text-warm-ink dark:text-cream">{s.title}</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-warm-ink-soft dark:text-cream/70 max-w-xs">{s.desc}</p>

            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[calc(100%-0.5rem)] w-6 h-px bg-cream-line dark:bg-white/10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
