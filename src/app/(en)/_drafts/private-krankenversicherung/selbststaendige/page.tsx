import LocalizedSubPage from "@/components/pkv-i18n/LocalizedSubPage";
import { pkvSubMeta, pkvSubPages } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „PKV – selbststaendige“ (EN) – nicht veröffentlicht (Register: draft). */
const content = pkvSubPages.en.selbststaendige;
const meta = pkvSubMeta.en.selbststaendige;

export const generateMetadata = () => pageMetadata({ path: content.path, title: meta.title, description: meta.description, locale: "en" });

export default function Page() {
  return <LocalizedSubPage content={content} description={meta.description} locale="en" />;
}
