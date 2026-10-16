"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "@/components/layout/Header/Header.module.css";
import Icon from "@/components/ui/Icon/Icon";
import DeTag from "./DeTag";
import type { LocalizedNavGroup, LocalizedNavItem } from "./nav";

type Props = {
  items: (LocalizedNavItem | LocalizedNavGroup)[];
  cta: { label: string; href: string; german: boolean };
  labels: { open: string; close: string; nav: string };
  badge: string;
  hint: string;
};

/** Wie components/layout/Header/MobileMenu (gleiches Verhalten und Gestaltung), mit übersetzten Beschriftungen. */
export default function LocalizedMobileMenu({ items, cta, labels, badge, hint }: Props) {
  const [open, setOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const groupId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tag = <DeTag badge={badge} hint={hint} />;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "menu"} size={26} />
      </button>
      <div className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div id="mobile-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} inert={!open}>
        <nav aria-label={labels.nav}>
          <ul>
            {items.map((item) =>
              "children" in item ? (
                <li key={item.label}>
                  <button type="button" className={styles.panelGroupBtn} aria-expanded={groupOpen} aria-controls={groupId} onClick={() => setGroupOpen((v) => !v)}>
                    {item.label}
                    <Icon name="chevron" size={18} className={groupOpen ? styles.panelChevronUp : styles.panelChevron} />
                  </button>
                  <div id={groupId} className={`${styles.panelSub} ${groupOpen ? styles.panelSubOpen : ""}`} inert={!groupOpen}>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={() => setOpen(false)}>
                            {child.label}
                            {child.german && tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                    {item.german && tag}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <Link href={cta.href} className={styles.panelCta} onClick={() => setOpen(false)}>
          <span>
            {cta.label}
            {cta.german && tag}
          </span>
          <Icon name="arrow" size={18} />
        </Link>
      </div>
    </>
  );
}
