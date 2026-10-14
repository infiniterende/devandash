"use client";

import { useEffect, useRef, useState } from "react";
import Tag from "./ui/Tag";
import Halftone from "./ui/Halftone";
import { useMinWidth, useReducedMotion } from "./motion/useReducedMotion";
import { PROCESS_STEPS } from "@/lib/site";
import styles from "./Process.module.css";

const AUTO_ADVANCE_MS = 5000;
const N = PROCESS_STEPS.length;

/**
 * Process section. On wide screens the section pins and vertical scrolling slides
 * horizontally through the four steps. On narrow screens and under
 * prefers-reduced-motion it is a clickable stepper that auto-advances.
 */
export default function Process() {
  const reduced = useReducedMotion();
  const wide = useMinWidth(940);
  const scrollDriven = wide && !reduced;

  const [activeStep, setActiveStep] = useState(0);
  const pausedRef = useRef(false);

  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Fallback: auto-advance until the user picks a step.
  useEffect(() => {
    if (scrollDriven || reduced) return;
    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      setActiveStep((s) => (s + 1) % N);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [scrollDriven, reduced]);

  // Scroll-driven: map progress through the pinned section to a horizontal position.
  useEffect(() => {
    if (!scrollDriven) return;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    let raf = 0;
    let current = -1;

    const update = () => {
      raf = 0;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const x = progress * (N - 1);
      track.style.transform = `translate3d(${(-x * 100).toFixed(3)}%, 0, 0)`;
      slides.forEach((slide, i) => {
        const d = Math.max(-1, Math.min(1, i - x));
        slide.style.setProperty("--d", d.toFixed(4));
      });
      const next = Math.round(x);
      if (next !== current) {
        current = next;
        setActiveStep(next);
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scrollDriven]);

  const select = (i: number) => {
    pausedRef.current = true;
    if (scrollDriven && pinRef.current) {
      const pin = pinRef.current;
      const top = pin.getBoundingClientRect().top + window.scrollY;
      const total = pin.offsetHeight - window.innerHeight;
      window.scrollTo({ top: top + (total * i) / (N - 1), behavior: "smooth" });
      return;
    }
    setActiveStep(i);
  };

  const header = (
    <div className={styles.header}>
      <Tag>Process</Tag>
      <h2 className={styles.h2}>From idea → interface → production.</h2>
    </div>
  );

  const stepList = (
    <div className={styles.steps} role="tablist" aria-label="Process steps">
      {PROCESS_STEPS.map((s, i) => {
        const isActive = i === activeStep;
        return (
          <button
            key={s.num}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="process-panel"
            onClick={() => select(i)}
            className={`${styles.step} ${isActive ? styles.stepActive : ""}`}
          >
            <span className={styles.stepNum}>{s.num}</span>
            {s.name}
          </button>
        );
      })}
    </div>
  );

  const pips = (
    <div className={styles.pips} aria-hidden>
      {PROCESS_STEPS.map((s, i) => (
        <span key={s.num} className={`${styles.pip} ${i === activeStep ? styles.pipActive : ""}`} />
      ))}
    </div>
  );

  if (!scrollDriven) {
    const active = PROCESS_STEPS[activeStep];
    return (
      <section id="process" className={styles.process}>
        {header}
        <div className={styles.grid}>
          {stepList}
          <div id="process-panel" role="tabpanel" className={styles.panel}>
            <Halftone mask="radial-gradient(40% 50% at 95% 90%, #000, transparent 70%)" color="rgba(255,255,255,.9)" />
            <div className={styles.panelTop}>
              <span className={styles.bigNum} aria-hidden>
                {active.num}
              </span>
              {pips}
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>
                {active.num} — {active.name}
              </span>
              <h3 className={styles.lead}>{active.lead}</h3>
              <p className={styles.body}>{active.body}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" className={`${styles.process} ${styles.processPinned}`}>
      <div ref={pinRef} className={styles.pin} style={{ height: `calc(${N} * 60vh + 100vh)` }}>
        <div className={styles.viewport}>
          {header}
          <div className={styles.grid}>
            {stepList}
            <div id="process-panel" role="tabpanel" className={`${styles.panel} ${styles.panelScroll}`}>
              <Halftone mask="radial-gradient(40% 50% at 95% 90%, #000, transparent 70%)" color="rgba(255,255,255,.9)" />
              <div className={styles.pipsFloating}>{pips}</div>
              <div ref={trackRef} className={styles.track}>
                {PROCESS_STEPS.map((s) => (
                  <div key={s.num} className={styles.slide}>
                    <div className={styles.panelTop}>
                      <span className={styles.bigNum} aria-hidden>
                        {s.num}
                      </span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>
                        {s.num} — {s.name}
                      </span>
                      <h3 className={styles.lead}>{s.lead}</h3>
                      <p className={styles.body}>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <span className={styles.scrollHint} aria-hidden>
                Scroll
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
