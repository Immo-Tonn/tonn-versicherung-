"use client";

import Link from "next/link";
import { useId, useState } from "react";
import styles from "@/app/(de)/versicherungen/_components/Wv.module.css";
import WvIcon, { type WvIconName } from "@/app/(de)/versicherungen/_components/WvIcon";
import DeTag from "@/components/layout-i18n/DeTag";
import Icon from "@/components/ui/Icon/Icon";

type Item = { icon: WvIconName; title: string; short: string; text: string; points: readonly string[] };
type Props = {
  group: { num: string; title: string; items: Item[] };
  questionsLabel: string;
  link: string;
  contactHref: string;
  /** „DE“-Kennzeichnung, wenn der Link auf die deutsche Seite führt */
  tag?: { badge: string; hint: string } | null;
  tone: "white" | "off";
};

/** Wie (de)/versicherungen/_components/InsuranceGroup (gleiches Verhalten und Gestaltung), mit optionaler „DE“-Kennzeichnung am Link. */
export default function LocalizedInsuranceGroup({ group, questionsLabel, link, contactHref, tag, tone }: Props) {
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
                        {tag && <DeTag badge={tag.badge} hint={tag.hint} />}
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
