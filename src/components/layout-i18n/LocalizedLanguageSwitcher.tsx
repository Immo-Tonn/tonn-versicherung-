"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "@/components/ui/LanguageSwitcher/LanguageSwitcher.module.css";
import { languages } from "@/data/navigation";
import { localeMeta, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { isPublic, localeFromPathname, localizedPath } from "@/i18n/registry";

/**
 * Sprachumschalter für EN/RU – gleiche Gestaltung und Logik wie components/ui/LanguageSwitcher.
 * Verlinkt wird nur auf Seiten, die das Register als "live" führt (Entwürfe erscheinen als „soon/скоро“).
 */
export default function LocalizedLanguageSwitcher({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).common;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const { germanPath } = localeFromPathname(usePathname());
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
        aria-label={t.languageButtonAria.replace("{current}", current.label)}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="globe" size={18} />
        <span className={styles.code}>{current.code}</span>
        <Icon name="chevron" size={14} className={`${styles.chevron} ${open ? styles.flip : ""}`} />
      </button>
      {open && (
        <ul id={listId} role="listbox" className={styles.menu} aria-label={t.languageList}>
          {languages.map((l) => {
            const other = l.locale !== current.locale;
            const target = other && isPublic(germanPath, l.locale);
            return (
              <li key={l.code} role="option" aria-selected={!other} aria-disabled={other && !target}>
                {target ? (
                  <a href={localizedPath(germanPath, l.locale)} lang={localeMeta[l.locale].htmlLang} hrefLang={localeMeta[l.locale].htmlLang} className={styles.option}>
                    <span>{l.label}</span>
                  </a>
                ) : (
                  <button type="button" disabled={other} className={styles.option} onClick={() => setOpen(false)}>
                    <span>{l.label}</span>
                    {other && <small>{t.languageSoon}</small>}
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
