/** Gemeinsame Validierung (Client und Server). Der Server prüft immer erneut. */
export const TOPICS = [
  "Private Krankenversicherung",
  "Berufsunfähigkeit",
  "Kapitalanlage",
  "Weitere Versicherungen",
  "Andere Frage",
] as const;
export type Topic = (typeof TOPICS)[number];

export const REPLY_VIA = ["E-Mail", "Rückruf"] as const;
export type ReplyVia = (typeof REPLY_VIA)[number];

export const LIMITS = { name: 100, email: 200, phone: 40, message: 3000 } as const;

export type ContactInput = { topic: string; name: string; email: string; replyVia: string; phone: string; message: string; privacyAcknowledged: unknown };
export type FieldErrors = Partial<Record<"topic" | "name" | "email" | "phone" | "message" | "replyVia" | "privacy", string>>;

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const PHONE_RE = /^[+()\d\s\-./]+$/;

export function validate(input: ContactInput): FieldErrors {
  const e: FieldErrors = {};
  // Thema ist optional: leer ist erlaubt, ein gesetzter Wert muss aber aus der Liste stammen.
  if (input.topic && !(TOPICS as readonly string[]).includes(input.topic)) e.topic = "Bitte wählen Sie ein gültiges Thema aus.";
  const name = input.name.trim();
  if (!name) e.name = "Bitte geben Sie Ihren Namen an.";
  else if (name.length > LIMITS.name) e.name = `Bitte höchstens ${LIMITS.name} Zeichen.`;
  const email = input.email.trim();
  if (!email) e.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (!(REPLY_VIA as readonly string[]).includes(input.replyVia)) e.replyVia = "Bitte wählen Sie eine Antwortart.";
  const phone = input.phone.trim();
  const digits = phone.replace(/\D/g, "").length;
  if (input.replyVia === "Rückruf" && !phone) e.phone = "Für Ihren Rückruf erforderlich.";
  else if (phone && (phone.length > LIMITS.phone || !PHONE_RE.test(phone) || digits < 6 || digits > 18)) e.phone = "Bitte geben Sie eine gültige Telefonnummer an.";
  if (input.message.length > LIMITS.message) e.message = `Bitte höchstens ${LIMITS.message} Zeichen.`;
  // nur der echte Boolean true gilt (nicht "true", 1 oder fehlend)
  if (input.privacyAcknowledged !== true) e.privacy = "Bitte bestätigen Sie, dass Sie die Datenschutzerklärung zur Kenntnis genommen haben.";
  return e;
}
