import type { Metadata } from "next";
import { defaultLocale, localeMeta, type Locale } from "./config";
import { isNoindex, localizedPath, publicLocales } from "./registry";

/**
 * canonical + hreflang (inkl. x-default → Deutsch) nur für veröffentlichte Sprachversionen.
 * Solange keine EN/RU-Seite "live" ist, enthält das Ergebnis nur die deutsche Seite und
 * gibt KEIN hreflang aus (hreflang erst, wenn mindestens zwei Sprachen öffentlich sind).
 */
export function localizedAlternates(germanPath: string, locale: Locale): NonNullable<Metadata["alternates"]> {
  const canonical = localizedPath(germanPath, locale);
  const available = publicLocales(germanPath);
  if (available.length < 2 || isNoindex(germanPath)) return { canonical };
  const languages: Record<string, string> = {};
  for (const l of available) languages[localeMeta[l].htmlLang] = localizedPath(germanPath, l);
  if (available.includes(defaultLocale)) languages["x-default"] = localizedPath(germanPath, defaultLocale);
  return { canonical, languages };
}

/** Open-Graph-Locale inkl. og:locale:alternate für veröffentlichte Übersetzungen. */
export function localizedOpenGraph(germanPath: string, locale: Locale) {
  return {
    locale: localeMeta[locale].ogLocale,
    alternateLocale: publicLocales(germanPath)
      .filter((l) => l !== locale)
      .map((l) => localeMeta[l].ogLocale),
  };
}

export const inLanguage = (locale: Locale) => localeMeta[locale].inLanguage;
