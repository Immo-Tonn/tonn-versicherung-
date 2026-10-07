/** Inhalte der Seite „Kapitalanlage“ (seitenspezifisch, bewusst ohne Produkt-, Rendite- oder Qualifikationsaussagen). */
const cta = { label: "Erstgespräch vereinbaren", href: "/kontakt" };

export const hero = {
  eyebrow: "Kapitalanlage in Münster",
  title: ["Ihr Kapital.", "Ihre Zukunft.", "Ein klarer Plan"],
  text: "Persönliche Beratung für Ihre Ziele, Ihren Zeithorizont und Ihre finanzielle Situation.",
  cta: { label: "Kostenloses Erstgespräch", href: cta.href },
  // Platzhalter-Foto: ruhige Fassade aus dem Projekt; eigenes Hero-Foto kann hier später eingetragen werden.
  image: "/images/pkv/pkv-beamte.webp",
  imageAlt: "Helle Natursteinfassade eines Gebäudes im Sonnenlicht",
};

export const goals = {
  eyebrow: "Ihre Ziele. Unsere Beratung.",
  title: "Was möchten Sie erreichen?",
  items: [
    { title: "Vermögen aufbauen", text: "Regelmäßig Geld zur Seite legen und die eigenen Möglichkeiten für die Zukunft besprechen." },
    { title: "Für später vorsorgen", text: "Den gewünschten Lebensstandard im Alter im Blick behalten und die bestehende Vorsorge einbeziehen." },
    { title: "Kapital anlegen", text: "Für vorhandenes Kapital eine Perspektive entwickeln, die zu Ihren Plänen und Ihrem Zeithorizont passt." },
  ],
};

export const questions = {
  eyebrow: "Ziele verstehen. Möglichkeiten abwägen.",
  title: "Gute Entscheidungen beginnen mit guten Fragen.",
  text: "Eine passende Kapitalanlage beginnt mit dem Verständnis Ihrer Ziele, Ihrer finanziellen Situation und Ihrer Risikobereitschaft.",
  items: [
    { title: "Ihre Ziele", text: "Was möchten Sie mit Ihrem Kapital erreichen?" },
    { title: "Ihr Zeithorizont", text: "Wann benötigen Sie das angelegte Geld voraussichtlich?" },
    { title: "Ihre Flexibilität", text: "Welcher Teil Ihres Geldes soll kurzfristig verfügbar bleiben?" },
    { title: "Ihr Umgang mit Risiko", text: "Wie stehen Sie zu Wertschwankungen und möglichen Verlusten?" },
  ],
};

export const consulting = {
  eyebrow: "Von der ersten Frage zum klaren Plan.",
  title: ["Persönlich besprechen.", "In Ruhe entscheiden"],
  text: "Wir nehmen uns Zeit, Ihre Ziele, Ihre aktuelle Situation und mögliche Lösungswege zu besprechen. Dabei betrachten wir Chancen, Risiken und Kosten transparent und verständlich.",
  image: "/images/pkv/pkv-ansprechpartner.webp",
  imageAlt: "Gespräch am Tisch mit Unterlagen, Notizbuch und Stift",
  steps: [
    { title: "Erstgespräch", text: "Wir lernen uns kennen und sprechen über Ihre Ziele und Fragen." },
    { title: "Situation klären", text: "Wir betrachten Ihre Ausgangslage, Ihren Zeithorizont und Ihre finanziellen Spielräume." },
    { title: "Möglichkeiten besprechen", text: "Wir erläutern die besprochenen Möglichkeiten mit ihren Chancen, Risiken, Kosten und Bedingungen." },
  ],
};

export const faq = {
  title: "Fragen zur Kapitalanlage",
  text: "Hier finden Sie Antworten auf häufige Fragen zur Beratung. Ihre persönliche Situation besprechen wir gemeinsam im Gespräch.",
  items: [
    { q: "Was besprechen wir im Erstgespräch?", a: "Im Erstgespräch sprechen wir über Ihre Ziele, Ihre Ausgangssituation und Ihre wichtigsten Fragen. Gemeinsam klären wir, welche Informationen für die weitere Beratung sinnvoll sind." },
    { q: "Kann ich bestehende Anlagen mitbringen?", a: "Ja. Unterlagen zu bestehenden Anlagen helfen, Ihre finanzielle Gesamtsituation besser zu verstehen. Welche Unterlagen benötigt werden, klären wir im Gespräch." },
    { q: "Wie werden Risiken und Kosten berücksichtigt?", a: "Zu den besprochenen Möglichkeiten erläutern wir auch Risiken, Kosten, Laufzeiten und Bedingungen. Dazu gehören mögliche Wertschwankungen und Verluste sowie die Verfügbarkeit Ihres Kapitals." },
    { q: "Muss ich mich sofort entscheiden?", a: "Nein. Das Erstgespräch dient dazu, Ihre Fragen und Ziele zu klären. Sie entscheiden in Ruhe, ob Sie die Beratung fortsetzen möchten." },
  ],
};

export const finalCta = {
  title: "Was haben Sie mit Ihrem Kapital vor?",
  text: "Lassen Sie uns über Ihre Ziele und die nächsten Schritte sprechen. Persönlich und in Ruhe.",
  cta,
};
