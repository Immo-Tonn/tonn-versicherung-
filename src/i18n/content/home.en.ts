import type { HomeContent } from "./home.types";

/** ENTWURF – nicht fachlich geprüft, nicht veröffentlicht. Begriffe siehe Abschlussbericht (Glossar zur Abstimmung). */
export const homeEn: HomeContent = {
  meta: {
    title: "Insurance agent in Münster | PKV, occupational disability, investment | TONN",
    description:
      "Personal advice in Münster and across Germany: private health insurance, occupational disability, investment and other insurance. Arrange your initial consultation now.",
    pageName: "Andreas Tonn Versicherungen – Home",
  },
  hero: {
    eyebrow: "Personal. Individual. At your side.",
    title: "Private health insurance",
    subtitle: ["Clear advice.", "For what truly", "matters to you."],
    text: "Individual advice, a comparison of different insurance offers and long-term support – transparent, personal and tailored to your life situation.",
    primaryCta: "Free initial consultation",
    secondaryCta: "How the consultation works",
    mobileCta: "Book an online appointment",
    imageAlt: "Historic gabled houses at the Prinzipalmarkt in Münster",
  },
  trust: {
    ratingLines: ["Satisfied", "clients"],
    ratingAria: (v) => `${v} out of 5 stars`,
    items: [
      { title: "Personal advice", lines: ["Cooperation with", "several insurers"] },
      { title: "Anonymous preliminary risk assessment", lines: ["Your health data", "stays confidential"] },
      { title: "Long-term support", lines: ["Still at your side after", "the contract is concluded"] },
    ],
  },
  situations: {
    eyebrow: "For every life situation",
    title: "Which situation fits you?",
    text: "Every life situation brings different options in private health insurance. Choose what suits you best – we will show you the next steps.",
    cards: [
      { title: "Employees", text: "Private health insurance options during your working life" },
      { title: "Self-employed", text: "Flexibly covered at every stage" },
      { title: "Civil servants", text: "Individual solutions for the public service" },
      { title: "Already privately insured", text: "Optimise and set up your cover better" },
    ],
  },
  process: {
    eyebrow: "A clear process. Full transparency.",
    title: ["Check first.", "Then decide."],
    text: "With the anonymous preliminary risk assessment, we check your health information with several insurers – in advance and without obligation.",
    cta: "More about the process",
    steps: [
      { title: "Details", text: "We discuss your situation and collect the relevant data." },
      { title: "Anonymous check", text: "We check your health information with several insurers." },
      { title: "Compare tariffs", text: "We analyse suitable offers from our insurance partners." },
      { title: "Result", text: "You decide in your own time which tariff suits you." },
    ],
  },
  about: {
    eyebrow: "Your contact person",
    title: ["Insurance is a", "matter of trust."],
    text: "I am Andreas Tonn, an insurance agent in Münster working with multiple insurers. I look after more than 1,600 clients – personally and over the long term. As your contact person, I am there for you with all questions about private health insurance, occupational disability insurance and other forms of cover.",
    cta: "More about me",
    imageAlt: "Andreas Tonn, insurance agent working with multiple insurers in Münster",
    features: [
      { title: "Comparison", text: "Cooperation with several insurers" },
      { title: "Personal", text: "Individual advice instead of standard solutions" },
      { title: "Long-term", text: "At your side even after the contract is concluded" },
      { title: "Digital & flexible", text: "Advice on site in Münster or nationwide by video" },
    ],
  },
  insurances: {
    eyebrow: "More than just PKV",
    title: ["Further insurance", "for your future."],
    text: "In addition to private health insurance, I also advise you on other important forms of cover – individually, personally and tailored to your life situation.",
    cta: "All insurance types",
    cards: [
      { title: "Occupational disability insurance", text: "Protect your ability to work.", imageAlt: "People relaxing at Lake Aasee in the evening light" },
      { title: "Further insurance", text: "e.g. accident, liability, …", imageAlt: "Bright living room with a sofa in the sunlight" },
      { title: "Individual advice", text: "Finding the right solution together.", imageAlt: "Consultation table with a view of Münster's old town" },
    ],
  },
  reviews: {
    eyebrow: "Google reviews",
    title: "What our clients say.",
    linkLabel: "View all reviews on Google",
    newTab: " (opens in a new tab)",
    attribution: "Reviews from Google Maps (quotes in the original German)",
    starsAria: (v) => `${v} out of 5 stars`,
    count: (v, n) => `${v} out of 5 · ${n} Google reviews`,
    quote: (t) => `“${t}”`,
  },
  location: {
    eyebrow: "Location",
    title: ["In person in Münster.", "Digital across Germany."],
    text: "Personal advice on site in Münster or flexibly by video – nationwide.",
    note: "Appointments by arrangement",
    cta: "Open route in Google Maps",
    newTab: " (opens in a new tab)",
    mapTitle: "Location of Andreas Tonn Versicherungen on Google Maps",
  },
  map: {
    notice: "The map is provided by Google Maps. When it loads, data, including your IP address, is transmitted to Google. By clicking “Load map” you consent to Google Maps only.",
    load: "Load map",
  },
  finalCta: {
    eyebrow: "Your next step",
    title: ["Let's discuss your", "options together."],
    text: "Non-binding. Personal. Online or on site in Münster.",
    cta: "Arrange a free initial consultation",
    checks: ["Free of charge", "Non-binding", "Personal"],
  },
};
