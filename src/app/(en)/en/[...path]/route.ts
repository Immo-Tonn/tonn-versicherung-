import { localizedNotFound } from "@/i18n/not-found-response";

/**
 * Sperre für alle /en/…-Adressen ohne eigene Seitendatei: HTTP 404 mit lang="en" – auch bei direktem Aufruf.
 * Veröffentlichte Seiten (page.tsx) haben Vorrang vor diesem Handler. Entwürfe liegen in (…)/_drafts und sind keine Routen.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  return localizedNotFound("en");
}
export const HEAD = GET;
