type NodeName = "people" | "product" | "experience" | "technology" | "growth";

function NodeIcon({ name, className }: { name: NodeName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "people":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="8.5" cy="8" r="3" {...common} />
          <circle cx="16" cy="9" r="2.4" {...common} />
          <path d="M2.8 20a5.8 5.8 0 0 1 11.4 0M13.8 14.2a5 5 0 0 1 7.4 4.6" {...common} />
        </svg>
      );
    case "product":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9v9m0-9L4 7.5m8 4.5 8-4.5" {...common} />
        </svg>
      );
    case "experience":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="4" width="18" height="13" rx="1.5" {...common} />
          <path d="M8 21h8M12 17v4" {...common} />
        </svg>
      );
    case "technology":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" {...common} />
          <path d="m3 13 9 5 9-5" {...common} />
        </svg>
      );
    case "growth":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 20V13M11 20V9M18 20v-6" {...common} />
        </svg>
      );
  }
}

const nodes: {
  name: NodeName;
  label: string;
  tone: "blue" | "amber";
  cx: number;
  cy: number;
  labelY: number;
}[] = [
  { name: "people", label: "People", tone: "blue", cx: 50, cy: 22, labelY: 8 },
  { name: "product", label: "Product", tone: "blue", cx: 22, cy: 42, labelY: 46 },
  { name: "experience", label: "Experience", tone: "amber", cx: 78, cy: 42, labelY: 46 },
  { name: "technology", label: "Technology", tone: "blue", cx: 32, cy: 68, labelY: 78 },
  { name: "growth", label: "Growth", tone: "amber", cx: 68, cy: 68, labelY: 78 },
];

export default function VennGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {nodes.map((n) => (
          <circle
            key={n.name}
            cx={n.cx}
            cy={n.cy}
            r={26}
            fill={n.tone === "blue" ? "var(--color-accent)" : "var(--color-amber)"}
            fillOpacity={0.16}
            stroke="#ffffff"
            strokeWidth={0.6}
          />
        ))}
        <circle cx={50} cy={45} r={17} fill="var(--color-bg)" fillOpacity={0.75} />
      </svg>

      <div className="absolute left-1/2 top-[45%] w-28 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-heading text-[11px] font-bold uppercase leading-tight tracking-[0.1em] text-text">
          Connected
          <br />
          Digital Work
        </p>
      </div>

      {nodes.map((n) => (
        <div
          key={n.name}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          style={{ left: `${n.cx}%`, top: `${n.labelY}%` }}
        >
          <span
            className={`grid h-9 w-9 place-items-center ${
              n.tone === "blue" ? "text-accent" : "text-amber"
            }`}
          >
            <NodeIcon name={n.name} className="h-6 w-6" />
          </span>
          <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-text">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
