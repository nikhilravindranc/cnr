const stops = [
  { year: "2015", label: "Writing & communication", x: 10, y: 86 },
  { year: "2017", label: "Branding & digital", x: 30, y: 68 },
  { year: "2020", label: "Digital projects", x: 50, y: 50 },
  { year: "2024", label: "Product management", x: 68, y: 32 },
];

export default function JourneyGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div
        className="pointer-events-none absolute right-[-6%] top-[-4%] h-[78%] w-[78%] rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, var(--color-accent) 0%, transparent 60%), radial-gradient(circle at 70% 70%, var(--color-amber) 0%, transparent 60%)",
          opacity: 0.18,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute right-[4%] top-[4%] h-[62%] w-[62%] rounded-full border border-accent/15" aria-hidden />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <path
          d="M10,86 Q20,82 30,68 T50,50 T68,32 T88,12"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.45"
          strokeWidth="0.6"
          strokeDasharray="1.4 1.6"
        />
        {stops.map((s) => (
          <g key={s.year}>
            <circle cx={s.x} cy={s.y} r="3.2" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="0.5" />
            <circle cx={s.x} cy={s.y} r="1.3" fill="var(--color-accent)" />
          </g>
        ))}
        <circle cx="88" cy="12" r="5" fill="var(--color-accent)" fillOpacity="0.15" />
        <circle cx="88" cy="12" r="2.4" fill="var(--color-accent)" />
      </svg>

      {stops.map((s) => (
        <div
          key={s.year}
          className="absolute -translate-y-1/2 rounded-xl border border-border bg-surface/90 px-3 py-2 shadow-sm backdrop-blur"
          style={{ left: `${s.x + 5}%`, top: `${s.y}%` }}
        >
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary">{s.year}</p>
          <p className="font-heading text-xs font-semibold text-text">{s.label}</p>
        </div>
      ))}

      <div
        className="absolute -translate-y-1/2 rounded-xl bg-ink px-4 py-3 text-right shadow-xl"
        style={{ right: "15%", top: "12%" }}
      >
        <p className="font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-ink-secondary">Today</p>
        <p className="font-heading text-sm font-semibold text-white">Digital Product Consultant</p>
      </div>
    </div>
  );
}
