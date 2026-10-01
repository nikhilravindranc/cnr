export type CaseStudy = {
  slug: string;
  name: string;
  subtitle?: string;
  tags: string[];
  /** Palette sampled from the project's own brand (see ProjectThumb). */
  theme: { a: string; b: string; c: string; soft: string; ink: string; glow: string };
  context: string;
  /** EVOQ-style structured layout (optional). */
  challenge?: { text: string; points: string[] };
  approach?: { text: string; steps: string[]; researched: string[] };
  learning?: string;
  outcome?: { text: string; note: string };
  suite?: { label: string; items: string[]; layer: string };
  /** Generic story layout used by the other case studies. */
  sections?: { title: string; paras: string[]; notes?: string[] }[];
  demonstrates: string[];
};

export const caseStudyHref = (name: string) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return slug in caseStudies ? `/work/${slug}` : undefined;
};

export const caseStudies: Record<string, CaseStudy> = {
  evoq: {
    slug: "evoq",
    name: "EVOQ",
    subtitle: "Building a B2B SaaS ecosystem",
    tags: ["B2B SaaS", "Product Strategy", "Product Management", "UX/CX", "Technology Evaluation"],
    theme: { a: "#4B3FC4", b: "#6D3FD6", c: "#9333EA", soft: "#F2F2FF", ink: "#17124a", glow: "#E9D5FF" },
    context:
      "EVOQ is a multi-product B2B SaaS/business software ecosystem developed within Social DNA Labs.",
    suite: {
      label: "The suite spans",
      items: ["CRM", "Billing", "Inventory", "HRMS", "Projects", "ServiceOps", "Desk", "Campaigns", "Practice Management", "CPQ/Configurator"],
      layer: "EVOQ Control",
    },
    challenge: {
      text: "The challenge was not simply to build individual applications. Each product needed to make sense in its own workflow while also fitting into a broader ecosystem. All of this required consideration:",
      points: ["Product scope", "Feature priorities", "Positioning", "Pricing", "Integrations", "Mobile experience", "How separate applications relate"],
    },
    approach: {
      text: "The work covered the full path from research to coordination. Research considered competitor capabilities, pricing, integrations, mobile experience, market positioning and MVP/phasing.",
      steps: [
        "Product and competitor research",
        "Business / product perspective",
        "Product structure",
        "Positioning",
        "UX/CX",
        "Website and product communication",
        "Technology / tool evaluation",
        "Implementation coordination",
        "Product / project management",
      ],
      researched: ["Competitor capabilities", "Pricing", "Integrations", "Mobile experience", "Market positioning", "MVP / phasing"],
    },
    learning:
      "An early application moved into development before the product document, feature scope and experience had been sufficiently resolved. Some features proved unnecessary and parts of the UI/CX flow needed reconsideration. This became a reference point for improving the approach to later products.",
    outcome: {
      text: "EVOQ is now used/piloted by customers while the wider suite continues to mature.",
      note: "Specific revenue or adoption metrics are intentionally not stated here because they have not been established in the current source material.",
    },
    demonstrates: ["Product strategy", "SaaS thinking", "Research", "Customer perspective", "Technology evaluation", "Cross-functional execution"],
  },

  "archiron-design": {
    slug: "archiron-design",
    name: "Archiron Design",
    subtitle: "Simplifying a complex ecommerce journey",
    tags: ["Ecommerce", "UX/CX", "Product Discovery", "CPQ/Configurator Research"],
    theme: { a: "#9B614B", b: "#7a4a3a", c: "#1A1817", soft: "#F8F0EA", ink: "#1A1817", glow: "#EFDFD6" },
    context: "Archiron Design is an ecommerce environment for architectural parts and products with complex categories, product information and customer requirements.",
    sections: [
      { title: "Context", paras: ["Archiron Design is an ecommerce environment for architectural parts and products with complex categories, product information and customer requirements."] },
      { title: "Challenge", paras: ["The customer journey needed to work for products that are more technical and specialised than conventional retail goods. Product discovery, category structure and the way users evaluate items required closer attention."] },
      { title: "Approach", paras: ["The work involved ecommerce CX, wireframes and scenarios, research into similar companies and tools, and implementation coordination. Research also explored visual CPQ, normal CPQ and 2D/3D configurator possibilities."] },
      { title: "Outcome", paras: ["The project was completed successfully and the client was satisfied, based on the available project information."] },
    ],
    demonstrates: ["Ecommerce UX", "Customer journeys", "Information architecture", "Product research", "CPQ research", "Solution design"],
  },
  "social-dna-labs": {
    slug: "social-dna-labs",
    name: "Social DNA Labs",
    tags: ["Digital Transformation", "Website Strategy", "AI Transformation", "UX/UI", "Content Strategy"],
    theme: { a: "#22306b", b: "#2b4a8f", c: "#1a9c8c", soft: "#EBF3F4", ink: "#12142b", glow: "#bfeee6" },
    context: "Social DNA Labs is a long-running digital transformation company working across different markets and projects. Its website and digital positioning have evolved multiple times as the company's services, technology landscape, SEO priorities and product ecosystem changed.",
    sections: [
      { title: "Context", paras: ["Social DNA Labs is a long-running digital transformation company working across different markets and projects. Its website and digital positioning have evolved multiple times as the company's services, technology landscape, SEO priorities and product ecosystem changed."] },
      { title: "Challenge", paras: ["The existing website structure had accumulated pages and content around older SEO priorities and service-specific keywords. As the business evolved toward broader transformation capabilities and AI-led services, the website needed to reflect the current direction of the company while also bringing EVOQ, its product suite, into the wider ecosystem."] },
      { title: "Approach", paras: ["The work involved repeated website strategy and design revamps, including information architecture, page and content strategy, UX/UI, new capability pillars, and review of outdated pages, blogs and case studies.", "The latest transformation focused on areas such as AI Transformation, Business Transformation and Growth Transformation, while developing a new visual direction and UI component system without changing the core brand colours. The website technology was also moved from WordPress/PHP to Next.js and Payload CMS.", "AI tools were used across content, design and implementation, but the work required defining the appropriate context, brand voice, positioning and page purpose first to avoid generic AI-generated output."] },
      { title: "Outcome", paras: ["The website was repositioned around Social DNA Labs' current capabilities and the changing digital landscape, with a refreshed structure, content direction, visual system and technology foundation. EVOQ was also incorporated into the broader company ecosystem."] },
    ],
    demonstrates: ["Digital transformation strategy", "Website repositioning", "Information architecture", "Content strategy", "UX/UI", "AI-era positioning", "Technology evaluation", "AI-assisted execution", "Product ecosystem integration"],
  },
  "trident-mea": {
    slug: "trident-mea",
    name: "Trident MEA",
    subtitle: "Modernising an established digital presence",
    tags: ["Digital Transformation", "Website Strategy", "UX", "Brand Experience"],
    theme: { a: "#0A1628", b: "#003060", c: "#009CD9", soft: "#EAF6FC", ink: "#0A1628", glow: "#bfe8f7" },
    context: "Trident MEA is a GCC-based company with an established business presence and an existing digital identity. Its website had been in place for several years and needed to evolve alongside the business.",
    sections: [
      { title: "Context", paras: ["Trident MEA is a GCC-based company with an established business presence and an existing digital identity. Its website had been in place for several years and needed to evolve alongside the business."] },
      { title: "Challenge", paras: ["The objective was not simply to redesign an older website. The new experience needed to feel contemporary, premium and relevant for the GCC market while retaining enough of the existing Trident character to remain recognisable.", "The challenge was finding that balance without turning the website into another generic corporate template."] },
      { title: "Approach", paras: ["The work started by looking at the existing brand, services, audience and overall digital presence before defining the direction for the website.", "The information architecture and content structure were reviewed to make the services easier to understand and navigate. The visual direction was refined around a more restrained and premium experience, while keeping the core Trident identity recognisable.", "The work also included detailed website QA covering content, layout, responsiveness and on-page details to ensure the final implementation matched the intended experience."] },
      { title: "Outcome", paras: ["The project established a more contemporary digital direction for Trident while maintaining continuity with the existing business identity. The work forms part of ongoing digital transformation and website improvement rather than a one-time redesign."], notes: ["Specific post-launch performance metrics are not documented here."] },
    ],
    demonstrates: ["Digital transformation", "Website strategy", "UX", "Information architecture", "Content structure", "Visual direction", "QA", "Brand experience"],
  },
  "365-mobile-sync": {
    slug: "365-mobile-sync",
    name: "365 Mobile Sync",
    subtitle: "Turning a manual process into a product",
    tags: ["Custom Application", "Automation", "Research", "Solution Design"],
    theme: { a: "#1a1a1a", b: "#9a3a00", c: "#EA5300", soft: "#FFF1E8", ink: "#1a1a1a", glow: "#ffd2b8" },
    context: "365 Mobile Sync was a custom application created to address a specific Microsoft 365 synchronisation requirement. The objective was to reduce dependence on manual synchronisation activity through an automated workflow.",
    sections: [
      { title: "Context", paras: ["365 Mobile Sync was a custom application created to address a specific Microsoft 365 synchronisation requirement. The objective was to reduce dependence on manual synchronisation activity through an automated workflow.", "The project was completed several years before AI-assisted development became part of the everyday product workflow."] },
      { title: "Challenge", paras: ["The requirement was not simply to build another application. The team first needed to understand how the existing synchronisation process worked, where manual effort was involved and what the proposed automation needed to accomplish.", "There was no obvious off-the-shelf solution that could simply be adopted for the specific requirement."] },
      { title: "Approach", paras: ["The work involved researching the problem space, understanding the workflow and translating the requirement into a practical solution concept.", "The solution was then developed in coordination with the technical team, with attention to the underlying Microsoft 365 environment and the automation required to reduce manual work.", "The project required problem-solving and technical coordination without the benefit of today's AI-assisted research, prototyping or development tools."] },
      { title: "Outcome", paras: ["A custom synchronisation application was delivered to address the identified workflow.", "The project demonstrated the ability to take an unfamiliar technical requirement, research the problem, work with technical specialists and move from a business need to a working custom application."] },
    ],
    demonstrates: ["Pre-AI problem solving", "Workflow analysis", "Research", "Automation", "Custom application development", "Solution design", "Technical coordination"],
  },
  "lumiere-aesthetics": {
    slug: "lumiere-aesthetics",
    name: "Lumiere Aesthetics",
    subtitle: "Choosing the right solution",
    tags: ["Digital Experience", "Technology Evaluation", "Customer-First Solution"],
    theme: { a: "#5d513c", b: "#8a7a5f", c: "#b09b78", soft: "#F6F1E8", ink: "#2b2418", glow: "#efe7da" },
    context: "Lumiere Aesthetics is a Canadian medical aesthetics business that required digital capabilities to support its operations and customer experience.",
    sections: [
      { title: "Context", paras: ["Lumiere Aesthetics is a Canadian medical aesthetics business that required digital capabilities to support its operations and customer experience.", "The requirement included an application component that needed to work within the business's existing context rather than simply being treated as a standalone technology purchase."] },
      { title: "Challenge", paras: ["At the time, EVOQ was being developed as a broader business software ecosystem, but the relevant capabilities were not mature enough to support Lumiere's immediate requirement.", "The challenge was therefore not to prove that EVOQ could eventually solve the problem. It was to determine what would work for the customer at that point in time."] },
      { title: "Approach", paras: ["The requirement was evaluated against available third-party solutions and the practical needs of the business.", "Rather than forcing the client into an in-house product that was still evolving, a suitable third-party option was recommended and implementation support was provided.", "This also created a useful product decision: customer requirements should influence the roadmap, but an emerging product should not be imposed on a customer before it is ready."] },
      { title: "Outcome", paras: ["Lumiere received a solution suited to its immediate requirement while avoiding the limitations of an immature in-house product.", "EVOQ remained a potential future option as the relevant capabilities matured."] },
    ],
    demonstrates: ["Technology evaluation", "Solution selection", "Product judgement", "Customer-first thinking", "Third-party evaluation", "Practical digital consulting"],
  },
  "alaska-tribal-trust-system": {
    slug: "alaska-tribal-trust-system",
    name: "Alaska Member-Centric Tribal Trust System",
    subtitle: "Making an unfamiliar domain understandable",
    tags: ["Research", "Complex Systems", "Solution Design", "Digital Transformation"],
    theme: { a: "#1c2e42", b: "#3f5a75", c: "#5f7a95", soft: "#EEF2F6", ink: "#1c2e42", glow: "#cfdbe7" },
    context: "This was a research and solution-design project for a complex member-centric tribal trust environment in the United States.",
    sections: [
      { title: "Context", paras: ["This was a research and solution-design project for a complex member-centric tribal trust environment in the United States.", "The domain involved unfamiliar government processes, tribal trust administration and specialised systems, making research a significant part of the work before any solution could be defined."] },
      { title: "Challenge", paras: ["The initial requirement did not provide enough context to immediately define the product or technical solution.", "The challenge was to understand the domain first: how tribal trust systems work, the organisations and processes involved, existing government systems, the role of members and the information that would need to move through the system."] },
      { title: "Research", paras: ["Requirements and available project details were gathered first. Research then covered tribal trust environments and relevant systems and processes, including TAAMS, BIA FileMan and TADD.", "Because the domain was unfamiliar and online information could easily introduce irrelevant or unreliable context, the research was organised and reviewed through NotebookLM using project-specific source material.", "This helped separate useful findings from assumptions and keep the eventual solution grounded in the available evidence."] },
      { title: "Solution", paras: ["The research was translated into structured analysis and presentation material, which was then used to develop a solution concept and support the preparation of the proposed approach and quotation.", "The emphasis was on understanding the ecosystem before deciding what the digital solution should contain."] },
      { title: "Outcome", paras: ["The project has not yet moved into implementation and remains dependent on government decisions.", "The demonstrated outcome is therefore the research, domain understanding, analysis and solution design produced to support the next stage."] },
    ],
    demonstrates: ["Domain research", "Requirements analysis", "Complex-system thinking", "Information synthesis", "Research validation", "Solution design", "Digital transformation consulting"],
  },
  "kalatrace": {
    slug: "kalatrace",
    name: "Kalatrace",
    tags: ["Gifting", "Networking", "Ecommerce", "Digital Experience"],
    theme: { a: "#14613f", b: "#1F7A52", c: "#35a874", soft: "#EAF7F0", ink: "#0d3a27", glow: "#bff0d6" },
    context: "Kalatrace was a gifting and networking platform built around an unusual proposition: gifting and supporting others could help create and strengthen reciprocal networks.",
    sections: [
      { title: "Context", paras: ["Kalatrace was a gifting and networking platform built around an unusual proposition: gifting and supporting others could help create and strengthen reciprocal networks.", "The challenge was not only to sell a product or service, but to communicate the underlying idea clearly enough for users to understand why the platform existed."] },
      { title: "Challenge", paras: ["The concept was relatively unfamiliar, so the digital experience needed to make the relationship between gifting, connection and reciprocity understandable.", "The ecommerce journey also needed to support the practical act of selecting and giving a gift without allowing the underlying concept to become confusing."] },
      { title: "Approach", paras: ["The work focused on translating the platform proposition into a clear website and ecommerce journey.", "The experience was structured around the relationship between the platform idea, product discovery and gifting, with attention to how a new user would understand the concept and move through the experience."] },
      { title: "Outcome", paras: ["The website and ecommerce experience were developed around the gifting and networking proposition."], notes: ["The company later stopped/sold due to financial circumstances. That later business outcome is separate from the digital work delivered."] },
    ],
    demonstrates: ["Concept translation", "Ecommerce thinking", "Customer journey design", "Digital experience", "Communicating an unfamiliar proposition"],
  },
  "sos-holdings": {
    slug: "sos-holdings",
    name: "SOS Holdings",
    tags: ["Multi-Site Digital Experience", "Content Architecture", "Service Positioning"],
    theme: { a: "#0f3a5c", b: "#00497C", c: "#0a6aa8", soft: "#EAF2F8", ink: "#0b2a44", glow: "#bcd9ee" },
    context: "SOS Holdings is a GCC-based conglomerate with multiple business areas and services. Rather than operating as one simple corporate website, its different businesses required individual digital experiences.",
    sections: [
      { title: "Context", paras: ["SOS Holdings is a GCC-based conglomerate with multiple business areas and services. Rather than operating as one simple corporate website, its different businesses required individual digital experiences."] },
      { title: "Challenge", paras: ["The challenge was to make each service and business understandable on its own while avoiding a collection of websites that all looked or sounded the same.", "Each website needed its own positioning, structure and content while still belonging to the wider group."] },
      { title: "Approach", paras: ["The work involved researching unfamiliar services, defining page architecture, structuring information and developing content for the individual websites.", "Before AI-assisted content workflows became common, substantial manual research and writing were required to understand the businesses and communicate their services accurately.", "The design direction was then developed around each business rather than applying one generic corporate template across the group."] },
      { title: "Outcome", paras: ["The individual websites were structured around their respective service propositions, with clearer separation between businesses while maintaining their relationship to the wider SOS Holdings group.", "The work created a more coherent multi-site digital presence rather than treating the group as one undifferentiated website."] },
    ],
    demonstrates: ["Multi-site architecture", "Service positioning", "Research-led content strategy", "Information architecture", "Website planning", "Differentiated digital experiences"],
  },
  "eftmra-india": {
    slug: "eftmra-india",
    name: "EFTMRA India",
    tags: ["Website", "Booking Engine", "Events", "Digital Experience"],
    theme: { a: "#1A3B4C", b: "#2f6f80", c: "#4A9DAE", soft: "#EFF8FA", ink: "#12303e", glow: "#A8D4DC" },
    context: "EFTMRA India is an organisation focused on EFT training and related programmes, serving different audiences including practitioners, doctors and people interested in the field.",
    sections: [
      { title: "Context", paras: ["EFTMRA India is an organisation focused on EFT training and related programmes, serving different audiences including practitioners, doctors and people interested in the field.", "The website needed to support both information discovery and practical activities such as finding trainers, viewing events and making appointments."] },
      { title: "Challenge", paras: ["The challenge was to bring several different functions into one coherent experience without making the website difficult to navigate.", "Different users could arrive with very different intentions, so the structure needed to accommodate information, trainers, events and booking-related actions."] },
      { title: "Approach", paras: ["The website structure was planned around the major user activities and information requirements.", "Trainer profiles, events, appointment/booking functionality and core organisational information were brought together into a connected digital experience rather than being treated as separate features.", "The focus was on making the required actions discoverable while keeping the overall website structure straightforward."] },
      { title: "Outcome", paras: ["The website brought trainer listings, events, booking/appointments and core information into one integrated digital experience."] },
    ],
    demonstrates: ["Solution-focused website planning", "Information architecture", "Functional UX", "Booking journeys", "Event experiences", "Digital integration"],
  },
  "ovid-media": {
    slug: "ovid-media",
    name: "OVID Media",
    tags: ["Website Revamp", "Brand Refresh", "Digital Experience"],
    theme: { a: "#0F253E", b: "#132952", c: "#F8521F", soft: "#EEF2F8", ink: "#0a1a30", glow: "#ffd2c2" },
    context: "OVID Media is a GCC-based company whose existing digital presence needed a refreshed direction to better represent the business and its services.",
    sections: [
      { title: "Context", paras: ["OVID Media is a GCC-based company whose existing digital presence needed a refreshed direction to better represent the business and its services."] },
      { title: "Challenge", paras: ["The website needed more than a visual update. The challenge was to improve the brand expression and digital experience while keeping the company's services understandable and its positioning clear."] },
      { title: "Approach", paras: ["The work involved reviewing the existing website and defining a refreshed visual and structural direction.", "Brand and colour direction were refined alongside the website experience, with attention to service presentation, page structure and the relationship between the company's identity and its digital presence.", "The objective was to create a more contemporary experience without losing clarity around what the business actually offers."] },
      { title: "Outcome", paras: ["A refreshed website and digital direction were developed to better represent OVID Media's services and positioning."] },
    ],
    demonstrates: ["Website strategy", "Brand refresh", "Visual direction", "Service positioning", "UX", "Digital experience design"],
  },
  "melrose": {
    slug: "melrose",
    name: "Melrose",
    tags: ["Heritage Brand", "Website", "Marketing"],
    theme: { a: "#00314a", b: "#004669", c: "#0874B4", soft: "#F4F3F0", ink: "#00314a", glow: "#b9dcf0" },
    context: "Melrose is a long-established company with heritage dating back to before the 1950s. Its history and reputation are important parts of the brand.",
    sections: [
      { title: "Context", paras: ["Melrose is a long-established company with heritage dating back to before the 1950s. Its history and reputation are important parts of the brand.", "The digital presence therefore needed to communicate a contemporary business without losing the credibility associated with its heritage."] },
      { title: "Challenge", paras: ["The challenge was to avoid two extremes: making the company look outdated because of its history, or modernising it so aggressively that the heritage and established reputation were weakened.", "The website and marketing also needed to communicate naturally to a US-English audience."] },
      { title: "Approach", paras: ["The work involved website direction, content and marketing considerations around the company's positioning and audience.", "The digital experience was approached with the heritage of the business in mind, using contemporary presentation while preserving the sense of longevity and credibility.", "Marketing work also included improving the use of LinkedIn through both paid and organic activity, with the aim of creating a stronger ongoing digital presence rather than relying only on the website."] },
      { title: "Outcome", paras: ["A contemporary digital presentation was developed around the company's established identity and heritage, alongside a clearer direction for ongoing LinkedIn marketing."] },
    ],
    demonstrates: ["Heritage-brand positioning", "Website strategy", "Content direction", "Digital marketing", "LinkedIn strategy", "Balancing legacy with contemporary digital experience"],
  },
};
