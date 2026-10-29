import TippPage from "@/components/tipp/TippPage";
import { tippContent } from "@/i18n/content/tipp";
import { pageMetadata } from "@/lib/seo";

const path = "/tippgeberpraemie";
const t = tippContent.de.meta;

/** Neue Seite, Entwurf der Teilnahmebedingungen bis zur juristischen Prüfung: noindex, nicht in der Sitemap (Register: noindex). */
export const metadata = { ...pageMetadata({ path, title: t.title, description: t.description }), robots: { index: false, follow: true } };

export default function Page() {
  return <TippPage locale="de" />;
}
