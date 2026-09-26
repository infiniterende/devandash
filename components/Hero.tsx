import Image from "next/image";
import Nav from "./Nav";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Halftone from "./ui/Halftone";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <Halftone
        mask="radial-gradient(38% 42% at 12% 70%, #000, transparent 70%), radial-gradient(34% 40% at 90% 60%, #000, transparent 70%)"
        opacity={0.7}
      />
      <Nav />

      <div id="top" className={styles.center}>
        <Tag onGradient>Strategy. Design. Development.</Tag>
        <h1 className={styles.h1}>We design digital experiences people remember.</h1>
        <p className={styles.sub}>
          dev&amp;dash is an independent web design and development studio creating
          distinctive websites, digital products, and AI-powered experiences for
          ambitious brands, founders, and teams.
        </p>
        <div className={styles.actions}>
          <Button href="#contact" variant="light">
            Start a Project
          </Button>
          <Button href="#work" variant="ghost">
            Explore Our Work
          </Button>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={`${styles.status} ${styles.statusDesign}`}>
          <span className={styles.statusDot} style={{ background: "oklch(0.65 0.18 350)" }} />
          Design
        </div>
        <div className={`${styles.status} ${styles.statusDeployed}`}>
          <span className={styles.statusDot} style={{ background: "oklch(0.68 0.15 155)" }} />
          Deployed
        </div>

        <div className={`${styles.card} ${styles.cardSide} ${styles.cardLeft}`}>
          <div className={styles.cardHead}>
            <span>Steady</span>
            <span className={styles.cardMeta}>Productivity</span>
          </div>
          <div className={styles.cardImage}>
            <Image
              src="/images/steady-home.webp"
              alt="Steady — app screen"
              width={2000}
              height={1284}
              sizes="(max-width: 720px) 0px, 300px"
              className={styles.img}
            />
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.cardHead}>
            <span>Agilance — AI Triage</span>
            <span className={styles.cardMeta}>Healthcare</span>
          </div>
          <div className={styles.cardImage}>
            <Image
              src="/images/agilance-hero.webp"
              alt="Agilance — AI triage"
              width={2000}
              height={1142}
              priority
              sizes="(max-width: 720px) 100vw, 380px"
              className={styles.img}
            />
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSide} ${styles.cardRight}`}>
          <div className={styles.cardHead}>
            <span>Mind &amp; Spirit</span>
            <span className={styles.cardMeta}>Editorial</span>
          </div>
          <div className={styles.cardImage}>
            <Image
              src="/images/mind-spirit-home.webp"
              alt="Mind & Spirit — article page"
              width={2000}
              height={1054}
              sizes="(max-width: 720px) 0px, 300px"
              className={styles.img}
            />
          </div>
        </div>
      </div>

      <div className={styles.fade} />
    </section>
  );
}
