type IconName = "spark" | "refresh" | "transform" | "compass" | "chat" | "network";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" {...common} />
          <circle cx="12" cy="12" r="2.2" {...common} />
        </svg>
      );
    case "refresh":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" {...common} />
          <path d="M18 3v4h-4M6 21v-4h4" {...common} />
        </svg>
      );
    case "transform":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 7h13l-3-3M20 17H7l3 3" {...common} />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="8.5" {...common} />
          <path d="m14.5 9.5-2 5-3-1 2-5 3 1Z" {...common} />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 5h16v11H8l-4 4V5Z" {...common} />
          <path d="M8 10h8M8 13h5" {...common} />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="6" cy="7" r="2.2" {...common} />
          <circle cx="18" cy="7" r="2.2" {...common} />
          <circle cx="6" cy="17" r="2.2" {...common} />
          <circle cx="18" cy="17" r="2.2" {...common} />
          <circle cx="12" cy="12" r="2.2" {...common} />
          <path d="M7.8 8.3 10.4 10.7M16.2 8.3 13.6 10.7M7.8 15.7 10.4 13.3M16.2 15.7 13.6 13.3" {...common} />
        </svg>
      );
  }
}

const items: { icon: IconName; tone: "blue" | "amber"; title: string; note: string }[] = [
  {
    icon: "spark",
    tone: "blue",
    title: "A new product",
    note: "An idea that needs research, definition, prioritisation, product direction or a practical path toward MVP.",
  },
  {
    icon: "refresh",
    tone: "amber",
    title: "An existing product",
    note: "A product that has become complicated, isn't being used as expected, or needs a clearer direction.",
  },
  {
    icon: "transform",
    tone: "amber",
    title: "A digital transformation",
    note: "An outdated website, workflow, system or customer journey that needs to become more useful without unnecessary rebuilding.",
  },
  {
    icon: "compass",
    tone: "blue",
    title: "A technology decision",
    note: "A situation where build, buy, replace, integrate or adapt are all possible — but the right direction isn't yet clear.",
  },
  {
    icon: "chat",
    tone: "amber",
    title: "A UX / CX problem",
    note: "Customers are struggling to find, understand, navigate, purchase or complete something, and the underlying cause needs to be understood.",
  },
  {
    icon: "network",
    tone: "blue",
    title: "A cross-functional project",
    note: "Business, product, design, development, QA, marketing and technology all need to move toward the same outcome, with someone helping connect the pieces.",
  },
];

export default function StartHere() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            <span className="h-px w-8 bg-accent" />
            Where To Start
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:whitespace-nowrap lg:text-[2.75rem]">
            What kind of work can start here?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-full ${
                  item.tone === "blue" ? "bg-accent-soft text-accent" : "bg-amber/20 text-amber"
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-text">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-text-secondary">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
