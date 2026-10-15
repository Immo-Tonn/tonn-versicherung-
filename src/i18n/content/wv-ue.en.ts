import type { UeContent, WvContent } from "./wv-ue.types";

/** ENTWURF – nicht fachlich/rechtlich geprüft, nicht veröffentlicht. Quelle der Aussagen: deutsche Seiten. */
export const wvEn: WvContent = {
  meta: {
    title: "Insurance in Münster: personal liability, household contents and more | TONN",
    description:
      "Liability, household contents, legal expenses, accident, motor and other insurance: we discuss in person what fits your situation, and we review existing contracts.",
    name: "Other insurance",
    crumb: "Other insurance",
    serviceName: "Advice on other insurance",
    serviceType: "Insurance advice and insurance intermediation: liability, household contents, legal expenses, accident and other lines",
  },
  hero: {
    eyebrow: "Other insurance",
    title: ["Other insurance.", "For the life you lead"],
    text: "For your home, your everyday life and your personal plans. Together we discuss which insurance cover fits your situation.",
    cta: "Free initial consultation",
    imageAlt: "Bright, modern apartment with neutral furnishings in daylight",
  },
  overview: {
    eyebrow: "Overview",
    title: "What do you want to protect?",
    text: "Discover the different areas of insurance. Click on an insurance type to learn more. Which cover fits you, we discuss in person.",
    questionsLabel: "Questions for the consultation",
    link: "Get advice on this",
    note: "Benefits, requirements and exclusions differ depending on the insurer and tariff.",
    groups: [
      {
        title: "Everyday life & family",
        items: [
          {
            title: "Personal liability insurance",
            short: "Liability risks in private everyday life.",
            text: "A mishap can cause damage to others. In the conversation we clarify who should be co-insured and which benefits matter for your everyday life. The actual cover depends on the agreed tariff.",
            points: ["Insured persons and family situation", "Sums insured and deductible", "Special requirements, for example for damage to rented property or loss of keys"],
          },
          {
            title: "Legal expenses insurance",
            short: "Support in legal disputes.",
            text: "Legal expenses insurance can be agreed for different areas of life. Together we look at which areas are relevant to you and which conditions, waiting periods and exclusions need to be considered.",
            points: ["Private, professional, traffic or housing area", "Waiting periods and deductible", "Limits for disputes that already exist"],
          },
          {
            title: "Accident insurance",
            short: "Benefits for the possible consequences of an accident.",
            text: "Depending on the contract, private accident insurance can provide financial benefits for the consequences of an accident. We discuss which benefits fit your situation and how disability, benefit amount and additional components are regulated in the respective tariff.",
            points: ["Disability benefit and progression", "Additional agreed benefits", "Distinction from occupational disability insurance"],
          },
          {
            title: "Pet owner's liability insurance",
            short: "Liability risks around your pet.",
            text: "If an animal causes damage, claims can arise against the owner. Together we clarify the suitable cover for your animal and look at the respective contract terms.",
            points: ["Type of animal and your personal situation of keeping it", "Co-insured persons", "Sums insured, deductible and special conditions"],
          },
        ],
      },
      {
        title: "Home & property",
        items: [
          {
            title: "Household contents insurance",
            short: "Your furnishings and personal belongings.",
            text: "Household contents insurance concerns the movable items in your home. In the conversation we look at your living situation, the value of your contents and the perils and benefits insured in the respective contract.",
            points: ["Living space and sum insured", "Valuables and compensation limits", "Additional components, for example bicycle theft or natural hazards"],
          },
          {
            title: "Residential building insurance",
            short: "Cover for your own building.",
            text: "With residential building insurance, the building and the components insured under the contract are the focus. For the consultation, among other things the construction type, use, condition and any modernisation carried out are relevant.",
            points: ["Building data and use", "Insured perils and deductible", "Modernisation, extensions and additional components"],
          },
          {
            title: "Natural hazard cover (Elementarschäden)",
            short: "Looking at additional natural hazards separately.",
            text: "Depending on the contract, natural hazards are covered through an additional component. We look at which natural hazards can be included and which requirements, deductibles and obligations apply.",
            points: ["Inclusion in household contents or residential building insurance", "Location and individual risk situation", "Conditions, for example on backflow protection"],
          },
          {
            title: "Glass insurance",
            short: "Supplementary protection for certain glazing.",
            text: "Whether glass insurance makes sense depends, among other things, on the existing glazing and the existing insurance cover. Together we check which glass surfaces are taken into account in the respective contract.",
            points: ["Building and furniture glazing", "Special glass surfaces", "Overlaps and distinctions from existing contracts"],
          },
        ],
      },
      {
        title: "On the move & health",
        items: [
          {
            title: "Motor insurance",
            short: "Liability and comprehensive cover for your vehicle.",
            text: "With motor insurance we look at your vehicle data, its use and the cover you want. Besides liability, we discuss partial comprehensive, fully comprehensive and other contractual benefits where needed.",
            points: ["Group of drivers and annual mileage", "Comprehensive cover and deductible", "Garage tie-in and additional benefits"],
          },
          {
            title: "Travel health insurance abroad",
            short: "Health insurance cover when travelling.",
            text: "For trips abroad, it is worth looking at your existing health insurance cover. We discuss the destination, the length of the trip and the terms of possible supplementary cover.",
            points: ["Territorial scope and maximum length of trip", "Rules on treatment and repatriation", "Pre-existing conditions and tariff exclusions"],
          },
          {
            title: "Supplementary dental insurance",
            short: "Additional benefits for your teeth.",
            text: "Depending on the tariff, supplementary dental insurance can provide additional benefits. In the conversation we look at the benefits you want as well as reimbursement limits, waiting periods and the information on your current dental status.",
            points: ["Dentures, dental treatment and prophylaxis", "Benefit tiers and reimbursement limits", "Treatments already recommended or begun"],
          },
          {
            title: "Other supplementary insurance",
            short: "Additions according to your personal needs.",
            text: "Supplementary insurance can complement different areas, for example outpatient or inpatient benefits. Together we clarify what you want and whether an addition fits your existing cover.",
            points: ["Additional benefits you want", "Existing insurance cover", "Health questions, waiting periods and benefit limits"],
          },
        ],
      },
    ],
  },
  review: {
    eyebrow: "Adjusting and looking ahead",
    title: "Does your insurance cover still fit your life?",
    text: "A move, a family or new plans can be a reason to look at existing contracts together. We discuss what has changed and which questions about your insurance cover are still open.",
    items: [
      { title: "Understanding contracts", text: "We look at your existing contracts and the agreed benefits together." },
      { title: "Taking changes into account", text: "We discuss your current life situation and new requirements." },
      { title: "Discussing benefits and costs", text: "We explain possible options and support you in weighing them up." },
    ],
  },
  consulting: {
    eyebrow: "Our advice",
    title: ["Personal advice.", "Clearly explained"],
    text: "We take time for your questions and your existing contracts. Together we discuss your needs and possible next steps.",
    imageAlt: "People spending the evening relaxing by the water",
    steps: [
      { title: "Discussing your situation", text: "You tell us about your life situation and your wishes." },
      { title: "Looking at existing cover", text: "We look at existing contracts and clarify open questions about the agreed benefits." },
      { title: "Weighing options", text: "We discuss possible adjustments with their benefits, costs and conditions." },
    ],
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Good to know",
    text: "Here you will find answers to frequently asked questions about other insurance. We discuss your personal situation in the conversation.",
    items: [
      { q: "Can I bring existing contracts?", a: "Yes. Your previous insurance documents help us understand your existing cover. If possible, bring insurance policies and current contract information." },
      { q: "Do I have to change my insurance?", a: "No. First we look at your situation and your existing contracts. Whether an adjustment or a change makes sense, we then discuss together." },
      { q: "Which documents are helpful?", a: "Helpful are current insurance policies, information on contributions and deductibles, and information on changes in your life situation. Which documents we specifically need, we clarify in advance." },
      { q: "How does the initial consultation work?", a: "In the initial consultation we talk about your questions and your need for advice. Afterwards we clarify which information is required for the next steps." },
      { q: "Can I discuss several insurance policies together?", a: "Yes. You can bring several topics. This way, existing contracts and your current life situation can be looked at in context." },
    ],
  },
  finalCta: {
    eyebrow: "Your next step",
    title: "Let's talk about your protection",
    text: "Together we clarify your questions and the next steps.",
    cta: "Arrange an initial consultation",
  },
};

