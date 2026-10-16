/** Sprachen der Website. Deutsch ist Standardsprache (ohne Präfix), EN/RU liegen unter /en bzw. /ru. */
export const locales = ["de", "en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

type LocaleMeta = {
  /** Wert für <html lang> und hreflang */
  htmlLang: string;
  /** Open-Graph-Locale (og:locale) */
  ogLocale: string;
  /** Wert für Schema.org inLanguage */
  inLanguage: string;
  /** URL-Präfix ("" = Standardsprache) */
  prefix: "" | "/en" | "/ru";
  /** Selbstbezeichnung für den Sprachumschalter */
  label: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  de: { htmlLang: "de", ogLocale: "de_DE", inLanguage: "de-DE", prefix: "", label: "DE" },
  en: { htmlLang: "en", ogLocale: "en_GB", inLanguage: "en", prefix: "/en", label: "EN" },
  ru: { htmlLang: "ru", ogLocale: "ru_RU", inLanguage: "ru", prefix: "/ru", label: "RU" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
