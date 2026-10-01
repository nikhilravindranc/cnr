function DotGrid({ cols = 6, rows = 4 }: { cols?: number; rows?: number }) {
  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} className="h-[3px] w-[3px] rounded-full bg-border" />
      ))}
    </div>
  );
}

function ArticleCard({ lines }: { lines: number[] }) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-border bg-surface p-4 shadow-xl">
      <div
        className="mb-4 h-[46%] shrink-0 rounded-xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-accent) 0%, transparent 55%), radial-gradient(circle at 75% 70%, var(--color-amber) 0%, transparent 55%), linear-gradient(135deg, var(--color-accent-soft), var(--color-bg))",
        }}
      />
      <div className="flex flex-1 flex-col justify-center gap-2.5">
        {lines.map((w, i) => (
          <span
            key={i}
            className="h-2 rounded-full bg-border"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="h-6 w-6 shrink-0 rounded-full bg-border" />
        <span className="h-1.5 w-16 rounded-full bg-border" />
      </div>
    </div>
  );
}

export default function InsightsCardGraphic() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-xl">
      {/* backdrop blend circle */}
      <div
        className="pointer-events-none absolute -right-[8%] top-[4%] h-[70%] w-[70%] rounded-full opacity-70 blur-[2px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, var(--color-accent) 0%, transparent 60%), radial-gradient(circle at 70% 65%, var(--color-amber) 0%, transparent 60%)",
          opacity: 0.16,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[4%] top-[8%] h-[58%] w-[58%] rounded-full border border-accent/15"
        aria-hidden
      />

      {/* decorative dot grid */}
      <div className="pointer-events-none absolute left-[2%] top-0" aria-hidden>
        <DotGrid cols={6} rows={5} />
      </div>
      <div className="pointer-events-none absolute bottom-[4%] right-[2%]" aria-hidden>
        <DotGrid cols={6} rows={5} />
      </div>

      {/* thin rule lines + marker dots */}
      <div className="pointer-events-none absolute left-[8%] top-[6%] h-[82%] w-px bg-border" aria-hidden />
      <div className="pointer-events-none absolute right-[16%] top-0 h-[64%] w-px bg-border" aria-hidden />
      <span className="pointer-events-none absolute right-[15%] top-[16%] h-2 w-2 rounded-full bg-accent" aria-hidden />
      <span className="pointer-events-none absolute left-[7.5%] top-[62%] h-2 w-2 rounded-full bg-ink" aria-hidden />

      {/* back card */}
      <div className="absolute right-0 top-[32%] h-[60%] w-[56%] opacity-90">
        <ArticleCard lines={[85, 70, 55]} />
      </div>

      {/* front card */}
      <div className="absolute left-[16%] top-[22%] h-[68%] w-[58%]">
        <ArticleCard lines={[90, 75, 60, 40]} />
      </div>
    </div>
  );
}
