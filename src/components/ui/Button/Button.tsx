import Link from "next/link";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "navy-soft" | "light";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

export default function Button({ href, children, variant = "primary", size = "md", arrow = true, className }: Props) {
  return (
    <Link href={href} className={[styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ")}>
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={18} strokeWidth={1.6} className={styles.arrow} />}
    </Link>
  );
}
