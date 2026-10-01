import { Icon, type IconName } from "@/components/capabilities/shared";
import { toneClasses, type Tone } from "@/components/capabilities/tones";
import { mailto } from "@/lib/contact";

const topics: { icon: IconName; tone: Tone; title: string; body: string }[] = [
  { icon: "spark", tone: "blue", title: "A new product", body: "An idea that needs research, definition, prioritisation or product direction." },
  { icon: "layers", tone: "indigo", title: "An existing product", body: "A product that has become complicated, isn't working as expected, or needs a clearer direction." },
  { icon: "transform", tone: "teal", title: "A digital transformation", body: "An outdated website, workflow or system that needs to become more useful." },
  { icon: "gear", tone: "violet", title: "A technology decision", body: "Build, buy, replace, integrate or adapt, with no clear answer yet." },
  { icon: "chat", tone: "rose", title: "A UX / CX problem", body: "Customers are struggling to find, understand, navigate or complete something." },
  { icon: "growth", tone: "emerald", title: "A growth challenge", body: "The product, positioning, website and marketing aren't working together as they should." },
];

export default function ContactTopics() {
  return (
    <section className="border-b border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              <span className="h-px w-8 bg-accent" />
              Where to Begin
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl">
              What are you <span className="text-accent">working on?</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-text-secondary">
            Pick whatever sounds closest — it opens an email with the topic
            already filled in.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => {
            const tone = toneClasses[t.tone];
            return (
              <a
                key={t.title}
                href={mailto(`Enquiry: ${t.title}`)}
                className="group flex flex-col rounded-2xl border border-border bg-bg p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-lg"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-full ${tone.badge}`}>
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-text">{t.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-secondary">{t.body}</p>
                <span className={`mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold ${tone.label}`}>
                  Start this conversation
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </a>
            );
          })}

          <a
            href={mailto("Enquiry: Something else")}
            className="group flex flex-col justify-between rounded-2xl border-2 border-dashed border-border p-6 transition-colors hover:border-accent/50 sm:col-span-2"
          >
            <div>
              <h3 className="font-heading text-lg font-bold text-text">Something else</h3>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-text-secondary">
                Sometimes the problem doesn&apos;t fit neatly into a category.
                That&apos;s fine too.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-accent">
              Describe it in your own words
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
