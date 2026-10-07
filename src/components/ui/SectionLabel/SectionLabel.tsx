import styles from "./SectionLabel.module.css";

type Props = { children: string; tone?: "dark" | "light"; id?: string };

export default function SectionLabel({ children, tone = "dark", id }: Props) {
  return (
    <p id={id} className={`${styles.label} eyebrow ${tone === "light" ? styles.light : ""}`}>
      <span className={styles.line} aria-hidden="true" />
      {children}
    </p>
  );
}
