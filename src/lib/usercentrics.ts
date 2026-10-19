/**
 * Usercentrics CMP (Cookie-Einwilligung). Die Settings-ID ist ein öffentlicher Bezeichner (steht im Script-Tag jeder Seite), kein Geheimnis.
 *
 * Schalter (Build-Zeit, NEXT_PUBLIC_*):
 *  - NEXT_PUBLIC_USERCENTRICS=off     -> Usercentrics wird nicht geladen; der bisherige eigene Banner (components/consent) ist wieder aktiv.
 *  - NEXT_PUBLIC_USERCENTRICS_DRAFT=1 -> lädt den gespeicherten ENTWURF statt der veröffentlichten Version (nur zum Testen, z. B. localhost).
 * Es läuft immer genau ein Mechanismus: ist Usercentrics aktiv, zeigen die alten Banner nichts mehr an.
 */
export const USERCENTRICS_SETTINGS_ID = "F7P1fwBvbPU8gg";
export const USERCENTRICS_ENABLED = process.env.NEXT_PUBLIC_USERCENTRICS !== "off";
export const USERCENTRICS_DRAFT = process.env.NEXT_PUBLIC_USERCENTRICS_DRAFT === "1";

/** ID des Dienstes "Google Maps" (Vorlage aus der Usercentrics-Datenbank, Kategorie Functional). */
export const USERCENTRICS_MAPS_SERVICE_ID = "S1pcEj_jZX";

/** ID des Dienstes "Google Analytics" (Vorlage aus der Usercentrics-Datenbank, eigene Kategorie "Statistik / Statistics", standardmäßig aus). */
export const USERCENTRICS_ANALYTICS_SERVICE_ID = "HkocEodjb7";

/**
 * Sprache des Banners je Seitensprache. Der kostenlose Tarif erlaubt nur 2 sichtbare Sprachen (Deutsch, Englisch):
 * /ru zeigt daher vorerst den englischen Banner. Sobald Russisch in Usercentrics freigeschaltet ist, hier "ru" eintragen.
 */
export const USERCENTRICS_LANGUAGE = { de: "de", en: "en", ru: "en" } as const;
