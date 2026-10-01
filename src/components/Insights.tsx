import Link from "next/link";

const posts = [
  {
    title: "Why most product strategy documents never get used",
    excerpt:
      "A strategy that lives in a slide deck instead of a team's daily decisions isn't a strategy — it's a record.",
    tag: "Product Strategy",
  },
  {
    title: "The friction is usually in the handoff, not the design",
    excerpt:
      "Most UX problems that get blamed on interface decisions actually start upstream, in how work moves between teams.",
    tag: "UX / CX",
  },
  {
    title: "AI-assisted execution is a workflow change, not a feature",
    excerpt:
      "Bolting a model onto an existing process rarely works. The workflow has to be redesigned around what the model is good at.",
    tag: "AI-Assisted Execution",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Insights
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Notes from the work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="border-t border-border pt-6">
              <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-wide text-amber">
                {post.tag}
              </p>
              <h3 className="font-heading text-xl font-semibold leading-snug text-text">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-text">
                Read more <span aria-hidden>→</span>
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-heading text-[15px] font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            View All Insights
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
