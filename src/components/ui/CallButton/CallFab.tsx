"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import Icon from "../Icon/Icon";
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

/**
 * Nur Telefon (≤ 767 px, siehe CSS): EINE feste Schaltfläche "Anrufen" am unteren Rand, direkt unter dem Hero-Button.
 * Ausgeblendet bei geöffnetem Menü (CSS), sichtbarer Cookie-Einwilligung und solange ein Formularfeld den Fokus hat (Bildschirmtastatur).
 * Außerdem, solange der Hero-Button in der unteren Zone des Bildschirms liegt (dort würde sie ihn überdecken): sie erscheint, sobald der Hero-Button
 * über diese Zone hinausgescrollt ist, und verschwindet beim Zurückscrollen wieder. Mit 12 px Hysterese, damit sie an der Grenze nicht flackert.
 * Ohne JavaScript bleibt sie sichtbar. Wie der Header-Button ein normaler tel:-Link (Zählung click_phone über GoogleAnalytics.tsx).
 */
export default function CallFab({ label, ariaLabel }: { label: string; ariaLabel: string }) {
  const [hidden, setHidden] = useState(false);
  const [shifted, setShifted] = useState(false);
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
        const bottom = cta.getBoundingClientRect().bottom;
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
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class", "hidden", "aria-hidden"] });
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
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
      events.forEach((e) => window.removeEventListener(e, schedule));
    };
  }, []);

  return (
    <a ref={ref} href={siteConfig.contact.phoneHref} className={styles.fab} data-hidden={hidden || undefined} data-uc-button={shifted || undefined} aria-label={`${ariaLabel}, ${siteConfig.contact.phone}`} tabIndex={hidden ? -1 : undefined}>
      <Icon name="phone" size={20} strokeWidth={1.6} />
      <span>{label}</span>
    </a>
  );
}
