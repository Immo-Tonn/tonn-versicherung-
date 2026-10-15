import LocalizedBuPage from "@/components/bu-ka-i18n/LocalizedBuPage";
import { buContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „berufsunfaehigkeitsversicherung“ (EN) – nicht veröffentlicht (Register: draft). */
const t = buContent.en;

export const generateMetadata = () => pageMetadata({ path: "/berufsunfaehigkeitsversicherung", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function Page() {
  return <LocalizedBuPage locale="en" />;
}
