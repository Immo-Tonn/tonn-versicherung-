import AboutSection from "@/components/home/AboutSection/AboutSection";
import FinalCTA from "@/components/home/FinalCTA/FinalCTA";
import Hero from "@/components/home/Hero/Hero";
import InsuranceSection from "@/components/home/InsuranceSection/InsuranceSection";
import LocationSection from "@/components/home/LocationSection/LocationSection";
import ProcessSection from "@/components/home/ProcessSection/ProcessSection";
import ReviewsSection from "@/components/home/ReviewsSection/ReviewsSection";
import SituationSection from "@/components/home/SituationSection/SituationSection";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";

const title = "Versicherungsvermittler Münster | PKV, BU, Kapitalanlage | TONN";
const description =
  "Persönliche Beratung in Münster und deutschlandweit: PKV, Berufsunfähigkeit, Kapitalanlage und weitere Versicherungen. Jetzt Erstgespräch vereinbaren.";

export const metadata = pageMetadata({ path: "/", title, description });

export default function HomePage() {
  return (
    <>
      <PageJsonLd path="/" name="Andreas Tonn Versicherungen – Startseite" description={description} />
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
