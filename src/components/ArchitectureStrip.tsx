/**
 * Fills its parent completely (like `object-fit: cover`) regardless of the
 * parent's height, via an SVG with a tall viewBox and `slice` preservation.
 */
export default function ArchitectureStrip() {
  return (
    <svg
      viewBox="0 0 200 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="45%" stopColor="var(--color-accent-soft)" />
          <stop offset="100%" stopColor="var(--color-bg)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="500" fill="url(#sky)" />
      <circle cx="150" cy="60" r="130" fill="var(--color-accent)" opacity="0.16" />
      <polygon points="0,500 0,300 90,180 130,300 110,500" fill="var(--color-surface)" opacity="0.9" />
      <polygon points="60,500 60,340 150,220 200,300 200,500" fill="var(--color-bg)" opacity="0.85" />
      <line x1="90" y1="180" x2="90" y2="500" stroke="var(--color-border)" strokeWidth="1" opacity="0.6" />
      <line x1="150" y1="220" x2="150" y2="500" stroke="var(--color-border)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
