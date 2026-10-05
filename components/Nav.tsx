import Logo from "./ui/Logo";
import { NAV_LINKS } from "@/lib/site";
import styles from "./Nav.module.css";

type NavProps = {
  /** href of the link to highlight, e.g. "/#work". */
  active?: string;
};

export default function Nav({ active = "/#work" }: NavProps) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <Logo href="/#top" />
      <div className={styles.pill}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.href === active ? `${styles.item} ${styles.active}` : styles.item}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a href="/#contact" className={styles.cta}>
        Start a Project
      </a>
    </nav>
  );
}
