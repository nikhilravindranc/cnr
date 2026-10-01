"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChannelIcon, { type Channel } from "./ChannelIcon";
import { contact, mailto } from "@/lib/contact";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const socials: { name: Channel; href: string }[] = [
  { name: "whatsapp", href: contact.whatsappUrl },
  { name: "linkedin", href: contact.linkedinUrl },
  { name: "instagram", href: contact.instagramUrl },
  { name: "email", href: mailto() },
];

const capabilities = [
  "Product Strategy",
  "SaaS & Product Management",
  "UX/CX & Journey Design",
  "Digital Transformation",
  "Technology Evaluation",
  "AI-Assisted Execution",
  "Research & Analysis",
  "Growth Support",
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-bg">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[35%] -z-10 h-[36rem] w-[36rem] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 60% 55%, var(--color-accent) 0%, var(--color-accent) 45%, var(--color-accent-soft) 70%, transparent 78%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[4%] -top-[28%] -z-10 h-[30rem] w-[30rem] rounded-full border border-accent/20"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_0.9fr]">
          <div>
            <Image src="/logo.png" alt="CNR" width={130} height={54} className="h-10 w-auto" />
            <p className="mt-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Digital Product
              <br />
              Consultant
            </p>
            <span className="mt-5 block h-px w-6 bg-border" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-secondary">
              Practical products, experiences and solutions for complex
              digital challenges.
            </p>
          </div>

          <div>
            <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Navigation
            </p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`font-heading text-[15px] font-medium transition-colors ${
                      pathname === item.href
                        ? "text-accent"
                        : "text-text hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Capabilities
            </p>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="text-[15px] text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Let&apos;s Talk
            </p>
            <p className="max-w-[15rem] text-[15px] leading-relaxed text-text-secondary">
              Have a project, idea or problem to discuss? Let&apos;s start
              with a conversation.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-ink/90"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-border/70 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} CNR. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-text-secondary transition-colors hover:text-text">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-text-secondary transition-colors hover:text-text">
              Terms
            </Link>

            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name === "email" ? undefined : "_blank"}
                  rel={s.name === "email" ? undefined : "noopener noreferrer"}
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-full bg-border/40 text-text transition-colors hover:bg-accent hover:text-white"
                >
                  <ChannelIcon name={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
