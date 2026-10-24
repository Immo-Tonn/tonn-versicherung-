import type { PkvContent, SubLabels } from "./pkv.types";

/** ENTWURF – nicht fachlich geprüft, nicht veröffentlicht. Quelle der Aussagen: deutsche Seite. */
export const pkvEn: PkvContent = {
  meta: {
    title: "Private health insurance (PKV) in Münster | Personal advice | TONN",
    description:
      "PKV advice in Münster and across Germany for employees, self-employed people and civil servants: anonymous preliminary risk assessment, comparison of different offers, ongoing support.",
    name: "Private health insurance",
    crumb: "Private health insurance",
    serviceName: "Advice on private health insurance",
    serviceType: "Insurance advice and insurance intermediation: private health insurance",
  },
  hero: {
    eyebrow: "Private health insurance",
    title: ["Private", "health insurance"],
    soft: "That fits your life",
    subtitle: ["Personal advice. Comparing insurance offers.", "Thinking long term."],
    primary: "Free initial consultation",
    secondary: "Request an appointment",
    imageAlt: "Andreas Tonn in a consultation",
  },
  trust: {
    ariaLabel: "Your benefits",
    items: [
      { title: "Personal advice", text: "without obligation" },
      { title: "Anonymous preliminary risk assessment", text: "with several insurers" },
      { title: "Personal support", text: "in Münster and across Germany" },
    ],
  },
  targets: {
    eyebrow: "Who is PKV of interest to?",
    title: ["Different paths in life", "Individual solutions"],
    text: "Whether employed, self-employed or a civil servant – together we find out whether private health insurance fits your current situation and your plans for the future.",
    cards: [
      { title: "Employees", text: "with an income above the compulsory insurance threshold.", alt: "An employee's hands on a laptop in the office" },
      { title: "Self-employed", text: "More flexibility and individual cover.", alt: "Workspace with a laptop, notebook and a view over the city" },
      { title: "Civil servants (Beamte)", text: "PKV combined with government assistance with healthcare costs (Beihilfe).", alt: "Town hall façade in the sunlight" },
    ],
    cta: "Learn more",
    srSuffix: " about {title}",
  },
  process: {
    eyebrow: "How the consultation works",
    title: "Check first. Then decide",
    steps: [
      { title: "Short conversation", text: "Understanding your situation and goals." },
      { title: "Anonymous preliminary risk assessment", text: "with several insurers." },
      { title: "Comparing results", text: "Transparent recommendation." },
      { title: "Deciding together", text: "Calmly and without pressure." },
    ],
    cta: "Free initial consultation",
  },
  risk: {
    eyebrow: "Health history?",
    title: ["This does not have to be", "an exclusion criterion"],
    text: "We carry out an anonymous preliminary risk assessment with suitable insurers – before an official application is submitted. This way you find out how your information is likely to be assessed, without it already counting as an application.",
    cta: "About the risk assessment",
    flowAria: "Process of the anonymous preliminary risk assessment",
    flow: [["Your", "details"], ["Anonymous", "check"], ["Several", "insurers"], ["Result"]],
    resultsLabel: "Possible outcomes:",
    results: ["Standard acceptance", "Risk surcharge", "Benefit exclusion", "Rejection"],
  },
  compare: {
    eyebrow: "PKV or GKV?",
    title: ["What are the most important", "differences?"],
    imageAlt: "A woman sits on a jetty and looks across a lake in the evening light",
    caption: "Differences between statutory (GKV) and private (PKV) health insurance",
    criterion: "Criterion",
    head: ["", "GKV", "PKV"],
    headTitles: ["Statutory health insurance (GKV)", "Private health insurance (PKV)"],
    rows: [
      ["Contribution", "depends on income", "by tariff / risk"],
      ["Benefits", "regulated by law", "agreed by contract"],
      ["Family", "family insurance possible", "each person has their own contract"],
      ["Flexibility", "uniform framework", "individually configurable"],
    ],
    note: "PKV is not automatically better.",
    noteText: "What matters is which system fits your life situation.",
  },
  about: {
    eyebrow: "Your contact person",
    title: "Personal. Experienced. At your side",
    text: "I am Andreas Tonn, an insurance agent working with multiple insurers, with a focus on private health insurance. My aim is to find a suitable solution for your situation in a way that is understandable, honest and transparent.",
    cta: "More about Andreas Tonn",
    imageAlt: "Consultation at a table with documents",
  },
  secondOpinion: {
    eyebrow: "Already have an offer?",
    title: "Get a second opinion",
    text: "Together with you, we look at your PKV offer, the benefits, the deductible and important contract details.",
    cta: "Have an offer reviewed",
    imageAlt: "Consultation table with a view of Münster's old town",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: ["Answers to", "the most important questions"],
    items: [
      {
        q: "From what income can I switch to PKV?",
        a: "Employees can switch to PKV if their regular annual income exceeds the compulsory insurance threshold (Versicherungspflichtgrenze). This threshold is adjusted every year. Different requirements apply to self-employed people and civil servants. We will gladly clarify what this means in your case during the initial consultation.",
      },
      {
        q: "What does private health insurance cost?",
        a: "The contribution depends, among other things, on age, state of health at entry, the chosen tariff, the scope of benefits and a possible deductible. A flat figure would not be reputable – in the initial consultation you will receive an individual assessment.",
      },
      {
        q: "What happens to my contribution in old age?",
        a: "Contributions in PKV can change over time, for example because of rising healthcare costs. The contribution calculation includes ageing reserves (Alterungsrückstellungen), which are built up for exactly this purpose. We will discuss with you what to look out for when choosing a tariff.",
      },
      {
        q: "What is an anonymous preliminary risk assessment?",
        a: "In an anonymous preliminary risk assessment, your health information is submitted to several insurers without your name – before an application is made. This shows you how the insurers are likely to assess your risk.",
      },
    ],
    more: "More questions in our guide",
  },
  finalCta: {
    eyebrow: "Get advice now",
    title: ["Still unsure whether PKV", "is right for you?"],
    text: "Personal and non-binding initial consultation.",
    cta: "Free initial consultation",
    checks: ["Non-binding", "Personal", "Also possible by video"],
  },
};

export const subLabelsEn: SubLabels = {
  home: "Home",
  breadcrumbAria: "Breadcrumbs",
  section: "Private health insurance",
  answerLabel: "In short",
  sourcesTitle: "Sources",
  ctaTitle: "How does private health insurance fit your situation?",
  ctaText: "We discuss your situation personally and compare suitable tariffs from our insurance partners together.",
  ctaButton: "Arrange a free initial consultation",
  pkvCrumb: "Private health insurance",
  sourceLang: "(in German)",
};
