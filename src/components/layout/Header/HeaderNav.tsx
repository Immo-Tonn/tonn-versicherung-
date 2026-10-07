"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, type NavGroup } from "@/data/navigation";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavDropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const hoverOpened = useRef(false);
  const menuId = useId();
  const active = group.children.some((c) => isActive(pathname, c.href));

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
        className={`${styles.groupTrigger} ${active ? styles.active : ""}`}
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
                  <Link href={child.href} aria-current={isActive(pathname, child.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                    <span className={styles.dropdownNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.dropdownLabel}>{child.label}</span>
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

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Hauptnavigation" className={styles.nav}>
      <ul>
        {mainNav.map((item) =>
          "children" in item ? (
            <NavDropdown key={item.label} group={item} pathname={pathname} />
          ) : (
            <li key={item.href}>
              <Link href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} className={isActive(pathname, item.href) ? styles.active : undefined}>
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
