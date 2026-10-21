"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./hero-text-in.css";
import "./scroll-reveal.css";

/**
 * Überträgt das sanfte Einblenden der Seite /berufsunfaehigkeitsversicherung (Reveal.tsx) auf die übrigen Seiten, ohne deren Markup zu ändern.
 * Die Seite selbst (DE/EN/RU) bleibt unberührt und nutzt weiter ihr eigenes Reveal.
 *
 * Welche Blöcke: Bei Seiten aus Abschnitten (`main > section`) jeder Inhaltsblock eines Abschnitts (der Container, ohne Hintergrundbilder/Verläufe);
 * bei Fließtextseiten (Ratgeber, Unterseiten, Rechtstexte) jede Überschrift „h2“ samt dem darauffolgenden Text als EIN Block.
 * Nicht animiert: alles, was beim Laden schon im Sichtbereich liegt (erster Bildschirm), der erste Abschnitt (Hero), Formulare,
 * Kopfzeile, Menü, Cookie-Banner und Fußzeile (liegen außerhalb von <main>). Jeder Block blendet einmal pro Seitenaufruf ein, alle ohne Staffelung.
 */
const BU_PATH = /^(\/(en|ru))?\/berufsunfaehigkeitsversicherung\/?$/;
const SKIP_PATH = /\/danke\/?$/;

const isBackground = (el: Element) => {
  if (el.getAttribute("aria-hidden") === "true") return true;
  const pos = getComputedStyle(el).position;
  return pos === "absolute" || pos === "fixed";
};

const usable = (el: Element) => !["SCRIPT", "STYLE", "LINK", "TEMPLATE", "PICTURE", "SOURCE"].includes(el.tagName) && !isBackground(el) && !el.querySelector("form") && el.getBoundingClientRect().height > 0;

/** Ein Block = ein oder mehrere Elemente, die gemeinsam einblenden; `watch` sind die Elemente, deren Sichtbarkeit das Einblenden auslöst. */
type Block = { els: Element[]; watch: Element[] };

function collectBlocks(main: Element): Block[] {
  const blocks: Block[] = [];
  const first = main.firstElementChild;
  for (const child of Array.from(main.children)) {
    if (child === first) continue; // erster Abschnitt (Hero) / erster Bildschirm
    if (child.tagName === "SECTION") {
      for (const inner of Array.from(child.children)) if (usable(inner)) blocks.push({ els: [inner], watch: [inner] });
    }
  }
  // Fließtextseiten: Container mit mindestens zwei direkten h2-Überschriften
  for (const article of Array.from(main.querySelectorAll(":scope > article"))) {
    const queue: Element[] = [article];
    let flat: Element | null = null;
    for (let depth = 0; queue.length && depth < 400 && !flat; depth++) {
      const el = queue.shift() as Element;
      if (Array.from(el.children).filter((c) => c.tagName === "H2").length >= 2) flat = el;
      else queue.push(...Array.from(el.children));
    }
    if (!flat) continue;
    let group: Element[] | null = null; // Elemente vor der ersten Überschrift (Kopf, Kurzantwort) bleiben unberührt
    const flush = () => {
      if (group && group.length) blocks.push({ els: group, watch: [group[0], group[group.length - 1]] });
    };
    for (const el of Array.from(flat.children)) {
      if (el.tagName === "H2") {
        flush();
        group = [el];
      } else if (group && usable(el)) group.push(el);
    }
    flush();
  }
  return blocks;
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (BU_PATH.test(pathname) || SKIP_PATH.test(pathname)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const main = document.querySelector("main");
    if (!main) return;

    const applied: Element[] = [];
    const observers: IntersectionObserver[] = [];
    let timers: number[] = [];
    const show = (els: Element[]) => {
      for (const el of els) {
        if (el.getAttribute("data-sr") !== "pending") continue;
        el.setAttribute("data-sr", "done");
        // Danach das Attribut entfernen, damit eigene Übergänge des Elements (z. B. Hover) unverändert bleiben
        timers.push(window.setTimeout(() => el.removeAttribute("data-sr"), 900));
      }
    };

    try {
      const vh = window.innerHeight;
      const blocks = collectBlocks(main).filter((b) => b.els.every((el) => el.getBoundingClientRect().top >= vh)); // nur, was unterhalb des ersten Bildschirms liegt
      for (const block of blocks) {
        for (const el of block.els) el.setAttribute("data-sr", "pending");
        applied.push(...block.els);
        const io = new IntersectionObserver(
          (entries) => {
            if (!entries.some((e) => e.isIntersecting && (e.intersectionRatio >= 0.12 || e.intersectionRect.height >= window.innerHeight * 0.4))) return;
            io.disconnect();
            show(block.els);
          },
          { threshold: [0, 0.05, 0.12, 0.25, 0.5], rootMargin: "0px 0px -6% 0px" },
        );
        block.watch.forEach((w) => io.observe(w));
        observers.push(io);
      }
    } catch {
      // bei jedem Fehler: alles sofort zeigen, nie dauerhaft verborgen lassen
      applied.forEach((el) => el.removeAttribute("data-sr"));
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
      applied.forEach((el) => el.removeAttribute("data-sr"));
    };
  }, [pathname]);

  return null;
}
