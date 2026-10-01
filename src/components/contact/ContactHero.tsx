import Link from "next/link";
import ChannelIcon, { type Channel } from "@/components/ChannelIcon";
import { contact, mailto } from "@/lib/contact";

const channels: { name: Channel; label: string; value: string; note?: string; href: string; badge: string }[] = [
  {
    name: "whatsapp",
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    note: "For a quick conversation or to introduce a project.",
    href: contact.whatsappUrl,
    badge: "bg-emerald-500/15 text-emerald-700",
  },
  { name: "email", label: "Email", value: contact.email, href: mailto(), badge: "bg-accent-soft text-accent" },
  { name: "linkedin", label: "LinkedIn", value: contact.linkedinDisplay, href: contact.linkedinUrl, badge: "bg-indigo-500/15 text-indigo-700" },
  { name: "instagram", label: "Instagram", value: contact.instagramDisplay, href: contact.instagramUrl, badge: "bg-rose-500/15 text-rose-700" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div
        className="pointer-events-none absolute -right-[10%] top-[-10%] -z-10 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, var(--color-accent) 0%, transparent 60%), radial-gradient(circle at 70% 70%, var(--color-amber) 0%, transparent 60%)",
          opacity: 0.14,
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-text">Home</Link>
          <span aria-hidden>›</span>
          <span className="text-text">Contact</span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Contact
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              Have a digital problem worth{" "}
              <span className="text-accent">figuring out?</span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] font-medium leading-relaxed text-text">
              You don&apos;t need to have the solution figured out before
              starting the conversation.
            </p>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-text-secondary">
              It could be a new product that needs direction, an existing
              product that isn&apos;t working as expected, a website that
              needs to do more, a digital process that has become complicated,
              a technology decision that needs clarity, or simply an idea that
              needs somewhere to begin.
            </p>

            <div className="mt-9 max-w-xl rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <p className="font-heading text-lg font-bold text-text">Start with the context.</p>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Tell me what you&apos;re trying to achieve, what&apos;s not
                working, or what you&apos;re considering. A perfectly written
                brief isn&apos;t necessary.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              Let&apos;s connect
            </p>

            <ul className="mt-5 divide-y divide-border">
              {channels.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target={c.name === "email" ? undefined : "_blank"}
                    rel={c.name === "email" ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${c.badge}`}>
                      <ChannelIcon name={c.name} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">
                        {c.label}
                      </span>
                      <span className="block truncate font-heading text-base font-semibold text-text transition-colors group-hover:text-accent">
                        {c.value}
                      </span>
                      {c.note && <span className="mt-0.5 block text-[13px] text-text-secondary">{c.note}</span>}
                    </span>
                    <span className="text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-bg px-4 py-3 text-sm text-text-secondary">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" aria-hidden>
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              {contact.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
