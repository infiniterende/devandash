import styles from "./OneApproach.module.css";

const PRODUCTS = [
  {
    name: "Steady",
    line: "Productivity made calmer.",
    orb: "radial-gradient(circle at 30% 30%, oklch(0.88 0.07 300), oklch(0.72 0.12 280))",
  },
  {
    name: "Agilance",
    line: "Healthcare made more intelligent.",
    orb: "radial-gradient(circle at 30% 30%, oklch(0.88 0.07 230), oklch(0.72 0.12 255))",
  },
  {
    name: "Mind & Spirit",
    line: "Digital publishing made more intentional.",
    orb: "radial-gradient(circle at 30% 30%, oklch(0.9 0.06 10), oklch(0.72 0.12 345))",
  },
  {
    name: "Catalysis",
    line: "Faith made a daily habit.",
    orb: "radial-gradient(circle at 30% 30%, oklch(0.9 0.08 80), oklch(0.72 0.15 35))",
  },
];

export default function OneApproach() {
  return (
    <section className={styles.section} aria-label="One approach">
      <h2 className={styles.h2}>
        Four very different products.
        <br />
        <span className={styles.faint}>One approach.</span>
      </h2>
      <div className={styles.grid}>
        {PRODUCTS.map((p) => (
          <div key={p.name} className={styles.card}>
            <span className={styles.orb} style={{ background: p.orb }} />
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.line}>{p.line}</p>
          </div>
        ))}
      </div>
      <div className={styles.closing}>
        <p>Different industries. Different users. Different problems.</p>
        <p className={styles.ink}>
          The same obsession with creating thoughtful digital experiences.
        </p>
      </div>
    </section>
  );
}
