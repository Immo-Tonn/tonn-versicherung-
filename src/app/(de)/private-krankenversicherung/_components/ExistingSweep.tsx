"use client";

import { useEffect, useRef } from "react";
import styles from "./Pkv.module.css";

/** Dekorativer Schimmer auf dem grauen Hintergrund der Tarifwechsel-Zeile: Durchlauf alle 7 s (4 s Bewegung, 3 s Pause), solange die Zeile im Sichtbereich ist. */
export default function ExistingSweep() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) el.dataset.play = e.isIntersecting ? "true" : "false";
    });
    io.observe(el.parentElement ?? el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={styles.existingSweep} aria-hidden="true">
      <span className={styles.existingSweepLight}>
        <span className={styles.existingSweepBar} />
      </span>
      <span className={styles.existingSweepDark}>
        <span className={`${styles.existingSweepBar} ${styles.existingSweepBarDark}`} />
      </span>
    </span>
  );
}
