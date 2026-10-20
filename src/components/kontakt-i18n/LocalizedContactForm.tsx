"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useRef, useState, type FormEvent } from "react";
import styles from "@/app/(de)/kontakt/_components/Kontakt.module.css";
import { REPLY_VIA, TOPICS, validate, type FieldErrors } from "@/app/(de)/kontakt/_lib/schema";
import { trackEvent } from "@/components/consent/track";
import DeTag from "@/components/layout-i18n/DeTag";
import Icon from "@/components/ui/Icon/Icon";
import type { Locale } from "@/i18n/config";
import { kontaktContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import { CONTACT_OK_KEY } from "./contact-ok";

type L = Exclude<Locale, "de">;

/**
 * Kontaktformular für EN/RU. Identische Felder, Pflichtangaben, Validierung (gemeinsame schema.ts, serverseitig erneut
 * geprüft), Honeypot und Versand an dieselbe API (/api/contact) wie das deutsche Formular. Gesendet werden unverändert die
 * deutschen Werte für Thema und Antwortart; nur Beschriftungen und Fehlermeldungen sind übersetzt. Weiterleitung zur
 * Danke-Seite ausschließlich nach bestätigtem Erfolg des Servers (res.ok && data.ok).
 */
export default function LocalizedContactForm({ locale }: { locale: L }) {
  const t = kontaktContent[locale];
  const f = t.form;
  const c = getDictionary(locale).common;
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
  const privacyTarget = localizedHref("/datenschutz", locale);
  const tag = <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />;

  /** Übersetzt die (deutschen) Meldungen aus schema.ts bzw. der API anhand des Feldes und der Art des Fehlers. */
  function localize(e: FieldErrors): FieldErrors {
    const out: FieldErrors = {};
    const limit = (m: string) => m.match(/\d+/)?.[0] ?? "";
    for (const k of Object.keys(e) as (keyof FieldErrors)[]) {
      const m = e[k] ?? "";
      switch (k) {
        case "topic":
          out.topic = t.errors.topic;
          break;
        case "name":
          out.name = m.includes("höchstens") ? t.errors.tooLong.replace("{n}", limit(m)) : t.errors.nameRequired;
          break;
        case "email":
          out.email = m.includes("gültige") ? t.errors.emailInvalid : t.errors.emailRequired;
          break;
        case "replyVia":
          out.replyVia = t.errors.replyVia;
          break;
        case "phone":
          out.phone = m.includes("Rückruf") ? t.errors.phoneRequired : t.errors.phoneInvalid;
          break;
        case "message":
          out.message = t.errors.tooLong.replace("{n}", limit(m));
          break;
        case "privacy":
          out.privacy = t.errors.privacy;
          break;
      }
    }
    return out;
  }

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
    const found = localize(validate(input));
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
        body: JSON.stringify({ ...input, website, locale }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; errors?: FieldErrors } | null;
      if (res.ok && data?.ok) {
        // Erst nach der Bestätigung des Servers; Bots (Honeypot ausgefüllt) werden vom Server still "bestätigt" und nicht gezählt.
        if (website.trim() === "") trackEvent("generate_lead");
        // Nur nach bestätigtem Erfolg: Marker für die Danke-Seite setzen und weiterleiten
        try {
          window.sessionStorage.setItem(CONTACT_OK_KEY, String(Date.now()));
        } catch {
          /* ohne Speicher zeigt die Danke-Seite die neutrale Fassung */
        }
        router.push(localizedHref("/kontakt/danke", locale).href);
        return;
      }
      if (data?.errors) {
        const loc = localize(data.errors);
        setErrors(loc);
        focusFirst(loc);
      } else {
        setServerError(f.serverError);
      }
    } catch {
      setServerError(f.serverError);
    }
    lockRef.current = false;
    setSending(false);
  }

  const err = (k: keyof FieldErrors) => (errors[k] ? `${id(k)}-err` : undefined);

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      <fieldset className={styles.topics} aria-describedby={err("topic")}>
        <legend className={styles.legend}>
          {f.topicLegend} <span className={styles.legendOpt}>{f.optional}</span>
        </legend>
        <div className={styles.topicGrid}>
          {TOPICS.map((value, i) => (
            <label key={value} className={`${styles.topic} ${i === TOPICS.length - 1 ? styles.topicWide : ""} ${topic === value ? styles.topicOn : ""}`}>
              <input type="radio" name="topic" value={value} checked={topic === value} onChange={() => setTopic(value)} onClick={() => topic === value && setTopic("")} />
              <span>{f.topics[i]}</span>
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
          <label htmlFor={id("name")}>{f.name}</label>
          <input id={id("name")} name="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={errors.name ? true : undefined} aria-describedby={err("name")} />
          {errors.name && (
            <p id={err("name")} className={styles.err}>
              {errors.name}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor={id("email")}>{f.email}</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={errors.email ? true : undefined} aria-describedby={err("email")} />
          {errors.email && (
            <p id={err("email")} className={styles.err}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={id("message")}>{f.message}</label>
        <textarea
          id={id("message")}
          name="message"
          rows={5}
          placeholder={f.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={`${id("message")}-hint${errors.message ? ` ${err("message")}` : ""}`}
        />
        <p id={`${id("message")}-hint`} className={styles.hint}>
          {f.messageHint}
        </p>
        {errors.message && (
          <p id={err("message")} className={styles.err}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <fieldset className={styles.reply}>
          <legend>{f.replyLegend}</legend>
          <div className={styles.replyOpts}>
            {REPLY_VIA.map((value, i) => (
              <label key={value} className={styles.replyOpt}>
                <input type="radio" name="replyVia" value={value} checked={replyVia === value} onChange={() => setReplyVia(value)} />
                <span>{f.replyVia[i]}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className={styles.field}>
          <label htmlFor={id("phone")}>{callback ? f.phone : f.phoneOptional}</label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} aria-required={callback || undefined} aria-invalid={errors.phone ? true : undefined} aria-describedby={`${callback ? `${id("phone")}-hint ` : ""}${err("phone") ?? ""}`.trim() || undefined} />
          {callback && (
            <p id={`${id("phone")}-hint`} className={styles.hint}>
              {f.phoneHint}
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
          {f.honeypot}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <div className={styles.foot}>
        <p className={styles.legal}>
          {f.privacyNote} <Link href={privacyTarget.href}>{f.privacyLink}</Link>
          {privacyTarget.german && tag}
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
              {f.privacyBefore}
              <Link href={privacyTarget.href} target="_blank" rel="noopener noreferrer">
                {f.privacyLinkInline}
              </Link>
              {privacyTarget.german && tag}
              {f.privacyAfter}
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
            {sending ? f.sending : f.submit}
            {!sending && <Icon name="arrow" size={18} strokeWidth={1.6} />}
          </button>
          <p className={styles.req}>{f.required}</p>
        </div>
      </div>
    </form>
  );
}
