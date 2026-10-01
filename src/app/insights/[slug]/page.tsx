import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BridgeGraphic from "@/components/BridgeGraphic";
import ProjectThumb from "@/components/ProjectThumb";
import { insights } from "@/lib/insights";
import { ArticleCover } from "@/components/insights/article/ArticleGraphics";
import WrongProductArticle, { sections as firstSections } from "@/components/insights/article/WrongProductArticle";
import GenericArticle, { sectionsOf } from "@/components/insights/article/GenericArticle";
import { articles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.filter((i) => i.slug).map((i) => ({ slug: i.slug! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = insights.find((i) => i.slug === slug);
  if (!entry) return {};
  return { title: `${entry.title} — CNR`, description: entry.body };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const index = insights.findIndex((i) => i.slug === slug);
  if (index === -1) notFound();
  const entry = insights[index];
  const article = entry.slug ? articles[entry.slug] : undefined;
  const sections = article ? sectionsOf(article) : firstSections;
  const readMins = article?.readMins ?? 4;
  const coverLabel = article?.coverLabel ?? "Requirements ≠ Product";
  const titleLead = article ? entry.title.slice(0, entry.title.lastIndexOf(article.accent)).trimEnd() : "We Almost Built";
  const titleAccent = article ? article.accent : "the Wrong Product.";
  const related = [1, 2].map((n) => insights[(index + n) % insights.length]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/70">
          <div
            className="pointer-events-none absolute -right-[10%] -top-[20%] -z-10 h-[40rem] w-[40rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, var(--color-accent) 0%, transparent 60%), radial-gradient(circle at 70% 70%, var(--color-amber) 0%, transparent 60%)",
              opacity: 0.13,
            }}
            aria-hidden
          />
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-10 lg:pb-24">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="hover:text-text">Home</Link>
              <span aria-hidden>›</span>
              <Link href="/insights" className="hover:text-text">Insights</Link>
              <span aria-hidden>›</span>
              <span className="text-text">{String(index + 1).padStart(2, "0")}</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
                  <span className="h-px w-8 bg-accent" />
                  The Journal · {String(index + 1).padStart(2, "0")}
                </p>
                <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
                  {titleLead} <span className="text-accent">{titleAccent}</span>
                </h1>
                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {entry.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface px-3 py-1.5 font-heading text-xs font-semibold text-text">
                      {t}
                    </span>
                  ))}
                  <span className="ml-1 text-sm text-text-secondary">· {readMins} min read</span>
                </div>
              </div>
              <ArticleCover label={coverLabel} variant={index} />
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-surface">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[14rem_minmax(0,1fr)_2rem] lg:px-10">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">In this note</p>
                <ol className="mt-4 space-y-3 border-l border-border">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
                        <span className="mr-2 font-heading text-xs font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <article className="mx-auto w-full max-w-3xl">
              {article ? <GenericArticle article={article} /> : <WrongProductArticle />}
            </article>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="mb-6 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Related work
            </p>
            {article ? (
              <Link
                href="/work"
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:p-8"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-text">{article.related.names}</h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">{article.related.note}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 font-heading text-sm font-semibold text-accent">
                  View the work <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </Link>
            ) : (
            <Link
              href="/work"
              className="group flex overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative w-[28%] shrink-0 sm:w-[22%]">
                <ProjectThumb variant="evoq" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl font-bold text-text">EVOQ</h3>
                <p className="mt-1 font-heading text-sm font-semibold text-accent">Building a B2B SaaS ecosystem</p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
                  A multi-product B2B software ecosystem shaped through product research, market analysis, positioning, UX/CX, technology evaluation and ongoing product management.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent">
                  View case study <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </div>
            </Link>
            )}

            <p className="mb-6 mt-16 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Related insights
            </p>
            <ul className="divide-y divide-border border-y border-border">
              {related.map((r) => (
                <li key={r.title}>
                  <Link href={r.slug ? `/insights/${r.slug}` : "/insights"} className="group flex items-center justify-between gap-6 py-5">
                    <span className="font-heading text-lg font-semibold text-text transition-colors group-hover:text-accent sm:text-xl">{r.title}</span>
                    <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div className="px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
              <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
                Have a problem worth <span className="text-accent">figuring out?</span>
              </h2>
              <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-secondary">
                You don&apos;t need a perfectly written brief. Start with the problem and the context.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Let&apos;s Talk <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative hidden self-stretch lg:block">
              <BridgeGraphic />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
