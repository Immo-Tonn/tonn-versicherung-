import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";

export const metadata: Metadata = {
  title: "Vielen Dank",
  robots: { index: false, follow: false },
  alternates: { canonical: "/kontakt/danke" },
};

export default function Page() {
  return (
    <section style={{ padding: "calc(var(--header-h) + clamp(56px, 8vw, 112px)) 0 var(--section-y)", background: "var(--off-white)", minHeight: "60vh" }}>
      <Container>
        <SectionLabel>Kontakt</SectionLabel>
        <h1 className="h2" style={{ marginBottom: 20 }}>
          Vielen Dank für Ihre Nachricht.
        </h1>
        <p className="lead" style={{ maxWidth: 520, marginBottom: 32 }}>
          Wir melden uns bei Ihnen.
        </p>
        <Link href="/" style={{ fontWeight: 500, color: "var(--text)", borderBottom: "2px solid var(--red)", paddingBottom: 6 }}>
          Zur Startseite
        </Link>
      </Container>
    </section>
  );
}
