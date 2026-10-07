import type { Metadata } from "next";
import { UeCta, UeHero, UeIntro, UePeople } from "./_components/Sections";

export const metadata: Metadata = {
  title: { absolute: "Über uns | Andreas & Natalia Tonn – Münster" },
  description: "Lernen Sie Andreas und Natalia Tonn in Münster kennen: Versicherungsvermittlung mit Schwerpunkt PKV und Berufsunfähigkeit sowie Organisation und Finanzen.",
  alternates: { canonical: "/ueber-uns" },
};

export default function Page() {
  return (
    <>
      <UeHero />
      <UeIntro />
      <UePeople />
      <UeCta />
    </>
  );
}
