const negations = [
  "Not more features.",
  "Not more technology.",
  "Not another redesign for the sake of a redesign.",
];

export default function GoalSection() {
  return (
    <section className="border-b border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <p className="mb-12 flex items-center justify-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
          <span className="h-px w-8 bg-accent" />
          The Goal
          <span className="h-px w-8 bg-accent" />
        </p>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center gap-5 rounded-2xl border border-border bg-bg p-8 sm:p-10">
            {negations.map((line) => (
              <div key={line} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-text-secondary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p className="font-heading text-lg font-medium text-text-secondary sm:text-xl">
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-accent/30 bg-accent-soft p-8 sm:p-10">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="m5 13 4 4L19 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-6 font-heading text-2xl font-semibold leading-snug tracking-tight text-text sm:text-3xl">
              A solution that makes sense for the business, works for the
              people using it, and{" "}
              <span className="text-accent">
                can realistically be delivered.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
