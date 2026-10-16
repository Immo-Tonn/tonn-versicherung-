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
      social={{ label: "Soziale Netzwerke und Kontakt", linkedin: "LinkedIn", google: "Google-Profil", email: "E-Mail" }}
      legalLabel={legal.title}
      legal={legal.links}
    />
  );
}
