import { footerColumns } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import FooterLayout from "./FooterLayout";

export default function Footer() {
  const [services, company, legal] = footerColumns;
  return (
    <FooterLayout
      claim={siteConfig.tagline}
      cta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      columns={[services, company]}
      contactTitle="Kontakt"
      hours={{ title: "Geschäftszeiten", lines: ["Mo–Fr: 09:00–20:00 Uhr", "Sa: 09:00–14:00 Uhr", "So: geschlossen"] }}
      social={{ label: "Soziale Netzwerke und Kontakt", linkedin: "LinkedIn", google: "Google-Profil", email: "E-Mail" }}
      legalLabel={legal.title}
      legal={legal.links}
    />
  );
}
