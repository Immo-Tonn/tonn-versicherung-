"use client";

import { useEffect, useRef } from "react";
import styles from "./Bu.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Richtung der sehr dezenten Einblendung */
  from?: "up" | "left" | "right";
  delay?: number;
};

/**
 * Sanftes Einblenden beim Scrollen (nur opacity + transform, daher kein Layout-Shift).
 * Ohne JS oder bei prefers-reduced-motion bleibt der Inhalt sofort sichtbar.
 */
export default function Reveal({ children, className, from = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    el.classList.add(styles.pending);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove(styles.pending);
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dir = from === "left" ? styles.fromLeft : from === "right" ? styles.fromRight : styles.fromUp;
  return (
    <div ref={ref} className={[styles.reveal, dir, className].filter(Boolean).join(" ")} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
