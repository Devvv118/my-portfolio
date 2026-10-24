import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

// Education & experience. Add `details` to an entry to make it expandable.
const education = [
  {
    id: "01",
    org: "Vellore Institute of Technology",
    title: "BTech in Computer Science",
    period: "2023 — 2027",
  },
  {
    id: "02",
    org: "Indian Institute of Technology, Madras",
    title: "Diploma in Data Science",
    period: "2024 — 2026",
  },
];

// Renders **bold** segments inside a plain detail string.
const withBold = (text) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <strong key={i} className="font-medium text-warm-ink dark:text-cream">{part}</strong> : part,
  );

const experience = [
  {
    id: "03",
    org: "CIT Focus India Pvt Ltd",
    title: "Intern",
    period: "May 2025 — June 2025",
    details: [
      "Built **Python** and **SQL** based scripts in SAP Datasphere to automate data transformation, validation, and integration workflows for enterprise analytics.",
      "Worked with SAP Datasphere and the Integration Suite (CPI), gaining practical exposure to data modeling and pipeline integration.",
    ],
  },
  {
    id: "04",
    org: "Hewlett Packard Enterprise",
    title: "Career Preview Program",
    period: "6 months, 2026",
    project: { label: "Autonomous Storage Control Plane", to: "/projects/io-workload-classifier" },
  },
];

function Entry({ item, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `entry-${item.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className="flex py-4"
    >
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] tracking-[0.2em] text-gold-deep dark:text-gold">{item.period.toUpperCase()}</div>
        <h3 className="mt-1.5 font-warm-display text-lg font-medium text-warm-ink dark:text-cream">{item.org}</h3>
        <p className="mt-1 text-sm font-light text-warm-ink-soft dark:text-cream/70">{item.title}</p>

        {item.project && (
          <Link
            to={item.project.to}
            className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-warm-ink underline decoration-gold underline-offset-4 transition-colors hover:text-gold-deep dark:text-cream dark:hover:text-gold"
          >
            {item.project.label.toUpperCase()} <span aria-hidden="true">→</span>
          </Link>
        )}

        {item.details && (
          <>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-gold-deep transition-colors hover:bg-gold/15 dark:text-gold"
            >
              WHAT I DID
              <span aria-hidden="true" className={`inline-block transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-gold">
                    {item.details.map((d) => (
                      <li key={d} className="text-sm font-light leading-relaxed text-warm-ink-soft dark:text-cream/70">{withBold(d)}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}

function Column({ label, items, offset = 0 }) {
  return (
    <div>
      <div className="border-b border-cream-line pb-3 font-mono text-[11px] tracking-[0.2em] text-warm-ink-soft dark:border-white/10 dark:text-cream/60">{label}</div>
      <div className="divide-y divide-cream-line dark:divide-white/10">
        {items.map((it, i) => <Entry key={it.id} item={it} index={i + offset} />)}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="experience" className="relative bg-cream-deep px-6 py-7 dark:bg-warm-ink md:px-20 md:py-8 lg:px-32">
      <span className="font-mono text-[11px] tracking-[0.2em] text-gold-deep dark:text-gold">EDUCATION &amp; EXPERIENCE</span>
      <div className="mb-4" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <Column label="EDUCATION" items={education} />
        <Column label="EXPERIENCE" items={experience} offset={2} />
      </div>
    </section>
  );
}
