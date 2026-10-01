const principles = [
  ["Context", "assumptions"],
  ["Customer", "features"],
  ["Practicality", "complexity"],
  ["Collaboration", "ownership"],
  ["Outcomes", "completion"],
];

export default function AboutPrinciples() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            <span className="h-px w-8 bg-accent" />
            Principles
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
            What matters <span className="text-accent">in the work.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-text-secondary">
            Five trade-offs that shape the decisions, whichever discipline
            the project calls for.
          </p>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {principles.map(([first, second], i) => (
            <li key={first} className="group flex items-baseline gap-6 py-6">
              <span className="w-8 shrink-0 font-heading text-sm font-bold text-text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-2xl font-semibold tracking-tight sm:text-4xl">
                <span className="text-text transition-colors group-hover:text-accent">{first}</span>{" "}
                <span className="text-text-secondary/60">before {second}.</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
