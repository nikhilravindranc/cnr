import Link from "next/link";
import BridgeGraphic from "./BridgeGraphic";

export default function CtaDark() {
  return (
    <section id="contact" className="bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div className="px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-ink-secondary">
            <span className="h-px w-8 bg-ink-secondary" />
            Let&apos;s Talk
          </p>

          <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
            Have a problem worth{" "}
            <span className="text-accent">figuring out?</span>
          </h2>

          <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-secondary">
            Whether it&apos;s a product that needs direction, a digital
            experience that needs improvement, an existing system that has
            become difficult to manage, or an idea that needs a practical
            path to execution, the conversation can start with the problem
            itself.
          </p>

          <p className="mt-5 text-[16px] font-medium text-white">
            No perfectly written brief required.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Let&apos;s Talk
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#work"
              className="font-heading text-[15px] font-semibold text-white underline decoration-ink-secondary decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
            >
              Or explore my work
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
