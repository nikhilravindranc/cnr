const flow = [
  "Understand the context",
  "identify the real problem",
  "research the possibilities",
  "define the right solution",
  "bring the right capabilities together",
  "execute",
  "learn from what happens",
];

export default function ApproachFlow() {
  return (
    <section className="border-b border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
        <p className="mb-5 flex items-center justify-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
          <span className="h-px w-8 bg-accent" />
          A Consistent Approach
        </p>

        <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">
          Different projects.{" "}
          <span className="text-accent">A consistent approach.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-text-secondary">
          A SaaS ecosystem, an ecommerce platform, a corporate website, a
          custom application and a complex research project can look
          completely unrelated. The underlying approach is often the same:
        </p>

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-2 gap-y-4">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-bg px-4 py-2 font-heading text-sm font-semibold text-text">
                {step}
              </span>
              {i < flow.length - 1 && (
                <span className="text-accent" aria-hidden>
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl font-heading text-lg font-semibold text-text">
          The discipline changes according to the project.{" "}
          <span className="text-accent">The thinking stays connected.</span>
        </p>
      </div>
    </section>
  );
}
