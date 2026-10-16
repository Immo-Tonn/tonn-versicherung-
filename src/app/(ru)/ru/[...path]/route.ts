import { localizedNotFound } from "@/i18n/not-found-response";

/**
 * Sperre für alle /ru/…-Adressen ohne eigene Seitendatei: HTTP 404 mit lang="ru" – auch bei direktem Aufruf.
 * Veröffentlichte Seiten (page.tsx) haben Vorrang vor diesem Handler. Entwürfe liegen in (…)/_drafts und sind keine Routen.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  return localizedNotFound("ru");
}
export const HEAD = GET;
