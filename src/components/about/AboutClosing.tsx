import Link from "next/link";
import BridgeGraphic from "@/components/BridgeGraphic";

// Five pills on an even orbit around the centre circle, kept clear of it.
const blend = [
  { label: "Business understanding", cls: "left-0 top-[6%] bg-accent-soft text-accent" },
  { label: "Product thinking", cls: "right-0 top-[6%] bg-amber/20 text-amber" },
  { label: "Digital experience", cls: "left-0 top-1/2 -translate-y-1/2 bg-rose-500/15 text-rose-700" },
  { label: "Technology", cls: "right-0 top-1/2 -translate-y-1/2 bg-violet-500/15 text-violet-700" },
  { label: "Execution", cls: "bottom-[4%] left-1/2 -translate-x-1/2 bg-emerald-500/15 text-emerald-700" },
];

export default function AboutClosing() {
  return (
    <>
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Beyond the Title
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              Outside the <span className="text-accent">job title.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              The title may say Digital Product Consultant. The actual work is
              broader. It sits somewhere between business understanding,
              product thinking, digital experience, technology and execution.
            </p>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-lg sm:h-80">
            <div
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30"
              aria-hidden
            />
            <div
              className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-center shadow-xl sm:h-28 sm:w-28"
            >
              <span className="font-heading text-[10px] font-bold uppercase leading-tight tracking-[0.15em] text-white">
                The
                <br />
                actual
                <br />
                work
              </span>
            </div>
            {blend.map((b) => (
              <span
                key={b.label}
                className={`absolute rounded-full px-4 py-2 font-heading text-xs font-semibold shadow-sm sm:text-sm ${b.cls}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-ink-secondary">
              <span className="h-px w-8 bg-ink-secondary" />
              Let&apos;s Talk
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
              Have a digital problem worth <span className="text-accent">figuring out?</span>
            </h2>
            <div className="mt-9 flex flex-wrap items-center gap-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Start a Conversation <span aria-hidden>→</span>
              </Link>
              <Link
                href="/work"
                className="font-heading text-[15px] font-semibold text-white underline decoration-ink-secondary decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
              >
                See the work
              </Link>
            </div>
          </div>
          <div className="relative hidden self-stretch lg:block">
            <BridgeGraphic />
          </div>
        </div>
      </section>
    </>
  );
}
