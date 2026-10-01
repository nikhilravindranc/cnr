import type { ReactNode } from "react";
import { QuestionShift, StructureDiagram } from "./ArticleGraphics";

const H2 = ({ id, n, children }: { id: string; n: string; children: ReactNode }) => (
  <h2 id={id} className="mb-5 mt-16 scroll-mt-28 font-heading text-3xl font-bold tracking-tight text-text first:mt-0">
    <span className="mb-2 block font-heading text-xs font-bold tracking-[0.2em] text-accent">{n}</span>
    {children}
  </h2>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-5 text-[17px] leading-[1.8] text-text-secondary">{children}</p>
);

const Pull = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-10 rounded-r-2xl border-l-4 border-accent bg-accent-soft/60 px-6 py-5 font-heading text-xl font-semibold leading-snug text-text sm:text-2xl">
    {children}
  </blockquote>
);

export const sections = [
  { id: "decision", label: "The decision made sense" },
  { id: "context", label: "Then the context changed" },
  { id: "changed", label: "What changed" },
  { id: "lesson", label: "The lesson" },
];

export default function WrongProductArticle() {
  return (
    <div>
      <p className="font-heading text-xl font-medium leading-relaxed text-text sm:text-2xl">
        An early product decision can look perfectly reasonable when
        development begins. The problem is that something can be technically
        buildable, commercially attractive and still not be the right thing
        to build.
      </p>

      <H2 id="decision" n="01">The decision made sense at the time</H2>
      <P>When a product starts from a genuine business requirement, there is usually a strong reason behind the first set of features.</P>
      <P>That was the situation with EVOQ. The product began around real customer requirements and the need to build a broader business software ecosystem. CRM was an early part of that direction, followed by other applications shaped around customer needs and business workflows.</P>
      <P>As development moved forward, however, it became clear that having a list of requirements was not the same as having a clearly defined product.</P>
      <ul className="mt-6 space-y-3">
        {[
          "Some features made sense individually but did not necessarily make sense together.",
          "Some workflows were more complicated than they needed to be.",
          "There were also decisions being made about how different applications should relate to one another.",
        ].map((t) => (
          <li key={t} className="flex gap-3 text-[16px] leading-relaxed text-text-secondary">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            {t}
          </li>
        ))}
      </ul>
      <P>The natural response in development is often to keep moving. Once people are designing screens and writing code, changing direction can feel expensive.</P>
      <Pull>But continuing simply because work has already started can be more expensive.</Pull>

      <H2 id="context" n="02">Then the context changed</H2>
      <P>Research, product thinking and deeper discussions exposed gaps that were not obvious at the beginning.</P>
      <P>The question gradually moved from:</P>
      <QuestionShift />
      <P>That distinction changed the way the work was approached. Instead of treating every requested feature as something that automatically belonged in the product, the broader ecosystem, customer requirements, positioning, usability, technology and implementation effort had to be considered together.</P>
      <P>One example was the question of whether several business functions should be combined into one application or remain separate products within a connected ecosystem.</P>
      <P>The easier answer would have been to keep adding everything into one place. The more useful answer was to consider how customers would actually understand, use and navigate the system.</P>
      <StructureDiagram />
      <P>That led toward a different product structure: separate applications with their own purposes, connected through a common ecosystem rather than one increasingly complicated application trying to do everything.</P>
      <Pull>Sometimes the expensive mistake isn&apos;t building the wrong feature. It&apos;s building before the problem is fully understood.</Pull>

      <H2 id="changed" n="03">What changed</H2>
      <P>The experience reinforced something that has influenced the way I approach product work since then.</P>
      <div className="my-8 rounded-2xl bg-ink p-7 sm:p-9">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-secondary">The principle</p>
        <p className="mt-3 font-heading text-2xl font-semibold leading-snug text-white">
          Development should not be allowed to define the product by itself.
        </p>
      </div>
      <P>Product direction needs room for research, customer context, market understanding, UX, technology decisions and commercial reality before those decisions become expensive to change.</P>
      <P>That doesn&apos;t mean everything needs to be perfectly documented before anything is built. It means there should be enough clarity to know:</P>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["What", "is being built"],
          ["Why", "it needs to exist"],
          ["Who", "it is for"],
          ["Later", "what can wait"],
        ].map(([a, b], i) => (
          <div key={a} className="rounded-xl border border-border bg-surface p-4">
            <p className={`font-heading text-lg font-bold ${["text-accent", "text-amber", "text-teal-700", "text-violet-700"][i]}`}>{a}</p>
            <p className="mt-1 text-[13px] leading-snug text-text-secondary">{b}</p>
          </div>
        ))}
      </div>
      <P>For EVOQ, that thinking also influenced later product work, including how applications were positioned, how the ecosystem was structured, how features were prioritised and how MVP stages were considered. The product continued to evolve because the understanding of the problem evolved.</P>

      <H2 id="lesson" n="04">The lesson</H2>
      <P>A product doesn&apos;t become clearer simply because development progresses.</P>
      <P>Sometimes the most valuable work happens before the next feature is designed — when the team stops, looks at the bigger picture and asks whether they are still solving the right problem.</P>
      <p className="mt-8 font-heading text-3xl font-bold leading-tight text-text">
        That is not wasted time.{" "}
        <span className="text-accent">It can be the work that prevents much more expensive time from being wasted later.</span>
      </p>
    </div>
  );
}
