import type { Metadata } from "next";
import { PkvAbout, PkvCompare, PkvFaq, PkvFinalCta, PkvHero, PkvProcess, PkvRisk, PkvSecondOpinion, PkvTargets, PkvTrust } from "./_components/Sections";

export const metadata: Metadata = {
  title: "Private Krankenversicherung",
  description: "Private Krankenversicherung: unabhängige Beratung in Münster und deutschlandweit.",
  alternates: { canonical: "/private-krankenversicherung" },
};

export default function Page() {
  return (
    <>
      <PkvHero />
      <PkvTrust />
      <PkvTargets />
      <PkvProcess />
      <PkvRisk />
      <PkvCompare />
      <PkvAbout />
      <PkvSecondOpinion />
      <PkvFaq />
      <PkvFinalCta />
    </>
  );
}
