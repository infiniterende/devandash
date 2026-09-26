import Tag from "./ui/Tag";
import Halftone from "./ui/Halftone";
import styles from "./Approach.module.css";

export default function Approach() {
  return (
    <section className={styles.approach} aria-label="Approach">
      <Halftone
        mask="radial-gradient(30% 40% at 8% 85%, #000, transparent 70%), radial-gradient(30% 40% at 95% 20%, #000, transparent 70%)"
        opacity={0.8}
      />
      <div className={styles.header}>
        <Tag onGradient className={styles.tag}>
          Not just pretty websites.
        </Tag>
        <h2 className={styles.h2}>
          Digital products should be beautiful <em className={styles.em}>and</em> useful.
        </h2>
      </div>

      <div className={styles.glass}>
        <div className={styles.quoteCard}>
          <span className={styles.brand}>dev&amp;dash</span>
          <p className={styles.quote}>
            Beautiful on the surface. <span className={styles.faint}>Solid underneath.</span>
          </p>
        </div>
        <div className={styles.textCard}>
          <p className={styles.lead}>Great design isn&apos;t decoration.</p>
          <p>
            It&apos;s understanding what someone needs, removing everything that gets in
            their way, and creating an experience that feels almost inevitable.
          </p>
          <p>That&apos;s why dev&amp;dash brings design and engineering together.</p>
          <p>
            We obsess over the details people see — typography, spacing, motion, hierarchy,
            and interaction — while engineering the systems they don&apos;t.
          </p>
        </div>
      </div>
    </section>
  );
}
