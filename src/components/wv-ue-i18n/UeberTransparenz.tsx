import ueberStyles from "@/app/(de)/ueber-uns/_components/Ueber.module.css";
import Container from "@/components/ui/Container/Container";
import type { Locale } from "@/i18n/config";
import { ueTransparenz } from "@/i18n/content/ueber-transparenz";
import styles from "./UeberTransparenz.module.css";

/** „Wie wir arbeiten“ und „Partner-Versicherer“ für Über uns (de, en, ru). Alle Texte stehen im HTML; die Listen sind per <details> einklappbar. */
export default function UeberTransparenz({ locale }: { locale: Locale }) {
  const { how, partners } = ueTransparenz[locale];
  return (
    <>
      <section className={styles.how} aria-labelledby="ue-how">
        <Container>
          <span className={ueberStyles.accent} aria-hidden="true" />
          <h2 id="ue-how" className={`h2 ${ueberStyles.h2}`}>
            {how.title}
            <i className={ueberStyles.dot} aria-hidden="true" />
          </h2>
          <div className={styles.grid}>
            <div className={styles.block}>
              <h3>{how.status.title}</h3>
              <p>{how.status.text}</p>
              <ul>
                {how.status.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p>
                {how.status.registerLabel}: {how.status.iht}
                <br />
                {how.status.registryBody}
              </p>
            </div>
            <div className={styles.block}>
              <h3>{how.pay.title}</h3>
              <p>{how.pay.text}</p>
            </div>
            <div className={styles.block}>
              <h3>{how.complaint.title}</h3>
              <p>{how.complaint.text}</p>
              <ul>
                {how.complaint.items.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.name}
                    </a>{" "}
                    ({l.host})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.partners} aria-labelledby="ue-partners">
        <Container>
          <span className={ueberStyles.accent} aria-hidden="true" />
          <h2 id="ue-partners" className={`h2 ${ueberStyles.h2}`}>
            {partners.title}
            <i className={ueberStyles.dot} aria-hidden="true" />
          </h2>
          <p className={styles.stand}>{partners.stand}</p>
          {partners.groups.map((g) => (
            <details key={g.key} className={styles.group}>
              <summary>{g.summary}</summary>
              {g.lists.map((l, i) => (
                <div key={i}>
                  {l.label && <p className={styles.listLabel}>{l.label}</p>}
                  <ul className={styles.names}>
                    {l.items.map((n, j) => (
                      <li key={`${n}-${j}`}>{n}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </details>
          ))}
        </Container>
      </section>
    </>
  );
}
