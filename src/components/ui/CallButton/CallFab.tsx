"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import Icon from "../Icon/Icon";
import styles from "./CallFab.module.css";

const FIELD = "input:not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]), textarea, select";

/** Ist die Cookie-Einwilligung (Usercentrics oder eigener Banner) gerade sichtbar? Usercentrics zeichnet in einem Shadow-DOM (#uc-overlay, #uc-main-dialog). */
function consentOpen(): boolean {
  const dialog = document.getElementById("usercentrics-cmp-ui")?.shadowRoot?.querySelector("#uc-main-dialog, #uc-overlay, [role=dialog]");
  if (dialog) {
    const r = dialog.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return true;
  }
  return Boolean(document.querySelector('[role="dialog"][aria-labelledby]:not([hidden])'));
}

/**
 * Nur Telefon (≤ 767 px, siehe CSS): EINE feste Schaltfläche "Anrufen" am unteren Rand, direkt unter dem Hero-Button.
 * Ausgeblendet bei geöffnetem Menü (CSS), sichtbarer Cookie-Einwilligung und solange ein Formularfeld den Fokus hat (Bildschirmtastatur).
 * Ohne JavaScript bleibt sie sichtbar. Wie der Header-Button ein normaler tel:-Link (Zählung click_phone über GoogleAnalytics.tsx).
 */
export default function CallFab({ label, ariaLabel }: { label: string; ariaLabel: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    let typing = false;
    const update = () => {
      frame = 0;
      setHidden(typing || consentOpen());
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
      events.forEach((e) => window.removeEventListener(e, schedule));
    };
  }, []);

  return (
    <a href={siteConfig.contact.phoneHref} className={styles.fab} data-hidden={hidden || undefined} aria-label={`${ariaLabel}, ${siteConfig.contact.phone}`} tabIndex={hidden ? -1 : undefined}>
      <Icon name="phone" size={20} strokeWidth={1.6} />
      <span>{label}</span>
    </a>
  );
}
