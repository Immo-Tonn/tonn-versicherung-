import LocalizedPkvPage from "@/components/pkv-i18n/LocalizedPkvPage";
import { pkvContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „Private Krankenversicherung“ (RU) – nicht veröffentlicht (Register: draft). */
const t = pkvContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/private-krankenversicherung", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function Page() {
  return <LocalizedPkvPage locale="ru" />;
}
