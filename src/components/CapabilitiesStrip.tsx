import Link from "next/link";

const items = [
  { label: "Product Strategy", icon: "layout" },
  { label: "SaaS", icon: "database" },
  { label: "Digital Transformation", icon: "play" },
  { label: "UX / CX", icon: "target" },
  { label: "AI-Assisted Execution", icon: "nodes" },
  { label: "Growth", icon: "bars" },
] as const;

function Icon({ name }: { name: (typeof items)[number]["icon"] }) {
  const common = "h-5 w-5 text-text-secondary";
  switch (name) {
    case "layout":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="13" width="18" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M6 4.5v15l13-7.5-13-7.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "nodes":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7.7 8.3 10.5 15.3M16.3 8.3 13.5 15.3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4 20V12M11 20V6M18 20v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function CapabilitiesStrip() {
  return (
    <section id="capabilities" className="border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <Icon name={item.icon} />
              <span className="font-heading text-sm font-medium text-text">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/capabilities"
          className="inline-flex w-fit shrink-0 items-center gap-2 font-heading text-sm font-semibold text-accent transition-colors hover:text-accent/80"
        >
          Explore Capabilities
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
