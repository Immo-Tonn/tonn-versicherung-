"use client";

import { useEffect } from "react";

/** Desktop: Die feste Kopfzeile bekommt erst nach dem Scrollen einen hellen Hintergrund (body[data-scrolled]); oben bleibt sie wie bisher durchsichtig. */
export default function HeaderScrollState() {
  useEffect(() => {
    const update = () => document.body.toggleAttribute("data-scrolled", window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      document.body.removeAttribute("data-scrolled");
    };
  }, []);
  return null;
}
