import LocalizedWvPage from "@/components/wv-ue-i18n/LocalizedWvPage";
import { wvContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „versicherungen“ (RU) – nicht veröffentlicht (Register: draft). */
const t = wvContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/versicherungen", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function Page() {
  return <LocalizedWvPage locale="ru" />;
}
