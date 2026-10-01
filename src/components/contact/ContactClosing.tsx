import BridgeGraphic from "@/components/BridgeGraphic";
import ChannelIcon from "@/components/ChannelIcon";
import { contact, mailto } from "@/lib/contact";

export default function ContactClosing() {
  return (
    <section className="bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div className="px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
          <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-ink-secondary">
            <span className="h-px w-8 bg-ink-secondary" />
            Let&apos;s Talk
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
            No perfect brief <span className="text-accent">required.</span>
          </h2>
          <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-secondary">
            Start with the problem. The right direction can be figured out
            from there.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
            >
              <ChannelIcon name="whatsapp" className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a
              href={mailto()}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-colors hover:border-white/50"
            >
              <ChannelIcon name="email" className="h-4 w-4" />
              Send an email
            </a>
          </div>
        </div>

        <div className="relative hidden self-stretch lg:block">
          <BridgeGraphic />
        </div>
      </div>
    </section>
  );
}
