import { siteConfig } from "@/data/site";

/** Grundlage für WebSite- und Organization-Markup. Unbekannte Werte werden bewusst weggelassen. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "de-DE",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        areaServed: { "@type": "Country", name: "Deutschland" },
        address: { "@type": "PostalAddress", addressLocality: siteConfig.city, addressCountry: siteConfig.country },
        // TODO(PLACEHOLDER): logo, telephone, email, sameAs ergänzen, sobald echte Daten vorliegen
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
