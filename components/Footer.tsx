import Logo from "./ui/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo variant="footer" />
          <p className={styles.blurb}>Independent web design &amp; development studio.</p>
        </div>
        <p className={styles.tagline}>
          Design thoughtfully. Build boldly.{" "}
          <span className={styles.accent}>Ship beautifully.</span>
        </p>
      </div>
      <div className={styles.bottom}>
        <span>Web Design · Product Design · Development · AI</span>
        <span>© 2026 dev&amp;dash</span>
      </div>
    </footer>
  );
}
