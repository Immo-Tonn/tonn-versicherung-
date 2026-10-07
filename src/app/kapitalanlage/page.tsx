import type { Metadata } from "next";
import { KaConsulting, KaFaq, KaFinalCta, KaGoals, KaHero, KaQuestions } from "./_components/Sections";

export const metadata: Metadata = {
  title: { absolute: "Kapitalanlage in Münster | Andreas Tonn" },
  description: "Persönliche Beratung zur Kapitalanlage in Münster. Gemeinsam betrachten wir Ihre Ziele, Ihren Zeithorizont sowie Chancen, Risiken und Kosten.",
  alternates: { canonical: "/kapitalanlage" },
};

export default function Page() {
  return (
    <>
      <KaHero />
      <KaGoals />
      <KaQuestions />
      <KaConsulting />
      <KaFaq />
      <KaFinalCta />
    </>
  );
}
