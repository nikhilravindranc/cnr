/** Absolute box helper — percentages measured off the 1536×1024 reference composition. */
function box(left: number, top: number, width: number, height?: number) {
  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${width}%`,
    ...(height !== undefined ? { height: `${height}%` } : {}),
  };
}

function DotGrid({ box: b, cols = 6 }: { box: ReturnType<typeof box>; cols?: number }) {
  return (
    <div
      className="absolute grid gap-3"
      style={{ ...b, gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * 4 }).map((_, i) => (
        <span key={i} className="h-[3px] w-[3px] rounded-full bg-border" />
      ))}
    </div>
  );
}

const sidebarNav = [
  {
    label: "Overview",
    active: true,
    icon: (
      <path d="M3 10.5 12 4l9 6.5M5.5 9.5V19a1 1 0 0 0 1 1H10v-5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h3.5a1 1 0 0 0 1-1V9.5" />
    ),
  },
  {
    label: "Products",
    active: false,
    icon: (
      <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Zm0 0 8 4.5m0 0 8-4.5M12 13v7" />
    ),
  },
  {
    label: "Users",
    active: false,
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    ),
  },
  {
    label: "Analytics",
    active: false,
    icon: <path d="M4 20V13M11 20V6M18 20v-7" />,
  },
  {
    label: "Automations",
    active: false,
    icon: (
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a8 8 0 0 0-.15-1.5l2-1.5-2-3.4-2.3.9a8 8 0 0 0-2.6-1.5L14.5 2h-5l-.45 2.9a8 8 0 0 0-2.6 1.5l-2.3-.9-2 3.4 2 1.5a8 8 0 0 0 0 3l-2 1.5 2 3.4 2.3-.9a8 8 0 0 0 2.6 1.5L9.5 22h5l.45-2.9a8 8 0 0 0 2.6-1.5l2.3.9 2-3.4-2-1.5c.1-.5.15-1 .15-1.5Z" />
    ),
  },
];

const journeySteps = ["Discover", "Define", "Design", "Build", "Launch"];

const ideasSteps = [
  "Research & Insights",
  "Strategy & Planning",
  "Design & Validation",
  "Development Support",
];

export default function DashboardGraphic() {
  return (
    <div className="relative mx-auto hidden aspect-[3/2] w-full max-w-3xl md:block">
      {/* backdrop circle */}
      <div className="absolute rounded-full bg-border/40" style={box(13.3, 4.9, 39.7, 59.1)} />

      <DotGrid box={box(47.9, 3.9, 8.5, 11.7)} />
      <DotGrid box={box(84, 45.9, 13, 18.1)} />
      <DotGrid box={box(40, 82.5, 9.8, 8.8)} />

      {/* decorative vertical rules */}
      <div className="absolute w-px bg-border" style={box(20.7, 2.4, 0, 59.6)} />
      <div className="absolute w-px bg-border" style={box(71.1, 2.4, 0, 95.3)} />

      {/* amber circle */}
      <div className="absolute rounded-full bg-amber" style={box(71.6, 51.8, 28, 42)} />

      {/* dark triangle accent, behind blue triangle's right edge */}
      <div
        className="absolute bg-ink"
        style={{
          ...box(31.9, 79.9, 11.1, 14.6),
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
        }}
      />

      {/* blue triangle */}
      <div
        className="absolute bg-accent"
        style={{
          ...box(16.5, 56.8, 25.2, 37.7),
          clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
        }}
      />

      {/* dark navy panel */}
      <div
        className="absolute overflow-hidden rounded-2xl bg-ink shadow-xl"
        style={box(25.1, 57.8, 17.9, 22.3)}
      >
        <div className="flex h-full flex-col justify-center gap-[9%] px-4">
          {Array.from({ length: 6 }).map((_, i) => {
            const last = i === 5;
            return (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    last ? "bg-accent" : "bg-white/50"
                  }`}
                />
                <span
                  className={`h-1 rounded-full ${last ? "bg-accent/60" : "bg-white/20"}`}
                  style={{ width: `${[60, 45, 70, 38, 55, 65][i]}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* mini flowchart card */}
      <div
        className="absolute rounded-xl border border-border bg-surface shadow-lg"
        style={box(17.6, 24.9, 13.3, 30.8)}
      >
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
          <div className="h-7 w-14 rounded-md border border-border" />
          <div className="h-4 w-px bg-border" />
          <div className="h-9 w-16 rounded-md bg-accent" />
          <div className="h-4 w-px bg-border" />
          <div className="flex w-full items-center justify-between px-2">
            <div className="h-7 w-11 rounded-md border border-border" />
            <div className="h-7 w-11 rounded-md border border-border" />
          </div>
        </div>
      </div>

      {/* dark tab peeking from dashboard top-right */}
      <div className="absolute rounded-lg bg-ink shadow-lg" style={box(74.2, 19, 4.2, 12.2)} />

      {/* main dashboard card */}
      <div
        className="absolute overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl"
        style={box(43, 17.9, 34.8, 62.1)}
      >
        <div className="flex h-[6.5%] items-center border-b border-border bg-border/30 px-4">
          <span className="text-[10px] text-text-secondary">←</span>
        </div>

        <div className="p-4">
          <p className="mb-3 font-heading text-[13px] font-bold text-text">
            Overview
          </p>

          <div className="mb-3 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-[9px] text-text-secondary">Total Users</p>
              <p className="mt-1 font-heading text-[15px] font-bold text-text">
                12.4K
              </p>
              <p className="mt-1 text-[9px] font-semibold text-emerald-600">
                ↑ 12%
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-[9px] text-text-secondary">Active Projects</p>
              <p className="mt-1 font-heading text-[15px] font-bold text-text">
                8
              </p>
              <p className="mt-1 text-[9px] font-semibold text-emerald-600">
                ↑ 2
              </p>
            </div>
          </div>

          <div className="mb-4 rounded-lg border border-border bg-surface p-3">
            <svg viewBox="0 0 220 56" className="h-14 w-full" preserveAspectRatio="none">
              <polyline
                points="0,30 20,38 40,32 60,40 80,24 100,34 120,20 140,28 160,10 180,22 200,6 220,16"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,44 20,40 40,44 60,30 80,36 100,18 120,26 140,12 160,22 180,8 200,16 220,4"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mb-4 font-heading text-[11px] font-bold text-text">
            Product Journey
          </p>
          <div className="relative flex items-start justify-between px-1">
            <div className="absolute left-2 right-2 top-[4px] h-px bg-border" />
            {journeySteps.map((step, i) => (
              <div key={step} className="relative flex flex-col items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    i === 0 ? "bg-accent" : "border border-border bg-surface"
                  }`}
                />
                <span className="text-[8px] text-text-secondary">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sidebar nav card */}
      <div
        className="absolute rounded-2xl border border-border bg-surface shadow-2xl"
        style={box(29.5, 17.1, 15)}
      >
        <div className="flex items-center justify-between px-3 pt-3">
          <div className="flex items-center gap-1.5">
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ink text-[7px] font-bold text-white">
              S
            </span>
            <span className="h-1.5 w-9 rounded-full bg-border" />
          </div>
          <span className="text-[9px] text-text-secondary">↔</span>
        </div>

        <div className="flex items-center justify-between px-3 pt-2.5">
          <span className="grid h-4 w-4 shrink-0 place-items-center text-text-secondary">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
              <path d="M4 12h13M4 12l5-5M4 12l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-[9px] text-text-secondary">↔</span>
        </div>

        <ul className="mt-2.5 flex flex-col gap-1 px-2 text-[9px]">
          {sidebarNav.map((item) => (
            <li
              key={item.label}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-1.5 py-1.5 ${
                item.active ? "bg-accent-soft text-accent" : "text-text-secondary"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5 shrink-0">
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </g>
              </svg>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ideas to Execution card */}
      <div
        className="absolute rounded-2xl border border-border bg-surface p-4 shadow-2xl"
        style={box(64, 31.3, 26)}
      >
        <p className="mb-3 whitespace-nowrap font-heading text-[12px] font-bold text-text">
          Ideas to Execution
        </p>
        <ul className="space-y-2.5 text-[9.5px] whitespace-nowrap text-text-secondary">
          {ideasSteps.map((step) => (
            <li key={step} className="flex items-center gap-2">
              <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full border border-border">
                <span className="h-1 w-1 rounded-full bg-border" />
              </span>
              {step}
            </li>
          ))}
          <li className="flex items-center gap-2 font-semibold text-text">
            <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-accent">
              <span className="h-1 w-1 rounded-full bg-white" />
            </span>
            Launch &amp; Growth
          </li>
        </ul>
      </div>

      {/* Impact card */}
      <div
        className="absolute rounded-2xl border border-border bg-surface p-4 shadow-2xl"
        style={box(50.8, 75.5, 19.5, 17.8)}
      >
        <p className="mb-3 font-heading text-[11px] font-bold text-text">
          Impact
        </p>
        <div className="flex h-12 items-end gap-2.5">
          {[40, 55, 70, 48, 100].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`w-3 rounded-sm ${i === 4 ? "bg-accent" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
