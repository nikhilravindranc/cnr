import { Icon, type Capability } from "./shared";
import CapabilityVisual from "./CapabilityVisual";
import { toneClasses } from "./tones";

export default function CapabilityCard({
  cap,
  index,
  total,
}: {
  cap: Capability;
  index: number;
  total: number;
}) {
  const tone = toneClasses[cap.tone];

  return (
    <article className="flex h-full w-full flex-col rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8">
      <CapabilityVisual icon={cap.icon} Icon={Icon} tone={cap.tone} tag={cap.tag} chips={cap.chips} />

      <div className="flex items-start gap-4">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${tone.badge}`}>
          <Icon name={cap.icon} className="h-5 w-5" />
        </span>
        <div>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <h3 className="mt-0.5 font-heading text-xl font-bold tracking-tight text-text sm:text-2xl">
            {cap.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">{cap.overview}</p>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className={`font-heading text-[11px] font-semibold uppercase tracking-[0.15em] ${tone.label}`}>
            Useful When
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">{cap.usefulWhen}</p>
        </div>
        <div>
          <p className={`font-heading text-[11px] font-semibold uppercase tracking-[0.15em] ${tone.label}`}>
            What This Can Lead To
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">{cap.leadsTo}</p>
        </div>
      </div>
    </article>
  );
}
