import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <p className={styles.statement}>
        From the first sketch to the final deploy, we combine thoughtful design with
        serious engineering{" "}
        <span className={styles.faint}>
          to create digital experiences that look exceptional — and work beautifully.
        </span>
      </p>
    </section>
  );
}
