const roles = ["Designers", "Developers", "QA", "Infrastructure", "Marketing", "Business teams", "Clients"];

export default function AboutPeopleTech() {
  return (
    <section className="border-b border-border/70 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-bg p-8 sm:p-10">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            <span className="h-px w-8 bg-accent" />
            Collaboration
          </p>
          <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">
            Working with people who <span className="text-accent">build the solution.</span>
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-text-secondary">
            Digital work is rarely delivered by one person. Designers,
            developers, QA specialists, infrastructure teams, marketers,
            business teams and clients all bring different knowledge to the
            same project.
          </p>

          <div className="my-7 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span key={r} className="rounded-full border border-border bg-surface px-3 py-1.5 font-heading text-xs font-semibold text-text">
                {r}
              </span>
            ))}
          </div>

          <p className="text-[15.5px] leading-relaxed text-text-secondary">
            The role is often to connect those perspectives. That means asking
            questions, challenging assumptions when necessary, understanding
            constraints, communicating decisions clearly and helping the team
            find common ground when different perspectives collide.
          </p>
        </article>

        <article className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-10">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 65%)", opacity: 0.35 }}
            aria-hidden
          />
          <p className="relative mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-ink-secondary">
            <span className="h-px w-8 bg-accent" />
            Technology
          </p>
          <h2 className="relative font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
            A practical view of <span className="text-accent">technology.</span>
          </h2>
          <p className="relative mt-6 text-[15.5px] leading-relaxed text-ink-secondary">
            Technology is useful when it solves a real problem. That includes
            AI. AI has become an important part of the way research,
            exploration, prototyping and development can happen. It can make
            certain types of work dramatically faster.
          </p>

          <blockquote className="relative my-8 border-l-2 border-accent pl-5 font-heading text-2xl font-semibold leading-snug text-white">
            But speed is not the same as value.
          </blockquote>

          <p className="relative text-[15.5px] leading-relaxed text-ink-secondary">
            The right technology still depends on the context, the people
            using it, the business requirement, the available resources and
            the outcome expected from it.
          </p>
        </article>
      </div>
    </section>
  );
}
