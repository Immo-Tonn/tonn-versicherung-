"use client";

import { useEffect, useRef } from "react";
import styles from "./Pkv.module.css";

/** Dekorativer Lichtstrich am oberen Rand der Tarifwechsel-Zeile: ein Durchlauf, sobald die Zeile erstmals im Sichtbereich ist. */
export default function ExistingSweep() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        el.dataset.play = "true";
      },
      { threshold: 0.6 },
    );
    io.observe(el.parentElement ?? el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={styles.existingSweep} aria-hidden="true">
      <span className={styles.existingSweepBar} />
    </span>
  );
}
