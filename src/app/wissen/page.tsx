import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell/PageShell";

export const metadata: Metadata = {
  title: "Wissen",
  description: "Wissen rund um Versicherungen.",
  alternates: { canonical: "/wissen" },
};

export default function Page() {
  return <PageShell eyebrow="Unternehmen" title="Wissen" />;
}
