"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./Ueber.module.css";

/** Einfacher, unabhängiger Aufklapper (mehrere können gleichzeitig offen sein). */
export default function Disclosure({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={styles.disc}>
      <button type="button" className={styles.discBtn} aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
        <span>{label}</span>
        <span className={`${styles.plus} ${open ? styles.plusOpen : ""}`} aria-hidden="true" />
      </button>
      <div id={id} className={`${styles.expand} ${open ? styles.expandOpen : ""}`} inert={!open}>
        <div className={styles.expandInner}>
          <div className={styles.discBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}
