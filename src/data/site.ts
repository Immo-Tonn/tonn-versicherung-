/**
 * Zentrale Geschäfts- und Site-Konfiguration.
 * Alles mit PLACEHOLDER ist ein Platzhalter und MUSS vor dem Livegang
 * durch echte Daten ersetzt werden.
 */
export const siteConfig = {
  name: "TONN Versicherungsberatung",
  shortName: "TONN",
  tagline: "Persönlich in Münster. Digital in ganz Deutschland.",
  // TODO(PLACEHOLDER): finale Produktionsdomain eintragen
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tonn-versicherung.de",
  locale: "de_DE",
  city: "Münster",
  country: "DE",
  contact: {
    // TODO(PLACEHOLDER): echte Telefonnummer
    phone: "+49 000 0000000",
    // TODO(PLACEHOLDER): echte E-Mail-Adresse
    email: "kontakt@example.invalid",
    // TODO(PLACEHOLDER): echte Straße / PLZ, falls im Impressum gewünscht
    address: null as string | null,
  },
  social: {
    // TODO(PLACEHOLDER): echte Profile
    linkedin: "#",
    google: "#",
  },
  // TODO(PLACEHOLDER): Link zum Google Business Profile
  googleProfileUrl: "#",
} as const;

export const isPlaceholder = (value: string) =>
  value.includes("example.invalid") || value.startsWith("+49 000") || value === "#";
