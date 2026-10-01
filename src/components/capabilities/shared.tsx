import type { Tone } from "./tones";

export type IconName =
  | "compass"
  | "layers"
  | "transform"
  | "chat"
  | "gear"
  | "spark"
  | "growth"
  | "flag";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "compass":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="8.5" {...common} />
          <path d="m14.5 9.5-2 5-3-1 2-5 3 1Z" {...common} />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" {...common} />
          <path d="m3 13 9 5 9-5" {...common} />
        </svg>
      );
    case "transform":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 7h13l-3-3M20 17H7l3 3" {...common} />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 5h16v11H8l-4 4V5Z" {...common} />
          <path d="M8 10h8M8 13h5" {...common} />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.8-1.4-2-3.4-2.1.8a7.6 7.6 0 0 0-2.6-1.5L14.2 2.5h-4l-.3 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.1-.8-2 3.4L4.6 10.5a7.6 7.6 0 0 0 0 3l-1.8 1.4 2 3.4 2.1-.8a7.6 7.6 0 0 0 2.6 1.5l.3 2.5h4l.3-2.5a7.6 7.6 0 0 0 2.6-1.5l2.1.8 2-3.4-1.8-1.4Z" {...common} />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" {...common} />
          <circle cx="12" cy="12" r="2.2" {...common} />
        </svg>
      );
    case "growth":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 20V13M11 20V9M18 20v-6" {...common} />
        </svg>
      );
    case "flag":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M6 21V4M6 4h11l-2.5 3.5L17 11H6" {...common} />
        </svg>
      );
  }
}

export type Capability = {
  icon: IconName;
  tone: Tone;
  title: string;
  tag: string;
  chips: [string, string, string, string];
  overview: string;
  usefulWhen: string;
  leadsTo: string;
};
