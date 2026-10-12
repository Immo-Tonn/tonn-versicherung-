import { pageMetadata } from "@/lib/seo";
import { angestellte } from "../_sub/angestellte";
import SubPage from "../_sub/SubPage";

const title = "PKV für Angestellte: Wechsel, Grenze, Zuschuss | TONN";
const description =
  "Wann Angestellte in die PKV wechseln können: Versicherungspflichtgrenze 2026, Arbeitgeberzuschuss, Vorteile, Grenzen und Tarifwahl. Persönliche Beratung in Münster.";

export const metadata = pageMetadata({ path: angestellte.path, title, description });

export default function Page() {
  return <SubPage content={angestellte} description={description} />;
}
