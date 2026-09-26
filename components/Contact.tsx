import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Halftone from "./ui/Halftone";
import { CONTACT_HREF } from "@/lib/site";
import styles from "./Contact.module.css";

const PILLS = [
  { label: "Web Design", color: "#5a4fc4", dot: "#7b6ff0", pos: styles.pillWeb },
  { label: "Product Design", color: "#b8467f", dot: "oklch(0.65 0.18 350)", pos: styles.pillProduct },
  { label: "Development", color: "#3f6fd1", dot: "oklch(0.65 0.14 255)", pos: styles.pillDev },
  { label: "AI", color: "#2f8f5b", dot: "oklch(0.68 0.15 155)", pos: styles.pillAi },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Halftone
        mask="radial-gradient(50% 45% at 50% 50%, #000, transparent 75%)"
        color="rgba(123,111,240,.35)"
        size={9}
        opacity={0.5}
      />
      {PILLS.map((p) => (
        <div key={p.label} className={`${styles.pill} ${p.pos}`} style={{ color: p.color }} aria-hidden>
          <span className={styles.pillDot} style={{ background: p.dot }} />
          {p.label}
        </div>
      ))}

      <Tag className={styles.tag}>Have an idea?</Tag>
      <h2 className={styles.h2}>Let&apos;s make something worth clicking on.</h2>
      <div className={styles.lines}>
        <p>Maybe it&apos;s a new company.</p>
        <p>Maybe it&apos;s an app you&apos;ve been thinking about for months.</p>
        <p>Maybe your current website simply doesn&apos;t feel like your brand anymore.</p>
        <p>Or maybe it&apos;s something that hasn&apos;t quite existed before.</p>
        <p className={styles.emphasis}>That&apos;s the interesting part.</p>
        <p>Tell us what you&apos;re building.</p>
      </div>
      <Button href={CONTACT_HREF} variant="dark" className={styles.cta}>
        Start a Project →
      </Button>
    </section>
  );
}
