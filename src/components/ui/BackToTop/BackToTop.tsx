"use client";

import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./BackToTop.module.css";

/** Ab dieser Scrolltiefe (px) erscheint die Schaltfläche */
const SHOW_AFTER = 500;
const FIELD = "input:not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]), textarea, select";
const PHONE = "(max-width: 767px)";

const shown = (e: Element | null | undefined) => {
  const r = e?.getBoundingClientRect();
  return Boolean(r && r.width > 0 && r.height > 0);
};

/** Ist die Cookie-Einwilligung (Usercentrics im Shadow-DOM oder eigener Dialog) gerade offen? Gleiche Erkennung wie bei CallFab. */
function consentOpen(): boolean {
  const root = document.getElementById("usercentrics-cmp-ui")?.shadowRoot;
  if (shown(root?.querySelector("#uc-overlay"))) return true;
  return Boolean(document.querySelector('[role="dialog"][aria-labelledby]:not([hidden])'));
}

/**
 * "Nach oben": kleine Schaltfläche unten rechts, erscheint nach ca. 500 px Scrollen und scrollt weich nach oben
 * (ohne Animation bei prefers-reduced-motion). Solange sie nicht sichtbar ist, ist sie auch per Tab nicht erreichbar.
 * Ausgeblendet bei geöffnetem Menü (CSS), sichtbarer Cookie-Einwilligung und auf dem Telefon, solange ein Formularfeld den Fokus hat.
 */
export default function BackToTop({ label }: { label: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let frame = 0;
    let typing = false;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > SHOW_AFTER);
      setBlocked((typing && window.matchMedia(PHONE).matches) || consentOpen());
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
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const events = ["UC_UI_INITIALIZED", "UC_UI_VIEW_CHANGED", "UC_CONSENT", "UC_CMP_API_READY"];
    events.forEach((e) => window.addEventListener(e, schedule));
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class", "hidden", "aria-hidden"] });
    const poll = window.setInterval(schedule, 500); // Änderungen im Shadow-DOM von Usercentrics melden keine DOM-Ereignisse nach außen
    schedule();
    return () => {
      window.clearInterval(poll);
      if (frame) cancelAnimationFrame(frame);
      mo.disconnect();
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      events.forEach((e) => window.removeEventListener(e, schedule));
    };
  }, []);

  const visible = scrolled && !blocked;
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button type="button" className={styles.btn} data-visible={visible || undefined} aria-label={label} title={label} tabIndex={visible ? undefined : -1} aria-hidden={visible ? undefined : true} onClick={toTop}>
      <Icon name="arrow" size={18} strokeWidth={1.8} className={styles.icon} />
    </button>
  );
}
