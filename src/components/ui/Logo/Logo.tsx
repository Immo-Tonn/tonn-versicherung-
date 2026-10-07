import Link from "next/link";
import styles from "./Logo.module.css";

type Props = { tone?: "dark" | "light" };

export default function Logo({ tone = "dark" }: Props) {
  return (
    <Link href="/" className={`${styles.logo} ${tone === "light" ? styles.light : ""}`} aria-label="TONN Versicherungsberatung – Startseite">
      <span className={styles.bar} aria-hidden="true" />
      <span className={styles.text}>
        <span className={styles.name}>TONN</span>
        <span className={styles.sub}>Versicherung</span>
      </span>
    </Link>
  );
}