export const ueEn: UeContent = {
  meta: {
    title: "About us: Andreas & Natalia Tonn, Münster | TONN",
    description:
      "Get to know Andreas and Natalia Tonn in Münster: insurance intermediation with a focus on PKV and occupational disability, as well as organisation and finance.",
    name: "About us",
    crumb: "About us",
  },
  hero: {
    eyebrow: "About us",
    title: ["Personally there.", "Clearly advised"],
    text: "Andreas and Natalia Tonn in Münster: personal insurance intermediation with a focus on private health insurance and occupational disability – supported by clear organisation and careful processes.",
  },
  intro: {
    title: "Insurance is a matter of trust",
    text: "At Andreas Tonn Versicherungen in Münster you have personal contacts. Andreas Tonn supports you with insurance questions and discusses with you your situation, existing contracts and possible next steps.",
    text2: "Natalia Tonn is responsible for back office, organisation, technology and finance. She takes care of the processes in the background so that there is room for your questions in the consultation.",
    tags: "Personal · Understandable · Well organised",
    imageAlt: "Andreas and Natalia Tonn",
  },
  people: {
    title: "Your contacts",
    andreas: {
      name: "Andreas Tonn",
      role: "Insurance agent working with multiple insurers",
      alt: "Andreas Tonn",
      paragraphs: [
        [
          "Andreas Tonn has worked in the insurance industry since 1991. After training as an insurance specialist (BWV) at Continentale, he worked in the Wolfgang Tonn general agency and then as an insurance agent working with multiple insurers (Versicherungsvertreter, Mehrfachagent) in Münster. From May 2006 to 2022 he ran the Alte Leipziger general agency in Münster, with offices in Dülmen and Rhede. Since 2022 he has been active as an insurance agent working with multiple insurers (Versicherungsvertreter, Mehrfachagent), cooperating with several insurance companies.",
        ],
        [
          "His areas of advice are ",
          { text: "private health insurance", href: "/private-krankenversicherung" },
          " and ",
          { text: "occupational disability insurance", href: "/berufsunfaehigkeitsversicherung" },
          ". He supports clients from Münster and the Münsterland with questions about suitable cover and existing contracts.",
        ],
        [
          "In a personal conversation, your life situation, your wishes and the respective contract terms are looked at together. You are also welcome to bring your questions about ",
          { text: "investment", href: "/kapitalanlage" },
          " and ",
          { text: "other insurance", href: "/versicherungen" },
          ". The aim is an understandable basis for your decision.",
        ],
      ],
      accordion: "Professional background",
      timeline: [
        ["1991–1992", "Training as an insurance specialist (BWV) at Continentale."],
        ["1992–2004", "Self-employed insurance salesperson in the Wolfgang Tonn general agency."],
        ["2005–2006", "Insurance agent working with multiple insurers (Versicherungsvertreter, Mehrfachagent) in Münster."],
        ["1 May 2006–2022", "Alte Leipziger general agency in Münster with offices in Dülmen and Rhede."],
        ["Since 2022", "Insurance agent working with multiple insurers (Versicherungsvertreter, Mehrfachagent)."],
      ],
    },
    natalia: {
      name: "Natalia Tonn",
      role: "Back office, organisation and finance",
      alt: "Natalia Tonn",
      paragraphs: [
        ["Natalia Tonn is responsible for the organisational and technical side of the office as well as the commercial area. She takes care of documents, applications and processes in the background – so that there is time for a personal conversation in the consultation itself."],
        ["She organises the internal processes and looks after the technical workflows of the office. In doing so, she keeps an eye on the individual work steps and how they interact."],
        ["She brings her education in economics to the organisation and commercial management of the office. In this way she complements Andreas Tonn's insurance intermediation with structured support in the background."],
      ],
      accordion: "Qualifications",
      qualification: ["Diploma specialist, field of study: finance", "Qualification: economist", "Sevastopol State University, Ukraine"],
    },
  },
  cta: {
    title: "Time for your questions",
    text: "Whether private health insurance, occupational disability or questions about existing contracts: let's discuss your situation and the next steps in person.",
    button: "Free initial consultation",
    imageAlt: "Bright office with a desk and a view of the city (illustration)",
  },
};
