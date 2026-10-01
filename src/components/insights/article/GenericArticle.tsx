import type { Article } from "@/lib/articles";

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function sectionsOf(a: Article) {
  return a.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));
}

const dots = ["bg-accent", "bg-amber", "bg-teal-500", "bg-violet-500", "bg-rose-500", "bg-emerald-500", "bg-indigo-500"];

export default function GenericArticle({ article }: { article: Article }) {
  return (
    <div>
      <p className="font-heading text-xl font-medium leading-relaxed text-text sm:text-2xl">{article.lead}</p>

      {article.sections.map((s, si) => (
        <section key={s.heading}>
          <h2 id={slugify(s.heading)} className="mb-5 mt-16 scroll-mt-28 font-heading text-3xl font-bold tracking-tight text-text">
            <span className="mb-2 block font-heading text-xs font-bold tracking-[0.2em] text-accent">
              {String(si + 1).padStart(2, "0")}
            </span>
            {s.heading}
          </h2>

          {s.blocks.map((b, bi) => {
            if (typeof b === "string") {
              return (
                <p key={bi} className="mt-5 text-[17px] leading-[1.8] text-text-secondary">
                  {b}
                </p>
              );
            }
            if ("list" in b) {
              return (
                <ul key={bi} className="mt-6 space-y-3">
                  {b.list.map((t, i) => (
                    <li key={t} className="flex gap-3 text-[16px] leading-relaxed text-text-secondary">
                      <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${dots[(si + i) % dots.length]}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <div key={bi} className="mt-6 grid gap-3 sm:grid-cols-2">
                {b.questions.map((q, i) => (
                  <div key={q} className="flex items-start gap-3 rounded-xl border border-border bg-bg p-4">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft font-heading text-[11px] font-bold text-accent">
                      {i + 1}
                    </span>
                    <p className="font-heading text-[15px] font-semibold leading-snug text-text">{q}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </section>
      ))}

      <figure className="relative mt-16 overflow-hidden rounded-3xl bg-ink p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 65%)", opacity: 0.4 }}
          aria-hidden
        />
        <span className="relative font-heading text-6xl font-bold leading-none text-accent" aria-hidden>“</span>
        <blockquote className="relative -mt-2 font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl">
          {article.quote}
        </blockquote>
      </figure>
    </div>
  );
}
