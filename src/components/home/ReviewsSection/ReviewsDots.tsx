"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ReviewsSection.module.css";

type Locale = "de" | "en" | "ru";

const LABELS: Record<Locale, { group: string; item: (n: number, total: number) => string; scroller: string }> = {
  de: { group: "Bewertungen auswählen", item: (n, t) => `Bewertung ${n} von ${t} anzeigen`, scroller: "Google-Bewertungen, seitlich wischen" },
  en: { group: "Choose a review", item: (n, t) => `Show review ${n} of ${t}`, scroller: "Google reviews, swipe sideways" },
  ru: { group: "Выбор отзыва", item: (n, t) => `Показать отзыв ${n} из ${t}`, scroller: "Отзывы Google, листайте вбок" },
};

/**
 * Telefon (≤ 767 px): Seitenindikatoren für das Bewertungs-Karussell (eine Bewertung pro Ansicht, siehe ReviewsSection.module.css).
 * Das Karussell ist die bestehende scrollbare Liste (CSS scroll-snap); hier gibt es nur Schaltflächen, die dorthin scrollen – kein automatisches
 * Weiterblättern, keine Bibliothek. Die Schaltflächen liegen außerhalb der Bewertungs-Links und lösen nie einen Link aus.
 */
export default function ReviewsDots({ listId, total, locale }: { listId: string; total: number; locale: Locale }) {
  const [active, setActive] = useState(0);
  const raf = useRef(0);
  const l = LABELS[locale];

  useEffect(() => {
    const list = document.getElementById(listId);
    if (!list) return;
    const mq = window.matchMedia("(max-width: 767px)");
    const slides = () => Array.from(list.children) as HTMLElement[];
    const update = () => {
      raf.current = 0;
      const left = list.scrollLeft;
      let best = 0;
      let dist = Infinity;
      slides().forEach((li, i) => {
        const d = Math.abs(li.offsetLeft - list.offsetLeft - left);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };
    // Auf dem Telefon ist die Liste ein Scroll-Container: per Tastatur fokussierbar (Pfeiltasten), mit Namen für Screenreader
    const sync = () => {
      if (mq.matches) {
        list.tabIndex = 0;
        list.setAttribute("aria-label", l.scroller);
      } else {
        list.removeAttribute("tabindex");
        list.removeAttribute("aria-label");
      }
    };
    sync();
    update();
    list.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", sync);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      list.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", sync);
    };
  }, [listId, l.scroller]);

  const go = (i: number) => {
    const list = document.getElementById(listId);
    const li = list?.children[i] as HTMLElement | undefined;
    if (!list || !li) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: li.offsetLeft - list.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={styles.dots} role="group" aria-label={l.group}>
      {Array.from({ length: total }, (_, i) => (
        <button key={i} type="button" className={styles.dot} aria-label={l.item(i + 1, total)} aria-current={i === active ? "true" : undefined} onClick={() => go(i)} />
      ))}
    </div>
  );
}
