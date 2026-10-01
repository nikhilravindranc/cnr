export type Block =
  | string
  | { list: string[] }
  | { questions: string[] };

export type Article = {
  accent: string; // trailing part of the title shown in the accent colour
  coverLabel: string;
  lead: string;
  sections: { heading: string; blocks: Block[] }[];
  quote: string;
  related: { names: string; note: string };
  readMins: number;
};

export const articles: Record<string, Article> = {
  "ai-didnt-solve-the-problem": {
    accent: "Understanding the Problem Did.",
    coverLabel: "Faster ≠ clearer",
    readMins: 4,
    lead: "AI can make research, design and execution faster. But speed does not remove the need to understand what actually needs to be solved.",
    sections: [
      {
        heading: "AI is useful when the problem is clear",
        blocks: [
          "AI has become part of how digital work gets done. Research can move faster, interfaces can be explored quickly, content can be produced in minutes and even working prototypes can be created with much less effort.",
          "That changes the speed of execution, but it does not automatically improve the decision behind the execution.",
          "In product work, the difficult part is often not producing an answer. It is deciding whether the answer addresses the real problem. A tool can generate ten approaches in the time it previously took to develop one. If the original question is poorly framed, that simply creates ten faster ways to move in the wrong direction.",
          "The useful role of AI is therefore not to replace understanding. It is to extend it.",
        ],
      },
      {
        heading: "Context still matters",
        blocks: [
          "A requirement rarely arrives as a complete problem statement. A client may ask for an app, a new website, a dashboard, an AI feature or a particular technology because that is how the need has been expressed.",
          "The first step is to understand what sits behind the request.",
          { questions: ["Who needs this?", "What are they trying to accomplish?", "What is happening today?", "What is creating friction?", "What constraints already exist?", "What would make the solution useful in practice?"] },
          "Once that context is clear, AI becomes much more valuable. It can help compare options, organise research, explore flows, generate prototypes, challenge assumptions and accelerate implementation.",
          "The important distinction is that AI can help investigate the problem, but the responsibility for deciding what matters remains with the people working on it.",
        ],
      },
      {
        heading: "The faster the tools become, the more important the question becomes",
        blocks: [
          "AI has reduced the cost of experimentation. That is a major advantage.",
          "But cheaper experimentation can also encourage unnecessary experimentation. When generating another screen, feature or variation takes seconds, it becomes easy to keep producing instead of deciding.",
          "A practical workflow is different: understand the context, research enough to reduce uncertainty, use AI to accelerate the work, validate the direction, and then build what has a clear reason to exist.",
          "The goal is not to use AI everywhere. The goal is to use it where it creates useful leverage.",
        ],
      },
    ],
    quote: "The tool can accelerate the work. It cannot decide what the work should be.",
    related: { names: "EVOQ", note: "Product strategy, research, UX/CX and AI-assisted execution." },
  },

  "the-website-wasnt-the-problem": {
    accent: "Wasn't the Problem",
    coverLabel: "Surface vs structure",
    readMins: 4,
    lead: "Sometimes a website looks like the obvious problem because it is the part everyone can see. The real issue can sit much deeper in the business.",
    sections: [
      {
        heading: "Start with what the website is supposed to achieve",
        blocks: [
          "A website refresh often begins with a visual request: change the colours, make it modern, improve the homepage, make it look premium.",
          "Those requests are understandable. A website is highly visible, so visual problems are easy to notice.",
          { list: ["A website can look dated while the deeper issue is positioning.", "It can look beautiful while users still cannot understand the service.", "It can have strong pages while the journey between them makes little sense."] },
          "That is why a redesign should begin before the redesign itself.",
        ],
      },
      {
        heading: "The visible problem can hide a structural one",
        blocks: [
          "In several website projects, the work has involved more than interface design. It has meant understanding the company, its services, customers, competitors and the reason someone would visit the website in the first place.",
          "For a service business, that might mean clarifying what the company actually offers and who each service is for. For a multi-business group, it can mean giving each website a distinct purpose rather than applying one visual template everywhere.",
          "The design then becomes a consequence of the structure rather than the starting point.",
          "This also changes how content is written. Instead of filling pages with everything the business wants to say, the focus becomes what the visitor needs to understand to move forward.",
        ],
      },
      {
        heading: "A better website starts with a better question",
        blocks: [
          "The useful question is rarely “How should the website look?”",
          "It is closer to “What should someone understand, trust or do after visiting it?”",
          "That question connects positioning, information architecture, UX, content, design and conversion. It also gives the team something more useful than a visual reference to work toward.",
          "A website is an interface between a business and its audience. Improving that interface sometimes requires changing the business story before changing the pixels.",
        ],
      },
    ],
    quote: "A website can have a design problem. But sometimes the design is only showing a problem that already existed.",
    related: { names: "Trident MEA, OVID Media, SOS Holdings and Melrose", note: "Website positioning, structure and digital experience work." },
  },

  "build-buy-or-adapt": {
    accent: "Buy or Adapt?",
    coverLabel: "Should we?",
    readMins: 4,
    lead: "Choosing technology is not always about finding the newest or most powerful option. Often, the better question is what actually needs to be built.",
    sections: [
      {
        heading: "The default answer is often “build”",
        blocks: [
          "When a business has a specific requirement, building a custom solution can feel like the natural answer. It promises control, flexibility and a product designed around the exact workflow.",
          "But custom development also brings responsibility: discovery, design, implementation, testing, hosting, maintenance, security, updates and future changes.",
          "On the other side, buying an existing product can be faster and more predictable, but it may force the business to adapt to someone else's workflow.",
          "The real decision sits between those two extremes.",
        ],
      },
      {
        heading: "Look at the problem, not the technology",
        blocks: [
          "A useful assessment starts with the requirement itself.",
          { questions: ["How unique is the workflow?", "Does an existing product already solve most of it?", "Which parts genuinely require differentiation?", "What integrations are needed?", "What is the expected scale?", "How quickly does the solution need to be available?", "What will maintenance look like?"] },
          "Sometimes the answer is to buy. Sometimes it is to build. Sometimes it is to adapt an existing product and customise only the parts that matter.",
          "In one client situation involving an application requirement, the available in-house product was not mature enough to solve the immediate need. Rather than forcing the customer into it, a third-party solution was recommended and implementation support was provided. The product ecosystem could be considered later when it was ready.",
        ],
      },
      {
        heading: "Technology should serve the decision",
        blocks: [
          "The mistake is treating technology selection as a technology exercise.",
          "It is a business decision with technical consequences.",
          "A good solution may contain custom software, an existing SaaS platform, integrations, automation or several of these together. The important thing is whether the combination solves the requirement within the available constraints.",
          "That makes research and comparison part of product work, not a separate technical activity.",
        ],
      },
    ],
    quote: "The question isn't whether we can build it. The question is whether we should.",
    related: { names: "Lumiere Aesthetics", note: "Evaluating an immediate application need against product maturity and customer requirements." },
  },

  "finished-doesnt-always-mean-finished": {
    accent: "Doesn't Always Mean Finished",
    coverLabel: "Shipped ≠ solved",
    readMins: 4,
    lead: "A project can reach the end of its development cycle and still have important work left to do. Completion and usefulness are not always the same thing.",
    sections: [
      {
        heading: "The checklist can say complete",
        blocks: [
          "Projects naturally create a sense of completion. Requirements are implemented, testing is done, the website is live or the application has been delivered.",
          "That is an important milestone. But it does not automatically mean the problem has been solved.",
          { list: ["A product may technically work while users struggle with the experience.", "A website may be live while the positioning remains unclear.", "An application may be delivered while the team has not learned whether the chosen workflow actually fits real usage."] },
          "The work needs to be viewed beyond the delivery checklist.",
        ],
      },
      {
        heading: "Completion creates the next responsibility",
        blocks: [
          "This matters particularly when a product is evolving through pilots, customer feedback and multiple releases.",
          "EVOQ, for example, has developed through ongoing customer requirements, product research, positioning discussions, feature decisions and implementation. The work is not simply a sequence of isolated releases. Each stage creates information that affects the next one.",
          "That means “done” can mean different things.",
          "A feature can be done. A release can be done. A project phase can be done. But the product may still need observation, feedback and refinement.",
        ],
      },
      {
        heading: "Measure what changed",
        blocks: [
          "The useful follow-up is not only whether the team delivered what was planned. It is whether the delivery changed the situation in the way it was intended to.",
          { questions: ["Did the workflow become easier?", "Did users understand it?", "Did the business gain the capability it needed?", "Did the solution create a foundation for the next stage?"] },
          "This does not mean projects should remain permanently unfinished. It means delivery should be connected to outcomes rather than treated as the outcome itself.",
        ],
      },
    ],
    quote: "Shipping is a milestone. It is not always the end of the problem.",
    related: { names: "EVOQ", note: "An evolving product ecosystem shaped through releases, customer requirements and continued refinement." },
  },

  "minimal-doesnt-mean-apple": {
    accent: "Doesn't Mean Apple",
    coverLabel: "Less, on purpose",
    readMins: 3,
    lead: "“Make it like Apple” is often used as shorthand for clean design. But visual simplicity is only one part of what makes a digital experience feel simple.",
    sections: [
      {
        heading: "The reference is usually about a feeling",
        blocks: [
          "When someone asks for an Apple-like interface, they may not literally mean that the design should copy Apple's colours, typography or layouts.",
          "Often, they mean they want something clean, premium, easy to understand and free from unnecessary clutter.",
          "Those are useful goals. The problem begins when a visual reference becomes the solution instead of helping define the actual design principles.",
        ],
      },
      {
        heading: "Simple is the result of decisions",
        blocks: [
          "A simple interface requires decisions about what belongs, what does not, what should be visible first, how information is grouped and how users move from one action to another.",
          "That is product and UX work before it is visual styling.",
          { list: ["A dashboard can use plenty of whitespace and still be confusing.", "A website can use a restrained colour palette and still make users search for basic information.", "A product can look minimal while containing too many features."] },
          "The interface becomes simpler when the underlying experience is simpler.",
        ],
      },
      {
        heading: "Design should reduce effort",
        blocks: [
          "A useful design question is not “Does this look minimal?”",
          "It is “How much effort does the user need to understand and complete what they came to do?”",
          "That can mean fewer choices, clearer hierarchy, better information architecture, faster paths, useful defaults and stronger content.",
          "Visual restraint can support those decisions, but it cannot replace them.",
          "The goal is not to make a product look like another product. It is to make the experience feel clear for the people using it.",
        ],
      },
    ],
    quote: "Minimal design is not about removing pixels. It is about removing unnecessary decisions.",
    related: { names: "EVOQ and Archiron Design", note: "Product and ecommerce experiences shaped around clarity, navigation and customer intent." },
  },

  "dont-promise-the-timeline": {
    accent: "Before Understanding the Problem",
    coverLabel: "Date ≠ plan",
    readMins: 4,
    lead: "A delivery date is easy to promise before the team understands what the work actually involves. That is exactly why early certainty can become expensive later.",
    sections: [
      {
        heading: "A timeline is a consequence, not a starting point",
        blocks: [
          "Clients understandably want to know when something will be ready. Teams also want to provide a clear answer.",
          "The problem is giving that answer before the problem has been understood.",
          "A project may appear simple from the outside while containing research, integrations, unknown technical constraints, content work, UX decisions, testing and dependencies that are not visible in the initial request.",
          "Giving a confident date too early can create pressure to protect the promise instead of protecting the solution.",
        ],
      },
      {
        heading: "Research changes the estimate",
        blocks: [
          "A practical approach is to understand enough before committing.",
          { questions: ["What already exists?", "What needs to change?", "What is unknown?", "Which decisions depend on another team?", "What is the MVP?", "Which parts can be phased?", "What could create risk?"] },
          "The goal is not to spend weeks analysing a small project. It is to spend enough time reducing uncertainty to make the commitment meaningful.",
          "This is particularly important in unfamiliar domains or custom applications, where the first conversation rarely reveals the full complexity.",
        ],
      },
      {
        heading: "Good project leadership leaves room for reality",
        blocks: [
          "A useful project plan should give the team structure without pretending that everything is known.",
          "Research can change the scope. Customer feedback can change the priority. Technical findings can change the implementation. A good project manager should be able to respond to those changes rather than treating the original estimate as untouchable.",
          "A timeline should help people coordinate. It should not become a reason to build the wrong thing quickly.",
        ],
      },
    ],
    quote: "The safest time to question a timeline is before everyone has started depending on it.",
    related: { names: "Alaska Member-Centric Tribal Trust System", note: "Research and solution work in an unfamiliar, highly specific domain before defining the proposed solution." },
  },

  "four-eyes-are-better-than-two": {
    accent: "Better Than Two",
    coverLabel: "More ways of seeing",
    readMins: 4,
    lead: "Good digital work rarely comes from one person seeing everything correctly. Different perspectives catch different problems.",
    sections: [
      {
        heading: "The value of another perspective",
        blocks: [
          "There is a temptation in project work to treat expertise as ownership: one person makes the decision, everyone else executes it.",
          "That can be efficient for simple tasks. Complex digital work is different.",
          { list: ["A product decision can look reasonable from a business perspective and create a UX problem.", "A design can look good while creating implementation complexity.", "A technical solution can work while being difficult for users to understand."] },
          "Another perspective does not automatically make the answer correct. It creates an opportunity to see what the first person missed.",
        ],
      },
      {
        heading: "Challenge the idea without challenging the person",
        blocks: [
          "The most useful collaboration is not agreement for the sake of agreement.",
          "It is being able to say, “I see the reasoning, but what happens if we look at it this way?”",
          "That kind of discussion has been part of product and project work across design, development, QA, infrastructure, business and client conversations. Sometimes the original idea survives. Sometimes it changes. Sometimes the team discovers that both perspectives were incomplete.",
          "The objective is not to prove who was right. It is to reach a solution that has been examined from enough useful angles.",
        ],
      },
      {
        heading: "No ego, more context",
        blocks: [
          "This is especially important when AI is involved.",
          "AI can generate an answer quickly and can sound convincing even when context is missing. Another human perspective can expose assumptions, missing information or a better question.",
          "Four eyes are not better because two eyes are incapable. They are better because complex work benefits from more than one way of seeing it.",
        ],
      },
    ],
    quote: "Collaboration isn't about having more opinions. It is about increasing the chances that something important gets noticed.",
    related: { names: "EVOQ and cross-functional client projects", note: "Product, design, development, QA and business perspectives brought together around shared outcomes." },
  },

  "more-technology-doesnt-mean-more-transformation": {
    accent: "More Transformation",
    coverLabel: "Tools ≠ change",
    readMins: 4,
    lead: "Adding new technology can change a system. Transformation happens when the way people and businesses work actually improves.",
    sections: [
      {
        heading: "Technology is only one part of the change",
        blocks: [
          "Digital transformation is often described through technology: AI, cloud, automation, new software, new platforms or connected systems.",
          "Those things can be important. But technology by itself does not transform a business.",
          "If an organisation buys a new platform and keeps the same confusing process, the technology may simply make the old process digital.",
          "Transformation starts with the problem in the workflow, customer experience or operating model.",
        ],
      },
      {
        heading: "Start with the friction",
        blocks: [
          "The useful questions are practical.",
          { questions: ["Where is time being lost?", "Where are people repeating work?", "Where are customers getting stuck?", "Which information is disconnected?", "Which decisions depend on manual effort?", "Which parts of the process should change before technology is selected?"] },
          "Once those questions are understood, technology becomes a means of changing the situation.",
          "Sometimes the answer is a new product. Sometimes it is integration. Sometimes it is automation. Sometimes it is a simpler process with less software.",
        ],
      },
      {
        heading: "The best technology may be less technology",
        blocks: [
          "A transformation programme can create the impression that every problem needs another tool. It does not.",
          "A well-designed digital system should make the intended work easier, clearer or more scalable. If adding a platform introduces more administration than it removes, the technology may have solved a technical problem while creating a business one.",
          "The goal is not to maximise the amount of technology in the organisation. It is to use technology where it creates meaningful improvement.",
        ],
      },
    ],
    quote: "Transformation is not the number of tools a business adopts. It is the change those tools enable.",
    related: { names: "EVOQ and 365 Mobile Sync", note: "Digital solutions developed around operational needs rather than technology for its own sake." },
  },

  "the-right-product-isnt-always-your-product": {
    accent: "Isn't Always Your Product",
    coverLabel: "Customer first",
    readMins: 4,
    lead: "A product team should be willing to recommend the solution that fits the customer, even when that solution is not its own.",
    sections: [
      {
        heading: "Customer need comes before product ownership",
        blocks: [
          "Building a product creates a natural bias toward using it. The team knows it, has invested in it and wants it to succeed.",
          "But the customer does not owe the product that opportunity.",
          "If an existing solution solves the immediate requirement better, forcing a customer into an immature product can create unnecessary friction and damage trust.",
          "Product strategy therefore needs a degree of discipline: know what the product can do today, know what it will be able to do later, and be honest about the gap.",
        ],
      },
      {
        heading: "A real example",
        blocks: [
          "In a medical aesthetics project, the client needed an application while the in-house product ecosystem was not mature enough to support the requirement at that point.",
          "The practical decision was to recommend a third-party solution and support its implementation rather than forcing the client to wait for a future product capability.",
          "That did not mean abandoning the product. It meant separating the customer's immediate need from the longer-term product roadmap.",
          "When the relevant product capability becomes mature enough, it can be evaluated again against the customer's actual requirements.",
        ],
      },
      {
        heading: "Trust is part of product strategy",
        blocks: [
          "A product ecosystem grows through real customer needs. That does not mean every customer problem should be solved by the same product.",
          { list: ["Sometimes the right move is to integrate.", "Sometimes it is to partner.", "Sometimes it is to recommend another platform.", "Sometimes it is to build."] },
          "The important thing is to make the decision from the customer's context first and the product's ownership second.",
          "That is not a loss of product thinking. It is part of responsible product thinking.",
        ],
      },
    ],
    quote: "A product earns trust when the team is willing to say when it is not the right fit.",
    related: { names: "Lumiere Aesthetics", note: "Application research, third-party solution recommendation and implementation support based on the customer's immediate need." },
  },
};
