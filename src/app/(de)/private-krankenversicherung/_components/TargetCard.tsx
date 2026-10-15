import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./Pkv.module.css";

type Props = {
  /** serverseitig gerendertes <Photo> (Photo nutzt node:fs und darf nicht im Client-Bundle landen) */
  photo: ReactNode;
  title: string;
  text: string;
  /** Ziel der Unterseite */
  href: string;
  linkLabel: string;
};

export default function TargetCard({ photo, title, text, href, linkLabel }: Props) {
  return (
    <div className={styles.target}>
      {photo}
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href={href} className={styles.more}>
        {linkLabel}
        <Icon name="arrow" size={16} />
        <span className="sr-only"> zu {title}</span>
      </Link>
    </div>
  );
}
