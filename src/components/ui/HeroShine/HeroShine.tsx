"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroShine.module.css";

const FIRST_PASS_MS = 5000;

/** Lichtstrahl-Ebene für die Haupt-Schaltfläche im Hero: erster Durchlauf 5 s nach dem Laden (nach dem Einblenden), danach Zyklus aus 4 s Bewegung und 1 s Pause. Pausiert außerhalb des Sichtbereichs und bei verstecktem Tab. */
export default function HeroShine() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const host = layer.closest("a") ?? layer.parentElement;
    if (!host) return;

    let started = false;
    let inView = false;
    let cancelled = false;
    const apply = () => {
      layer.dataset.state = started ? (inView && !document.hidden ? "run" : "pause") : "idle";
    };

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) inView = e.isIntersecting;
      apply();
    });
    io.observe(host);
    document.addEventListener("visibilitychange", apply);

    // Erst starten, wenn das Einblenden der Schaltfläche (Animationen an ihr und ihren Eltern) abgeschlossen ist
    const timer = window.setTimeout(async () => {
      const running: Promise<unknown>[] = [];
      for (let el: Element | null = host; el; el = el.parentElement) {
        for (const a of el.getAnimations()) if (a.effect?.getComputedTiming().iterations !== Infinity) running.push(a.finished.catch(() => undefined));
      }
      await Promise.all(running);
      if (cancelled) return;
      started = true;
      apply();
    }, Math.max(0, FIRST_PASS_MS - performance.now()));

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      io.disconnect();
      document.removeEventListener("visibilitychange", apply);
    };
  }, []);

  return (
    <span ref={ref} className={styles.layer} aria-hidden="true">
      <span className={styles.bar} />
    </span>
  );
}
