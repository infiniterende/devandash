import type { CSSProperties } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /** light: white bg on gradient · dark: ink bg · ghost: translucent outline on gradient */
  variant?: "light" | "dark" | "ghost";
  /** Hover background for the dark variant (the section accent). */
  hoverColor?: string;
  size?: "sm" | "md";
  className?: string;
  style?: CSSProperties;
};

export default function Button({
  href,
  children,
  variant = "light",
  hoverColor,
  size = "md",
  className,
  style,
}: ButtonProps) {
  const cssVars = hoverColor ? ({ "--hover-bg": hoverColor } as CSSProperties) : undefined;
  return (
    <a
      href={href}
      className={[styles.button, styles[variant], styles[size], className ?? ""]
        .filter(Boolean)
        .join(" ")}
      style={{ ...cssVars, ...style }}
    >
      {children}
    </a>
  );
}
