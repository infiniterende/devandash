/**
 * Project data shared by the Selected Work cards on the homepage and the
 * case study pages at /work/[slug].
 */
export type Project = {
  slug: string;
  name: string;
  /** Title shown on the homepage card (may be longer than `name`). */
  title: string;
  /** Short category line in Geist Mono, e.g. "Product Design · AI · Healthcare". */
  meta: string;
  /** Tagline shown under the title. */
  subtitle: string;
  /** Homepage card copy. */
  paragraphs: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  /** Background of the 4:3 image frame. */
  frameBackground: string;
  /** Shadow under the inset screenshot. */
  imageShadow: string;
  accent: string;
  cta: string;
  /** Put the image on the right at desktop widths on the homepage. */
  imageRight?: boolean;
  caseStudy: CaseStudy;
};

export type CaseStudy = {
  industry: string;
  productType: string;
  /** One-sentence summary used for the page header and meta description. */
  summary: string;
  problem: string[];
  constraint: string[];
  solution: string[];
  design: string[];
  engineering: string[];
  result: string[];
  /** Technologies used. Leave empty until confirmed; the page hides the row. */
  builtWith: string[];
  /** What dev&dash delivered on the project. */
  delivered: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "steady",
    name: "Steady",
    title: "Steady",
    meta: "Product Design · UX/UI · Full-Stack Development · Productivity",
    subtitle: "A calmer way to get things done.",
    paragraphs: [
      "Steady is a productivity app designed around a simple idea: staying productive shouldn't feel overwhelming.",
      "Instead of adding more noise to your day, Steady creates a focused space for organizing priorities, building better routines, and making consistent progress toward the things that matter.",
      "The experience pairs a minimal interface with thoughtful productivity tools, turning planning from another task into a habit that feels natural.",
    ],
    image: "/images/steady-home.webp",
    imageWidth: 2000,
    imageHeight: 1284,
    imageAlt: "Steady — product shots",
    frameBackground:
      "radial-gradient(70% 70% at 20% 90%, oklch(0.86 0.09 350), transparent 70%), radial-gradient(70% 70% at 90% 10%, oklch(0.8 0.1 275), transparent 70%), oklch(0.93 0.04 290)",
    imageShadow: "0 18px 40px rgba(60,40,140,.18)",
    accent: "#5a4fc4",
    cta: "Explore Steady →",
    caseStudy: {
      industry: "Productivity",
      productType: "Habit and routine app",
      summary:
        "A habit and routine app that turns daily planning into a calm, consistent practice instead of another source of noise.",
      problem: [
        "Most productivity tools reward adding more: more lists, more notifications, more features competing for attention. For the people Steady is built for, that noise is exactly what gets in the way of consistency.",
        "The product needed to help people organize priorities, build routines, and see real progress without making planning feel like one more task on the list.",
      ],
      constraint: [
        "Every screen had to earn its place. A tracker that takes more than a few seconds to update stops being used, so speed of daily interaction mattered more than feature count.",
        "The app also had to stay motivating over weeks, not just on day one, which meant streaks and progress had to feel honest rather than gamified.",
      ],
      solution: [
        "Steady centers the experience on a single daily view: today's actions, each with a time and duration, and a streak that reflects real consistency.",
        "Supporting views for focus minutes, goals, and routines sit one step away, so the daily habit stays simple while the longer-term picture remains available.",
      ],
      design: [
        "The interface uses a soft, warm palette and generous spacing so the app feels like a quiet space rather than a dashboard. Completed items are struck through in place, keeping the sense of a day filling up.",
        "Typography carries the hierarchy: a large, friendly headline, a clear list, and small supporting labels, with no decorative chrome.",
      ],
      engineering: [
        "dev&dash designed and built the product end to end, from the marketing site through the application itself, keeping the two visually continuous.",
        // TODO: confirm the stack with the client before listing specific technologies.
      ],
      result: [
        "A product where planning the day takes seconds, and where the calm visual language is a feature in itself: the thing that makes people come back.",
      ],
      builtWith: [],
      delivered: [
        "Product strategy",
        "UX/UI design",
        "Marketing website",
        "Full-stack development",
      ],
    },
  },
  {
    slug: "agilance",
    name: "Agilance",
    title: "Agilance — AI Triage",
    meta: "Product Design · Full-Stack Development · AI · Healthcare",
    subtitle: "Turning conversations into actionable clinical insight.",
    paragraphs: [
      "An AI-powered healthcare platform designed to help patients communicate symptoms and help clinicians understand them faster.",
      "Patients interact with an intelligent assistant through voice or text while the platform organizes symptoms, evaluates relevant risk factors, and transforms the conversation into structured clinical information.",
      "A clinician dashboard brings those insights together through patient histories, symptom summaries, risk visualization, and clinical workflows.",
    ],
    image: "/images/agilance-hero.webp",
    imageWidth: 2000,
    imageHeight: 1142,
    imageAlt: "Agilance — assistant + dashboard",
    frameBackground:
      "radial-gradient(70% 70% at 85% 90%, oklch(0.85 0.08 220), transparent 70%), radial-gradient(70% 70% at 10% 10%, oklch(0.78 0.11 260), transparent 70%), oklch(0.93 0.04 250)",
    imageShadow: "0 18px 40px rgba(40,60,140,.18)",
    accent: "#3f6fd1",
    cta: "View Project →",
    imageRight: true,
    caseStudy: {
      industry: "Healthcare",
      productType: "AI chest pain triage platform",
      summary:
        "An AI triage platform that helps patients describe chest pain by voice or text and gives clinicians structured, prioritized information before the visit.",
      problem: [
        "Cardiovascular symptoms are difficult to structure before clinician review. Patients describe chest pain in their own words, often incompletely, and clinicians spend scarce time reconstructing what matters.",
        "Care teams also had no reliable way to see, across many incoming patients, who needed attention first.",
      ],
      constraint: [
        "The experience had to work for anxious patients with no account and no training, by voice as well as text, in a few minutes.",
        "Every output had to be clinically structured and reviewable. The assistant supports clinicians; it never replaces their judgment, so the information it produces has to be transparent and easy to verify.",
      ],
      solution: [
        "Patients talk to an AI assistant that asks clinically structured questions about their symptoms by voice or text. As the conversation unfolds, the platform organizes symptoms, evaluates relevant risk factors, and turns the dialogue into structured clinical information.",
        "A clinician dashboard brings those results together: patient histories, symptom summaries, risk visualization, and workflows that surface who needs attention first.",
      ],
      design: [
        "The patient side is deliberately calm: one question at a time, a visible listening state, and clear controls for mute, end, and audio. Reassurance is built into the copy, from the three-minute promise to the privacy note under the primary button.",
        "The clinician side is dense by design. It favors scannable summaries, risk indicators, and consistent layouts so a care team can move through patients quickly.",
      ],
      engineering: [
        "The product combines a Next.js and TypeScript frontend with a FastAPI backend and a PostgreSQL database, with AI and voice infrastructure handling the conversational assistant and transcription.",
        "Structured clinical output is generated server-side and stored in a form the dashboard can query, so patient conversations become data clinicians can act on rather than transcripts to read.",
      ],
      result: [
        "A production platform that takes a patient from an unstructured description of chest pain to a structured clinical picture in minutes, and gives clinicians a prioritized view of incoming patients.",
        "For dev&dash, it demonstrates the full arc the studio is built around: product strategy, UX and UI, frontend, backend, AI integration, and deployment, delivered as one continuous effort.",
      ],
      builtWith: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "AI / voice infrastructure",
      ],
      delivered: [
        "Product strategy",
        "UX/UI design",
        "Frontend development",
        "Backend development",
        "AI integration",
        "Deployment",
      ],
    },
  },
  {
    slug: "mind-spirit",
    name: "Mind & Spirit",
    title: "Mind & Spirit",
    meta: "Editorial Design · Web Development · Creative Direction",
    subtitle: "An editorial experience designed for slower reading.",
    paragraphs: [
      "A digital magazine exploring faith, mind, wellness, fiction, and art.",
      "Mind & Spirit brings the character of independent print publishing to the web through expressive typography, carefully structured storytelling, and an interface designed to make reading feel intentional again.",
    ],
    image: "/images/mind-spirit-home.webp",
    imageWidth: 2000,
    imageHeight: 1054,
    imageAlt: "Mind & Spirit — editorial spreads",
    frameBackground:
      "radial-gradient(70% 70% at 80% 85%, oklch(0.86 0.08 20), transparent 70%), radial-gradient(70% 70% at 15% 15%, oklch(0.84 0.09 320), transparent 70%), oklch(0.94 0.03 330)",
    imageShadow: "0 18px 40px rgba(140,40,100,.15)",
    accent: "#b8467f",
    cta: "View Project →",
    caseStudy: {
      industry: "Editorial",
      productType: "Digital magazine",
      summary:
        "A digital magazine on faith, mind, wellness, fiction, and art, built to bring the character of independent print publishing to the web.",
      problem: [
        "Most online publishing is optimized for scrolling, not reading. Long-form writing about faith, mind, and wellness needs space, pacing, and typography that invite the reader to slow down.",
        "The publication wanted the feel of a well-made print magazine, including issues, sections, and a cover story, without giving up the reach of the web.",
      ],
      constraint: [
        "Expressive typography and full-bleed imagery had to stay readable on a phone, where most readers arrive.",
        "The design had to serve several kinds of writing at once: essays, reflections, fiction, and visual art, each with its own rhythm.",
      ],
      solution: [
        "A masthead-led layout with an issue bar, clearly named sections, and a cover story that takes the full width, followed by a sidebar of featured pieces by category.",
        "Articles open with a drop cap and a measured column so that reading, not navigation, is the main event.",
      ],
      design: [
        "High-contrast serif display type over black-and-white photography sets the editorial tone, with a single crimson accent reserved for labels and the cover story tag.",
        "Small caps, hairline rules, and generous margins give the pages the structure of print without imitating it.",
      ],
      engineering: [
        "dev&dash handled creative direction, design, and web development, building the publication as a fast, responsive site that keeps its typographic detail at every screen size.",
        // TODO: confirm the stack with the client before listing specific technologies.
      ],
      result: [
        "A publication that reads like a magazine and works like a website: an interface designed to make reading feel intentional again.",
      ],
      builtWith: [],
      delivered: ["Creative direction", "Editorial design", "Web development"],
    },
  },
  {
    slug: "catalysis",
    name: "Catalysis",
    title: "Catalysis",
    meta: "Product Design · Web & Mobile App · AI · Faith",
    subtitle: "Grow in faith, every day.",
    paragraphs: [
      "A Catholic companion app for Gen Z and college Catholics, designed to make daily faith feel as natural as opening any other app.",
      "Catalysis brings together daily scripture, a prayer guide with streaks, a community feed with prayer intentions, short-form reels, and events in one place.",
      "Lumen, its AI assistant, answers questions from Scripture and the Catechism with citations, across a web app and a mobile app in light and dark themes.",
    ],
    image: "/images/catalysis-home.webp",
    imageWidth: 2000,
    imageHeight: 1213,
    imageAlt: "Catalysis — landing page",
    frameBackground:
      "radial-gradient(70% 70% at 85% 90%, oklch(0.88 0.1 85), transparent 70%), radial-gradient(70% 70% at 10% 10%, oklch(0.82 0.11 35), transparent 70%), oklch(0.94 0.04 60)",
    imageShadow: "0 18px 40px rgba(160,70,30,.16)",
    accent: "#d4452b",
    cta: "View Project →",
    imageRight: true,
    caseStudy: {
      industry: "Faith",
      productType: "Catholic companion app, web and mobile",
      summary:
        "A Catholic companion app for Gen Z and college students that combines daily scripture, prayer, community, reels, events, and an AI assistant across web and mobile.",
      problem: [
        "Young Catholics live on their phones, but the apps built for them tend to feel either dated or disconnected from everyday life. Scripture, prayer, community, and events were scattered across several tools.",
        "The product needed to make daily faith feel as natural as opening any other app, with the energy of the platforms its audience already uses.",
      ],
      constraint: [
        "One product, two targets: a responsive web app and a native mobile app that share a visual system, a light and dark theme, and the same underlying data.",
        "Lumen, the AI assistant, had to answer questions from Scripture and the Catechism with citations, so accuracy and attribution mattered more than conversational flair.",
      ],
      solution: [
        "Catalysis brings daily scripture, a prayer guide with streaks, a community feed with prayer intentions, short-form reels, events, and a liturgical calendar into one place, with Lumen available throughout.",
        "The web app and the mobile app are built from shared tokens and a shared API package, so features and content stay consistent across both.",
      ],
      design: [
        "A Gen Z direction: bold display type, bright accent cards, a bento grid of features, and photography of sacred art, balanced by a calm reading mode for scripture.",
        "Every surface was designed in both light and dark mode from the start, with semantic color tokens so no screen hard-codes a theme.",
      ],
      engineering: [
        "The web app is built with Next.js, TypeScript, and Tailwind CSS. The mobile app uses Expo and React Native with Expo Router, sharing packages for the API, design tokens, and Bible text in a pnpm monorepo.",
        "Lumen is powered by the Claude API and runs server-side only, returning answers with structured citations.",
      ],
      result: [
        "A single faith companion that works on the web and on the phone, with daily habits, community, and an AI assistant that cites its sources.",
      ],
      builtWith: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Expo / React Native",
        "Claude API",
        "pnpm monorepo",
      ],
      delivered: [
        "Product strategy",
        "UX/UI design (web and mobile)",
        "Design system",
        "Web development",
        "Mobile development",
        "AI integration",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function projectHref(project: Pick<Project, "slug">): string {
  return `/work/${project.slug}`;
}
