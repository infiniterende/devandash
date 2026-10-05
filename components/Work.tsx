import Tag from "./ui/Tag";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/projects";
import styles from "./Work.module.css";

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
