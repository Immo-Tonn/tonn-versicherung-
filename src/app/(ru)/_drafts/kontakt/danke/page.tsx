import type { Metadata } from "next";
import LocalizedDankePage from "@/components/kontakt-i18n/LocalizedDankePage";
import { dankeContent } from "@/i18n/content";
import { localizedPath } from "@/i18n/registry";

/** ENTWURF „Danke“ (RU) – nicht veröffentlicht (Register: draft). Immer noindex, nofollow (unabhängig vom Status), nur Canonical. */
export const generateMetadata = (): Metadata => ({
  title: { absolute: dankeContent.ru.meta.title },
  robots: { index: false, follow: false },
  alternates: { canonical: localizedPath("/kontakt/danke", "ru") },
});

export default function Page() {
  return <LocalizedDankePage locale="ru" />;
}
