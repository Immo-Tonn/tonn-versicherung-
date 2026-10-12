import { pageMetadata } from "@/lib/seo";
import SubPage from "../_sub/SubPage";
import { selbststaendige } from "../_sub/selbststaendige";

const title = "PKV für Selbstständige: Tarife & Krankentagegeld | TONN";
const description =
  "PKV für Selbstständige und Freiberufler: Tarifwahl, Selbstbehalt, Krankentagegeld, Beiträge bei schwankendem Einkommen und langfristige Planung. Beratung in Münster.";

export const metadata = pageMetadata({ path: selbststaendige.path, title, description });

export default function Page() {
  return <SubPage content={selbststaendige} description={description} />;
}
