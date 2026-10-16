import LocalizedWvPage from "@/components/wv-ue-i18n/LocalizedWvPage";
import { wvContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „versicherungen“ (EN) – nicht veröffentlicht (Register: draft). */
const t = wvContent.en;

export const generateMetadata = () => pageMetadata({ path: "/versicherungen", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function Page() {
  return <LocalizedWvPage locale="en" />;
}
