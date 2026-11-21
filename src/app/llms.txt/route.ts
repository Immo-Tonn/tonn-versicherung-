import { siteConfig } from "@/data/site";

/** /llms.txt: kurze, sachliche Beschreibung für KI-Systeme. Angaben wie im Impressum und auf den Seiten; keine Werbeaussagen. */
export const dynamic = "force-static";

export function GET() {
  const u = siteConfig.url;
  const { contact } = siteConfig;
  const body = `# Andreas Tonn Versicherungen

> Versicherungsvermittlung in Münster. Andreas Tonn ist Versicherungsvertreter (Mehrfachagent) mit Erlaubnis nach § 34d Abs. 1 GewO und arbeitet mit mehreren Versicherungsgesellschaften zusammen.

## Status (laut Impressum)

- Andreas Tonn, Versicherungsvertreter (Mehrfachagent), Erlaubnis nach § 34d Abs. 1 GewO, Vermittlerregister-Nr. D-A18Z-BI6ZD-48
- Finanzanlagenvermittler, Erlaubnis nach § 34f Abs. 1 GewO, D-F-156-SNEC-18
- Immobiliardarlehensvermittler, Erlaubnis nach § 34i Abs. 1 GewO, D-W-156-DSNU-13
- Zuständige Behörde: IHK Nord Westfalen, Sentmaringer Weg 61, 48151 Münster; Registerstelle: DIHK (vermittlerregister.info)
- Vergütung: Provision vom jeweiligen Versicherungsunternehmen, in der Versicherungsprämie enthalten

## Leistungen

- Private Krankenversicherung (PKV)
- Berufsunfähigkeitsversicherung
- Kapitalanlage
- Weitere Versicherungen (zum Beispiel Unfall, Haftpflicht)

## Region und Kontakt

- Sitz: ${contact.address.street}, ${contact.address.zip} ${contact.address.city}
- Beratung vor Ort in Münster oder per Video
- Geschäftszeiten: Mo–Fr 08:00–20:00, Sa 08:00–14:00
- Sprachen der Website: Deutsch, Englisch, Russisch
- E-Mail: ${contact.email}

## Wichtige Seiten

- [Startseite](${u}/)
- [Private Krankenversicherung](${u}/private-krankenversicherung)
- [Berufsunfähigkeitsversicherung](${u}/berufsunfaehigkeitsversicherung)
- [Kapitalanlage](${u}/kapitalanlage)
- [Weitere Versicherungen](${u}/versicherungen)
- [Über uns, Status, Partner-Versicherer](${u}/ueber-uns)
- [Ratgeber](${u}/wissen)
- [Kontakt](${u}/kontakt)
- [Impressum](${u}/impressum)
- [Erstinformation](${u}/erstinformation)
- [Datenschutz](${u}/datenschutz)
- [Sitemap](${u}/sitemap.xml)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
