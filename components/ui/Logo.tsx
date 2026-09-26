import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  /** nav: lockup for the hero gradient · footer: gradient lockup for light backgrounds */
  variant?: "nav" | "footer";
  href?: string;
};

export default function Logo({ variant = "nav", href }: LogoProps) {
  if (variant === "footer") {
    return (
      <Image
        src="/logo/dev-and-dash-logo-gradient-2x.webp"
        alt="dev&dash"
        width={150}
        height={40}
        className={styles.footer}
      />
    );
  }

  const img = (
    <Image
      src="/logo/dev-and-dash-logo-nav-2x.webp"
      alt="dev&dash"
      width={150}
      height={40}
      priority
      className={styles.nav}
    />
  );

  return href ? (
    <a href={href} className={styles.link} aria-label="dev&dash — home">
      {img}
    </a>
  ) : (
    img
  );
}
