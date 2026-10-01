const chain = ["Strategy", "UX", "Product", "Technology", "Delivery"];

function ConnectLoop() {
  const r = 38;
  const center = 50;
  const positions = chain.map((label, i) => {
    const angle = (i / chain.length) * Math.PI * 2 - Math.PI / 2;
    return {
      label,
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="0.6"
          strokeDasharray="1.2 3"
        />
        {positions.map((p, i) => (
          <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="2.4" fill="var(--color-accent)" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-heading text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-text">
          Always
          <br />
          Connected
        </p>
      </div>

      {positions.map((p) => (
        <div
          key={p.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-surface px-3 py-1.5 font-heading text-[11px] font-semibold text-text shadow-sm"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          {p.label}
        </div>
      ))}
    </div>
  );
}

export default function CapabilitiesConnect() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-surface">
      <div
        className="pointer-events-none absolute -left-[12%] top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, var(--color-accent) 0%, transparent 60%)",
          opacity: 0.12,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 grid w-[40%] grid-cols-8 content-center gap-4 opacity-60"
        aria-hidden
      >
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-border" />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              How These Connect
            </p>

            <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">
              How these capabilities{" "}
              <span className="text-accent">come together.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-text-secondary">
              The value isn&apos;t in any single capability. A product
              strategy decision can influence UX. UX can reveal a product
              problem. A product problem can require a technology decision.
              Technology can change the implementation approach.
              Implementation can reveal new customer or business
              requirements.
            </p>

            <p className="mt-6 max-w-xl font-heading text-lg font-semibold text-text">
              That is why the work is approached as a{" "}
              <span className="text-accent">
                connected digital product problem
              </span>{" "}
              rather than as a collection of isolated services.
            </p>
          </div>

          <ConnectLoop />
        </div>
      </div>
    </section>
  );
}
