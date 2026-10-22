import type { Locale } from "@/i18n/config";

const NUMBER_LOCALE: Record<Locale, string> = { de: "de-DE", en: "en-GB", ru: "ru-RU" };

/** Russisch: 1 отзыв, 2-4 отзыва, 5-20 отзывов, 21 отзыв … */
function ruReviews(n: number) {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "отзыв";
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "отзыва";
  return "отзывов";
}

/**
 * Quellenzeile zur Google-Bewertung neben der Sternezahl, z. B. "bei Google · 48 Bewertungen". Die Anzahl stammt aus derselben Places-Antwort
 * (userRatingCount) wie die Sterne. Ohne gültige Anzahl (keine ganze Zahl > 0) gibt es keine Zeile: nichts wird ersetzt oder erfunden. Zahl und Wort sind durch ein geschütztes Leerzeichen verbunden (kein Umbruch dazwischen).
 */
export function reviewSourceLine(count: number | null | undefined, locale: Locale): string | null {
  if (typeof count !== "number" || !Number.isInteger(count) || count <= 0) return null;
  const n = new Intl.NumberFormat(NUMBER_LOCALE[locale]).format(count);
  if (locale === "de") return `bei Google · ${n}\u00a0${count === 1 ? "Bewertung" : "Bewertungen"}`;
  if (locale === "en") return `on Google · ${n}\u00a0${count === 1 ? "review" : "reviews"}`;
  return `в Google · ${n}\u00a0${ruReviews(count)}`;
}
