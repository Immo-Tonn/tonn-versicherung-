import LegalDocument, { Ext, Mail, Tel } from "@/components/legal/LegalDocument";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/datenschutz",
  title: "Datenschutzerklärung | TONN",
  description: "Datenschutzerklärung von Andreas Tonn Versicherungen: Hosting, Einwilligung und Cookies, Kontaktformular, Google-Dienste, Speicherdauer und Ihre Rechte.",
});

export default function Page() {
  const { contact } = siteConfig;
  return (
    <LegalDocument title="Datenschutzerklärung – Andreas Tonn Versicherungen (tonn-versicherung.de)">
      <h2 id="verantwortlicher">1. Verantwortlicher und Kontakt</h2>
      <p>
        Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) für diese Website ist Andreas Tonn Versicherungen, Inhaber Andreas Tonn, Sessendrupweg 54, 48161 Münster.
      </p>
      <p>
        Telefon: <Tel href={contact.phoneHref}>{contact.phone}</Tel> (mobil) · <Tel href={contact.phoneSecondaryHref}>{contact.phoneSecondary}</Tel> (Festnetz) · E-Mail: <Mail>{contact.email}</Mail> · Website: <Ext>www.tonn-versicherung.de</Ext>
      </p>
      <p>
        Die Website wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet (siehe Abschnitt 3). Für die Datenverarbeitung in unserer Beratungs- und Vermittlungstätigkeit sind wir selbst verantwortlich.
      </p>

      <h2 id="datenschutzbeauftragter">2. Datenschutzbeauftragter</h2>
      <p>
        Wir haben keinen Datenschutzbeauftragten benannt, weil dies nach Art. 37 DSGVO und § 38 BDSG für uns nicht erforderlich ist. Ansprechpartner für alle Fragen zum Datenschutz ist Andreas Tonn unter den Kontaktdaten in Abschnitt 1.
      </p>

      <h2 id="hosting">3. Hosting, Betreiber der Website, Server-Logfiles und Verschlüsselung</h2>
      <p>
        <strong>Betreiber und Hosting.</strong> Hoster der Website ist die STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin. Sie stellt die Seiten bereit und verarbeitet dabei Daten in unserem Auftrag. Mit ihr besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
      </p>
      <p>
        <strong>Server-Logfiles.</strong> Bei jedem Aufruf der Website erfasst der Server automatisch technische Daten: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL, Browser- und Betriebssystem-Angaben, übertragene Datenmenge und Statuscode. Das ist technisch nötig, um die Seiten auszuliefern, den stabilen Betrieb sicherzustellen und Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Webangebot). Die Logfiles werden nicht mit anderen Daten zusammengeführt. Nach Angaben des Hosters werden IP-Adressen höchstens sieben Tage gespeichert, die Logfiles werden nach spätestens sechs Wochen gelöscht.
      </p>
      <p>
        <strong>Verschlüsselung.</strong> Die Website wird über HTTPS (TLS) ausgeliefert, damit Ihre Eingaben auf dem Übertragungsweg geschützt sind.
      </p>

      <h2 id="cookies">4. Cookies, ähnliche Technologien und Einwilligung (§ 25 TDDDG)</h2>
      <p>
        <strong>Was geregelt ist.</strong> Nach § 25 des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) dürfen wir Informationen auf Ihrem Endgerät (zum Beispiel Computer, Smartphone oder Tablet) nur speichern oder von dort auslesen, wenn Sie vorher eingewilligt haben. Das betrifft Cookies und ähnliche Technologien. Ohne Ihre Einwilligung ist dies nur erlaubt, wenn es technisch unbedingt erforderlich ist, damit Sie die Website nutzen können (§ 25 Abs. 2 Nr. 2 TDDDG).
      </p>
      <p>
        <strong>Technisch erforderliche Zugriffe.</strong> Dazu gehören zum Beispiel die Speicherung Ihrer Cookie-Auswahl und Funktionen für Sicherheit und Stabilität der Website. Sie benötigen keine Einwilligung. Die damit verbundene Datenverarbeitung beruht auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Webangebot).
      </p>
      <p>
        <strong>Zugriffe nur mit Ihrer Einwilligung.</strong> Den folgenden Dienst setzen wir nur ein, wenn Sie vorher über das Einwilligungsbanner zugestimmt haben (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO): Google Maps zur Anzeige der Karte (Abschnitt 8).
      </p>
      <p>Bis zu Ihrer Zustimmung wird dieser Dienst nicht geladen und es werden keine Daten an Google übermittelt.</p>
      <p>
        <strong>Ihre Wahl.</strong> Sie können im Banner zustimmen, ablehnen oder die Auswahl für einzelne Dienste treffen. Wenn Sie ablehnen, können Sie die Website weiterhin nutzen. Die Karte wird dann nicht angezeigt; Sie können sie dort mit der Schaltfläche „Karte laden“ nachträglich freigeben. Damit willigen Sie ausschließlich in Google Maps ein. Ihre Entscheidung wird als Nachweis der Einwilligung gespeichert (siehe nächster Absatz).
      </p>
      <p>
        <strong>Einwilligungsverwaltung (Usercentrics).</strong> Für das Einwilligungsbanner nutzen wir die Consent-Management-Plattform der Usercentrics GmbH, Sendlinger Straße 7, 80331 München (Usercentrics). Usercentrics handelt dabei als Auftragsverarbeiter in unserem Auftrag; nach Angabe von Usercentrics ist die Auftragsverarbeitungsvereinbarung nach Art. 28 DSGVO Bestandteil des mit Usercentrics geschlossenen Vertrags.
      </p>
      <p>
        <strong>Welche Daten dabei übermittelt werden.</strong> Beim Aufruf der Website lädt Ihr Browser das Banner-Skript und die Banner-Einstellungen von Servern von Usercentrics. Dabei wird technisch bedingt Ihre IP-Adresse an Usercentrics übertragen; ebenso beim Abruf einer kleinen Bilddatei (1×1 Pixel) von app.usercentrics.eu, die Ihr Browser 30 Minuten zwischenspeichert. Beim Seitenaufruf und beim Speichern Ihrer Auswahl sendet Ihr Browser außerdem an den Einwilligungsdienst von Usercentrics insbesondere eine technische Kennung (Controller-ID), die Art des Vorgangs (zum Beispiel Seitenaufruf oder Änderung der Auswahl), die Sprache des Banners, die Kennung und Version der Banner-Einstellungen sowie Ihre Auswahl je Dienst in kodierter Form. Zweck ist der Nachweis Ihrer Einwilligung (Art. 7 Abs. 1 DSGVO), Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO.
      </p>
      <p>
        <strong>Wie lange und wo gespeichert wird.</strong> Zu unterscheiden sind zwei Speicherorte. Beim Einwilligungsprotokoll von Usercentrics werden die Einwilligungsdaten nach Angabe von Usercentrics ein Jahr gespeichert. Unabhängig davon legt Ihr Browser Ihre Auswahl im lokalen Speicher (Local Storage, Einträge „ucData“ und „ucString“) ab, damit sie bei späteren Besuchen berücksichtigt wird und das Banner nicht jedes Mal erneut erscheint. Dieser lokale Eintrag hat keine eigene Ablauffrist im Browser und bleibt bis zum Löschen in den Einstellungen Ihres Browsers erhalten. Unabhängig davon ist in den Einstellungen des Banners hinterlegt, dass das Banner nach 366 Tagen seit Ihrer letzten Auswahl erneut angezeigt wird, damit Sie Ihre Auswahl bestätigen oder ändern können.
      </p>
      <p>
        <strong>Verarbeitung in der EU, Unterauftragsverarbeiter.</strong> Nach Angabe von Usercentrics findet die Verarbeitung der Einwilligungsdaten in der Europäischen Union bzw. im Europäischen Wirtschaftsraum statt. Als Unterauftragsverarbeiter nennt Usercentrics unter anderem die Google Cloud EMEA Ltd. (Irland, Hosting), die Hetzner Online GmbH (Deutschland) und die BUNNY WAY d.o.o. (Slowenien, Content Delivery Network). Für etwaige Datenübermittlungen in die USA im Zusammenhang mit Google Cloud nennt Usercentrics Standardvertragsklauseln (siehe auch Abschnitt 9). Weitere Informationen: <Ext>https://usercentrics.com/privacy-policy/</Ext>
      </p>
      <p>
        <strong>Widerruf.</strong> Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen, über den Link „Cookie-Einstellungen“ im Seitenfuß. Dort öffnen sich die Einstellungen, in denen Sie die Einwilligung für Google Maps ausschalten können. Nach dem Widerruf lädt unsere Website die Karte nicht mehr, und es werden keine neuen Anfragen an Google Maps gesendet. Bereits erfolgte Datenübermittlungen werden dadurch nicht rückgängig gemacht; die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt.
      </p>
      <p>
        <strong>Browser-Einstellungen.</strong> Zusätzlich können Sie Cookies in den Einstellungen Ihres Browsers blockieren oder löschen. Dann sind einzelne Funktionen der Website möglicherweise eingeschränkt.
      </p>

      <h2 id="kontakt">5. Kontaktaufnahme per Formular, E-Mail und Telefon</h2>
      <p>
        <strong>Kontaktformular.</strong> Wenn Sie das Formular nutzen, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihre Nachricht und Ihren Kontaktwunsch (E-Mail oder Rückruf). Wir verwenden diese Angaben nur, um Ihre Anfrage zu bearbeiten und mit Ihnen in Kontakt zu treten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen zielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Mit dem Absenden bestätigen Sie die Kenntnisnahme dieser Erklärung. Die Formulardaten werden über den Server des Hosters (Abschnitt 3) verarbeitet und mit Hilfe des E-Mail-Dienstes Resend (siehe unten) als E-Mail an uns übermittelt.
      </p>
      <p>
        <strong>E-Mail-Versand über Resend.</strong> Beim Absenden des Formulars übergibt unser Server Ihre Angaben (Name, E-Mail-Adresse, gegebenenfalls Telefonnummer, Nachricht, gewähltes Thema und Kontaktwunsch) an den E-Mail-Dienst Resend, der daraus die Benachrichtigung an uns versendet. Anbieter ist Plus Five Five, Inc. (Resend), 2261 Market Street #5039, San Francisco, CA 94114, USA. Resend verarbeitet die Daten in unserem Auftrag. Nach Angaben des Anbieters finden die Verarbeitung überwiegend in den USA statt und sind Standardvertragsklauseln der EU-Kommission sowie das EU-US Data Privacy Framework Bestandteil des Auftragsverarbeitungsvertrags (siehe Abschnitt 9). Mit Resend besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO, der Bestandteil der Nutzungsbedingungen von Resend ist. Rechtsgrundlage sind dieselben wie beim Formular (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Nach Angaben des Anbieters speichert Resend E-Mail-Inhalte und Versandprotokolle 30 Tage, Sicherungskopien weitere sieben Tage.
      </p>
      <p>
        <strong>E-Mail und Telefon.</strong> Schreiben oder rufen Sie uns an, speichern wir Ihre Angaben und Ihre Nachricht zur Bearbeitung der Anfrage. Die Rechtsgrundlagen sind dieselben wie beim Formular.
      </p>
      <p>Wir löschen Kontaktanfragen, sobald sie erledigt sind und keine gesetzliche Aufbewahrungspflicht entgegensteht (siehe Abschnitt 10).</p>

      <h2 id="beratung">6. Beratung und Vermittlung, auch von Gesundheitsdaten</h2>
      <p>
        Wenn Sie sich von uns beraten lassen oder uns beauftragen, verarbeiten wir über die Website hinaus weitere Daten: Stammdaten, Kontaktdaten, Beruf, Einkommens- und Vermögensverhältnisse, bestehende Verträge sowie Ihre Wünsche und Bedürfnisse. Bei Kranken-, Berufsunfähigkeits- oder Unfallversicherungen gehören dazu auch Gesundheitsdaten.
      </p>
      <p>Zwecke sind die Beratung, der Vergleich von Angeboten, die Vermittlung und Betreuung von Verträgen, die gesetzlich vorgeschriebene Dokumentation und die Unterstützung im Schadenfall.</p>
      <p>Rechtsgrundlagen sind</p>
      <ul>
        <li>Art. 6 Abs. 1 lit. b DSGVO für die Durchführung des Beratungs- und Vermittlungsverhältnisses und vorvertraglicher Maßnahmen,</li>
        <li>
          Art. 6 Abs. 1 lit. c DSGVO für gesetzliche Pflichten, etwa nach §§ 61 ff. VVG, der Versicherungsvermittlungsverordnung, der Finanzanlagenvermittlungsverordnung, der Immobiliardarlehensvermittlungsverordnung, dem Geldwäschegesetz sowie nach Handels- und Steuerrecht,
        </li>
        <li>
          Art. 9 Abs. 2 lit. a in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO für Gesundheitsdaten. Dafür holen wir vorher Ihre ausdrückliche, gesonderte Einwilligung ein, die Sie jederzeit mit Wirkung für die Zukunft widerrufen können.
        </li>
      </ul>
      <p>
        Empfänger Ihrer Daten sind, soweit für den Zweck erforderlich, die von Ihnen gewählten Versicherungsunternehmen, Banken und sonstigen Produktgeber. Diese verarbeiten Ihre Daten als eigene Verantwortliche und informieren Sie selbst. Weitere Empfänger sind unsere Dienstleister, zum Beispiel die Betreuungs- und Verbundgesellschaft VFM-Service GmbH, der Alte Leipziger – Hallesche Konzern (ALH-Konzern) und die eingesetzte Verwaltungssoftware keasy. Mit ihnen bestehen, soweit erforderlich, Verträge zur Auftragsverarbeitung.
      </p>

      <h2 id="analytics">7. Webanalyse</h2>
      <p>
        Wir setzen auf dieser Website derzeit keine Dienste zur Webanalyse oder Reichweitenmessung von Drittanbietern ein, insbesondere nicht Google Analytics. Sollten wir künftig einen solchen Dienst einsetzen, geschieht das nur mit Ihrer Einwilligung über das Einwilligungsbanner (Abschnitt 4), und wir ergänzen diese Datenschutzerklärung vorher.
      </p>

      <h2 id="maps">8. Google Maps, Google-Bewertungen und externe Links</h2>
      <p>
        <strong>Google Maps.</strong> Die Karte wird erst geladen, wenn Sie im Einwilligungsbanner zugestimmt haben. Dann übermittelt Ihr Browser unter anderem Ihre IP-Adresse und Angaben zur Nutzung der Karte an die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Daten können in die USA übermittelt werden (siehe Abschnitt 9). Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen: <Ext>https://policies.google.com/privacy</Ext>
      </p>
      <p>
        <strong>Google-Bewertungen (Places API).</strong> Auf der Startseite zeigen wir die Gesamtbewertung, die Anzahl der Bewertungen und einzelne Rezensionen aus unserem Google-Unternehmensprofil. Dafür ruft unser Server die Google Places API der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ab. Der Abruf erfolgt von Server zu Server. Ihr Browser baut dafür keine Verbindung zu Google auf, Ihre IP-Adresse wird dabei nicht an Google übermittelt. Angezeigt werden die bei Google öffentlich veröffentlichten Angaben der Rezensentinnen und Rezensenten (Anzeigename, Bewertung, Text, Zeitangabe). Wir aktualisieren sie in regelmäßigen Abständen und speichern sie dafür kurzzeitig auf unserem Server. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer transparenten Darstellung von Kundenbewertungen). Wenn Sie einem Link zu Google folgen (zum Beispiel zu allen Bewertungen oder zur Routenplanung), verlassen Sie unsere Website, und es gelten die Bestimmungen von Google. Weitere Informationen: <Ext>https://policies.google.com/privacy</Ext>
      </p>
      <p>
        <strong>Externe Links.</strong> Wir verlinken auf andere Seiten, zum Beispiel auf Google (Karte, Routenplanung, Bewertungen) sowie in unseren Ratgeber-Beiträgen auf Quellen von Behörden und Verbänden wie BaFin, Bundesgesundheitsministerium, Deutsche Rentenversicherung und Verbraucherzentrale. Mit dem Klick verlassen Sie unsere Website. Für diese Seiten gelten die Datenschutzerklärungen der jeweiligen Betreiber, auf die wir keinen Einfluss haben.
      </p>

      <h2 id="empfaenger">9. Empfänger und Übermittlung in Drittländer</h2>
      <p>
        Empfänger Ihrer Daten sind je nach Anlass der technische Betreiber der Website, die Versicherer und Produktgeber, die in Abschnitt 6 genannten Dienstleister, der E-Mail-Dienst Resend (Abschnitt 5), Google (Abschnitt 8), Usercentrics (Abschnitt 4) sowie, soweit gesetzlich vorgeschrieben, Behörden.
      </p>
      <p>
        Eine Übermittlung in Länder außerhalb der EU und des EWR kommt in den USA in Betracht: bei Google nur nach Ihrer Einwilligung (Google Maps) und bei Resend, wenn Sie das Kontaktformular absenden. Grundlage ist jeweils der Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework vom 10. Juli 2023, soweit der Anbieter zertifiziert ist, sonst sind es Standardvertragsklauseln. Bei Usercentrics findet die Verarbeitung nach dessen Angabe in der EU statt; für etwaige Übermittlungen in die USA im Zusammenhang mit dem Unterauftragsverarbeiter Google Cloud nennt Usercentrics Standardvertragsklauseln (Abschnitt 4).
      </p>

      <h2 id="speicherdauer">10. Speicherdauer</h2>
      <p>Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder das Gesetz es verlangt.</p>
      <ul>
        <li>Server-Logfiles: siehe Abschnitt 3.</li>
        <li>
          Kontaktanfragen ohne Vertrag: sechs Monate nach Abschluss der Anfrage.
        </li>
        <li>
          Beratungsdokumentation und Vertragsunterlagen: für die Dauer der Betreuung und danach entsprechend den gesetzlichen Aufbewahrungsfristen (nach Handelsgesetzbuch und Abgabenordnung sechs, acht bzw. zehn Jahre, weitere Fristen nach Geldwäsche- und Vermittlerrecht).
        </li>
        <li>Einwilligungsprotokoll bei Usercentrics: nach Angabe des Anbieters ein Jahr.</li>
        <li>Lokale Auswahl im Browser (Local Storage): keine eigene Ablauffrist im Browser; Sie können den Eintrag jederzeit in Ihrem Browser löschen oder über die Cookie-Einstellungen ändern. Das Banner wird nach 366 Tagen seit Ihrer letzten Auswahl erneut angezeigt (Abschnitt 4).</li>
      </ul>

      <h2 id="rechte">11. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte in Bezug auf Ihre personenbezogenen Daten:</p>
      <ul>
        <li>Auskunft über die gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung, wenn die Voraussetzungen des Art. 17 DSGVO vorliegen,</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Herausgabe der von Ihnen bereitgestellten Daten in einem gängigen, maschinenlesbaren Format (Art. 20 DSGVO),</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
      </ul>
      <p>
        <strong>Widerspruchsrecht.</strong> Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit der Verarbeitung Ihrer Daten widersprechen, die wir auf Art. 6 Abs. 1 lit. f DSGVO stützen (Art. 21 Abs. 1 DSGVO). Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Werden Ihre Daten für Direktwerbung verarbeitet, können Sie dem jederzeit ohne Angabe von Gründen widersprechen (Art. 21 Abs. 2 DSGVO).
      </p>
      <p>Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die Kontaktdaten in Abschnitt 1.</p>

      <h2 id="beschwerde">12. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren, wenn Sie meinen, dass wir Ihre Daten rechtswidrig verarbeiten (Art. 77 DSGVO). Für uns zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, Telefon 0211 38424-0, E-Mail <Mail>poststelle@ldi.nrw.de</Mail>, Internet <Ext>www.ldi.nrw.de</Ext>. Sie können sich auch an die Aufsichtsbehörde an Ihrem Wohnort oder Arbeitsplatz wenden.
      </p>

      <h2 id="bereitstellung">13. Bereitstellung von Daten, automatisierte Entscheidungen</h2>
      <p>
        Sie können unsere Website nutzen, ohne uns personenbezogene Daten mitzuteilen. Für eine Beratung, Vermittlung oder einen Vertragsabschluss benötigen wir bestimmte Angaben von Ihnen, teils auch aufgrund gesetzlicher Pflichten. Ohne diese Angaben können wir die Leistung nicht erbringen.
      </p>
      <p>Wir treffen keine ausschließlich automatisierten Entscheidungen im Sinne des Art. 22 DSGVO und betreiben kein Profiling.</p>

      <h2 id="email">14. E-Mail-Kommunikation</h2>
      <p>
        E-Mails, die unverschlüsselt über das Internet verschickt werden, können von Dritten mitgelesen oder verändert werden. Bitte senden Sie uns deshalb keine Gesundheitsdaten, Kontodaten oder Ausweiskopien per E-Mail. Für sensible Unterlagen nutzen Sie bitte den Postweg oder besprechen Sie sie mit uns persönlich oder telefonisch.
      </p>

      <h2 id="stand">15. Stand und Änderungen</h2>
      <p>
        Diese Datenschutzerklärung hat den Stand Oktober 2026. Wir passen sie an, wenn sich unsere Website, unsere Dienste oder die Rechtslage ändern. Die jeweils aktuelle Fassung finden Sie auf dieser Seite.
      </p>
    </LegalDocument>
  );
}
