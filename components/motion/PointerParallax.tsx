"use client";

import { useEffect, useRef } from "react";

type PointerParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** How far (px) the scroll offset is tracked before clamping. */
  scrollRange?: number;
};

/**
 * Exposes pointer position (--px, --py in -1..1) and scroll progress through the
 * element (--sy in 0..1) as CSS variables on the wrapper, so children can build
 * parallax and tilt purely in CSS. Updates are batched into one frame.
 */
export default function PointerParallax({ children, className, scrollRange = 900 }: PointerParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let px = 0;
    let py = 0;
    let targetX = 0;
    let targetY = 0;
    let sy = 0;
    let raf = 0;
    let running = true;

    const tick = () => {
      // Ease the pointer so the motion feels weighted rather than jittery.
      px += (targetX - px) * 0.08;
      py += (targetY - py) * 0.08;
      el.style.setProperty("--px", px.toFixed(4));
      el.style.setProperty("--py", py.toFixed(4));
      el.style.setProperty("--sy", sy.toFixed(4));
      if (running) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width) * 2 - 1;
      targetY = ((e.clientY - r.top) / r.height) * 2 - 1;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const onScroll = () => {
      const top = el.getBoundingClientRect().top;
      sy = Math.min(1, Math.max(0, -top / scrollRange));
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollRange]);

  return (
    <div ref={ref} className={className} style={{ "--px": 0, "--py": 0, "--sy": 0 } as React.CSSProperties}>
      {children}
    </div>
  );
}
