import LocalizedUeberPage from "@/components/wv-ue-i18n/LocalizedUeberPage";
import { ueContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „ueber-uns“ (RU) – nicht veröffentlicht (Register: draft). */
const t = ueContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/ueber-uns", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function Page() {
  return <LocalizedUeberPage locale="ru" />;
}
