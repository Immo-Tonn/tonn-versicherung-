"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import Icon from "../Icon/Icon";
import { backgroundTone, type Tone } from "./fab-tone";
import styles from "./CallFab.module.css";

const FIELD = "input:not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]), textarea, select";

function ucShadow(): ShadowRoot | null {
  return document.getElementById("usercentrics-cmp-ui")?.shadowRoot ?? null;
}

const shown = (e: Element | null | undefined) => {
  const r = e?.getBoundingClientRect();
  return Boolean(r && r.width > 0 && r.height > 0);
};

/**
 * Ist die Cookie-Einwilligung (Usercentrics oder eigener Banner) gerade sichtbar? Usercentrics zeichnet in einem Shadow-DOM: Solange Banner oder
 * Einstellungen offen sind, gibt es dort #uc-overlay (gemessen am echten Banner); danach bleibt nur der runde Privatsphäre-Button (#uc-privacy-button).
 */
function consentOpen(): boolean {
  if (shown(ucShadow()?.querySelector("#uc-overlay"))) return true;
  return Boolean(document.querySelector('[role="dialog"][aria-labelledby]:not([hidden])'));
}

/** Runder Privatsphäre-Button von Usercentrics (unten links): die Schaltfläche "Anrufen" rückt dann nach rechts, statt ihn zu verdecken. */
const ucPrivacyButton = () => shown(ucShadow()?.querySelector("#uc-privacy-button"));

/** Hero-Button im ersten Abschnitt ("Kostenloses Erstgespräch" u. ä.): erster sichtbarer Link dort, der auf die Kontaktseite führt. */
function heroCta(): HTMLElement | null {
  const links = document.querySelectorAll<HTMLAnchorElement>("main > section:first-of-type a[href]");
  for (const a of links) {
    if (!/\/kontakt\/?$/.test(a.getAttribute("href") ?? "")) continue;
    if (a.getBoundingClientRect().height >= 44) return a;
  }
  return null;
}

/** Unterkante der Hero-Aktionen: Hero-Button und weitere Kontakt-Links im selben Block (z. B. "Termin anfragen" samt Unterstreichung). */
function heroCtaBottom(cta: HTMLElement): number {
  let bottom = cta.getBoundingClientRect().bottom;
  for (const a of cta.parentElement?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []) {
    if (!/\/kontakt\/?(#.*)?$/.test(a.getAttribute("href") ?? "")) continue;
    bottom = Math.max(bottom, a.getBoundingClientRect().bottom);
  }
  return bottom;
}

/**
 * Nur Telefon (≤ 767 px, siehe CSS): EINE feste Schaltfläche "Anrufen" am unteren Rand, direkt unter dem Hero-Button.
 * Ausgeblendet bei geöffnetem Menü (CSS), sichtbarer Cookie-Einwilligung und solange ein Formularfeld den Fokus hat (Bildschirmtastatur).
 * Außerdem, solange der Hero-Button (und ein zweiter Kontakt-Link im selben Block) in der unteren Zone des Bildschirms liegt (dort würde sie ihn überdecken): sie erscheint, sobald
 * diese Links über die Zone hinausgescrollt sind, und verschwindet beim Zurückscrollen wieder. Mit 12 px Hysterese, damit sie an der Grenze nicht flackert.
 * Ohne JavaScript bleibt sie sichtbar. Wie der Header-Button ein normaler tel:-Link (Zählung click_phone über GoogleAnalytics.tsx).
 */
export default function CallFab({ label, ariaLabel }: { label: string; ariaLabel: string }) {
  const [hidden, setHidden] = useState(false);
  const [shifted, setShifted] = useState(false);
  const [tone, setTone] = useState<Tone>(null);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let frame = 0;
    let typing = false;
    let overCta = false;
    const update = () => {
      frame = 0;
      const cta = heroCta();
      const fab = ref.current;
      if (cta && fab) {
        const zoneTop = fab.getBoundingClientRect().top - 8; // Oberkante der Schaltfläche samt Abstand
        const bottom = heroCtaBottom(cta);
        overCta = overCta ? bottom > zoneTop - 12 : bottom > zoneTop;
      } else overCta = false;
      setHidden(typing || overCta || consentOpen());
      setShifted(ucPrivacyButton());
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onIn = (e: FocusEvent) => {
      if ((e.target as Element | null)?.matches?.(FIELD)) {
        typing = true;
        schedule();
      }
    };
    const onOut = () => {
      typing = false;
      schedule();
    };
    // Hintergrundfarbe unter der Schaltfläche: gedrosselt (höchstens alle 100 ms, nachlaufend), nicht bei jedem Scroll-Ereignis
    let toneTimer = 0;
    const sampleTone = () => {
      toneTimer = 0;
      const fab = ref.current;
      if (fab && !fab.hasAttribute("data-hidden")) setTone(backgroundTone(fab));
    };
    const scheduleTone = () => {
      if (!toneTimer) toneTimer = window.setTimeout(sampleTone, 100);
    };
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class", "hidden", "aria-hidden"] });
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("scroll", scheduleTone, { passive: true });
    window.addEventListener("resize", scheduleTone);
    window.addEventListener("load", scheduleTone);
    scheduleTone();
    const events = ["UC_UI_INITIALIZED", "UC_UI_VIEW_CHANGED", "UC_CONSENT", "UC_CMP_API_READY"];
    events.forEach((e) => window.addEventListener(e, schedule));
    schedule();
    const poll = window.setInterval(schedule, 500); // Änderungen im Shadow-DOM von Usercentrics melden keine DOM-Ereignisse nach außen
    return () => {
      window.clearInterval(poll);
      if (frame) cancelAnimationFrame(frame);
      mo.disconnect();
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("scroll", scheduleTone);
      window.removeEventListener("resize", scheduleTone);
      window.removeEventListener("load", scheduleTone);
      if (toneTimer) window.clearTimeout(toneTimer);
      events.forEach((e) => window.removeEventListener(e, schedule));
    };
  }, []);

  // Wird die Schaltfläche wieder sichtbar (Hero-Button, Menü, Banner, Formular vorbei), Hintergrund neu bestimmen
  useEffect(() => {
    if (hidden) return;
    const t = window.setTimeout(() => {
      if (ref.current) setTone(backgroundTone(ref.current));
    }, 60);
    return () => window.clearTimeout(t);
  }, [hidden]);

  return (
    <a ref={ref} href={siteConfig.contact.phoneHref} className={styles.fab} data-hidden={hidden || undefined} data-uc-button={shifted || undefined} data-tone={tone ?? undefined} aria-label={`${ariaLabel}, ${siteConfig.contact.phone}`} tabIndex={hidden ? -1 : undefined}>
      <Icon name="phone" size={20} strokeWidth={1.6} />
      <span>{label}</span>
    </a>
  );
}
