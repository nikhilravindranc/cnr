import Link from "next/link";
import ProjectThumb from "@/components/ProjectThumb";

const projects = [
  {
    variant: "evoq" as const,
    tags: "B2B SaaS · Product Strategy · Product Management · UX/CX · Digital Transformation",
    name: "EVOQ",
    description:
      "A multi-product B2B SaaS ecosystem covering CRM, Billing, Inventory, HRMS, Projects, ServiceOps, Desk, Campaigns, Practice Management and CPQ/Configurator. The work spans product research, competitor analysis, product structure, positioning, UX/CX, technology evaluation, website and product communication, and ongoing product management. The focus is not only on individual applications, but on how separate products can work independently while contributing to a larger business software ecosystem.",
    hasCaseStudy: true,
  },
  {
    variant: "archiron" as const,
    tags: "Ecommerce · UX/CX · Product Discovery · Solution Research",
    name: "Archiron Design",
    description:
      "A complex architectural-products ecommerce environment where customers often need to understand technical products before making a decision. The work focused on product discovery, information architecture, customer journeys and UX, alongside research into CPQ and 2D/3D configurator approaches that could make complex product selection more practical.",
    hasCaseStudy: true,
  },
  {
    variant: "socialdna" as const,
    tags: "Digital Transformation · Website Strategy · AI Transformation · UX/UI · Content Strategy",
    name: "Social DNA Labs",
    description:
      "A long-running digital transformation company going through multiple stages of repositioning as the digital landscape changed. The work involved repeatedly reshaping the website, its information architecture, content, UX, technology and positioning — from SEO-focused service pages to a more transformation-led structure, and most recently toward an AI-era proposition. The latest revamp introduced new capability pillars, refreshed the visual language, removed outdated content, brought the EVOQ product suite into the broader ecosystem, and moved the platform from WordPress/PHP to a modern Next.js and Payload CMS stack. The work combined strategy, research, content, UX/UI, technology decisions and AI-assisted execution.",
    hasCaseStudy: false,
  },
  {
    variant: "trident" as const,
    tags: "Digital Transformation · Website Strategy · UX · Brand Experience",
    name: "Trident MEA",
    description:
      "An established business with an older digital presence needed a more contemporary website without losing the identity and credibility built around the company. The work focused on restructuring the digital experience, improving content and information flow, and creating a cleaner, more durable direction that could remain relevant beyond a short-term visual redesign.",
    hasCaseStudy: true,
  },
  {
    variant: "mobilesync" as const,
    tags: "Custom Application · Automation · Research · Solution Design",
    name: "365 Mobile Sync",
    description:
      "A manual Microsoft 365 synchronisation workflow created an opportunity for a purpose-built automated solution. The work involved understanding the workflow, researching the technical environment, defining the solution and coordinating implementation with the development team. The project was completed before today's widespread AI-assisted development workflows.",
    hasCaseStudy: true,
  },
  {
    variant: "lumiere" as const,
    tags: "Digital Experience · Technology Evaluation · Customer-First Solution",
    name: "Lumiere Aesthetics",
    description:
      "A Canadian medical aesthetics business needed digital capabilities to support its operations and customer experience. The existing in-house product was evaluated, but it wasn't mature enough for the immediate requirement. Rather than forcing the client into an unsuitable solution, a third-party system was recommended and supported — putting the client's immediate needs ahead of internal product preference.",
    hasCaseStudy: true,
  },
  {
    variant: "alaska" as const,
    tags: "Research · Complex Systems · Solution Design · Digital Transformation",
    name: "Alaska Tribal Trust System",
    description:
      "A research and solution-design project involving a complex tribal trust environment in the United States. The work required entering an unfamiliar domain, understanding existing tribal and government systems, researching processes and requirements, and translating a large amount of information into a structured digital solution concept. The project demonstrates research and solution design rather than a deployed product, as implementation depends on subsequent government decisions.",
    hasCaseStudy: true,
  },
  {
    variant: "kalatrace" as const,
    tags: "Gifting · Networking · Ecommerce · Digital Experience",
    name: "Kalatrace",
    description:
      "A digital platform built around the idea that gifting and support can help create and strengthen reciprocal networks. The work focused on translating that concept into a clear website and ecommerce experience, making an unfamiliar proposition easier to understand while giving users a practical way to participate in the platform.",
    hasCaseStudy: true,
  },
  {
    variant: "sosholdings" as const,
    tags: "Multi-Brand Digital Experience · Website Strategy · Content Architecture",
    name: "SOS Holdings",
    description:
      "A GCC conglomerate with multiple businesses and service areas required several websites, each with its own context and audience. The work involved research, content architecture, page structuring and design direction across the different businesses, ensuring each website could communicate its own services without becoming another generic corporate site.",
    hasCaseStudy: true,
  },
  {
    variant: "eftmra" as const,
    tags: "Website · Booking Engine · Events · Digital Experience",
    name: "EFTMRA India",
    description:
      "A training organisation serving practitioners, doctors and general users needed a digital platform that could bring together information, trainers, events and appointments. The solution combined the website, trainer listings, event information and booking functionality into a single experience designed around the different ways users interact with the organisation.",
    hasCaseStudy: true,
  },
  {
    variant: "ovidmedia" as const,
    tags: "Website Revamp · Brand Refresh · Digital Experience",
    name: "OVID Media",
    description:
      "A GCC-based company needed to refresh its existing website and digital presence. The work covered the website experience, visual direction, brand refresh and solution structure, with the objective of creating a more contemporary digital presence while keeping the company's services clear.",
    hasCaseStudy: true,
  },
  {
    variant: "melrose" as const,
    tags: "Website · Marketing · Heritage Brand Experience",
    name: "Melrose",
    description:
      "A long-established company with heritage dating back to before the 1950s needed its digital presence to communicate that history and credibility while remaining relevant to a contemporary audience. The work included website and marketing support, with attention to brand heritage, US-English communication and improvements to LinkedIn paid and organic marketing.",
    hasCaseStudy: true,
  },
];

export default function WorkGrid() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative w-[34%] shrink-0">
                <ProjectThumb variant={project.variant} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-heading text-[10.5px] font-semibold uppercase tracking-wide text-accent">
                  {project.tags}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-text">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {project.hasCaseStudy && (
                  <Link
                    href="#contact"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 font-heading text-sm font-semibold text-accent"
                  >
                    View Case Study
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
