import LocalizedSubPage from "@/components/pkv-i18n/LocalizedSubPage";
import { pkvSubMeta, pkvSubPages } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „PKV – beamte“ (EN) – nicht veröffentlicht (Register: draft). */
const content = pkvSubPages.en.beamte;
const meta = pkvSubMeta.en.beamte;

export const generateMetadata = () => pageMetadata({ path: content.path, title: meta.title, description: meta.description, locale: "en" });

export default function Page() {
  return <LocalizedSubPage content={content} description={meta.description} locale="en" />;
}
