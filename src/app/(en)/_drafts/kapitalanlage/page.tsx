import LocalizedKapitalPage from "@/components/bu-ka-i18n/LocalizedKapitalPage";
import { kaContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „kapitalanlage“ (EN) – nicht veröffentlicht (Register: draft). */
const t = kaContent.en;

export const generateMetadata = () => pageMetadata({ path: "/kapitalanlage", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function Page() {
  return <LocalizedKapitalPage locale="en" />;
}
