import Link from "next/link";
import DashboardGraphic from "./DashboardGraphic";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 lg:grid-cols-[0.95fr_1.15fr] lg:px-10 lg:pb-24 lg:pt-16">
        <div>
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            <span className="h-px w-8 bg-accent" />
            Digital Product Consultant
          </p>

          <h1 className="max-w-xl font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
            Turning complex digital challenges into{" "}
            <span className="text-accent">practical</span> products,
            experiences and solutions.
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-text-secondary">
            Businesses rarely have problems that fit neatly into a single
            discipline. A product may need a clearer strategy, an existing
            system may need to work better, a customer journey may be
            creating friction, or a business idea may need to be translated
            into something that can actually be built and used.
          </p>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary">
            The work sits at that intersection — understanding the context,
            finding what really needs to change, and moving the right
            solution toward execution.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Explore My Work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="font-heading text-[15px] font-semibold text-text underline decoration-border decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
            >
              Let&apos;s Discuss Your Problem
            </Link>
          </div>
        </div>

        <div className="relative">
          <DashboardGraphic />
        </div>
      </div>
    </section>
  );
}
