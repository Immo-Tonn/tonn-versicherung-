import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

type Props = { children: ReactNode; as?: ElementType; className?: string };

export default function Container({ children, as: Tag = "div", className }: Props) {
  return <Tag className={[styles.container, className].filter(Boolean).join(" ")}>{children}</Tag>;
}
