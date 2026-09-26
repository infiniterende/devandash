import Tag from "./ui/Tag";
import styles from "./Services.module.css";

const SERVICES = [
  {
    index: "01",
    indexColor: "#5a4fc4",
    title: "Web Design",
    background:
      "radial-gradient(80% 80% at 90% 100%, oklch(0.86 0.09 350), transparent 70%), oklch(0.9 0.05 300)",
    description:
      "Distinctive digital experiences built around your brand rather than a template.",
    items: [
      "Brand websites",
      "Editorial experiences",
      "Landing pages",
      "Portfolio websites",
      "Responsive design",
      "Design systems",
    ],
  },
  {
    index: "02",
    indexColor: "#5a4fc4",
    title: "Product Design",
    background:
      "radial-gradient(80% 80% at 90% 100%, oklch(0.86 0.07 230), transparent 70%), oklch(0.88 0.06 275)",
    description: "We turn complicated ideas into interfaces that feel simple.",
    items: [
      "UX strategy",
      "Information architecture",
      "User flows",
      "Wireframes",
      "Prototypes",
      "Product interfaces",
      "Design systems",
    ],
  },
  {
    index: "03",
    indexColor: "#3f6fd1",
    title: "Development",
    background:
      "radial-gradient(80% 80% at 90% 100%, oklch(0.85 0.07 200), transparent 70%), oklch(0.87 0.06 250)",
    description: "Production-ready applications built with modern technology.",
    items: [
      "React & Next.js",
      "TypeScript",
      "Python",
      "APIs & backend systems",
      "Databases",
      "Authentication",
      "Cloud infrastructure",
    ],
  },
  {
    index: "04",
    indexColor: "#b8467f",
    title: "AI Experiences",
    background:
      "radial-gradient(80% 80% at 90% 100%, oklch(0.87 0.08 10), transparent 70%), oklch(0.89 0.06 320)",
    description:
      "AI should feel like part of the experience — not something pasted on top of it.",
    items: [
      "Conversational AI",
      "Voice experiences",
      "AI assistants",
      "LLM applications",
      "Intelligent workflows",
      "AI-powered interfaces",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.header}>
        <div className={styles.headline}>
          <Tag>What We Do</Tag>
          <h2 className={styles.h2}>
            Design that has a point of view.
            <br />
            <span className={styles.faint}>Engineering that makes it real.</span>
          </h2>
        </div>
        <p className={styles.lede}>
          dev&amp;dash works across the entire digital product lifecycle — from the first
          idea to production.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div key={s.index} className={styles.card}>
            <div className={styles.cardHeader} style={{ background: s.background }}>
              <span className={styles.index} style={{ color: s.indexColor }}>
                {s.index}
              </span>
              <h3 className={styles.title}>{s.title}</h3>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.description}>{s.description}</p>
              <div className={styles.list}>
                {s.items.map((item) => (
                  <span key={item} className={styles.item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
