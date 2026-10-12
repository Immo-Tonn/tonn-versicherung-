import { siteConfig } from "@/data/site";
import { ids } from "@/lib/seo";

/**
 * Globales Markup (WebSite, Organization, Person). Seitenspezifisches Markup liegt in PageJsonLd.
 * Es werden nur belegte Angaben verwendet (Kontakt, Anschrift, Impressum, sichtbare Texte) –
 * keine Bewertungen, Auszeichnungen, Zertifikate oder Registernummern.
 */
export default function JsonLd() {
  const [phone, phone2] = [siteConfig.contact.phoneHref, siteConfig.contact.phoneSecondaryHref].map((h) => h.replace("tel:", ""));
  const topics = ["Private Krankenversicherung", "Berufsunfähigkeitsversicherung", "Kapitalanlage"];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website(),
        url: siteConfig.url,
        name: siteConfig.legalName,
        alternateName: [siteConfig.shortName, "Tonn Versicherungen"],
        inLanguage: "de-DE",
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
        areaServed: { "@type": "Country", name: "Deutschland" },
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
          availableLanguage: "de",
        },
        knowsAbout: topics,
        // Nur vom Inhaber bestätigte Profile; weitere nur nach Bestätigung ergänzen
        sameAs: [siteConfig.profiles.googleBusinessProfile],
        hasMap: siteConfig.profiles.googleBusinessProfile,
        // TODO(PLACEHOLDER): logo ergänzen, sobald echte Daten vorliegen
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
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
