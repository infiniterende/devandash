import styles from "./Cinematic.module.css";

type CinematicProps = {
  /** Film grain strength 0..1. */
  grain?: number;
  /** Vignette strength 0..1. */
  vignette?: number;
  /** Show the slow light sweep. */
  sweep?: boolean;
};

/**
 * Cinematic overlay for gradient panels: animated film grain, a soft vignette and a
 * slow diagonal light sweep. Purely decorative; all layers ignore pointer events and
 * stop animating under prefers-reduced-motion.
 */
export default function Cinematic({ grain = 0.12, vignette = 0.35, sweep = true }: CinematicProps) {
  return (
    <div aria-hidden className={styles.wrap}>
      {sweep && <div className={styles.sweep} />}
      <div className={styles.vignette} style={{ opacity: vignette }} />
      <div className={styles.grain} style={{ opacity: grain }} />
    </div>
  );
}
