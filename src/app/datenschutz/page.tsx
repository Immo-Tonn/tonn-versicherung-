import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell/PageShell";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der TONN Versicherungsberatung.",
  alternates: { canonical: "/datenschutz" },
};

export default function Page() {
  return <PageShell eyebrow="Rechtliches" title="Datenschutz" />;
}
