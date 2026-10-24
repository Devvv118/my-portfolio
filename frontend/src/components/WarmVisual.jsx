import { motion } from "framer-motion";

// Project thumbnail in the same "blueprint" language as the hero: a navy sheet with a
// faint engineering grid, gold registration marks, and a small line schematic of how
// that particular project is put together (boxes = components, lines = data flow).

const GOLD = "#c19a5b";
const PAPER = "#e6d6b8";

// Colours come from the theme variables, so tiles turn charcoal in dark mode.
const tones = {
  navy: "var(--color-navy)",
  gold: "var(--color-navy)",
  ink: "var(--color-navy-metal)",
};

// Each schematic is drawn on a 240 x 150 sheet. `b` = boxes [x, y, w, h, accent?], `l` = flow lines.
const schematics = {
  "io-workload-classifier": {
    b: [
      [80, 8, 80, 16, true],
      [40, 36, 64, 16], [136, 36, 64, 16],
      [80, 64, 80, 16],
      [40, 92, 64, 16], [136, 92, 64, 16],
      [80, 120, 80, 16],
    ],
    l: [
      "M120 24V30M72 30H168M72 30V36M168 30V36",
      "M72 52V58M168 52V58M72 58H168M120 58V64",
      "M120 80V86M72 86H168M72 86V92M168 86V92",
      "M72 108V114M168 108V114M72 114H168M120 114V120",
    ],
  },
  "data-analyst-agent": {
    b: [
      [20, 14, 70, 26, true], [150, 14, 70, 26],
      [150, 100, 70, 26], [20, 100, 70, 26],
      [100, 62, 40, 26],
    ],
    l: [
      "M90 27H150", "M185 40V100", "M150 113H90", "M55 100V40",
      "M100 75H72M72 75V70", "M140 75H168",
    ],
  },
  "virtual-teaching-assistant": {
    b: [
      [10, 54, 44, 42, true],
      [84, 20, 56, 30], [84, 100, 56, 30],
      [172, 54, 58, 42],
    ],
    l: ["M54 75H69V35H84", "M54 75H69V115H84", "M140 35H156V75H172", "M140 115H156V75H172"],
  },
  "vehicle-rental-system": {
    b: [
      [12, 14, 64, 48, true], [88, 14, 64, 48], [164, 14, 64, 48],
      [88, 88, 64, 48],
    ],
    l: ["M76 38H88", "M152 38H164", "M120 62V88"],
    rows: [[12, 14], [88, 14], [164, 14], [88, 88]],
  },
  "portfolio-intelligence-platform": {
    b: [
      [10, 52, 40, 46, true], [72, 20, 44, 34], [72, 96, 44, 34],
      [138, 52, 38, 46], [196, 40, 36, 70],
    ],
    l: ["M50 75H61V37H72", "M50 75H61V113H72", "M116 37H127V75H138", "M116 113H127V75H138", "M176 75H196"],
    chart: "M202 98L210 84L217 91L226 70",
    ticks: [[10, 30], [10, 118]],
  },
};
const fallback = schematics["portfolio-intelligence-platform"];

function Sheet({ s }) {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
      {s.b.map(([x, y, w, h, accent], i) => (
        <rect
          key={i} x={x} y={y} width={w} height={h} rx={3}
          fill={accent ? "rgba(193,154,91,0.16)" : "rgba(230,214,184,0.05)"}
          stroke={accent ? GOLD : PAPER}
          strokeOpacity={accent ? 0.95 : 0.6}
          strokeWidth={1.1}
        />
      ))}
      {(s.rows || []).map(([x, y], i) => (
        <path key={i} d={`M${x} ${y + 14}H${x + 64}M${x + 8} ${y + 26}H${x + 38}M${x + 8} ${y + 36}H${x + 48}`} stroke={PAPER} strokeOpacity={0.45} strokeWidth={1} />
      ))}
      {(s.dots || []).map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2} fill={GOLD} />)}
      {s.l.map((d, i) => <path key={i} d={d} stroke={GOLD} strokeOpacity={0.85} strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round" />)}
      {s.chart && <path d={s.chart} stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

export default function WarmVisual({ project, className = "", label }) {
  const s = schematics[project?.slug] || fallback;
  const bg = tones[project?.warmAccent] || tones.navy;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: bg }}>
      {/* engineering grid */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(230,214,184,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,214,184,0.09) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ background: "radial-gradient(90% 90% at 15% 0%, rgba(255,255,255,0.14), transparent 65%)" }}
      />

      <motion.div
        className="absolute inset-0 px-[12%] py-[10%]"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <Sheet s={s} />
      </motion.div>

      {/* registration marks + sheet number */}
      <span className="pointer-events-none absolute right-1.5 top-0.5 font-mono text-[11px] leading-none text-gold" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute bottom-0.5 right-1.5 font-mono text-[11px] leading-none text-gold" aria-hidden="true">+</span>
      {project?.id && (
        <span className="pointer-events-none absolute left-2 top-1.5 font-mono text-[9px] tracking-[0.18em] text-gold">{project.id}</span>
      )}

      {label && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent, var(--color-navy-deep))" }} />
          <div className="absolute bottom-3 left-4 font-warm-display text-sm font-medium text-cream">{label}</div>
        </>
      )}
    </div>
  );
}
