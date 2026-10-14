"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  /** Starting transform: rise (default) tilts up from below; none only fades. */
  from?: "rise" | "none";
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fades and tilts its content into place the first time it scrolls into view.
 * Uses transform/opacity only; honours prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, delay = 0, from = "rise", className, style, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add(styles.in);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[styles.reveal, from === "rise" ? styles.rise : "", className ?? ""].filter(Boolean).join(" ")}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
