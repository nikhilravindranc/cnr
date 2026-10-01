const palette = ["var(--color-accent)", "var(--color-amber)", "#6366f1", "#14b8a6", "#f43f5e", "#8b5cf6"];
// Each insight gets its own node layout so the covers aren't identical.
const layouts = [
  [[14, 22], [30, 60], [46, 28], [62, 70], [78, 34], [88, 68]],
  [[12, 70], [28, 42], [44, 58], [58, 24], [74, 46], [90, 18]],
  [[16, 30], [34, 30], [52, 30], [26, 64], [50, 64], [78, 50]],
  [[50, 14], [20, 50], [80, 50], [34, 80], [66, 80], [50, 48]],
  [[10, 50], [28, 50], [46, 50], [64, 50], [82, 50], [92, 26]],
  [[18, 20], [82, 20], [50, 46], [18, 74], [82, 74], [50, 14]],
];

/** Cover art: a node diagram, laid out differently per insight. */
export function ArticleCover({ label = "Requirements ≠ Product", variant = 0 }: { label?: string; variant?: number }) {
  const nodes = layouts[variant % layouts.length].map(([x, y], i) => ({ x, y, c: palette[(i + variant) % palette.length] }));
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, var(--color-accent-soft) 0%, transparent 55%), radial-gradient(circle at 80% 75%, color-mix(in srgb, var(--color-amber) 22%, transparent) 0%, transparent 55%)",
        }}
      />
      <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id={`dots-${variant}`} width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.28" fill="var(--color-border)" />
          </pattern>
        </defs>
        <rect width="100" height="75" fill={`url(#dots-${variant})`} />
        {nodes.slice(0, -1).map((n, i) => (
          <line key={i} x1={n.x} y1={n.y * 0.75} x2={nodes[i + 1].x} y2={nodes[i + 1].y * 0.75} stroke="var(--color-text-secondary)" strokeOpacity="0.35" strokeWidth="0.35" strokeDasharray="1 1.2" />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y * 0.75} r="5.2" fill={n.c} fillOpacity="0.14" />
            <circle cx={n.x} cy={n.y * 0.75} r="2.4" fill={n.c} />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-4 left-4 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary backdrop-blur">
        {label}
      </div>
    </div>
  );
}

/** "How do we build these features?" → "What should this product be?" */
export function QuestionShift() {
  return (
    <div className="my-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
      <div className="rounded-2xl border border-border bg-bg p-6">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">Before</p>
        <p className="mt-3 font-heading text-xl font-semibold leading-snug text-text-secondary line-through decoration-border decoration-2">
          “How do we build these features?”
        </p>
      </div>
      <div className="grid place-items-center text-accent" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-7 w-7 rotate-90 md:rotate-0">
          <path d="M4 12h15m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">After</p>
        <p className="mt-3 font-heading text-xl font-semibold leading-snug text-text">
          “What should this product actually be?”
        </p>
      </div>
    </div>
  );
}

/** One overloaded app vs separate apps joined by an ecosystem. */
export function StructureDiagram() {
  const apps = [
    { label: "CRM", c: "bg-accent-soft text-accent border-accent/30" },
    { label: "Billing", c: "bg-amber/15 text-amber border-amber/30" },
    { label: "Inventory", c: "bg-teal-500/10 text-teal-700 border-teal-500/30" },
    { label: "HRMS", c: "bg-violet-500/10 text-violet-700 border-violet-500/30" },
    { label: "Projects", c: "bg-rose-500/10 text-rose-700 border-rose-500/30" },
    { label: "Desk", c: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30" },
  ];
  return (
    <figure className="my-12 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-border bg-bg p-5">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">The easier answer</p>
        <div className="mt-4 rounded-xl border-2 border-dashed border-border bg-surface p-3">
          <p className="mb-3 text-center font-heading text-xs font-bold uppercase tracking-wide text-text-secondary">One app, everything inside</p>
          <div className="grid grid-cols-3 gap-1.5">
            {apps.map((a) => (
              <span key={a.label} className="rounded-md bg-border/50 px-1 py-2 text-center text-[10px] font-semibold text-text-secondary">
                {a.label}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-[13px] text-text-secondary">Increasingly complicated, trying to do everything.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-surface p-5 shadow-sm">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">The more useful answer</p>
        <div className="relative mt-4 rounded-xl bg-bg p-3">
          <div className="grid grid-cols-3 gap-2">
            {apps.map((a) => (
              <span key={a.label} className={`rounded-lg border px-1 py-2 text-center text-[10px] font-bold ${a.c}`}>
                {a.label}
              </span>
            ))}
          </div>
          <div className="mt-2 rounded-lg bg-ink py-2 text-center font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Common ecosystem
          </div>
        </div>
        <p className="mt-4 text-[13px] text-text-secondary">Separate applications with their own purposes, connected.</p>
      </div>
      <figcaption className="text-xs text-text-secondary md:col-span-2">Illustrative structure — not the actual product architecture.</figcaption>
    </figure>
  );
}
