"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "@/components/layout/Header/Header.module.css";
import Icon from "@/components/ui/Icon/Icon";
import DeTag from "./DeTag";
import type { LocalizedNavGroup, LocalizedNavItem } from "./nav";

type Props = { items: (LocalizedNavItem | LocalizedNavGroup)[]; label: string; badge: string; hint: string };

function NavDropdown({ group, badge, hint }: { group: LocalizedNavGroup; badge: string; hint: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const hoverOpened = useRef(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  return (
    <li
      ref={rootRef}
      className={styles.group}
      onMouseEnter={() => {
        hoverOpened.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        hoverOpened.current = false;
        setOpen(false);
      }}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          rootRef.current?.querySelector("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        className={styles.groupTrigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          // Klick direkt nach Hover-Öffnung soll das Menü nicht wieder schließen
          if (hoverOpened.current) hoverOpened.current = false;
          else setOpen((v) => !v);
        }}
      >
        {group.label}
        <Icon name="chevron" size={12} className={open ? styles.flip : undefined} />
      </button>
      {open && (
        <div className={styles.dropdownWrap}>
          <div className={styles.dropdown}>
            <ul id={menuId} className={styles.dropdownList}>
              {group.children.map((child, i) => (
                <li key={child.href}>
                  <Link href={child.href} onClick={() => setOpen(false)}>
                    <span className={styles.dropdownNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.dropdownLabel}>
                      {child.label}
                      {child.german && <DeTag badge={badge} hint={hint} />}
                    </span>
                    <Icon name="arrow" size={16} className={styles.dropdownArrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

/** Wie components/layout/Header/HeaderNav (gleiches Verhalten und Gestaltung), mit übersetzten Beschriftungen. */
export default function LocalizedHeaderNav({ items, label, badge, hint }: Props) {
  return (
    <nav aria-label={label} className={styles.nav}>
      <ul>
        {items.map((item) =>
          "children" in item ? (
            <NavDropdown key={item.label} group={item} badge={badge} hint={hint} />
          ) : (
            <li key={item.href}>
              <Link href={item.href}>
                {item.label}
                {item.german && <DeTag badge={badge} hint={hint} />}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
