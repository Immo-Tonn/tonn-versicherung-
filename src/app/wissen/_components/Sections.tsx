import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import { bySlug } from "../_lib/articles";
import styles from "./Ratgeber.module.css";

/** Link zum Beitrag, solange er veröffentlicht ist – sonst nur Text (keine Platzhalter-Links). */
function ArticleLink({ slug, className, children }: { slug: string; className?: string; children: React.ReactNode }) {
  if (!bySlug(slug)) return <span className={className}>{children}</span>;
  return (
    <Link href={`/wissen/${slug}`} className={className}>
      {children}
    </Link>
  );
}

export function RgHero() {
  return (
    <section className={styles.hero} aria-labelledby="rg-title">
      <Photo src="/images/wissen/ratgeber-hero-office.webp" alt="" priority sizes="(max-width: 767px) 620vw, (max-width: 1199px) 240vw, 100vw" className={styles.heroBg} imgClassName={styles.heroImg} />
      <div className={styles.heroVeil} aria-hidden="true" />
      <Container className={styles.heroInner}>
        <SectionLabel>Ratgeber · PKV, Berufsunfähigkeit &amp; Kapitalanlage</SectionLabel>
        <h1 id="rg-title" className={styles.heroTitle}>
          <span>Gute Fragen.</span> <span>Klare Antworten.</span>
        </h1>
        <p className={styles.heroText}>
          Orientierung für Ihre Versicherungs- und Finanzentscheidungen: verständliche Grundlagen, wichtige Fragen und vertiefende Beiträge.
        </p>
      </Container>
    </section>
  );
}

export function RgIntro() {
  return (
    <section className={styles.intro} aria-labelledby="rg-intro">
      <Container>
        <div className={styles.introGrid}>
          <h2 id="rg-intro" className={styles.h2}>
            Antworten auf Ihre Fragen.
          </h2>
          <p className={styles.introText}>
            Versicherungen und Geldanlage werfen viele Fragen auf. Hier finden Sie verständliche Antworten und weiterführende Beiträge.
          </p>
        </div>
        <nav className={styles.topicNav} aria-label="Themen im Ratgeber">
          <a href="#pkv" className={styles.topicLink}>
            Private Krankenversicherung
          </a>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <a href="#berufsunfaehigkeit" className={styles.topicLink}>
            Berufsunfähigkeit
          </a>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <a href="#kapitalanlage" className={styles.topicLink}>
            Kapitalanlage
          </a>
        </nav>
      </Container>
    </section>
  );
}

export function RgPkv() {
  return (
    <section id="pkv" className={`${styles.sky} ${styles.anchor}`} aria-labelledby="rg-pkv">
      <Container>
        <SectionLabel>Private Krankenversicherung</SectionLabel>
        <h2 id="rg-pkv" className={styles.h2}>
          Was ist bei der PKV wichtig?
        </h2>
        <p className={styles.sectionLead}>
          Leistungen, Selbstbehalt und langfristige Beiträge: Hier erfahren Sie, worauf es bei der privaten Krankenversicherung ankommt.
        </p>
        <div className={styles.pkvGrid}>
          <div className={styles.pkvMain}>
            <h3 className={styles.h3}>PKV oder GKV?</h3>
            <p className={styles.body}>
              Die gesetzliche und die private Krankenversicherung unterscheiden sich unter anderem bei Beiträgen, Leistungen und der Absicherung von Familienmitgliedern. Welche Lösung zu Ihnen passt, hängt von Ihrer beruflichen, gesundheitlichen und finanziellen Situation ab.
            </p>
            <ArticleLink slug="pkv-oder-gkv" className={styles.textLink}>
              Unterschiede nachlesen
            </ArticleLink>
          </div>
          <div className={styles.pkvSide}>
            <div className={styles.sideItem}>
              <ArticleLink slug="anonyme-risikovoranfrage" className={styles.titleLink}>
                Anonyme Risikovoranfrage
              </ArticleLink>
              <p>Gesundheitsangaben vor einem Antrag einschätzen lassen.</p>
            </div>
            <div className={styles.sideItem}>
              <ArticleLink slug="tarifwechsel-pkv" className={styles.titleLink}>
                Tarifwechsel im bestehenden Vertrag
              </ArticleLink>
              <p>Möglichkeiten, Voraussetzungen und wichtige Fragen verstehen.</p>
            </div>
          </div>
        </div>
        <p className={styles.groups}>Für Angestellte · Selbstständige · Beamte</p>
      </Container>
    </section>
  );
}

