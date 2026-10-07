import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell/PageShell";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der TONN Versicherungsberatung.",
  alternates: { canonical: "/impressum" },
};

export default function Page() {
  return <PageShell eyebrow="Rechtliches" title="Impressum" />;
}
