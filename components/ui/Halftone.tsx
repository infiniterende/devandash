import type { CSSProperties } from "react";
import styles from "./Halftone.module.css";

type HalftoneProps = {
  /** One or more radial-gradient() masks controlling where the dots appear. */
  mask: string;
  opacity?: number;
  /** Dot color. Defaults to soft white. */
  color?: string;
  /** Grid size in px. */
  size?: number;
};

export default function Halftone({
  mask,
  opacity = 1,
  color = "rgba(255,255,255,.85)",
  size = 8,
}: HalftoneProps) {
  const style: CSSProperties = {
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1.6px)`,
    backgroundSize: `${size}px ${size}px`,
    WebkitMaskImage: mask,
    maskImage: mask,
    opacity,
  };
  return <div aria-hidden className={styles.halftone} style={style} />;
}