export function RgBu() {
  return (
    <section id="berufsunfaehigkeit" className={`${styles.bu} ${styles.anchor}`} aria-labelledby="rg-bu">
      <Container>
        <div className={styles.buGrid}>
          <div className={styles.buCopy}>
            <SectionLabel>Berufsunfähigkeit</SectionLabel>
            <h2 id="rg-bu" className={styles.h2}>
              Wenn Ihr Einkommen
              <br />
              Schutz braucht.
            </h2>
            <p className={styles.body}>Was passiert, wenn Sie Ihren Beruf aus gesundheitlichen Gründen nicht mehr ausüben können?</p>
            <p className={styles.body}>
              Unsere Beiträge erklären, wie eine Berufsunfähigkeitsversicherung funktioniert und worauf es bei BU-Rente, Gesundheitsfragen und Vertragsbedingungen ankommt.
            </p>
          </div>
          <Photo src="/images/home/beratung.webp" alt="Beratungstisch mit Notizbuch und Tasse im Sonnenlicht" sizes="(max-width: 1023px) 100vw, 40vw" position="50% 60%" className={styles.buPhoto} />
          <ul className={styles.buLinks}>
            <li>
              <ArticleLink slug="bu-rente-planen" className={styles.titleLink}>
                BU-Rente planen
              </ArticleLink>
            </li>
            <li>
              <ArticleLink slug="gesundheitsfragen-bu" className={styles.titleLink}>
                Gesundheitsfragen verstehen
              </ArticleLink>
            </li>
            <li>
              <ArticleLink slug="bu-vertragsbedingungen" className={styles.titleLink}>
                Vertragsbedingungen vergleichen
              </ArticleLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function RgKapital() {
  return (
    <section id="kapitalanlage" className={`${styles.kapital} ${styles.anchor}`} aria-labelledby="rg-kapital">
      <Container>
        <div className={styles.kapitalGrid}>
          <div className={styles.kapitalCopy}>
            <SectionLabel>Kapitalanlage</SectionLabel>
            <h2 id="rg-kapital" className={styles.h2}>
              Geldanlage:
              <br />
              Welche Fragen kommen zuerst?
            </h2>
            <p className={styles.body}>
              Bevor Sie einzelne Produkte vergleichen, klären Sie Ihr Ziel, Ihren Zeithorizont und Ihren Bedarf an verfügbarem Geld. Rendite, Risiko und Kosten sollten gemeinsam betrachtet werden.
            </p>
            <ul className={styles.kapitalLinks}>
              <li>
                <ArticleLink slug="grundlagen-kapitalanlage" className={styles.titleLink}>
                  Grundlagen der Kapitalanlage
                </ArticleLink>
              </li>
              <li>
                <ArticleLink slug="streuung-kapitalanlage" className={styles.titleLink}>
                  Streuung verständlich erklärt
                </ArticleLink>
              </li>
            </ul>
          </div>
          <div className={styles.kapitalBox}>
            <h3 className={styles.boxTitle}>Zeit. Risiko. Kosten.</h3>
            <dl className={styles.trio}>
              <div>
                <dt>Zeit.</dt>
                <dd>Wann benötigen Sie das Geld? Der Anlagehorizont beeinflusst, welche Möglichkeiten zu Ihren Zielen passen.</dd>
              </div>
              <div>
                <dt>Risiko.</dt>
                <dd>Welche Schwankungen und Verluste können Sie finanziell und persönlich tragen?</dd>
              </div>
              <div>
                <dt>Kosten.</dt>
                <dd>Welche laufenden und einmaligen Kosten entstehen? Sie beeinflussen das Anlageergebnis und sollten nachvollziehbar sein.</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

const faq = [
  {
    q: "Ist eine Risikovoranfrage bereits ein Antrag?",
    a: "Nein. Sie dient einer vorläufigen Einschätzung durch Versicherer. Ein Versicherungsvertrag entsteht dadurch nicht. Eine Rückmeldung ist im Zusammenhang mit den eingereichten Angaben zu verstehen und ersetzt keine verbindliche Annahmeentscheidung für einen späteren Antrag.",
  },
  {
    q: "Reicht der Beitrag für einen PKV-Vergleich?",
    a: "Nein. Auch Leistungen, Selbstbehalt, Vertragsbedingungen und die langfristige finanzielle Tragbarkeit sollten berücksichtigt werden. Entscheidend ist, wie der Tarif zu Ihrer heutigen und zukünftigen Lebenssituation passt.",
  },
  {
    q: "Garantiert Streuung eine sichere Geldanlage?",
    a: "Nein. Eine breite Streuung kann die Abhängigkeit von einzelnen Anlagen verringern. Sie beseitigt jedoch nicht alle Risiken und schützt nicht grundsätzlich vor Verlusten.",
  },
];

export function RgFaq() {
  return (
    <section className={styles.faq} aria-labelledby="rg-faq">
      <Container>
        <h2 id="rg-faq" className={styles.h2}>
          Häufig gefragt. Verständlich beantwortet.
        </h2>
        <div className={styles.faqList}>
          {faq.map((f) => (
            <div key={f.q} className={styles.faqRow}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function RgExperience() {
  return (
    <section className={styles.exp} aria-labelledby="rg-exp">
      <Container>
        <div className={styles.expGrid}>
          <div>
            <h2 id="rg-exp" className={styles.h2}>
              Wissen aus der Beratungspraxis.
            </h2>
            <p className={styles.expName}>
              <strong>Andreas Tonn</strong> · Versicherungsfachmann (BWV)
            </p>
          </div>
          <div>
            <p className={styles.body}>
              Die Themen orientieren sich an Fragen, die in der Versicherungsberatung immer wieder auftauchen. Verständliche Erklärungen helfen Ihnen, sich auf ein persönliches Gespräch vorzubereiten.
            </p>
            <Link href="/ueber-uns" className={styles.textLink}>
              Mehr über Andreas Tonn
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function RgCta() {
  return (
    <section className={styles.cta} aria-labelledby="rg-cta">
      <Container>
        <div className={styles.ctaGrid}>
          <div>
            <h2 id="rg-cta" className={styles.h2}>
              Noch eine Frage offen?
            </h2>
            <p className={styles.sectionLead}>Besprechen wir, was die Informationen für Ihre persönliche Situation bedeuten.</p>
          </div>
          <Button href="/kontakt" size="lg" arrow={false}>
            Persönliches Gespräch vereinbaren
          </Button>
        </div>
      </Container>
    </section>
  );
}
