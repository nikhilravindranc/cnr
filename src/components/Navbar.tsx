"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="CNR" width={140} height={58} priority className="h-11 w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link
            href="/"
            className={`relative font-heading text-[15px] font-medium transition-colors ${
              pathname === "/"
                ? "text-text after:absolute after:-bottom-[21px] after:left-0 after:h-[2px] after:w-full after:bg-accent"
                : "text-text-secondary hover:text-text"
            }`}
          >
            Home
          </Link>
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative font-heading text-[15px] font-medium transition-colors ${
                  active
                    ? "text-text after:absolute after:-bottom-[21px] after:left-0 after:h-[2px] after:w-full after:bg-accent"
                    : "text-text-secondary hover:text-text"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-accent/90"
        >
          Let&apos;s Talk
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
