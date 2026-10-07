"use client";

import { useId, useState, type ReactNode } from "react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./Pkv.module.css";

type Props = {
  /** serverseitig gerendertes <Photo> (Photo nutzt node:fs und darf nicht im Client-Bundle landen) */
  photo: ReactNode;
  title: string;
  text: string;
  more: string;
  openLabel: string;
  closeLabel: string;
};

export default function TargetCard({ photo, title, text, more, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={styles.target}>
      {photo}
      <h3>{title}</h3>
      <p>{text}</p>
      <div id={panelId} className={`${styles.expand} ${open ? styles.expandOpen : ""}`}>
        <div className={styles.expandInner}>
          <p className={styles.expandText}>{more}</p>
        </div>
      </div>
      <button type="button" className={styles.more} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((v) => !v)}>
        {open ? closeLabel : openLabel}
        <Icon name="arrow" size={16} className={open ? styles.moreUp : undefined} />
      </button>
    </div>
  );
}
