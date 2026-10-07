import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection/AboutSection";
import FinalCTA from "@/components/home/FinalCTA/FinalCTA";
import Hero from "@/components/home/Hero/Hero";
import InsuranceSection from "@/components/home/InsuranceSection/InsuranceSection";
import LocationSection from "@/components/home/LocationSection/LocationSection";
import ProcessSection from "@/components/home/ProcessSection/ProcessSection";
import ReviewsSection from "@/components/home/ReviewsSection/ReviewsSection";
import SituationSection from "@/components/home/SituationSection/SituationSection";

export const metadata: Metadata = {
  title: { absolute: "Private Krankenversicherung Münster | TONN Versicherungsberatung" },
  description:
    "Individuelle Beratung zur privaten Krankenversicherung in Münster und deutschlandweit. Anonyme Risikovoranfrage, Tarifvergleich und persönliche Begleitung.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SituationSection />
      <ProcessSection />
      <AboutSection />
      <InsuranceSection />
      <ReviewsSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
