"use client";

import { useEffect } from "react";

/**
 * Mobile Startseite: Die feste Kopfzeile ist über dem Hero-Foto durchsichtig mit weißem Logo (siehe hero-mobile-header.css).
 * Sobald der Hero (ohne Vertrauensleiste) nach oben aus dem Bild gescrollt ist, setzen wir `data-hero-passed` am <body>;
 * dann erscheint die Kopfzeile wieder hell mit dunklem Logo wie auf allen anderen Seiten. Ohne JavaScript bleibt der Anfangszustand (Foto sichtbar).
 */
export default function HeroHeaderTone() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    const bar = hero?.lastElementChild as HTMLElement | null;
    if (!hero || !bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerH = document.querySelector("header")?.getBoundingClientRect().height ?? 68;
      document.body.toggleAttribute("data-hero-passed", bar.getBoundingClientRect().top <= headerH);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.removeAttribute("data-hero-passed");
    };
  }, []);
  return null;
}
