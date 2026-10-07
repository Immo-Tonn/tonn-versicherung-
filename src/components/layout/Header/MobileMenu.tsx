"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { headerCta, mainNav } from "@/data/navigation";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./Header.module.css";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const pathname = usePathname();
  const groupId = useId();
  const groupActive = mainNav.some((item) => "children" in item && item.children.some((c) => isActive(pathname, c.href)));
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => {
          // Beim Öffnen wird der Zustand von „Leistungen“ neu aus der aktuellen Route bestimmt
          if (!open) setGroupOpen(groupActive);
          setOpen((v) => !v);
        }}
      >
        <Icon name={open ? "close" : "menu"} size={26} />
      </button>
      <div className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div id="mobile-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} inert={!open}>
          <nav aria-label="Mobile Navigation">
            <ul>
              {mainNav.map((item) =>
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
                            <Link href={child.href} onClick={() => setOpen(false)} aria-current={isActive(pathname, child.href) ? "page" : undefined}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <Link href={headerCta.href} className={styles.panelCta} onClick={() => setOpen(false)}>
            {headerCta.label}
            <Icon name="arrow" size={18} />
          </Link>
      </div>
    </>
  );
}
