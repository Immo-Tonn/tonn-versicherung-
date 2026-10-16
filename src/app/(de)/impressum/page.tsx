import LegalDocument, { Ext, Mail, Tel } from "@/components/legal/LegalDocument";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/impressum",
  title: "Impressum | TONN",
  description: "Impressum von Andreas Tonn Versicherungen, Münster: Anbieterangaben, Erlaubnisse nach §§ 34c, 34d, 34f, 34i GewO, Vermittlerregister, Schlichtung.",
});

function Contact() {
  const { contact } = siteConfig;
  return (
    <>
      Telefon (mobil): <Tel href={contact.phoneHref}>{contact.phone}</Tel>
      <br />
      Telefon (Festnetz): <Tel href={contact.phoneSecondaryHref}>{contact.phoneSecondary}</Tel>
      <br />
      E-Mail: <Mail>{contact.email}</Mail>
    </>
  );
}

export default function Page() {
  return (
    <LegalDocument title="Impressum">
      <h2>Anbieter nach § 5 Digitale-Dienste-Gesetz (DDG):</h2>
      <p>
        Andreas Tonn Versicherungen
        <br />
        Sessendrupweg 54
        <br />
        48161 Münster
        <br />
        <Contact />
      </p>
      <p>Inhaber: Andreas Tonn</p>

      <h2>Tätigkeitsart:</h2>
      <p>
        Versicherungsvertreter mit Erlaubnis nach § 34d Abs. 1 GewO, Bundesrepublik Deutschland
        <br />
        Finanzanlagenvermittler mit Erlaubnis nach § 34f Abs. 1 GewO, Bundesrepublik Deutschland
        <br />
        Immobiliardarlehensvermittler mit Erlaubnis nach § 34i Abs. 1 GewO, Bundesrepublik Deutschland
        <br />
        Immobilienmakler mit Erlaubnis nach § 34c Abs. 1 GewO, Bundesrepublik Deutschland
      </p>

      <h2>Behörde für die Erteilung der Erlaubnis nach § 34d Abs. 1 GewO</h2>
      <p>
        (Versicherungsvertreter / Mehrfachagent):
        <br />
        Industrie- und Handelskammer Nord Westfalen
        <br />
        Sentmaringer Weg 61, 48151 Münster, Internet: <Ext>www.ihk-nordwestfalen.de</Ext>
      </p>

      <h2>Behörde für die Erteilung der Erlaubnis nach § 34f GewO:</h2>
      <p>
        Industrie- und Handelskammer Nord Westfalen
        <br />
        Sentmaringer Weg 61, 48151 Münster, Internet: <Ext>www.ihk-nordwestfalen.de</Ext>
      </p>

      <h2>Behörde für die Erteilung der Erlaubnis nach § 34i GewO:</h2>
      <p>
        Industrie- und Handelskammer Nord Westfalen
        <br />
        Sentmaringer Weg 61, 48151 Münster, Internet: <Ext>www.ihk-nordwestfalen.de</Ext>
      </p>

      <h2>Behörde für die Erteilung der Erlaubnis nach § 34c GewO:</h2>
      <p>Stadt Münster, Ordnungsamt</p>

      <h2>Eingetragen im Vermittlerregister</h2>
      <p>
        (<Ext>www.vermittlerregister.info</Ext>) mit der Registernummer:
        <br />
        § 34d: D-A18Z-BI6ZD-48
        <br />
        § 34f: D-F-156-SNEC-18
        <br />
        § 34i: D-W-156-DSNU-13
      </p>

      <h2>Berufsrechtliche Regelungen:</h2>
      <ul>
        <li>§ 34d Gewerbeordnung (GewO)</li>
        <li>Verordnung über die Versicherungsvermittlung und -beratung (VersVermV)</li>
        <li>§§ 59 – 67 Versicherungsvertragsgesetz (VVG)</li>
        <li>§ 34f Gewerbeordnung (GewO)</li>
        <li>Verordnung über die Finanzanlagenvermittlung (FinVermV)</li>
        <li>§ 34i Gewerbeordnung (GewO)</li>
        <li>Verordnung über Immobiliardarlehensvermittlung (ImmVermV)</li>
        <li>§ 34c Gewerbeordnung (GewO)</li>
        <li>Makler- und Bauträgerverordnung (MaBV)</li>
      </ul>
      <p>
        Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebene Homepage <Ext>www.gesetze-im-internet.de</Ext> eingesehen und abgerufen werden.
      </p>

      <h2>Verantwortlicher gem. § 18 Abs. 2 MStV:</h2>
      <p>
        Andreas Tonn
        <br />
        Sessendrupweg 54
        <br />
        48161 Münster
        <br />
        <Contact />
      </p>

      <h2>Registerstelle:</h2>
      <p>
        Deutsche Industrie- und Handelskammer (DIHK)
        <br />
        Breite Straße 29, 10178 Berlin, Telefon: 0180 600585-0
        <br />
        (20 Cent pro Anruf aus dem dt. Festnetz, mit abweichenden Preisen aus Mobilfunknetzen, maximal 60 Cent pro Anruf)
        <br />
        <Ext>www.vermittlerregister.info</Ext>
      </p>

      <h2>Alternative Streitbeilegung:</h2>
      <p>
        Sofern im Falle einer Kundenbeschwerde ausnahmsweise keine einvernehmliche Lösung mit unserem Unternehmen gefunden werden kann, ist unser Unternehmen bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Je nachdem, welchem Leistungsbereich unseres Unternehmens Ihre Beschwerde zuzuordnen ist, sind unterschiedliche Schlichtungsstellen zuständig.
      </p>
      <p>
        Für den Fall, dass Ihre Beschwerde eine Versicherungsvermittlung betrifft, ist der Versicherungsombudsmann e.V. zuständig:
        <br />
        Kontakt: Postfach 080632, 10006 Berlin
        <br />
        Telefon: 0800 / 36 96 000 (Inland), +49 30 / 20 60 58 99 (Ausland), Telefax: 0800 / 36 99 000 (Inland), +49 30 / 20 60 58 98 (Ausland)
        <br />
        Internet: <Ext>www.versicherungsombudsmann.de</Ext>, E-Mail: <Mail>beschwerde@versicherungsombudsmann.de</Mail>
      </p>
      <p>
        Betrifft Ihre Beschwerde die Vermittlung einer privaten Krankenversicherung, besteht die Zuständigkeit des Ombudsmann Private Kranken- und Pflegeversicherung:
        <br />
        Kontakt: Glinkastraße 40, 10117 Berlin
        <br />
        Telefon: 0800 / 25 50 444, Telefax: 030 / 20 45 89 31
        <br />
        Internet: <Ext>www.pkv-ombudsmann.de</Ext>, E-Mail: <Mail>ombudsmann@pkv-ombudsmann.de</Mail>
      </p>
      <p>
        Betrifft Ihre Beschwerde die Vermittlung eines Bausparvertrages, besteht die Zuständigkeit der Schlichtungsstelle des Verbandes der privaten Bausparkassen e.V.:
        <br />
        Kontakt: Postfach 303079, 10730 Berlin
        <br />
        Telefon: 030 / 59 00 91-500 und -550, Telefax: 030 / 59 00 91 501
        <br />
        Internet: <Ext>www.schlichtungsstelle-bausparen.de</Ext>, E-Mail: <Mail>info@schlichtungsstelle-bausparen.de</Mail>
      </p>
      <p>
        Betrifft Ihre Beschwerde eine Darlehensvermittlung, besteht die Zuständigkeit der Schlichtungsstelle bei der Deutschen Bundesbank:
        <br />
        Kontakt: Postfach 10 06 02, 60006 Frankfurt am Main
        <br />
        Telefon: 069 / 95 66-33 232, Telefax: 069 / 70 90 90-99 01
        <br />
        Internet: <Ext>www.bundesbank.de/Navigation/DE/Service/Schlichtungsstelle/schlichtungsstelle.html</Ext>, E-Mail: <Mail>schlichtung@bundesbank.de</Mail>
      </p>
      <p>
        Sofern Ihre Beschwerde die Vermittlung einer Kapitalanlage, insbesondere eines Investmentfonds oder eines Alternativen Investmentfonds, sowie die Vermittlung einer Immobilie betrifft, besteht die Zuständigkeit der Allgemeinen Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V.:
        <br />
        Kontakt: Straßburger Straße 8, 77694 Kehl
        <br />
        Telefon: 07851 / 79 57 940, Telefax: 07851 / 79 57 941
        <br />
        Internet: <Ext>www.verbraucher-schlichter.de</Ext>, E-Mail: <Mail>mail@verbraucher-schlichter.de</Mail>
      </p>
      <p>
        Bitte achten Sie darauf, dass die Schlichtung erst angerufen werden kann, wenn Ihre Beschwerde gegenüber unserem Unternehmen mitgeteilt wurde und von uns entweder zurückgewiesen oder seit mehr als zwei Monaten nicht bearbeitet wurde.
      </p>

      <h2>Beteiligungen:</h2>
      <p>Der Vermittler hält keine direkte oder indirekte Beteiligung von über 10 % an den Stimmrechten oder am Kapital eines Versicherungsunternehmens.</p>
      <p>Kein Versicherungsunternehmen oder Mutterunternehmen eines Versicherungsunternehmens hält eine direkte oder indirekte Beteiligung von über 10 % an den Stimmrechten oder am Kapital des Vermittlers.</p>

      <h2>Hinweis:</h2>
      <p>Diese Website unterliegt dem Recht der Bundesrepublik Deutschland. Sollten Sie auf unseren Seiten Fehler oder Rechtsverletzungen bemerken, bitten wir um einen kurzen Hinweis, damit wir dies schnell prüfen und beheben können.</p>
      <p>Stand: 10/2026</p>
    </LegalDocument>
  );
}
