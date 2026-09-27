import Tag from "./ui/Tag";
import ProjectCard, { type Project } from "./ProjectCard";
import styles from "./Work.module.css";

const PROJECTS: Project[] = [
  {
    slug: "steady",
    meta: "Product Design · UX/UI · Full-Stack Development · Productivity",
    title: "Steady",
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
    href: "#",
  },
  {
    slug: "agilance",
    meta: "Product Design · Full-Stack Development · AI · Healthcare",
    title: "Agilance — AI Triage",
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
    href: "#",
    imageRight: true,
  },
  {
    slug: "mind-spirit",
    meta: "Editorial Design · Web Development · Creative Direction",
    title: <>Mind &amp; Spirit</>,
    subtitle: "An editorial experience designed for slower reading.",
    paragraphs: [
      "A digital magazine exploring faith, mind, wellness, fiction, and art.",
      <>
        Mind &amp; Spirit brings the character of independent print publishing to the web
        through expressive typography, carefully structured storytelling, and an interface
        designed to make reading feel intentional again.
      </>,
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
    href: "#",
  },
  {
    slug: "catalysis",
    meta: "Product Design · Web & Mobile App · AI · Faith",
    title: "Catalysis",
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
    href: "#",
    imageRight: true,
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.header}>
        <div className={styles.headline}>
          <Tag>Selected Work</Tag>
          <h2 className={styles.h2}>Ideas, designed and built.</h2>
        </div>
        <div className={styles.copy}>
          <p>
            We work across brand websites, consumer apps, editorial experiences, SaaS
            products, healthcare technology, and AI-powered platforms.
          </p>
          <p>
            Every project begins with the same question:{" "}
            <strong className={styles.strong}>What should this experience feel like?</strong>{" "}
            Then we design and engineer everything around the answer.
          </p>
        </div>
      </div>

      {PROJECTS.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
