import LocalizedRatgeberPage from "@/components/wissen-i18n/LocalizedRatgeberPage";
import { ratgeberContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF Ratgeber-Übersicht „/wissen“ (RU) – nicht veröffentlicht (Register: draft). */
const t = ratgeberContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/wissen", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function Page() {
  return <LocalizedRatgeberPage locale="ru" />;
}
