import Link from "next/link";

type IconName =
  | "monitor"
  | "phone"
  | "layers"
  | "trending"
  | "target"
  | "users"
  | "gear"
  | "bars"
  | "cube"
  | "file"
  | "bulb";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="4" width="18" height="13" rx="1.5" {...common} />
          <path d="M8 21h8M12 17v4" {...common} />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="7" y="2" width="10" height="20" rx="2" {...common} />
          <path d="M11 18h2" {...common} />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" {...common} />
          <path d="m3 13 9 5 9-5" {...common} />
        </svg>
      );
    case "trending":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 20V13M11 20V9M18 20v-6" {...common} />
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
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="9" cy="8" r="3.2" {...common} />
          <path d="M3.5 20a5.7 5.7 0 0 1 11 0M15.5 8.8a3.2 3.2 0 1 1 3.7 3.16M14 13c3.5 0 6.5 2.3 6.5 6.4" {...common} />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.8-1.4-2-3.4-2.1.8a7.6 7.6 0 0 0-2.6-1.5L14.2 2.5h-4l-.3 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.1-.8-2 3.4L4.6 10.5a7.6 7.6 0 0 0 0 3l-1.8 1.4 2 3.4 2.1-.8a7.6 7.6 0 0 0 2.6 1.5l.3 2.5h4l.3-2.5a7.6 7.6 0 0 0 2.6-1.5l2.1.8 2-3.4-1.8-1.4Z" {...common} />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 20V11M12 20V4M20 20v-7" {...common} />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9v9m0-9L4 7.5m8 4.5 8-4.5" {...common} />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M7 2.5h7l5 5V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" {...common} />
          <path d="M14 2.5V8h5M9 13h6M9 17h6" {...common} />
        </svg>
      );
    case "bulb":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.2 1 2.1h5c0-.9.4-1.7 1-2.1A6 6 0 0 0 12 3Z" {...common} />
        </svg>
      );
  }
}

const requests = [
  { icon: "monitor" as const, title: "New website", note: "Might be a CX issue" },
  { icon: "phone" as const, title: "Build an app", note: "Might need a workflow change" },
  { icon: "layers" as const, title: "More features", note: "Might lack a clear purpose" },
  { icon: "trending" as const, title: "Improve growth", note: "Might need a product or positioning shift" },
];

const considerations = [
  { icon: "target" as const, tone: "blue" as const, title: "Business goals", note: "What needs to be achieved" },
  { icon: "users" as const, tone: "amber" as const, title: "Customer needs", note: "Who it's for and what they need" },
  { icon: "gear" as const, tone: "blue" as const, title: "Existing systems", note: "What's already in place" },
  { icon: "bars" as const, tone: "amber" as const, title: "Market conditions", note: "What's possible and relevant" },
  { icon: "cube" as const, tone: "blue" as const, title: "Available resources", note: "What can realistically be used" },
  { icon: "file" as const, tone: "amber" as const, title: "Implementation", note: "What it takes to make it work" },
];

const steps = [
  { number: "01", label: "Define the real problem" },
  { number: "02", label: "Find a practical direction" },
  { number: "03", label: "Move toward execution" },
];

/** Left/top/width as % of the 100 × 62.5 diagram coordinate space (matches the SVG viewBox 1:1). */
function pos(left: number, top: number, width: number) {
  return { left: `${left}%`, top: `${top}%`, width: `${width}%` };
}

// Percentages of the container's own height (used directly for CSS `top`).
const requestY = [12.5, 37.5, 62.5, 87.5];
const considerationY = [8.3, 25, 41.7, 58.3, 75, 91.7];
// The SVG viewBox is 100 × 62.5 to match the container's 100/62.5 aspect ratio,
// so a y-position expressed as a % of container height must be scaled by 0.625
// to land at the same spot inside the viewBox.
const toSvgY = (percentOfHeight: number) => percentOfHeight * 0.625;

