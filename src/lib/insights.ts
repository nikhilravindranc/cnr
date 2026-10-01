export type InsightEntry = {
  slug?: string;
  title: string;
  tags: string[];
  body: string;
};

export const insights: InsightEntry[] = [
  {
    slug: "we-almost-built-the-wrong-product",
    title: "We Almost Built the Wrong Product",
    tags: ["Product", "SaaS", "Decision Making"],
    body: "An early product decision can look perfectly reasonable when development begins. Then research, real users and deeper thinking reveal what was missed.",
  },
  {
    slug: "ai-didnt-solve-the-problem",
    title: "AI Didn't Solve the Problem. Understanding the Problem Did.",
    tags: ["AI", "Product", "Execution"],
    body: "AI can make a good workflow dramatically faster. It can also make a poorly understood problem move in the wrong direction much faster.",
  },
  {
    slug: "the-website-wasnt-the-problem",
    title: "The Website Wasn't the Problem",
    tags: ["UX", "Positioning", "Digital"],
    body: "A website can look like the problem when the real issue is positioning, information, customer experience or a business that has outgrown its digital presence.",
  },
  {
    slug: "build-buy-or-adapt",
    title: "Build, Buy or Adapt?",
    tags: ["Product", "Technology", "Decisions"],
    body: "Custom development isn't automatically the best answer. An existing platform, third-party product, open-source solution or combination of tools may solve the problem faster and with less risk.",
  },
  {
    slug: "finished-doesnt-always-mean-finished",
    title: "Finished Doesn't Always Mean Finished",
    tags: ["Product", "QA", "Customer Experience"],
    body: "A project can pass QA, receive approval and be deployed — and still have problems. Real customers behave differently from test users.",
  },
  {
    slug: "minimal-doesnt-mean-apple",
    title: "Minimal Doesn't Mean Apple",
    tags: ["UX", "Design", "Product"],
    body: "A visual style can be copied. A product context cannot. Minimal interfaces only work when they are designed around the people, business and information behind them.",
  },
  {
    slug: "dont-promise-the-timeline",
    title: "Don't Promise the Timeline Before Understanding the Problem",
    tags: ["Product", "Project Management", "Planning"],
    body: "A deadline can be useful. An arbitrary deadline created before the problem is understood can become a constraint that damages the solution.",
  },
  {
    slug: "four-eyes-are-better-than-two",
    title: "Four Eyes Are Better Than Two",
    tags: ["Collaboration", "Decision Making"],
    body: "Another perspective can introduce information, risks or possibilities that weren't visible to the person making the original decision.",
  },
  {
    slug: "more-technology-doesnt-mean-more-transformation",
    title: "More Technology Doesn't Mean More Transformation",
    tags: ["Digital Transformation", "Technology", "Process"],
    body: "Replacing an old system isn't automatically transformation. Sometimes the biggest improvement comes from fixing the workflow, simplifying the experience or removing unnecessary steps.",
  },
  {
    slug: "the-right-product-isnt-always-your-product",
    title: "The Right Product Isn't Always Your Product",
    tags: ["Product", "Technology", "Customer Focus"],
    body: "A customer doesn't benefit from being pushed into a product simply because it already exists. Sometimes the right recommendation is a third-party solution.",
  },
];
