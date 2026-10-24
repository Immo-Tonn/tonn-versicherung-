import { footerColumns } from "@/data/navigation";
import FooterLayout from "./FooterLayout";

export default function Footer() {
  const legal = footerColumns[2];
  return (
    <FooterLayout
      contactTitle="Kontakt"
      hours={{
        title: "Geschäftszeiten",
        rows: [
          ["Mo–Fr", "08:00–20:00"],
          ["Sa", "08:00–14:00"],
          ["So", "geschlossen"],
        ],
      }}
      social={{ label: "Soziale Netzwerke und Kontakt", linkedin: "LinkedIn", google: "Google-Profil", email: "E-Mail" }}
      legalLabel={legal.title}
      legal={legal.links}
    />
  );
}
