"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { languages } from "@/data/navigation";
import { localeMeta } from "@/i18n/config";
import { isPublic, localeFromPathname, localizedPath } from "@/i18n/registry";
import Icon from "../Icon/Icon";
import styles from "./LanguageSwitcher.module.css";

/**
 * Sprachumschalter. Ziel ist immer die entsprechende Seite in der anderen Sprache (nicht die Startseite).
 * Eine Sprache ist nur wählbar, wenn das Register (src/i18n/registry.ts) die Seite als "live" führt;
 * sonst bleibt der Eintrag deaktiviert. Keine automatische Weiterleitung nach Browsersprache.
 */
export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const { locale, germanPath } = localeFromPathname(usePathname());
  const current = languages.find((l) => l.locale === locale) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`Sprache wählen, aktuell ${current.label}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="globe" size={18} />
        <span className={styles.code}>{current.code}</span>
        <Icon name="chevron" size={14} className={`${styles.chevron} ${open ? styles.flip : ""}`} />
      </button>
      {open && (
        <ul id={listId} role="listbox" className={styles.menu} aria-label="Sprache">
          {languages.map((l) => {
            const target = l.locale !== current.locale && isPublic(germanPath, l.locale);
            return (
              <li key={l.code} role="option" aria-selected={l.code === current.code} aria-disabled={l.locale !== current.locale && !target}>
                {target ? (
                  <a href={localizedPath(germanPath, l.locale)} lang={localeMeta[l.locale].htmlLang} hrefLang={localeMeta[l.locale].htmlLang} className={styles.option}>
                    <span>{l.label}</span>
                  </a>
                ) : (
                  <button type="button" disabled={l.locale !== current.locale} className={styles.option} onClick={() => setOpen(false)}>
                    <span>{l.label}</span>
                    {l.locale !== current.locale && <small>bald</small>}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
