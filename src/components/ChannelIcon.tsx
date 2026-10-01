export type Channel = "whatsapp" | "email" | "linkedin" | "instagram";

export default function ChannelIcon({ name, className }: { name: Channel; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8L4 20Z" {...common} />
          <path d="M9 9.5c.3 1.8 1.7 3.4 3.6 4.3l1.2-1.1 1.9.8c-.2 1-1 1.6-2 1.5-3-.3-5.7-3-6-6-.1-1 .5-1.8 1.5-2l.8 1.9L9 9.5Z" {...common} />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" {...common} />
          <path d="m4 7 8 6 8-6" {...common} />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" {...common} />
          <path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V10M11.5 12.8c0-1.5 1-2.8 2.5-2.8s2.5 1 2.5 2.8v3.7" {...common} />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" {...common} />
          <circle cx="12" cy="12" r="4" {...common} />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
