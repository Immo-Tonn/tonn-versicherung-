import LocalizedPkvPage from "@/components/pkv-i18n/LocalizedPkvPage";
import { pkvContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „Private Krankenversicherung“ (EN) – nicht veröffentlicht (Register: draft). */
const t = pkvContent.en;

export const generateMetadata = () => pageMetadata({ path: "/private-krankenversicherung", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function Page() {
  return <LocalizedPkvPage locale="en" />;
}
