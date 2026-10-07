"use client";

import Link from "next/link";
import { useId, useState } from "react";
import Icon from "@/components/ui/Icon/Icon";
import WvIcon from "./WvIcon";
import type { Group } from "./content";
import styles from "./Wv.module.css";

type Props = { group: Group; questionsLabel: string; link: string; contactHref: string; tone: "white" | "off" };

/** Eine thematische Gruppe: pro Gruppe ist höchstens eine Versicherung geöffnet. DOM-Reihenfolge = Leserichtung (zeilenweise). */
export default function InsuranceGroup({ group, questionsLabel, link, contactHref, tone }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const base = useId();

  return (
    <section className={`${styles.group} ${tone === "off" ? styles.groupOff : ""}`} aria-labelledby={`${base}-title`}>
      <div className={styles.groupInner}>
        <header className={styles.groupHead}>
          <span className={styles.groupNum}>{group.num}</span>
          <h3 id={`${base}-title`}>{group.title}</h3>
        </header>
        <ul className={styles.items}>
          {group.items.map((item, i) => {
            const open = openIdx === i;
            const panelId = `${base}-p${i}`;
            return (
              <li key={item.title}>
                <button type="button" className={styles.itemBtn} aria-expanded={open} aria-controls={panelId} onClick={() => setOpenIdx(open ? null : i)}>
                  <WvIcon name={item.icon} size={26} className={styles.itemIcon} />
                  <span className={styles.itemText}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemShort}>{item.short}</span>
                  </span>
                  <span className={`${styles.itemToggle} ${open ? styles.itemToggleOpen : ""}`} aria-hidden="true" />
                </button>
                <div id={panelId} className={`${styles.expand} ${open ? styles.expandOpen : ""}`} inert={!open}>
                  <div className={styles.expandInner}>
                    <div className={styles.detail}>
                      <p>{item.text}</p>
                      <p className={styles.detailLabel}>{questionsLabel}</p>
                      <ul>
                        {item.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                      <Link href={contactHref} className={styles.detailLink}>
                        {link}
                        <Icon name="arrow" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
