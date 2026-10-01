import Link from "next/link";
import { insights as entries } from "@/lib/insights";


export default function InsightsGrid() {
  return (
    <section className="border-b border-border/70 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[0.55fr_1.45fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            <span className="h-px w-8 bg-accent" />
            Insights
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
            The <span className="text-accent">Journal.</span>
          </h2>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-text-secondary">
            {entries.length} notes on decisions, products and the lessons
            behind them.
          </p>
        </div>

        <ol className="border-t border-border">
          {entries.map((e, i) => (
            <li key={e.title} className="border-b border-border">
              <Link
                href={e.slug ? `/insights/${e.slug}` : "#"}
                className="group grid grid-cols-[3.25rem_1fr] gap-x-4 gap-y-3 py-8 sm:grid-cols-[5rem_1fr] sm:gap-x-8"
              >
                <span className="font-heading text-3xl font-bold text-border transition-colors group-hover:text-accent sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-text sm:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                    {e.tags.map((t, j) => (
                      <span key={t}>
                        {t}
                        {j < e.tags.length - 1 && <span className="ml-2 text-border">·</span>}
                      </span>
                    ))}
                  </p>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
                    {e.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-text transition-colors group-hover:text-accent">
                    Read the insight
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
