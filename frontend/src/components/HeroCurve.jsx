// A soft, organic curved shape behind the hero content — keeps the
// cream background but gives it a shaped, considered backdrop instead
// of flat white. Two layered curves: a large soft gold wash and a
// thinner navy contour tracing its edge, both low-opacity and set
// off-center so they never fight with the type sitting on top.
export default function HeroCurve({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full text-navy dark:text-gold-soft dark:opacity-35 ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroCurveFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e6d6b8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c19a5b" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <path
        d="M 1200 -80
           C 1000 60, 980 220, 1120 340
           C 1260 460, 1180 620, 980 640
           C 800 660, 760 500, 600 520
           C 460 540, 440 700, 260 720
           L 1200 800 Z"
        fill="url(#heroCurveFill)"
        opacity="0.55"
      />

      <path
        d="M 1200 -40
           C 1010 90, 990 240, 1120 350
           C 1250 460, 1170 610, 970 630
           C 800 648, 758 495, 600 515
           C 470 532, 445 680, 280 705"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.16"
      />
    </svg>
  );
}
