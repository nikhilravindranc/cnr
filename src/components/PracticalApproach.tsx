type IconName = "search" | "target" | "layers" | "users";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="11" cy="11" r="7" {...common} />
          <path d="m20 20-4.3-4.3" {...common} />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="8.5" {...common} />
          <circle cx="12" cy="12" r="4.5" {...common} />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" {...common} />
          <path d="m3 13 9 5 9-5" {...common} />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="8.5" cy="8" r="3" {...common} />
          <circle cx="16" cy="9" r="2.4" {...common} />
          <path d="M2.8 20a5.8 5.8 0 0 1 11.4 0M13.8 14.2a5 5 0 0 1 7.4 4.6" {...common} />
        </svg>
      );
  }
}

const steps: { icon: IconName; tone: "neutral" | "blue" | "amber"; title: string; note: string }[] = [
  { icon: "search", tone: "neutral", title: "Understand", note: "Look at the real context, goals, users and constraints." },
  { icon: "target", tone: "blue", title: "Define", note: "Find the right problem and a practical direction." },
  { icon: "layers", tone: "amber", title: "Plan", note: "Shape the solution, technology and execution approach." },
  { icon: "users", tone: "blue", title: "Execute", note: "Work with the right teams to turn plans into working products." },
];

const toneClasses: Record<(typeof steps)[number]["tone"], string> = {
  neutral: "bg-border/50 text-text-secondary",
  blue: "bg-accent-soft text-accent",
  amber: "bg-amber/20 text-amber",
};

export default function PracticalApproach() {
  return (
    <section className="relative overflow-hidden border-t border-border/70">
      <div
        className="pointer-events-none absolute -right-[15%] -top-[25%] -z-10 h-[40rem] w-[40rem] rounded-full bg-border/30"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Approach
            </p>

            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              A practical approach to{" "}
              <span className="text-accent">digital work.</span>
            </h2>

            <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              The objective isn&apos;t to add more technology, features or AI
              for the sake of it, or to rebuild something simply because it
              looks old.
            </p>

            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              It is to understand what the business and its customers
              actually need, determine the most practical way forward, and
              make sure the solution can survive contact with reality —
              budget, technology, people, timelines and actual usage
              included.
            </p>
          </div>

          <div>
            <p className="mb-8 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-border" />
              A Real-World Perspective
            </p>

            <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-5">
              <div
                className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-border sm:block"
                aria-hidden
              />
              {steps.map((step) => (
                <div key={step.title}>
                  <span
                    className={`relative z-10 grid h-14 w-14 place-items-center rounded-full ${toneClasses[step.tone]}`}
                  >
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                    {step.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
