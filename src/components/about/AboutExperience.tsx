import type { ReactNode } from "react";
import { toneClasses, type Tone } from "@/components/capabilities/tones";

type IconName = "layers" | "cart" | "globe" | "code" | "transform" | "search" | "growth";

function Icon({ name }: { name: IconName }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, ReactNode> = {
    layers: (<><path d="m12 3 9 5-9 5-9-5 9-5Z" {...c} /><path d="m3 13 9 5 9-5" {...c} /></>),
    cart: (<><path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6" {...c} /><circle cx="9" cy="19" r="1.3" {...c} /><circle cx="17" cy="19" r="1.3" {...c} /></>),
    globe: (<><circle cx="12" cy="12" r="8.5" {...c} /><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z" {...c} /></>),
    code: (<><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" {...c} /></>),
    transform: (<path d="M4 7h13l-3-3M20 17H7l3 3" {...c} />),
    search: (<><circle cx="11" cy="11" r="7" {...c} /><path d="m20 20-4.3-4.3" {...c} /></>),
    growth: (<path d="M4 20V13M11 20V9M18 20v-6" {...c} />),
  };
  return <svg viewBox="0 0 24 24" className="h-5 w-5">{paths[name]}</svg>;
}

const areas: { icon: IconName; tone: Tone; title: string; body: string }[] = [
  { icon: "layers", tone: "indigo", title: "B2B SaaS", body: "Business software and multi-product ecosystems." },
  { icon: "cart", tone: "amber", title: "Ecommerce", body: "Complex catalogues, product discovery, customer journeys and digital commerce experiences." },
  { icon: "globe", tone: "blue", title: "Websites & Digital Experiences", body: "Corporate websites, service businesses, brand-led digital experiences and modernisation projects." },
  { icon: "code", tone: "violet", title: "Custom Applications", body: "Workflow automation, specialised systems and application development." },
  { icon: "transform", tone: "teal", title: "Digital Transformation", body: "Moving established businesses, processes and experiences toward more relevant digital models." },
  { icon: "search", tone: "rose", title: "Research & Solution Design", body: "Entering unfamiliar domains, understanding complex systems and turning research into practical solution concepts." },
  { icon: "growth", tone: "emerald", title: "Growth & Digital Strategy", body: "Connecting positioning, digital experience, product and marketing toward business objectives." },
];

const markets = ["India", "UAE / GCC", "USA", "Canada", "International"];

export default function AboutExperience() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Experience
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              Experience across different{" "}
              <span className="text-accent">kinds of problems.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => {
            const tone = toneClasses[a.tone];
            return (
              <div key={a.title} className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg">
                <span className={`grid h-11 w-11 place-items-center rounded-full ${tone.badge}`}>
                  <Icon name={a.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-text">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{a.body}</p>
              </div>
            );
          })}

          <div className="flex flex-col justify-between rounded-2xl bg-ink p-6">
            <div>
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-secondary">Markets</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white">
                Projects and collaborations have included work connected to:
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {markets.map((m) => (
                <span key={m} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-heading text-xs font-semibold text-white">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
