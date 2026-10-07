import type { Metadata } from "next";
import { BuExisting, BuFaq, BuFinalCta, BuGroups, BuHealth, BuHero, BuPower, BuProcess, BuReality, BuRente } from "./_components/Sections";

export const metadata: Metadata = {
  title: "Berufsunfähigkeitsversicherung",
  description: "Berufsunfähigkeitsversicherung: Beratung zur Absicherung der Arbeitskraft.",
  alternates: { canonical: "/berufsunfaehigkeitsversicherung" },
};

export default function Page() {
  return (
    <>
      <BuHero />
      <BuPower />
      <BuReality />
      <BuGroups />
      <BuRente />
      <BuHealth />
      <BuProcess />
      <BuExisting />
      <BuFaq />
      <BuFinalCta />
    </>
  );
}
