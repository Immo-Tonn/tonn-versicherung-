import type { Metadata } from "next";
import { KtCards, KtForm, KtHero } from "./_components/Sections";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kostenloses Erstgespräch vereinbaren.",
  alternates: { canonical: "/kontakt" },
};

export default function Page() {
  return (
    <>
      <KtHero />
      <KtCards />
      <KtForm />
    </>
  );
}
