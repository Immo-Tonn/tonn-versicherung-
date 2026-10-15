import LocalizedKontaktPage from "@/components/kontakt-i18n/LocalizedKontaktPage";
import { kontaktContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF „Kontakt“ (EN) – nicht veröffentlicht (Register: draft). */
const t = kontaktContent.en;

export const generateMetadata = () => pageMetadata({ path: "/kontakt", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function Page() {
  return <LocalizedKontaktPage locale="en" />;
}
