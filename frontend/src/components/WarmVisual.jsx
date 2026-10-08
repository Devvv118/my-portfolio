import { motion } from "framer-motion";

// Warm-theme counterpart to the dark ProjectVisual: the same idea
// (generative, technical, not a stock photo) recolored for the
// cream/navy/gold palette, with a soft tinted wash instead of a
// hard dark panel.

const tones = {
  navy: { bg: "#1e2b47", line: "#e6d6b8", wash: "rgba(30,43,71,0.85)" },
  gold: { bg: "#8a6b34", line: "#faf5ec", wash: "rgba(138,107,52,0.85)" }, // muted bronze
  ink: { bg: "#2c3e63", line: "#e6d6b8", wash: "rgba(44,62,99,0.85)" }, // navy-metal
};

function Bars({ line }) {
  const bars = Array.from({ length: 22 });
  return (
    <svg viewBox="0 0 560 320" className="h-full w-full">
      {bars.map((_, i) => {
        const h = 50 + Math.abs(Math.sin(i * 0.8)) * 190 * (0.4 + ((i * 31) % 10) / 10);
        return (
          <motion.rect
            key={i}
            x={i * 25 + 6}
            width={14}
            rx={2}
            fill={line}
            initial={{ height: 0, y: 320 }}
            whileInView={{ height: h, y: 320 - h }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.025, ease: [0.19, 1, 0.22, 1] }}
            opacity={0.9}
          />
        );
      })}
    </svg>
  );
}

function Wave({ line }) {
  const path =
    "M0,190 C50,140 100,230 150,180 C200,130 250,235 300,190 C350,145 400,225 450,175 C500,125 530,180 560,160";
  return (
    <svg viewBox="0 0 560 320" className="h-full w-full">
      <motion.path
        d={path}
        fill="none"
        stroke={line}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
      />
      <motion.circle
        cx={560}
        cy={160}
        r={5}
        fill={line}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 1.3, duration: 0.4 }}
      />
    </svg>
  );
}

function Nodes({ line }) {
  const nodes = [[90, 70], [280, 50], [460, 100], [150, 190], [360, 210], [70, 260], [430, 250]];
  const edges = [[0, 1], [1, 2], [1, 3], [3, 4], [4, 6], [3, 5], [0, 3]];
  return (
    <svg viewBox="0 0 560 320" className="h-full w-full">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={line} strokeWidth="1.2" opacity={0.5}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: i * 0.07 }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r={i === 3 ? 8 : 5}
          fill={line}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
        />
      ))}
    </svg>
  );
}

function Radii({ line }) {
  const rings = [40, 78, 116, 154];
  return (
    <svg viewBox="0 0 560 320" className="h-full w-full">
      <g transform="translate(280,160)">
        {rings.map((r, i) => (
          <motion.circle
            key={i}
            r={r}
            fill="none"
            stroke={line}
            strokeWidth="1.4"
            opacity={0.55 - i * 0.09}
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.55 - i * 0.09 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
          />
        ))}
        <motion.circle
          r={5}
          fill={line}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      </g>
    </svg>
  );
}

const variants = { bars: Bars, wave: Wave, network: Nodes, radii: Radii };

export default function WarmVisual({ variant = "bars", tone = "navy", className = "", label }) {
  const Vis = variants[variant] || Bars;
  const t = tones[tone] || tones.navy;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: t.bg }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Vis line={t.line} />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `linear-gradient(180deg, transparent 40%, ${t.wash} 100%)` }}
      />
      {label && (
        <div className="absolute bottom-4 left-4 font-warm-display text-sm font-medium text-cream">
          {label}
        </div>
      )}
    </div>
  );
}
