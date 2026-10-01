import Link from "next/link";
import HeroBackdrop from "./HeroBackdrop";
import VennGraphic from "./VennGraphic";

export default function CapabilitiesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <HeroBackdrop />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-text">
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-text">Capabilities</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.15fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Capabilities
            </p>

            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              The right support depends on{" "}
              <span className="text-accent">the problem.</span>
            </h1>

            <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              Digital work rarely stays inside one discipline. A product
              decision can affect technology. A UX problem can come from an
              underlying business process. A website problem can actually be
              a positioning problem. A growth problem can begin with the
              product itself.
            </p>

            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              The useful work happens in the connections between these
              areas.
            </p>

            <Link
              href="#list"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-ink/90"
            >
              Explore Capabilities
              <span aria-hidden>→</span>
            </Link>

            <div className="mt-14 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary sm:flex">
              <span aria-hidden>↓</span>
              Scroll to Explore
            </div>
          </div>

          <div className="relative">
            <VennGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
