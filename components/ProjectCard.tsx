import Image from "next/image";
import Button from "./ui/Button";
import styles from "./ProjectCard.module.css";

export type Project = {
  slug: string;
  meta: string;
  title: React.ReactNode;
  subtitle: string;
  paragraphs: React.ReactNode[];
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
  href: string;
  /** Put the image on the right at desktop widths. */
  imageRight?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  const {
    meta,
    title,
    subtitle,
    paragraphs,
    image,
    imageWidth,
    imageHeight,
    imageAlt,
    frameBackground,
    imageShadow,
    accent,
    cta,
    href,
    imageRight = false,
  } = project;

  return (
    <article className={`${styles.card} ${imageRight ? styles.imageRight : ""}`}>
      <div className={styles.frame} style={{ background: frameBackground }}>
        <div className={styles.shot} style={{ boxShadow: imageShadow }}>
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 940px) 100vw, 640px"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.text}>
        <span className={styles.meta}>{meta}</span>
        <div className={styles.titles}>
          <h3 className={styles.h3}>{title}</h3>
          <h4 className={styles.h4} style={{ color: accent }}>
            {subtitle}
          </h4>
        </div>
        <div className={styles.body}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Button href={href} variant="dark" size="sm" hoverColor={accent} className={styles.cta}>
          {cta}
        </Button>
      </div>
    </article>
  );
}
