"use client";

import { Children, useEffect, useRef, useState } from "react";
import { useMinWidth, useReducedMotion } from "./useReducedMotion";
import styles from "./HorizontalScroller.module.css";

type HorizontalScrollerProps = {
  children: React.ReactNode;
  /** Class for the vertical fallback container. */
  fallbackClassName?: string;
  /** Scroll distance per slide, as a fraction of the viewport height. */
  perSlide?: number;
};

/**
 * Pins its slides and converts vertical scrolling into a cinematic horizontal pass
 * through them, with per-slide depth (rotation, scale, fade) based on distance
 * from the viewport centre. Each slide also receives --shift for inner parallax.
 * Falls back to a vertical stack on narrow screens and under prefers-reduced-motion.
 */
export default function HorizontalScroller({ children, fallbackClassName, perSlide = 0.85 }: HorizontalScrollerProps) {
  const reduced = useReducedMotion();
  const wide = useMinWidth(940);
  const enabled = wide && !reduced;
  const items = Children.toArray(children);

  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !viewport || !track || !bar) return;

    const slides = Array.from(track.children) as HTMLElement[];
    let raf = 0;
    let current = -1;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const maxShift = Math.max(0, track.scrollWidth - viewport.clientWidth);
      track.style.transform = `translate3d(${(-progress * maxShift).toFixed(2)}px, 0, 0)`;
      bar.style.transform = `scaleX(${progress.toFixed(4)})`;

      const vr = viewport.getBoundingClientRect();
      const vpCenter = vr.width / 2;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((slide, i) => {
        const r = slide.getBoundingClientRect();
        const center = r.left - vr.left + r.width / 2;
        const d = Math.max(-1, Math.min(1, (center - vpCenter) / vr.width));
        const ad = Math.abs(d);
        slide.style.transform = `perspective(1400px) rotateY(${(-d * 7).toFixed(2)}deg) scale(${(1 - ad * 0.06).toFixed(4)})`;
        slide.style.opacity = (1 - ad * 0.35).toFixed(3);
        slide.style.setProperty("--shift", `${(d * 26).toFixed(1)}px`);
        if (ad < bestDist) {
          bestDist = ad;
          best = i;
        }
      });
      if (best !== current) {
        current = best;
        setActive(best);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(track);
    update();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, items.length]);

  if (!enabled) {
    return <div className={fallbackClassName ?? styles.stack}>{items}</div>;
  }

  return (
    <div
      ref={sectionRef}
      className={styles.pin}
      style={{ height: `calc(${items.length} * ${perSlide * 100}vh + 100vh)` }}
    >
      <div ref={viewportRef} className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
          {items.map((item, i) => (
            <div key={i} className={styles.slide}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.hud} aria-hidden>
          <span className={styles.counter}>
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <span className={styles.barTrack}>
            <span ref={barRef} className={styles.bar} />
          </span>
          <span className={styles.hint}>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
