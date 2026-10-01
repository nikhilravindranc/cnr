import Link from "next/link";
import InsightsCardGraphic from "./InsightsCardGraphic";

export default function InsightsHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-text">
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-text">Insights</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.15fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Insights
            </p>

            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              Ideas shaped
              <br />
              <span className="text-accent">by real work.</span>
            </h1>

            <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              Not everything worth sharing belongs inside a case study. Some
              lessons come from a product decision that didn&apos;t go as
              planned. Some come from seeing how customers actually use a
              digital experience. Others come from testing new technology,
              working with teams, or discovering that the obvious solution
              wasn&apos;t the right one.
            </p>
          </div>

          <div>
            <InsightsCardGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
