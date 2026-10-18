import { USERCENTRICS_DRAFT, USERCENTRICS_ENABLED, USERCENTRICS_LANGUAGE, USERCENTRICS_SETTINGS_ID } from "@/lib/usercentrics";
import UsercentricsBridge from "./UsercentricsBridge";

/** Lädt Usercentrics (React hebt das async-Script in den <head>) und verbindet die Auswahl mit dem bestehenden consent-store. */
export default function Usercentrics({ locale }: { locale: keyof typeof USERCENTRICS_LANGUAGE }) {
  if (!USERCENTRICS_ENABLED) return null;
  return (
    <>
      <script
        id="usercentrics-cmp"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
        data-settings-id={USERCENTRICS_SETTINGS_ID}
        data-language={USERCENTRICS_LANGUAGE[locale]}
        {...(USERCENTRICS_DRAFT ? { "data-draft": "true" } : {})}
        async
      />
      <UsercentricsBridge />
    </>
  );
}
