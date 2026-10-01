import Link from "next/link";
import BridgeGraphic from "@/components/BridgeGraphic";

export default function InsightsCta() {
  return (
    <section id="contact" className="bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div className="px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-ink-secondary">
            <span className="h-px w-8 bg-ink-secondary" />
            Let&apos;s Talk
          </p>

          <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
            Have a lesson worth{" "}
            <span className="text-accent">comparing notes on?</span>
          </h2>

          <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-secondary">
            If something here overlaps with a problem you&apos;re working
            through, the conversation can start there.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Start a Conversation
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="relative hidden self-stretch lg:block">
          <BridgeGraphic />
        </div>
      </div>
    </section>
  );
}
