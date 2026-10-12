import { pageMetadata } from "@/lib/seo";
import { beamte } from "../_sub/beamte";
import SubPage from "../_sub/SubPage";

const title = "PKV für Beamte: Beihilfe & Restkostenschutz | TONN";
const description =
  "PKV für Beamte und Beamtenanwärter: Zusammenspiel mit der Beihilfe, Restkostenversicherung, Öffnungsaktion, Referendare und Familie. Beratung in Münster.";

export const metadata = pageMetadata({ path: beamte.path, title, description });

export default function Page() {
  return <SubPage content={beamte} description={description} />;
}
