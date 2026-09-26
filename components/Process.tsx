"use client";

import { useEffect, useRef, useState } from "react";
import Tag from "./ui/Tag";
import Halftone from "./ui/Halftone";
import { PROCESS_STEPS } from "@/lib/site";
import styles from "./Process.module.css";

const AUTO_ADVANCE_MS = 5000;

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      setActiveStep((s) => (s + 1) % PROCESS_STEPS.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, []);

  const select = (i: number) => {
    pausedRef.current = true; // stop auto-advancing permanently once the user interacts
    setActiveStep(i);
  };

  const active = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className={styles.process}>
      <div className={styles.header}>
        <Tag>Process</Tag>
        <h2 className={styles.h2}>From idea → interface → production.</h2>
      </div>

      <div className={styles.grid}>
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

        <div id="process-panel" role="tabpanel" className={styles.panel}>
          <Halftone
            mask="radial-gradient(40% 50% at 95% 90%, #000, transparent 70%)"
            color="rgba(255,255,255,.9)"
          />
          <div className={styles.panelTop}>
            <span className={styles.bigNum} aria-hidden>
              {active.num}
            </span>
            <div className={styles.pips} aria-hidden>
              {PROCESS_STEPS.map((s, i) => (
                <span
                  key={s.num}
                  className={`${styles.pip} ${i === activeStep ? styles.pipActive : ""}`}
                />
              ))}
            </div>
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
