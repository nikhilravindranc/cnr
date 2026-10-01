import Link from "next/link";
import ArchitectureStrip from "./ArchitectureStrip";

type IconName = "bulb" | "bars" | "user" | "gear" | "users" | "spark";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "bulb":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.2 1 2.1h5c0-.9.4-1.7 1-2.1A6 6 0 0 0 12 3Z" {...common} />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 20V11M12 20V4M20 20v-7" {...common} />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="8" r="3.5" {...common} />
          <path d="M4.5 20a7.5 7.5 0 0 1 15 0" {...common} />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.8-1.4-2-3.4-2.1.8a7.6 7.6 0 0 0-2.6-1.5L14.2 2.5h-4l-.3 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.1-.8-2 3.4L4.6 10.5a7.6 7.6 0 0 0 0 3l-1.8 1.4 2 3.4 2.1-.8a7.6 7.6 0 0 0 2.6 1.5l.3 2.5h4l.3-2.5a7.6 7.6 0 0 0 2.6-1.5l2.1.8 2-3.4-1.8-1.4Z" {...common} />
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
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" {...common} />
          <circle cx="12" cy="12" r="2.2" {...common} />
        </svg>
      );
  }
}

const items: { icon: IconName; tone: "blue" | "amber"; title: string; note: string }[] = [
  { icon: "bulb", tone: "blue", title: "Product Strategy & MVP Scope", note: "Turn ideas into focused, feasible plans." },
  { icon: "bars", tone: "amber", title: "Market & Competitor Research", note: "Understand the market, users and opportunities." },
  { icon: "user", tone: "amber", title: "UX/CX Design & Journey Improvement", note: "Simplify experiences and reduce friction." },
  { icon: "gear", tone: "blue", title: "Technology Evaluation & Planning", note: "Choose the right technology and architecture." },
  { icon: "users", tone: "blue", title: "Team Coordination & Implementation", note: "Work with teams to turn plans into working products." },
  { icon: "spark", tone: "amber", title: "AI-Assisted Execution", note: "Use AI to accelerate research, planning and execution." },
];

export default function HowItWorks() {
  return (
    <section id="about" className="border-t border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="mb-8 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
          <span className="h-px w-8 bg-accent" />
          How It Works
        </p>

        <div className="relative">
          {/* decorative circle, always exactly half above the card top edge */}
          <div
            className="pointer-events-none absolute right-[10%] top-0 -z-10 aspect-square -translate-y-1/2 rounded-full bg-accent"
            style={{ width: "clamp(9rem, 16vw, 18rem)" }}
            aria-hidden
          />

          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
                  From understanding to{" "}
                  <span className="text-accent">outcome.</span>
                </h2>

                <p className="mt-7 max-w-md text-[16px] leading-relaxed text-text-secondary">
                  The work can begin at different points, an early product
                  idea, an existing SaaS platform, an outdated website, a
                  complicated customer journey, a digital transformation
                  initiative or a technology decision that needs more clarity.
                </p>

                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-text-secondary">
                  The objective is simple: make better decisions before
                  investing heavily in the wrong direction, then help carry
                  those decisions into execution.
                </p>

                <Link
                  href="#work"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
                >
                  Explore the Process
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="relative grid grid-cols-1 border-t border-border sm:grid-cols-[1fr_1fr_auto] sm:border-t-0 sm:border-l">
                <div className="pointer-events-none absolute left-8 top-6 hidden grid-cols-6 gap-2.5 sm:grid">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i} className="h-[3px] w-[3px] rounded-full bg-border" />
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:col-span-2 sm:grid-cols-2">
                  {items.map((item, i) => (
                    <div
                      key={item.title}
                      className={`px-7 py-8 sm:px-8 lg:px-9 ${
                        i % 2 === 0 ? "sm:border-r sm:border-border" : ""
                      } ${i < items.length - 2 ? "border-b border-border" : ""}`}
                    >
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                          item.tone === "blue" ? "bg-accent-soft text-accent" : "bg-amber/20 text-amber"
                        }`}
                      >
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-heading text-base font-bold leading-snug text-text">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="relative hidden self-stretch border-l border-border sm:block"
                  style={{ width: "clamp(7rem, 11vw, 11rem)" }}
                >
                  <ArchitectureStrip />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
