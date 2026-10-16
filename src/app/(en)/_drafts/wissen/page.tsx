import LocalizedRatgeberPage from "@/components/wissen-i18n/LocalizedRatgeberPage";
import { ratgeberContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF Ratgeber-Übersicht „/wissen“ (EN) – nicht veröffentlicht (Register: draft). */
const t = ratgeberContent.en;

export const generateMetadata = () => pageMetadata({ path: "/wissen", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function Page() {
  return <LocalizedRatgeberPage locale="en" />;
}
