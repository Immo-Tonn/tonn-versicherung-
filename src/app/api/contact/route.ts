import { NextResponse } from "next/server";
import { LIMITS, validate, type ContactInput } from "@/app/kontakt/_lib/schema";

/** Empfänger ist fest auf dem Server hinterlegt und kommt nie aus dem Browser. */
const RECIPIENT = "andreas@tonn-versicherung.de";

// einfache Begrenzung pro IP (im Speicher; bei mehreren Instanzen ggf. durch Edge-/Redis-Limit ergänzen)
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return list.length > MAX_HITS;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const oneLine = (s: string) => s.replace(/[\r\n\t]+/g, " ").trim();

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: Bots füllen das versteckte Feld aus – still als Erfolg behandeln, nichts senden.
  if (typeof body.website === "string" && body.website.trim() !== "") return NextResponse.json({ ok: true });

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max + 1) : "");
  const input: ContactInput = {
    topic: str(body.topic, 100),
    name: str(body.name, LIMITS.name),
    email: str(body.email, LIMITS.email),
    replyVia: str(body.replyVia, 20),
    phone: str(body.phone, LIMITS.phone),
    message: str(body.message, LIMITS.message),
    privacyAcknowledged: body.privacyAcknowledged,
  };
  const errors = validate(input);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_MAIL_FROM;
  if (!apiKey || !from) {
    console.error("[contact] E-Mail-Versand nicht konfiguriert (RESEND_API_KEY / CONTACT_MAIL_FROM fehlen)");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const name = oneLine(input.name);
  const email = input.email.trim();
  const phone = oneLine(input.phone);
  const message = input.message.trim() || "Keine zusätzliche Nachricht angegeben.";
  const topic = input.topic || "Kein Thema ausgewählt";
  const rows: [string, string][] = [
    ["Thema", topic],
    ["Name", name],
    ["E-Mail", email],
    ["Antwort per", input.replyVia],
    ...(phone ? ([["Telefon", phone]] as [string, string][]) : []),
  ];

  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Nachricht:", message].join("\n");
  const html =
    `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">` +
    rows.map(([k, v]) => `<tr><td><strong>${esc(k)}</strong></td><td>${esc(v)}</td></tr>`).join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px"><strong>Nachricht:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>`;

  try {
    const res = await fetch(process.env.CONTACT_MAIL_API_URL ?? "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Kontaktanfrage: ${topic}`, // Thema stammt aus der erlaubten Liste, kein freier Text
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error(`[contact] Mail-Dienst antwortete mit HTTP ${res.status}`);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch {
    console.error("[contact] Mail-Dienst nicht erreichbar");
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
