import type { ComponentType } from "react";
import type { IconName } from "./shared";
import { toneClasses, type Tone } from "./tones";

/**
 * A framed, toolbar-topped illustration panel — inspired by the "device
 * frame + nested concept chips" showcase pattern, rebuilt with our own
 * palette and abstract chip compositions instead of product screenshots.
 */
export default function CapabilityVisual({
  icon,
  Icon,
  tone,
  tag,
  chips,
}: {
  icon: IconName;
  Icon: ComponentType<{ name: IconName; className?: string }>;
  tone: Tone;
  tag: string;
  chips: [string, string, string, string];
}) {
  const toneStrong = toneClasses[tone].strong;
  const toneSoft = toneClasses[tone].soft;

  return (
    <div className="mb-6">
      {/* mock toolbar */}
      <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
        <span className="flex items-center gap-2">
          <Icon name={icon} className="h-4 w-4 text-text-secondary" />
          <span className="font-heading text-xs font-semibold text-text">{tag}</span>
        </span>
        <span className="h-4 w-px bg-border" aria-hidden />
        <span className="hidden items-center gap-2.5 text-text-secondary sm:flex" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <path
              d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <circle cx="5" cy="12" r="1.4" fill="currentColor" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" />
            <circle cx="19" cy="12" r="1.4" fill="currentColor" />
          </svg>
        </span>
      </div>

      {/* framed illustration */}
      <div className="rounded-3xl border border-border bg-bg p-3 sm:p-4">
        <div className="rounded-2xl bg-surface p-5 sm:p-7">
          <div
            className={`rounded-2xl border-2 px-5 py-4 text-center font-heading text-base font-extrabold italic uppercase tracking-tight sm:text-xl ${toneStrong}`}
          >
            {chips[0]}
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {chips.slice(1).map((chip) => (
              <div
                key={chip}
                className={`rounded-xl border px-3 py-3 text-center font-heading text-[11px] font-bold uppercase tracking-wide sm:text-xs ${toneSoft}`}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