export default function ContextFirst() {
  return (
    <section className="border-t border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              From Request to Real Problem
            </p>

            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              When the problem isn&apos;t{" "}
              <span className="text-accent">as simple</span> as it looks.
            </h2>

            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-text-secondary">
              A request for a new website might be a customer-experience
              problem. An app request might reveal a workflow that needs to
              change. A demand for more features might be hiding a product
              without a clear purpose.
            </p>

            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-text-secondary">
              The starting point isn&apos;t technology, design or AI.
            </p>
            <p className="mt-1 flex items-center gap-3 font-heading text-lg font-semibold text-text">
              <span className="h-px w-6 bg-accent" />
              It is context.
            </p>

            <Link
              href="#about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-ink/90"
            >
              See How I Work
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative mx-auto aspect-[100/62.5] w-full max-w-3xl">
            <svg
              viewBox="0 0 100 62.5"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            >
              <line x1="50" y1="17" x2="50" y2="45.5" stroke="var(--color-border)" strokeWidth="0.3" strokeDasharray="0.8 1.4" />
              <line x1="33" y1="31.25" x2="67" y2="31.25" stroke="var(--color-border)" strokeWidth="0.3" strokeDasharray="0.8 1.4" />

              {requestY.map((y, i) => {
                const sy = toSvgY(y);
                return (
                  <path
                    key={`req-${i}`}
                    d={`M34,${sy} C38,${sy} 38,31.25 41,31.25`}
                    fill="none"
                    stroke="var(--color-border)"
                    strokeWidth="0.35"
                    strokeDasharray="0.9 1.3"
                  />
                );
              })}
              {considerationY.map((y, i) => {
                const sy = toSvgY(y);
                return (
                  <path
                    key={`con-${i}`}
                    d={`M59,31.25 C63,31.25 63,${sy} 66,${sy}`}
                    fill="none"
                    stroke="var(--color-border)"
                    strokeWidth="0.35"
                    strokeDasharray="0.9 1.3"
                  />
                );
              })}

              {requestY.map((y, i) => (
                <circle key={`reqdot-${i}`} cx="34" cy={toSvgY(y)} r="0.55" fill="var(--color-text-secondary)" />
              ))}
              {considerationY.map((y, i) => (
                <circle key={`condot-${i}`} cx="66" cy={toSvgY(y)} r="0.55" fill="var(--color-accent)" />
              ))}
            </svg>

            {requests.map((item, i) => (
              <div
                key={item.title}
                className="absolute flex -translate-y-1/2 items-start gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm"
                style={pos(0, requestY[i], 34)}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-bg text-text">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-heading text-sm font-semibold text-text">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-text-secondary">
                    {item.note}
                  </span>
                </span>
              </div>
            ))}

            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-border/30"
              style={{ left: "50%", top: "50%", width: "26%", aspectRatio: "1 / 1" }}
            />
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-ink text-center shadow-xl"
              style={{ left: "50%", top: "50%", width: "18%", aspectRatio: "1 / 1" }}
            >
              <span className="font-heading text-[10px] font-bold uppercase leading-tight tracking-[0.15em] text-white">
                Context
                <br />
                First
              </span>
            </div>

            {considerations.map((item, i) => (
              <div
                key={item.title}
                className="absolute flex -translate-y-1/2 items-center gap-3"
                style={pos(66, considerationY[i], 34)}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                    item.tone === "blue" ? "bg-accent-soft text-accent" : "bg-amber/15 text-amber"
                  }`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-heading text-sm font-semibold text-text">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-text-secondary">
                    {item.note}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-border/70 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4 lg:max-w-md">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
              <Icon name="bulb" className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-text-secondary">
              This approach turns an unclear requirement into a defined
              problem, a practical direction and a solution that can
              realistically move forward.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 lg:gap-16">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-heading text-sm font-bold text-text">
                  {step.number}
                </span>
                <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
