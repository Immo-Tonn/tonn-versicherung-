import { siteConfig } from "@/data/site";
import { defaultLocale, type Locale } from "@/i18n/config";
import { inLanguage } from "@/i18n/seo";
import { ids } from "@/lib/seo";

/**
 * Globales Markup (WebSite, Organization, Person). Seitenspezifisches Markup liegt in PageJsonLd.
 * Es werden nur belegte Angaben verwendet (Kontakt, Anschrift, Impressum, sichtbare Texte) – keine Bewertungen.
 * Registernummern und Erlaubnisse stehen so im Impressum; Geschäftszeiten wie im Seitenfuß.
 */
/** Erlaubnisse nach § 34d/34f/34i GewO mit Registernummer (identisch mit dem Impressum); erteilt von der IHK Nord Westfalen. */
const iht = {
  "@type": "Organization",
  name: "IHK Nord Westfalen",
  address: { "@type": "PostalAddress", streetAddress: "Sentmaringer Weg 61", postalCode: "48151", addressLocality: "Münster", addressCountry: "DE" },
  url: "https://www.ihk-nordwestfalen.de",
};
const credential = (name: string, identifier: string) => ({
  "@type": "EducationalOccupationalCredential",
  name,
  credentialCategory: "license",
  identifier,
  recognizedBy: iht,
});
const credentials = [
  credential("Erlaubnis nach § 34d Abs. 1 GewO (Versicherungsvertreter)", "D-A18Z-BI6ZD-48"),
  credential("Erlaubnis nach § 34f Abs. 1 GewO (Finanzanlagenvermittler)", "D-F-156-SNEC-18"),
  credential("Erlaubnis nach § 34i Abs. 1 GewO (Immobiliardarlehensvermittler)", "D-W-156-DSNU-13"),
];
/** Beschreibende Felder je Sprache (Deutsch = bisherige Werte, unverändert). Rechtliche Angaben bleiben bewusst deutsch. */
const descriptive: Record<Locale, { country: string; topics: string[] }> = {
  de: { country: "Deutschland", topics: ["Private Krankenversicherung", "Berufsunfähigkeitsversicherung", "Kapitalanlage"] },
  en: { country: "Germany", topics: ["Private health insurance", "Occupational disability insurance", "Investment"] },
  ru: { country: "Германия", topics: ["Частное медицинское страхование", "Страхование на случай потери трудоспособности", "Инвестиции"] },
};

export default function JsonLd({ locale = defaultLocale }: { locale?: Locale } = {}) {
  const [phone, phone2] = [siteConfig.contact.phoneHref, siteConfig.contact.phoneSecondaryHref].map((h) => h.replace("tel:", ""));
  const { country, topics } = descriptive[locale];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website(),
        url: siteConfig.url,
        name: siteConfig.legalName,
        alternateName: [siteConfig.shortName, "Tonn Versicherungen"],
        inLanguage: inLanguage(locale),
        publisher: { "@id": ids.organization() },
      },
      {
        // Versicherungsvermittlung (Anbieter: laut Impressum „Andreas Tonn Versicherungen“, Münster)
        "@type": "InsuranceAgency",
        "@id": ids.organization(),
        name: siteConfig.legalName,
        alternateName: [siteConfig.shortName, "Tonn Versicherungen"],
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        areaServed: { "@type": "Country", name: country },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          postalCode: siteConfig.contact.address.zip,
          addressLocality: siteConfig.contact.address.city,
          addressCountry: siteConfig.country,
        },
        // Hauptnummer zuerst, danach die zusätzliche Festnetznummer (E.164)
        telephone: [phone, phone2],
        email: siteConfig.contact.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: phone,
          email: siteConfig.contact.email,
          availableLanguage: ["de", "en", "ru"],
        },
        knowsLanguage: ["de", "en", "ru"],
        // Wie im Seitenfuß (Geschäftszeiten)
        openingHours: ["Mo-Fr 08:00-20:00", "Sa 08:00-14:00"],
        // Koordinaten der Anschrift (Sessendrupweg 54, 48161 Münster) laut OpenStreetMap
        geo: { "@type": "GeoCoordinates", latitude: 52.00088, longitude: 7.55199 },
        knowsAbout: topics,
        // Nur vom Inhaber bestätigte Profile; weitere nur nach Bestätigung ergänzen
        sameAs: [siteConfig.profiles.googleBusinessProfile],
        hasMap: siteConfig.profiles.googleBusinessProfile,
        // TODO(PLACEHOLDER): logo ergänzen, sobald eine Logodatei im Projekt liegt (public/logo ist leer)
      },
      {
        "@type": "Person",
        "@id": ids.person(),
        name: siteConfig.contact.name,
        jobTitle: "Versicherungsvertreter (Mehrfachagent)",
        url: `${siteConfig.url}/ueber-uns`,
        image: `${siteConfig.url}/images/ueber-uns/andreas-tonn.png`,
        worksFor: { "@id": ids.organization() },
        sameAs: [siteConfig.profiles.linkedinAndreasTonn],
        telephone: phone,
        email: siteConfig.contact.email,
        knowsAbout: topics.slice(0, 2),
        knowsLanguage: ["de", "en", "ru"],
        hasCredential: credentials,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
