export default function WorkHero() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <p className="mb-5 flex items-center justify-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
          <span className="h-px w-8 bg-accent" />
          Selected Work
          <span className="h-px w-8 bg-accent" />
        </p>

        <h1 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-5xl">
          Problems solved. Products shaped.{" "}
          <span className="text-accent">Digital experiences improved.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
          The work spans B2B SaaS, ecommerce, websites, custom applications,
          digital transformation and research-led solution design.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
          The projects are different, but the underlying challenge is often
          similar: understand a complicated situation, find what actually
          needs to change, and turn that understanding into something
          practical.
        </p>
      </div>
    </section>
  );
}
