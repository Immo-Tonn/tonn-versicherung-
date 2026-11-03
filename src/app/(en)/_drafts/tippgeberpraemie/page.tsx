import TippPage from "@/components/tipp/TippPage";
import { tippContent } from "@/i18n/content/tipp";
import { pageMetadata } from "@/lib/seo";

const t = tippContent.en.meta;

export const generateMetadata = () => pageMetadata({ path: "/tippgeberpraemie", title: t.title, description: t.description, locale: "en" });

export default function Page() {
  return <TippPage locale="en" />;
}
