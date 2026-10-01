import { type Capability } from "./shared";
import CapabilityCard from "./CapabilityCard";
import CapabilityScroller from "./CapabilityScroller";

const capabilities: Capability[] = [
  {
    icon: "compass",
    tone: "blue",
    title: "Product Strategy",
    tag: "Strategy",
    chips: ["Product Direction", "Positioning", "Priorities", "Clarity"],
    overview:
      "A product doesn't become better simply by adding features. The important questions come earlier: Who is it for? What problem does it solve? What needs to exist now? What can wait? How should it be positioned? What does the customer actually need to accomplish?",
    usefulWhen:
      "A product idea needs direction, an existing product has become complicated, stakeholders disagree on priorities, or development is moving faster than product decisions.",
    leadsTo:
      "A clearer product direction, defined priorities, better-informed decisions and a more practical path toward execution.",
  },
  {
    icon: "layers",
    tone: "indigo",
    title: "SaaS & Digital Products",
    tag: "SaaS",
    chips: ["Connected Product Ecosystem", "Workflows", "Usability", "Pricing"],
    overview:
      "B2B SaaS products have to connect business requirements, customer workflows, usability, technology, pricing, positioning and long-term product direction.",
    usefulWhen:
      "A SaaS idea needs shaping, an existing product needs improvement, multiple products need to work together, or a business is moving from services toward a product model.",
    leadsTo:
      "A product that is easier to understand, easier to use and better aligned with the business it is meant to support.",
  },
  {
    icon: "transform",
    tone: "teal",
    title: "Digital Transformation",
    tag: "Transformation",
    chips: ["Practical Transformation", "Workflows", "Systems", "Journeys"],
    overview:
      "Digital transformation doesn't always mean buying a new platform or rebuilding everything from scratch. Sometimes the biggest opportunity is hidden inside an inefficient workflow, outdated website, fragmented system or disconnected customer journey.",
    usefulWhen:
      "Existing systems are becoming difficult to manage, digital processes have grown inefficient, the current website no longer represents the business, or there are too many technology options.",
    leadsTo:
      "A practical transformation path based on actual requirements rather than technology for technology's sake.",
  },
  {
    icon: "chat",
    tone: "rose",
    title: "UX & Customer Experience",
    tag: "UX",
    chips: ["Clearer Journeys", "Navigation", "Friction", "Outcomes"],
    overview:
      "Good UX starts before the screen. It starts with understanding what someone is trying to accomplish, what information they need, where they get stuck and what unnecessary steps stand between them and the outcome.",
    usefulWhen:
      "Customers struggle to find products, understand services, complete actions or navigate an existing digital experience.",
    leadsTo:
      "Clearer journeys, simpler information structures, less friction and digital experiences that better reflect how people actually use them.",
  },
  {
    icon: "gear",
    tone: "violet",
    title: "Technology Evaluation & Solution Design",
    tag: "Technology",
    chips: ["Informed Decisions", "Build vs Buy", "Scalability", "Timeline"],
    overview:
      "There is rarely one universally correct technology, platform or tool. The right choice depends on business requirement, users, existing systems, budget, scalability, team capability, timeline and long-term direction.",
    usefulWhen:
      "A business is unsure whether to build or buy, choosing between platforms, considering a new technology, or trying to determine whether an existing solution can support the requirement.",
    leadsTo:
      "More informed technology decisions, reduced unnecessary development and a clearer implementation path.",
  },
  {
    icon: "spark",
    tone: "amber",
    title: "AI-Assisted Execution",
    tag: "AI",
    chips: ["Faster Exploration", "Prototyping", "Iteration", "Judgement"],
    overview:
      "AI can accelerate research, exploration, prototyping and development, but only when the problem, context and desired outcome are understood first.",
    usefulWhen:
      "A project needs faster exploration, prototyping or implementation, or AI can reduce repetitive work.",
    leadsTo:
      "Faster iteration, broader exploration and more efficient execution without treating AI as a substitute for product or business judgement.",
  },
  {
    icon: "growth",
    tone: "emerald",
    title: "Growth & Digital Strategy",
    tag: "Growth",
    chips: ["Connected Presence", "Positioning", "Experience", "Acquisition"],
    overview:
      "Growth isn't simply about publishing more content or running more campaigns. Positioning, product value, customer experience, website, marketing and acquisition all influence whether someone understands the offering and takes the next step.",
    usefulWhen:
      "A good product isn't being understood, the digital presence doesn't reflect the business, marketing and product efforts feel disconnected, or a business needs a clearer path to its audience.",
    leadsTo:
      "A more connected digital presence where product, positioning, experience and growth efforts support the same business objective.",
  },
  {
    icon: "flag",
    tone: "orange",
    title: "Product & Project Leadership",
    tag: "Leadership",
    chips: ["Connected Execution", "Ownership", "Coordination", "Delivery"],
    overview:
      "Good execution requires more than managing a task list. Product, design, development, QA, infrastructure, marketing and business teams often see the same project from different perspectives.",
    usefulWhen:
      "A project has multiple teams involved, ownership is unclear, decisions keep being delayed, or the business needs someone who can connect strategy with execution.",
    leadsTo:
      "Clearer decisions, better coordination and fewer gaps between what was planned and what actually gets delivered.",
  },
];

export default function CapabilityList() {
  return (
    <section id="list" className="border-b border-border/70 bg-bg">
      {/* Large screens: pinned horizontal scroll, mirroring the reference pattern. */}
      <CapabilityScroller capabilities={capabilities} />

      {/* Smaller screens: a plain vertical stack — scroll-jacking is unreliable on touch. */}
      <div className="mx-auto max-w-2xl px-6 py-16 lg:hidden">
        <div className="flex flex-col gap-6">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="h-auto">
              <CapabilityCard cap={cap} index={i} total={capabilities.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
