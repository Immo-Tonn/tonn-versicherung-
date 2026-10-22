import Link from "next/link";
import SharedDeTag from "@/components/layout-i18n/DeTag";
import LocalizedConsentMap from "./LocalizedConsentMap";
import Button from "@/components/ui/Button/Button";
import btn from "@/components/ui/Button/Button.module.css";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import HeroEyebrow from "@/components/home/Hero/HeroEyebrow";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import { about, finalCta, hero, insurances, location, processSection as processData, situations, trustItems } from "@/data/home";
import { getGoogleReviews } from "@/lib/google-reviews";
import { reviewSourceLine } from "@/lib/review-count";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import { homeContent } from "@/i18n/content";
import aboutStyles from "@/components/home/AboutSection/AboutSection.module.css";
import ctaStyles from "@/components/home/FinalCTA/FinalCTA.module.css";
import heroStyles from "@/components/home/Hero/Hero.module.css";
import "@/components/home/Hero/hero-mobile-header.css";
import HeroHeaderTone from "@/components/home/Hero/HeroHeaderTone";
import HeroPhoto from "@/components/home/Hero/HeroPhoto";
import insStyles from "@/components/home/InsuranceSection/InsuranceSection.module.css";
import locStyles from "@/components/home/LocationSection/LocationSection.module.css";
import procStyles from "@/components/home/ProcessSection/ProcessSection.module.css";
import revStyles from "@/components/home/ReviewsSection/ReviewsSection.module.css";
import sitStyles from "@/components/home/SituationSection/SituationSection.module.css";
import trustStyles from "@/components/home/TrustBar/TrustBar.module.css";
import local from "./LocalizedHome.module.css";

type L = Exclude<Locale, "de">;
const numberLocale: Record<L, string> = { en: "en-GB", ru: "ru-RU" };

function DeTag({ locale }: { locale: L }) {
  const c = getDictionary(locale).common;
  return <SharedDeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />;
}

/**
 * Startseite für EN/RU. Verwendet dieselben CSS-Module, Bilder, Icons und Reihenfolge wie die deutsche Startseite
 * (src/components/home/*); nur die Texte stammen aus src/i18n/content. Links auf nicht übersetzte Seiten
 * führen auf die deutsche Seite und sind mit „DE“ markiert.
 */
