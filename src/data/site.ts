/**
 * Zentrale Geschäfts- und Site-Konfiguration.
 * Alles mit PLACEHOLDER ist ein Platzhalter und MUSS vor dem Livegang
 * durch echte Daten ersetzt werden.
 */
export const siteConfig = {
  name: "Andreas Tonn Versicherungen",
  // Maßgeblicher Name für strukturierte Daten (laut Impressum); „name“ bleibt die bisherige sichtbare Marke
  legalName: "Andreas Tonn Versicherungen",
  shortName: "TONN",
  tagline: "Persönlich in Münster. Digital in ganz Deutschland.",
  // TODO(PLACEHOLDER): finale Produktionsdomain eintragen
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tonn-versicherung.de",
  locale: "de_DE",
  city: "Münster",
  country: "DE",
  contact: {
    name: "Andreas Tonn",
    // Hauptnummer (Mobil) – überall als primäre Telefonnummer verwenden
    phone: "0174 3454419",
    phoneHref: "tel:+491743454419",
    // Zusätzliche Festnetznummer – nicht als Hauptnummer verwenden
    phoneSecondary: "0251 62560763",
    phoneSecondaryHref: "tel:+4925162560763",
    email: "andreas@tonn-versicherung.de",
    emailHref: "mailto:andreas@tonn-versicherung.de",
    address: { street: "Sessendrupweg 54", zip: "48161", city: "Münster" },
  },
  // TODO(PLACEHOLDER): Link zum Google Business Profile
  googleProfileUrl: "#",
  // Vom Inhaber bestätigte Profile: Schema.org sameAs und sichtbare Footer-Symbole (LinkedIn = persönliches Profil von Andreas Tonn, Google = Unternehmensprofil)
  profiles: {
    // Dauerhafte Adresse des Google-Unternehmensprofils (CID ohne Suchparameter; identisch mit der Place-ID-Kennung der Bewertungsseite)
    googleBusinessProfile: "https://www.google.com/maps?cid=3010525801531931531",
    // Persönliches LinkedIn-Profil von Andreas Tonn (Person, nicht Organisation)
    linkedinAndreasTonn: "https://www.linkedin.com/in/andreas-tonn-5a412b2b6/",
  },
} as const;

export const isPlaceholder = (value: string) => value === "#";
