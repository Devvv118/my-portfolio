// Signature ambient element for the warm theme: soft, hand-placed
// metallic-gold and navy blooms, heavily blurred, sitting low in
// opacity behind content. Reads as warmth and depth rather than a
// flat CSS gradient — used sparingly (hero + footer only).
export default function AmbientGlow({ variant = "hero", className = "" }) {
  if (variant === "footer") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        <div
          className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full opacity-40 blur-[110px]"
          style={{ background: "radial-gradient(circle, #c39a5f, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 right-1/5 h-[380px] w-[380px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #8aaed2, transparent 70%)" }}
        />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -top-40 -right-24 h-[520px] w-[520px] rounded-full opacity-[0.35] blur-[120px]"
        style={{ background: "radial-gradient(circle, #dce9f5, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full opacity-[0.22] blur-[110px]"
        style={{ background: "radial-gradient(circle, #8aaed2, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full opacity-[0.18] blur-[90px]"
        style={{ background: "radial-gradient(circle, #c39a5f, transparent 70%)" }}
      />
    </div>
  );
}
