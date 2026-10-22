import type { Locale } from "@/i18n/config";

/** Sichtbare Prüfhinweis-Texte je Sprache: "<davor><Name> · <Monat Jahr>". Der Name wird zur Über-uns-Seite verlinkt. */
export const reviewLabels: Record<Locale, { before: string; name: string; href: string }> = {
  de: { before: "Fachlich geprüft von ", name: "Andreas Tonn", href: "/ueber-uns" },
  en: { before: "Reviewed for accuracy by ", name: "Andreas Tonn", href: "/en/ueber-uns" },
  ru: { before: "Проверено специалистом ", name: "Андреасом Тонном", href: "/ru/ueber-uns" },
};

const MONTHS: Record<Locale, string[]> = {
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ru: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
};

/** "2026-10" → "Oktober 2026" / "October 2026" / "октябрь 2026" (nur Monat und Jahr, nie ein Tag). */
export function formatReviewMonth(month: string, locale: Locale): string {
  const m = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(month);
  if (!m) throw new Error(`Ungültiger Prüfmonat "${month}" (erwartet JJJJ-MM)`);
  return `${MONTHS[locale][Number(m[2]) - 1]} ${m[1]}`;
}
