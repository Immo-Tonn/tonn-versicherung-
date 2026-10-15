"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useRef, useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon/Icon";
import { REPLY_VIA, TOPICS, validate, type FieldErrors } from "../_lib/schema";
import styles from "./Kontakt.module.css";

const GENERIC_ERROR = "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.";

export default function ContactForm() {
  const router = useRouter();
  const uid = useId();
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [replyVia, setReplyVia] = useState<string>("E-Mail");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const lockRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const callback = replyVia === "Rückruf";
  const id = (k: string) => `${uid}-${k}`;

  function focusFirst(e: FieldErrors) {
    const order: (keyof FieldErrors)[] = ["topic", "name", "email", "replyVia", "phone", "message", "privacy"];
    const first = order.find((k) => e[k]);
    if (!first) return;
    const form = formRef.current;
    const el = first === "topic" ? form?.querySelector<HTMLElement>('input[name="topic"]') : form?.querySelector<HTMLElement>(`[name="${first}"]`);
    el?.focus();
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (lockRef.current) return;
    setServerError("");
    const input = { topic, name, email, replyVia, phone, message, privacyAcknowledged: privacy };
    const found = validate(input);
    setErrors(found);
    if (Object.keys(found).length) {
      focusFirst(found);
      return;
    }
    lockRef.current = true;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, website }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; errors?: FieldErrors } | null;
      if (res.ok && data?.ok) {
        router.push("/kontakt/danke");
        return;
      }
      if (data?.errors) {
        setErrors(data.errors);
        focusFirst(data.errors);
      } else {
        setServerError(GENERIC_ERROR);
      }
    } catch {
      setServerError(GENERIC_ERROR);
    }
    lockRef.current = false;
    setSending(false);
  }

  const err = (k: keyof FieldErrors) => (errors[k] ? `${id(k)}-err` : undefined);

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      <fieldset className={styles.topics} aria-describedby={err("topic")}>
        <legend className={styles.legend}>
          Thema auswählen <span className={styles.legendOpt}>(optional)</span>
        </legend>
        <div className={styles.topicGrid}>
          {TOPICS.map((t, i) => (
            <label key={t} className={`${styles.topic} ${i === TOPICS.length - 1 ? styles.topicWide : ""} ${topic === t ? styles.topicOn : ""}`}>
              <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} onClick={() => topic === t && setTopic("")} />
              <span>{t}</span>
              <i className={styles.radio} aria-hidden="true" />
            </label>
          ))}
        </div>
        {errors.topic && (
          <p id={err("topic")} className={styles.err} role="alert">
            {errors.topic}
          </p>
        )}
      </fieldset>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={id("name")}>Ihr Name *</label>
          <input id={id("name")} name="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={errors.name ? true : undefined} aria-describedby={err("name")} />
          {errors.name && (
            <p id={err("name")} className={styles.err}>
              {errors.name}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor={id("email")}>E-Mail *</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={errors.email ? true : undefined} aria-describedby={err("email")} />
          {errors.email && (
            <p id={err("email")} className={styles.err}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={id("message")}>Ihre Nachricht (optional)</label>
        <textarea
          id={id("message")}
          name="message"
          rows={5}
          placeholder="Wenn Sie möchten, ergänzen Sie hier Ihr Anliegen …"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={`${id("message")}-hint${errors.message ? ` ${err("message")}` : ""}`}
        />
        <p id={`${id("message")}-hint`} className={styles.hint}>
          Bitte keine Gesundheitsdaten oder vertraulichen Dokumente übermitteln.
        </p>
        {errors.message && (
          <p id={err("message")} className={styles.err}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <fieldset className={styles.reply}>
          <legend>Antwort per</legend>
          <div className={styles.replyOpts}>
            {REPLY_VIA.map((r) => (
              <label key={r} className={styles.replyOpt}>
                <input type="radio" name="replyVia" value={r} checked={replyVia === r} onChange={() => setReplyVia(r)} />
                <span>{r}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className={styles.field}>
          <label htmlFor={id("phone")}>{callback ? "Telefon *" : "Telefon (optional)"}</label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} aria-required={callback || undefined} aria-invalid={errors.phone ? true : undefined} aria-describedby={`${callback ? `${id("phone")}-hint ` : ""}${err("phone") ?? ""}`.trim() || undefined} />
          {callback && (
            <p id={`${id("phone")}-hint`} className={styles.hint}>
              Für Ihren Rückruf erforderlich.
            </p>
          )}
          {errors.phone && (
            <p id={err("phone")} className={styles.err}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot: für Menschen unsichtbar und nicht erreichbar */}
      <div className={styles.trap} aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <div className={styles.foot}>
        <p className={styles.legal}>
          Hinweise zum Datenschutz: <Link href="/datenschutz">Datenschutzerklärung</Link>
        </p>
        {serverError && (
          <p className={styles.formErr} role="alert">
            {serverError}
          </p>
        )}
        <div className={styles.privacy}>
          <label className={styles.privacyLabel}>
            <input
              type="checkbox"
              name="privacy"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              required
              aria-invalid={errors.privacy ? true : undefined}
              aria-describedby={err("privacy")}
            />
            <span>
              Ich habe die{" "}
              <Link href="/datenschutz" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung
              </Link>{" "}
              zur Kenntnis genommen.
            </span>
          </label>
          {errors.privacy && (
            <p id={err("privacy")} className={styles.err}>
              {errors.privacy}
            </p>
          )}
        </div>
        <div className={styles.submitRow}>
          <button type="submit" className={styles.submit} disabled={sending} aria-disabled={sending}>
            {sending ? "Wird gesendet …" : "Nachricht senden"}
            {!sending && <Icon name="arrow" size={18} strokeWidth={1.6} />}
          </button>
          <p className={styles.req}>* Pflichtfelder</p>
        </div>
      </div>
    </form>
  );
}
