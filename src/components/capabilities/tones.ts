export type Tone =
  | "blue"
  | "amber"
  | "teal"
  | "violet"
  | "rose"
  | "emerald"
  | "indigo"
  | "orange";

/**
 * Each capability gets its own colour instead of two tones alternating
 * across eight cards. Blue and amber reuse the site's own brand tokens;
 * the rest are soft, muted picks from the same "pastel badge" family so a
 * wider palette doesn't feel out of place against the rest of the site.
 */
export const toneClasses: Record<
  Tone,
  { badge: string; strong: string; soft: string; label: string }
> = {
  blue: {
    badge: "bg-accent-soft text-accent",
    strong: "border-accent/50 text-accent",
    soft: "border-accent/25 bg-accent-soft/60 text-accent",
    label: "text-accent",
  },
  amber: {
    badge: "bg-amber/20 text-amber",
    strong: "border-amber/50 text-amber",
    soft: "border-amber/25 bg-amber/10 text-amber",
    label: "text-amber",
  },
  teal: {
    badge: "bg-teal-500/15 text-teal-700",
    strong: "border-teal-500/50 text-teal-700",
    soft: "border-teal-500/25 bg-teal-500/10 text-teal-700",
    label: "text-teal-700",
  },
  violet: {
    badge: "bg-violet-500/15 text-violet-700",
    strong: "border-violet-500/50 text-violet-700",
    soft: "border-violet-500/25 bg-violet-500/10 text-violet-700",
    label: "text-violet-700",
  },
  rose: {
    badge: "bg-rose-500/15 text-rose-700",
    strong: "border-rose-500/50 text-rose-700",
    soft: "border-rose-500/25 bg-rose-500/10 text-rose-700",
    label: "text-rose-700",
  },
  emerald: {
    badge: "bg-emerald-500/15 text-emerald-700",
    strong: "border-emerald-500/50 text-emerald-700",
    soft: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700",
    label: "text-emerald-700",
  },
  indigo: {
    badge: "bg-indigo-500/15 text-indigo-700",
    strong: "border-indigo-500/50 text-indigo-700",
    soft: "border-indigo-500/25 bg-indigo-500/10 text-indigo-700",
    label: "text-indigo-700",
  },
  orange: {
    badge: "bg-orange-500/15 text-orange-700",
    strong: "border-orange-500/50 text-orange-700",
    soft: "border-orange-500/25 bg-orange-500/10 text-orange-700",
    label: "text-orange-700",
  },
};
