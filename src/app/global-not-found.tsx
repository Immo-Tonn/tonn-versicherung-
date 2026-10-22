import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import ConsentBanner from "@/components/consent/ConsentBanner";
import CallFab from "@/components/ui/CallButton/CallFab";
import { getDictionary } from "@/i18n/dictionaries";
import GoogleAnalytics from "@/components/consent/GoogleAnalytics";
import Usercentrics from "@/components/consent/Usercentrics";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import "./globals.css";

/**
 * 404-Seite der gesamten Anwendung (deutsch).
 * Wird von Next.js ohne Layouts gerendert, deshalb stehen html/body, Schriften und die
 * gemeinsame Oberfläche (Header, Footer, Cookie-Banner) hier selbst – gleiche Bausteine wie in (de)/layout.tsx.
 */
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Seite nicht gefunden | TONN",
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#06263f", width: "device-width", initialScale: 1 };

export default function GlobalNotFound() {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">
          <section
            aria-labelledby="nf-title"
            style={{
              padding: "calc(var(--header-h) + clamp(56px, 8vw, 112px)) 0 clamp(72px, 9vw, 128px)",
              background: "var(--off-white)",
              minHeight: "60vh",
            }}
          >
            <Container>
              <SectionLabel>Fehler 404</SectionLabel>
              <h1 id="nf-title" className="h2" style={{ maxWidth: 760, margin: "20px 0 20px" }}>
                Seite nicht gefunden
              </h1>
              <p className="lead" style={{ maxWidth: 560, margin: "0 0 32px" }}>
                Diese Seite gibt es leider nicht oder sie wurde verschoben. Über die Startseite finden Sie zu unseren Themen zurück.
              </p>
              <Button href="/">Zur Startseite</Button>
            </Container>
          </section>
        </main>
        <Footer />
        <ConsentBanner />
        <CallFab label={getDictionary("de").header.call} ariaLabel={getDictionary("de").header.callAria} />
        <GoogleAnalytics />
        <Usercentrics locale={"de"} />
      </body>
    </html>
  );
}
