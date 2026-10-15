import LocalizedBuPage from "@/components/bu-ka-i18n/LocalizedBuPage";
import { buContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „berufsunfaehigkeitsversicherung“ (RU) – nicht veröffentlicht (Register: draft). */
const t = buContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/berufsunfaehigkeitsversicherung", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function Page() {
  return <LocalizedBuPage locale="ru" />;
}
