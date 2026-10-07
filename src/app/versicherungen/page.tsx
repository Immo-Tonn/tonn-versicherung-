import type { Metadata } from "next";
import { WvConsulting, WvFaq, WvFinalCta, WvHero, WvOverview, WvReview } from "./_components/Sections";

export const metadata: Metadata = {
  title: "Weitere Versicherungen",
  description: "Weitere Absicherungen im Überblick.",
  alternates: { canonical: "/versicherungen" },
};

export default function Page() {
  return (
    <>
      <WvHero />
      <WvOverview />
      <WvReview />
      <WvConsulting />
      <WvFaq />
      <WvFinalCta />
    </>
  );
}
