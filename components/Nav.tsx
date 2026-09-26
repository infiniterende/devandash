import Logo from "./ui/Logo";
import { NAV_LINKS } from "@/lib/site";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <Logo href="#top" />
      <div className={styles.pill}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={i === 0 ? `${styles.item} ${styles.active}` : styles.item}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a href="#contact" className={styles.cta}>
        Start a Project
      </a>
    </nav>
  );
}