export default async function LocalizedHome({ locale }: { locale: L }) {
  const t = homeContent[locale];
  const nf = numberLocale[locale];
  // Gesamtbewertung aus derselben Quelle wie der Bewertungsbereich; ohne echte Google-Daten keine Zahl (nichts erfunden).
  const googleRating = await getGoogleReviews();
  const ratingText = googleRating ? new Intl.NumberFormat(nf, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(googleRating.rating) : null;
  const sourceLine = reviewSourceLine(googleRating?.count, locale); // gleiche Places-Antwort wie die Sterne
  const de = <DeTag locale={locale} />;
  const lk = (h: string) => localizedHref(h, locale);
  const tagFor = (h: string) => (lk(h).german ? de : null);

  return (
    <>
      {/* Hero */}
      <section className={heroStyles.hero} aria-labelledby="hero-title" data-home-hero>
        <HeroPhoto src={hero.image} mobileSrc={hero.imageMobile} alt={t.hero.imageAlt} />
        <div className={heroStyles.veil} aria-hidden="true" />
        <Container className={heroStyles.content}>
          <HeroEyebrow>{t.hero.eyebrow}</HeroEyebrow>
          <h1 id="hero-title" className={heroStyles.title}>
            {t.hero.title.split(" ").map((w, i, all) => (
              <span key={w}>
                {w}
                {i === all.length - 1 && <i className={heroStyles.dot} aria-hidden="true" />}
              </span>
            ))}
          </h1>
          <p className={heroStyles.subtitle}>
            {t.hero.subtitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className={heroStyles.text}>{t.hero.text}</p>
          <div className={heroStyles.actions}>
            <Button href={lk(hero.primaryCta.href).href} size="lg" className={heroStyles.primary}>
              {t.hero.primaryCta}
              {tagFor(hero.primaryCta.href)}
            </Button>
            <Link href={hero.secondaryCta.href} className={heroStyles.secondary}>
              <span className={heroStyles.play}>
                <Icon name="play" size={22} />
              </span>
              <span className={heroStyles.secondaryLabel}>{t.hero.secondaryCta}</span>
            </Link>
            <Link href={lk(hero.primaryCta.href).href} className={heroStyles.mobileCta}>
              <span>
                {t.hero.mobileCta}
                {tagFor(hero.primaryCta.href)}
              </span>
              <Icon name="arrow" size={18} />
            </Link>
            <span className={heroStyles.callSlot} aria-hidden="true" />
          </div>
        </Container>

        {/* Vertrauensleiste */}
        <div className={trustStyles.bar}>
          <Container>
            <ul className={trustStyles.list}>
              {trustItems.map((item, i) => (
                <li key={i} className={trustStyles.item}>
                  <Icon name={item.icon} size={44} strokeWidth={1.1} className={trustStyles.icon} />
                  <div>
                    {item.isRating ? (
                      ratingText && googleRating ? (
                        <p className={trustStyles.title}>
                          <span>{ratingText}</span>
                          <span className={trustStyles.stars} role="img" aria-label={t.trust.ratingAria(ratingText)}>
                            {"★".repeat(Math.max(0, Math.min(5, Math.round(googleRating.rating))))}
                          </span>
                        </p>
                      ) : null
                    ) : (
                      <p className={trustStyles.title}>{t.trust.items[i - 1].title}</p>
                    )}
                    <p className={trustStyles.text}>
                      {(item.isRating ? t.trust.ratingLines : t.trust.items[i - 1].lines).map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                      {item.isRating && ratingText && sourceLine && <span>{sourceLine}</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </div>
        <HeroHeaderTone />
      </section>

      {/* Situationen */}
      <section className={sitStyles.section} aria-labelledby="situation-title">
        <Container>
          <SectionLabel>{t.situations.eyebrow}</SectionLabel>
          <h2 id="situation-title" className={`h2 ${sitStyles.title}`}>
            {t.situations.title}
          </h2>
          <p className={`lead ${sitStyles.text}`}>{t.situations.text}</p>
          <ul className={sitStyles.grid}>
            {situations.cards.map((card, i) => (
              <li key={card.image}>
                <Link href={lk(card.href).href} className={sitStyles.card}>
                  <Photo src={card.image} alt="" ratio="4 / 3" sizes="(max-width: 767px) 85vw, (max-width: 1199px) 45vw, 310px" className={sitStyles.photo} imgClassName={sitStyles.zoom} />
                  <div className={`${sitStyles.body} ${local.body}`}>
                    <span className={`${sitStyles.accent} ${local.accent}`} aria-hidden="true" />
                    <div className={local.text}>
                      <h3 className={`${sitStyles.cardTitle} ${local.cardTitle}`}>
                        {t.situations.cards[i].title}
                        {tagFor(card.href)}
                      </h3>
                      <p>{t.situations.cards[i].text}</p>
                    </div>
                    <Icon name="arrow" size={18} className={`${sitStyles.arrow} ${local.arrow}`} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className={procStyles.section} aria-labelledby="process-title">
        <Container className={procStyles.inner}>
          <div className={procStyles.intro}>
            <SectionLabel tone="light">{t.process.eyebrow}</SectionLabel>
            <h2 id="process-title" className={`h2 ${procStyles.title}`}>
              {t.process.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <p className={procStyles.text}>{t.process.text}</p>
            <Button href={lk(processData.cta.href).href} variant="navy-soft">
              {t.process.cta}
              {tagFor(processData.cta.href)}
            </Button>
          </div>
          <ol className={procStyles.steps}>
            {processData.steps.map((step, i) => (
              <li key={step.icon + i} className={procStyles.step}>
                <div className={procStyles.head}>
                  <span className={procStyles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={procStyles.rail} aria-hidden="true" />
                </div>
                <Icon name={step.icon} size={34} strokeWidth={1.2} className={procStyles.icon} />
                <h3 className={procStyles.stepTitle}>{t.process.steps[i].title}</h3>
                <p>{t.process.steps[i].text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Über mich */}
      <section className={aboutStyles.section} aria-labelledby="about-title">
        <Container className={aboutStyles.inner}>
          <Photo src={about.image} alt={t.about.imageAlt} ratio="1480 / 1063" sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 28vw" />
          <div className={aboutStyles.copy}>
            <SectionLabel>{t.about.eyebrow}</SectionLabel>
            <h2 id="about-title" className={`h2 ${aboutStyles.title}`}>
              {t.about.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <p className={aboutStyles.text}>{t.about.text}</p>
            <p className={aboutStyles.experience}>{t.about.experience}</p>
            <Button href={lk(about.cta.href).href}>
              {t.about.cta}
              {tagFor(about.cta.href)}
            </Button>
          </div>
          <ul className={aboutStyles.features}>
            {about.features.map((f, i) => (
              <li key={f.icon + i}>
                <Icon name={f.icon} size={28} strokeWidth={1.2} className={aboutStyles.icon} />
                <div>
                  <h3>{t.about.features[i].title}</h3>
                  <p>{t.about.features[i].text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Weitere Versicherungen */}
      <section className={insStyles.section} aria-labelledby="insurance-title">
        <Container className={insStyles.inner}>
          <div className={insStyles.intro}>
            <SectionLabel>{t.insurances.eyebrow}</SectionLabel>
            <h2 id="insurance-title" className={`h2 ${insStyles.title}`}>
              {t.insurances.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <p className={insStyles.text}>{t.insurances.text}</p>
            <Button href={lk(insurances.cta.href).href}>
              {t.insurances.cta}
              {tagFor(insurances.cta.href)}
            </Button>
          </div>
          <ul className={insStyles.cards}>
            {insurances.cards.map((card, i) => (
              <li key={card.image}>
                <Link href={lk(card.href).href} className={insStyles.card}>
                  <Photo src={card.image} alt={t.insurances.cards[i].imageAlt} position={card.imagePosition} ratio="4 / 5" sizes="(max-width: 767px) 90vw, (max-width: 1199px) 30vw, 250px" className={insStyles.photo} imgClassName={insStyles.zoom} />
                  <div className={insStyles.body}>
                    <div>
                      <h3>
                        {t.insurances.cards[i].title}
                        {tagFor(card.href)}
                      </h3>
                      <p>{t.insurances.cards[i].text}</p>
                    </div>
                    <Icon name="arrow" size={18} className={insStyles.arrow} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Reviews locale={locale} />

      {/* Standort */}
      <LocationBlock locale={locale} />

      {/* Abschluss-CTA */}
      <section className={ctaStyles.section} aria-labelledby="cta-title">
        <div className={ctaStyles.veil} aria-hidden="true" />
        <Container className={ctaStyles.inner}>
          <div>
            <SectionLabel tone="light">{t.finalCta.eyebrow}</SectionLabel>
            <h2 id="cta-title" className={`h2 ${ctaStyles.title}`}>
              {t.finalCta.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <p className={ctaStyles.text}>{t.finalCta.text}</p>
          </div>
          <div className={ctaStyles.action}>
            <Button href={lk(finalCta.cta.href).href} variant="light" size="lg">
              {t.finalCta.cta}
              {tagFor(finalCta.cta.href)}
            </Button>
            <ul className={ctaStyles.checks}>
              {t.finalCta.checks.map((c) => (
                <li key={c}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 12.5 5 5L20 6.5" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stars({ value, className, loc }: { value: number; className?: string; loc: L }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  const label = homeContent[loc].reviews.starsAria(value.toLocaleString(numberLocale[loc], { minimumFractionDigits: 1, maximumFractionDigits: 1 }));
  return (
    <span className={className} role="img" aria-label={label}>
      {"★".repeat(full)}
      <span className={revStyles.starsOff}>{"★".repeat(5 - full)}</span>
    </span>
  );
}

async function Reviews({ locale: loc }: { locale: L }) {
  const rt = homeContent[loc];
  const nf = numberLocale[loc];
  const fmt = (n: number) => n.toLocaleString(nf, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const google = await getGoogleReviews();
  // Ohne echte Google-Daten wird nichts erfunden: der Bereich entfällt (wie auf der deutschen Seite).
  if (!google || google.reviews.length === 0) return null;
  return (
    <section className={revStyles.section} aria-labelledby="reviews-title">
      <div className={revStyles.veil} aria-hidden="true" />
      <Container className={revStyles.inner}>
        <div className={revStyles.head}>
          <SectionLabel>{rt.reviews.eyebrow}</SectionLabel>
          <h2 id="reviews-title" className={`h2 ${revStyles.title}`}>
            {rt.reviews.title}
          </h2>
        </div>
        <div className={revStyles.body}>
          <div className={revStyles.score}>
            <p className={revStyles.value}>
              {fmt(google.rating)}
              <Stars value={google.rating} className={revStyles.stars} loc={loc} />
            </p>
            <p className={revStyles.count}>{rt.reviews.count(fmt(google.rating), google.count.toLocaleString(nf))}</p>
          </div>
          <ul className={revStyles.cards}>
            {google.reviews.map((r) => (
              <li key={`${r.author}-${r.url ?? r.text.slice(0, 20)}`}>
                <article className={revStyles.card}>
                  <Stars value={r.rating} className={revStyles.cardStars} loc={loc} />
                  <p className={revStyles.quote} lang="de">
                    {rt.reviews.quote(r.text)}
                  </p>
                  <footer>
                    <div>
                      <strong>
                        {r.authorUri ? (
                          <a href={r.authorUri} target="_blank" rel="noopener noreferrer">
                            {r.author}
                          </a>
                        ) : (
                          r.author
                        )}
                      </strong>
                      {r.relativeTime &&
                        (r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className={revStyles.time} lang="de">
                            {r.relativeTime}
                          </a>
                        ) : (
                          <span className={revStyles.time} lang="de">
                            {r.relativeTime}
                          </span>
                        ))}
                    </div>
                    <Icon name="google" size={22} strokeWidth={1.6} className={revStyles.g} />
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div className={revStyles.foot}>
          {google.reviewsUrl && (
            <a href={google.reviewsUrl} target="_blank" rel="noopener noreferrer" className={`${revStyles.more} ${btn.primary}`}>
              {rt.reviews.linkLabel}
              <Icon name="arrow" size={16} />
              <span className={revStyles.srOnly}>{rt.reviews.newTab}</span>
            </a>
          )}
          <p className={revStyles.attribution}>{rt.reviews.attribution}</p>
        </div>
      </Container>
    </section>
  );
}

function LocationBlock({ locale: loc }: { locale: L }) {
  const lt = homeContent[loc];
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const embedSrc =
    key && placeId ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(`place_id:${placeId}`)}&language=${loc}` : null;
  return (
    <section className={locStyles.section} aria-labelledby="location-title">
      <Container className={locStyles.inner}>
        <div className={locStyles.copy}>
          <SectionLabel>{lt.location.eyebrow}</SectionLabel>
          <h2 id="location-title" className={`h2 ${locStyles.title}`}>
            {lt.location.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={locStyles.text}>{lt.location.text}</p>
          <address className={locStyles.address}>
            <span>{location.street}</span>
            <span>{location.city}</span>
            <small>{lt.location.note}</small>
          </address>
          <a href={location.cta.href} target="_blank" rel="noopener noreferrer" className={locStyles.link}>
            {lt.location.cta}
            <Icon name="arrow" size={18} className={locStyles.arrow} />
            <span className={locStyles.srOnly}>{lt.location.newTab}</span>
          </a>
        </div>
        {embedSrc && (
          <div className={locStyles.map}>
            <LocalizedConsentMap src={embedSrc} title={lt.location.mapTitle} notice={lt.map.notice} load={lt.map.load} />
          </div>
        )}
      </Container>
    </section>
  );
}
