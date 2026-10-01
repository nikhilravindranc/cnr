import { toneClasses, type Tone } from "@/components/capabilities/tones";

const milestones: { year: string; title: string; body: string; tone: Tone }[] = [
  {
    year: "2015",
    title: "The starting point",
    tone: "amber",
    body: "The early years were rooted in writing, research and communication. Working across different assignments created an understanding of how businesses communicate, how information needs to be structured and how much context is often hidden behind a seemingly simple requirement.",
  },
  {
    year: "2017",
    title: "Business, branding & digital",
    tone: "rose",
    body: "The next stage moved deeper into business-facing digital work. Branding, SEO, digital marketing, technical writing, brochures, social media, white papers and other communication projects brought regular interaction with business, sales and technical teams.",
  },
  {
    year: "2020",
    title: "Digital projects & transformation",
    tone: "teal",
    body: "The work expanded further into websites, ecommerce, custom applications, digital experiences, research and broader solution planning. Projects began requiring more than one discipline at a time.",
  },
  {
    year: "2024",
    title: "Product management becomes a larger part of the work",
    tone: "indigo",
    body: "Product management became a significant additional responsibility, particularly through the development of EVOQ and its growing B2B SaaS ecosystem. The work involved product research, competitor analysis, product structure, positioning, UX/CX, technology evaluation, prioritisation, implementation coordination and ongoing product decisions.",
  },
];

const focus = ["Product Strategy", "SaaS", "Digital Transformation", "UX/CX", "AI-Assisted Execution", "Growth"];
const approach = [
  "Understand the context",
  "Research",
  "Define the problem",
  "Decide the right direction",
  "Bring the right capabilities together",
  "Execute",
  "Learn and improve",
];

export default function AboutTimeline() {
  return (
    <section className="border-b border-border/70 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            <span className="h-px w-8 bg-accent" />
            The Journey
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
            From communication to{" "}
            <span className="text-accent">digital products.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-text-secondary">
            Each stage added a new layer to the way problems get understood
            and solved — none of them were left behind.
          </p>
        </div>

        <ol className="relative">
          <span className="absolute left-[19px] top-2 bottom-2 w-px bg-border" aria-hidden />

          {milestones.map((m) => {
            const tone = toneClasses[m.tone];
            return (
              <li key={m.year} className="relative pb-12 pl-16">
                <span className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full ring-8 ring-surface ${tone.badge}`}>
                  <span className="h-2.5 w-2.5 rounded-full bg-current" />
                </span>
                <p className={`font-heading text-sm font-bold tracking-[0.15em] ${tone.label}`}>{m.year}</p>
                <h3 className="mt-1 font-heading text-xl font-bold tracking-tight text-text sm:text-2xl">{m.title}</h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">{m.body}</p>
              </li>
            );
          })}

          <li className="relative pl-16">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-accent text-white ring-8 ring-surface">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <div className="rounded-3xl bg-ink p-8 sm:p-10">
              <p className="font-heading text-sm font-bold tracking-[0.15em] text-accent">TODAY</p>
              <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Digital Product Consultant
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
                The different parts of the journey now come together across:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {focus.map((f) => (
                  <span key={f} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-heading text-xs font-semibold text-white">
                    {f}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-secondary">
                The work can begin with a business problem, product idea,
                customer-experience issue, technology decision or an existing
                digital system that needs improvement.
              </p>

              <p className="mt-8 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-secondary">
                The approach remains consistent
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
                {approach.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 font-heading text-xs font-semibold text-ink">{step}</span>
                    {i < approach.length - 1 && <span className="text-accent" aria-hidden>→</span>}
                  </span>
                ))}
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
