/**
 * Werbe-Tracking (Google Ads über Google Tag Manager) – standardmäßig AUS.
 *
 * Schalter (Build-Zeit, NEXT_PUBLIC_*): Beide müssen gesetzt sein, sonst wird nichts geladen und nichts ins HTML geschrieben.
 *  - NEXT_PUBLIC_TRACKING_ENABLED=true
 *  - NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 */
const GTM_ID = (process.env.NEXT_PUBLIC_GTM_ID ?? "").trim();

/** Das Format wird geprüft, weil die ID in ein Inline-Script eingesetzt wird. */
export const TRACKING_GTM_ID = /^GTM-[A-Z0-9]{4,12}$/.test(GTM_ID) ? GTM_ID : "";
export const TRACKING_ENABLED = process.env.NEXT_PUBLIC_TRACKING_ENABLED === "true" && TRACKING_GTM_ID !== "";

/** Dienstname in Usercentrics: muss GENAU so heißen. Das Script bleibt blockiert (type="text/plain"), bis dieser Dienst freigegeben ist. */
export const TRACKING_UC_SERVICE_NAME = "Google Tag Manager";
