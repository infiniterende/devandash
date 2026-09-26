import styles from "./Tag.module.css";

type TagProps = {
  children: React.ReactNode;
  /** Render the translucent white variant for use on gradient panels. */
  onGradient?: boolean;
  className?: string;
};

export default function Tag({ children, onGradient = false, className }: TagProps) {
  return (
    <span
      className={[styles.tag, onGradient ? styles.onGradient : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.dot} />
      {children}
    </span>
  );
}
