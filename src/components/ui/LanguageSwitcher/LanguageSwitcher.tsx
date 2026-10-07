"use client";

import { useEffect, useId, useRef, useState } from "react";
import { languages } from "@/data/navigation";
import Icon from "../Icon/Icon";
import styles from "./LanguageSwitcher.module.css";

/**
 * Struktur für spätere Mehrsprachigkeit. Aktuell ist nur DE aktiv;
 * EN/RU sind sichtbar, aber noch deaktiviert (TODO: i18n-Routing anbinden).
 */
export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = languages[0];

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
          {languages.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === current.code} aria-disabled={!l.available}>
              <button type="button" disabled={!l.available} className={styles.option} onClick={() => setOpen(false)}>
                <span>{l.label}</span>
                {!l.available && <small>bald</small>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
