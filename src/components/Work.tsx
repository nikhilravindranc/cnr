import Link from "next/link";
import ProjectThumb from "./ProjectThumb";

const projects = [
  {
    variant: "evoq" as const,
    tag: "B2B SaaS",
    name: "EVOQ",
    subtitle: "Building a B2B SaaS ecosystem",
    description:
      "A multi-product business software platform shaped through product research, market analysis, positioning, UX/CX, technology evaluation and ongoing product management.",
  },
  {
    variant: "archiron" as const,
    tag: "Ecommerce",
    name: "Archiron Design",
    subtitle: "Simplifying a complex ecommerce journey",
    description:
      "Complex architectural-product discovery and customer journeys, including research around configurator and CPQ possibilities.",
  },
  {
    variant: "trident" as const,
    tag: "Website & Brand",
    name: "Trident MEA",
    subtitle: "Modernising an established digital presence",
    description:
      "A legacy digital presence transformed into a more contemporary, durable and experience-focused direction.",
  },
  {
    variant: "mobilesync" as const,
    tag: "Custom Application",
    name: "365 Mobile Sync",
    subtitle: "Turning a manual process into a product",
    description:
      "A custom application designed to automate Microsoft 365 synchronisation and remove repetitive manual activity.",
  },
  {
    variant: "alaska" as const,
    tag: "Research & Solution Design",
    name: "Alaska Tribal Trust System",
    subtitle: "Making an unfamiliar domain understandable",
    description:
      "Research and solution design across a complex, unfamiliar domain requiring investigation and synthesis.",
  },
  {
    variant: "lumiere" as const,
    tag: "Product Decision",
    name: "Lumiere Aesthetics",
    subtitle: "Choosing the right solution",
    description:
      "A customer-first technology decision where a third-party solution was recommended instead of forcing an immature in-house product.",
  },
];

const sideLabels = ["Product", "Design", "Technology", "People", "Business"];

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-border/70">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[10%] -z-10 h-[32rem] w-[32rem] rounded-full opacity-70 blur-[2px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-amber) 0%, transparent 45%), radial-gradient(circle at 65% 55%, var(--color-accent) 0%, var(--color-accent) 55%, transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[6%] -top-[6%] -z-10 h-[26rem] w-[26rem] rounded-full border border-accent/20"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Experience in Context
            </p>

            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              The work behind
              <br />
              <span className="text-accent">the work.</span>
            </h2>

            <p className="mt-7 text-[16px] leading-relaxed text-text-secondary">
              Over 11+ years, experience has moved across writing, branding,
              digital projects, research, UX/CX, websites, ecommerce, custom
              applications, product management, technology evaluation and
              digital transformation.
            </p>

            <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
              That range matters because complicated digital problems rarely
              arrive as neatly defined job descriptions. The useful
              perspective is often the one that can connect those pieces.
            </p>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="flex flex-col items-end gap-1.5 pt-2 text-right">
              <span className="mb-1.5 h-px w-6 bg-border" />
              {sideLabels.map((label) => (
                <span
                  key={label}
                  className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-8 mt-20 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
          <span className="h-px w-8 bg-accent" />
          Selected Work
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative w-[38%] shrink-0">
                <ProjectThumb variant={project.variant} />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-wide text-accent">
                  {project.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-text">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm leading-snug text-text-secondary">
                  {project.subtitle}
                </p>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-accent"
                >
                  View Case Study
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-heading text-[15px] font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            View All Work
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
