import LocalizedKapitalPage from "@/components/bu-ka-i18n/LocalizedKapitalPage";
import { kaContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „kapitalanlage“ (RU) – nicht veröffentlicht (Register: draft). */
const t = kaContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/kapitalanlage", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function Page() {
  return <LocalizedKapitalPage locale="ru" />;
}
