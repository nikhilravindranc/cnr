import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies, type CaseStudy } from "@/lib/caseStudies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];
  return cs ? { title: `${cs.name} — Case study — CNR`, description: `${cs.subtitle}. ${cs.context}` } : {};
}

const label = "font-heading text-[11px] font-semibold uppercase tracking-[0.2em]";

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();
  const t = cs.theme;
  const vars = {
    "--a": t.a, "--b": t.b, "--c": t.c, "--soft": t.soft, "--ink": t.ink, "--glow": t.glow,
  } as CSSProperties;

  return (
    <div style={vars}>
      <Navbar />
      <main>
        {/* Hero — project palette */}
        <section
          className="relative overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg, var(--a) 0%, var(--b) 55%, var(--c) 100%)" }}
        >
          <div
            className="pointer-events-none absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, var(--glow) 0%, transparent 65%)", opacity: 0.55 }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28">
            <nav className="mb-12 flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white">Home</Link><span aria-hidden>›</span>
              <Link href="/work" className="hover:text-white">Work</Link><span aria-hidden>›</span>
              <span className="text-white">{cs.name}</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className={`${label} mb-5 flex items-center gap-3 text-white/70`}>
                  <span className="h-px w-8 bg-white/60" /> Case study
                </p>
                <h1 className={`font-heading font-bold tracking-tight ${cs.name.length > 14 ? "text-4xl sm:text-6xl" : "text-6xl sm:text-8xl"}`}>{cs.name}</h1>
                {cs.subtitle && <p className="mt-4 font-heading text-2xl font-medium text-white/90 sm:text-3xl">{cs.subtitle}</p>}
                <div className="mt-8 flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-heading text-xs font-semibold backdrop-blur">
                      {tag}
                    </span>
                  ))}
                </div>
                {!cs.sections && <p className="mt-9 max-w-xl text-[17px] leading-relaxed text-white/85">{cs.context}</p>}
              </div>

              {!cs.suite && (
                <div className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block" aria-hidden>
                  <span className="absolute inset-0 rounded-full border border-white/25" />
                  <span className="absolute inset-[14%] rounded-full border border-white/30" />
                  <span className="absolute inset-[28%] rounded-full border border-white/40" />
                  <span className="absolute inset-[42%] rounded-full bg-white/90" />
                  <span className="absolute left-[8%] top-[22%] h-4 w-4 rounded-full bg-white" />
                  <span className="absolute bottom-[14%] right-[10%] h-6 w-6 rounded-full" style={{ background: "var(--glow)" }} />
                </div>
              )}
              {cs.suite && (
                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                  <p className={`${label} text-white/70`}>{cs.suite.label}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {cs.suite.items.map((item) => (
                      <span key={item} className="rounded-xl bg-white px-3 py-3 text-center font-heading text-[13px] font-bold leading-tight" style={{ color: "var(--a)" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl px-4 py-3.5 text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-white" style={{ background: "var(--ink)" }}>
                    Common access layer · {cs.suite.layer}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {cs.sections ? (
          <StoryBody sections={cs.sections} />
        ) : cs.challenge && cs.approach && cs.outcome && cs.learning ? (
          <BentoBody cs={{ ...cs, challenge: cs.challenge, approach: cs.approach, outcome: cs.outcome, learning: cs.learning }} />
        ) : null}

        {/* Demonstrates */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className={`${label} text-text-secondary`}>What this demonstrates</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {cs.demonstrates.map((d, i) => (
                <span
                  key={d}
                  className="rounded-full px-5 py-3 font-heading text-lg font-bold text-white sm:text-xl"
                  style={{ background: i % 2 ? "linear-gradient(135deg, var(--b), var(--c))" : "linear-gradient(135deg, var(--a), var(--b))" }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — project palette */}
        <section style={{ background: "var(--ink)" }}>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
            <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
              Have a problem worth <span style={{ color: "var(--glow)" }}>figuring out?</span>
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, var(--a), var(--c))" }}
              >
                Let&apos;s Talk <span aria-hidden>→</span>
              </Link>
              <Link href="/work" className="font-heading text-[15px] font-semibold text-white underline decoration-white/40 decoration-2 underline-offset-8 hover:decoration-white">
                ← All work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type Full = CaseStudy & {
  challenge: NonNullable<CaseStudy["challenge"]>;
  approach: NonNullable<CaseStudy["approach"]>;
  outcome: NonNullable<CaseStudy["outcome"]>;
  learning: string;
};

function BentoBody({ cs }: { cs: Full }) {
  return (
        <section style={{ background: "var(--soft)" }}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 py-20 md:grid-cols-6 lg:px-10">
            <article className="rounded-3xl bg-white p-8 shadow-sm md:col-span-4 sm:p-10">
              <p className={`${label}`} style={{ color: "var(--a)" }}>01 · The challenge</p>
              <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-text sm:text-3xl">
                The challenge was not simply to build individual applications.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
                {cs.challenge.text.replace("The challenge was not simply to build individual applications. ", "")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {cs.challenge.points.map((p) => (
                  <span key={p} className="rounded-full px-3.5 py-1.5 font-heading text-xs font-bold" style={{ background: "var(--soft)", color: "var(--a)" }}>
                    {p}
                  </span>
                ))}
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-3xl p-8 text-white md:col-span-2 sm:p-10" style={{ background: "var(--ink)" }}>
              <p className={`${label} text-white/60`}>Research covered</p>
              <ul className="mt-5 space-y-3">
                {cs.approach.researched.map((r, i) => (
                  <li key={r} className="flex items-center gap-3 font-heading text-[15px] font-semibold">
                    <span className="h-2 w-2 rounded-full" style={{ background: i % 2 ? "var(--glow)" : "var(--c)" }} />
                    {r}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm md:col-span-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className={label} style={{ color: "var(--a)" }}>02 · Research &amp; approach</p>
                  <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">{cs.approach.text}</p>
                </div>
                <ol className="grid gap-2.5 sm:grid-cols-2">
                  {cs.approach.steps.map((s, i) => (
                    <li key={s} className="flex items-center gap-3 rounded-xl border border-border px-4 py-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-heading text-[11px] font-bold text-white" style={{ background: "linear-gradient(135deg, var(--a), var(--c))" }}>
                        {i + 1}
                      </span>
                      <span className="font-heading text-sm font-semibold text-text">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-3xl p-8 text-white md:col-span-3 sm:p-10"
              style={{ background: "linear-gradient(135deg, var(--b), var(--c))" }}
            >
              <p className={`${label} text-white/70`}>03 · Key learning</p>
              <p className="mt-4 text-[17px] leading-relaxed text-white">{cs.learning}</p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm md:col-span-3 sm:p-10">
              <p className={label} style={{ color: "var(--a)" }}>04 · Outcome</p>
              <p className="mt-4 font-heading text-xl font-semibold leading-snug text-text sm:text-2xl">{cs.outcome.text}</p>
              <p className="mt-5 rounded-xl border border-dashed border-border bg-bg p-4 text-[13px] leading-relaxed text-text-secondary">
                {cs.outcome.note}
              </p>
            </article>
          </div>
        </section>
  );
}

function StoryBody({ sections }: { sections: NonNullable<CaseStudy["sections"]> }) {
  return (
    <section style={{ background: "var(--soft)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:px-10">
        <aside className="hidden lg:block">
          <ol className="sticky top-28 space-y-1 border-l-2" style={{ borderColor: "color-mix(in srgb, var(--a) 20%, transparent)" }}>
            {sections.map((sec, i) => (
              <li key={sec.title}>
                <a href={`#s-${i}`} className="-ml-0.5 block border-l-2 border-transparent py-1.5 pl-4 font-heading text-sm font-semibold text-text-secondary transition-colors hover:text-text" style={{ ["--hover" as string]: "var(--a)" }}>
                  <span className="mr-2 text-xs font-bold" style={{ color: "var(--a)" }}>{String(i + 1).padStart(2, "0")}</span>
                  {sec.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="space-y-6">
          {sections.map((sec, i) => {
            const outcome = sec.title === "Outcome";
            return (
              <article
                key={sec.title}
                id={`s-${i}`}
                className={`scroll-mt-28 rounded-3xl p-8 sm:p-10 ${outcome ? "text-white" : "bg-white shadow-sm"}`}
                style={outcome ? { background: "linear-gradient(135deg, var(--ink), var(--a))" } : undefined}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full font-heading text-sm font-bold text-white"
                    style={{ background: outcome ? "rgba(255,255,255,0.18)" : "linear-gradient(135deg, var(--a), var(--c))" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{sec.title}</h2>
                </div>
                <div className="mt-6 space-y-4">
                  {sec.paras.map((para, pi) => (
                    <p key={pi} className={`${pi === 0 ? "text-[17px]" : "text-[16px]"} leading-[1.75] ${outcome ? "text-white/85" : "text-text-secondary"}`}>
                      {para}
                    </p>
                  ))}
                </div>
                {sec.notes?.map((n) => (
                  <p key={n} className={`mt-5 rounded-xl border border-dashed p-4 text-[13px] leading-relaxed ${outcome ? "border-white/30 text-white/75" : "border-border bg-bg text-text-secondary"}`}>
                    {n}
                  </p>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
