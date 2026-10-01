import Link from "next/link";
import JourneyGraphic from "./JourneyGraphic";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-text">Home</Link>
          <span aria-hidden>›</span>
          <span className="text-text">About</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              About
            </p>

            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              A career built around{" "}
              <span className="text-accent">solving digital problems.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] font-medium leading-relaxed text-text">
              The work today sits across product, business, technology,
              customer experience and execution. It didn&apos;t start there.
            </p>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-text-secondary">
              The journey began with writing and communication, moved into
              branding and digital work, and gradually expanded into research,
              UX/CX, websites, ecommerce, technology evaluation, project
              leadership and product management.
            </p>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-text-secondary">
              That progression created a combination of the ability to
              understand the business and communication side of a problem
              while also working closely with the people responsible for
              designing and building the solution.
            </p>
          </div>

          <JourneyGraphic />
        </div>
      </div>
    </section>
  );
}
