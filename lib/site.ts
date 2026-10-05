/** Contact email for "Start a Project" buttons. */
export const CONTACT_EMAIL = "devanddash@gmail.com";
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

/** Canonical site URL used for absolute OG/Twitter image URLs. Update on launch. */
export const SITE_URL = "https://devanddash.com";

export const SITE_TITLE = "dev&dash — Web design & development studio";
export const SITE_DESCRIPTION =
  "dev&dash is an independent web design and development studio creating distinctive websites, digital products, and AI-powered experiences for ambitious brands, founders, and teams.";

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    name: "Discover",
    lead: "We start with the problem.",
    body: "We learn about your users, your brand, your goals, and what you're trying to build before deciding what the solution should look like.",
  },
  {
    num: "02",
    name: "Design",
    lead: "We transform the idea into an experience.",
    body: "Information architecture, visual direction, typography, interfaces, interactions, and prototypes come together into a cohesive product.",
  },
  {
    num: "03",
    name: "Build",
    lead: "Then we make it real.",
    body: "We turn the design into responsive, performant, maintainable software using modern web technologies.",
  },
  {
    num: "04",
    name: "Launch",
    lead: "Finally, we obsess over the details.",
    body: "Testing, performance, responsiveness, deployment, and refinement turn the project from a prototype into something people can actually use.",
  },
] as const;

export const CAPABILITIES = [
  "Web Design",
  "Product Design",
  "UI & UX",
  "Creative Development",
  "Full-Stack Development",
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "AI & LLM Applications",
  "Voice AI",
  "SaaS",
  "APIs",
  "Dashboards",
  "Design Systems",
  "Cloud Deployment",
] as const;
