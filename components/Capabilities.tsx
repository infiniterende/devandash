import Tag from "./ui/Tag";
import { CAPABILITIES } from "@/lib/site";
import styles from "./Capabilities.module.css";

export default function Capabilities() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <section className={styles.section} aria-label="Selected capabilities">
      <Tag>Selected Capabilities</Tag>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {loop.map((c, i) => (
            <span key={`${c}-${i}`} className={styles.chip} aria-hidden={i >= CAPABILITIES.length}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
