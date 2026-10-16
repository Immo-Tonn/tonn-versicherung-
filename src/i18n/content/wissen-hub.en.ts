import type { RatgeberContent } from "./wissen-hub.types";

/** ENTWURF – nicht fachlich geprüft, nicht veröffentlicht. Quelle der Aussagen: deutsche Seite /wissen. */
export const ratgeberEn: RatgeberContent = {
  meta: {
    title: "Guides: PKV, occupational disability & investment | TONN",
    description:
      "Understandable answers on private health insurance, occupational disability and investment: basics, important questions and in-depth articles from Münster.",
    name: "Guides: PKV, occupational disability & investment",
  },
  hero: {
    label: "Guides · PKV, occupational disability & investment",
    title: ["Good questions.", "Clear answers."],
    text: "Orientation for your insurance and financial decisions: understandable basics, important questions and in-depth articles.",
  },
  intro: {
    title: "Answers to your questions.",
    text: "Insurance and investing raise many questions. Here you will find understandable answers and further articles.",
    navAria: "Topics in the guides",
    topics: ["Private health insurance", "Occupational disability", "Investment"],
  },
  pkv: {
    label: "Private health insurance",
    title: "What matters in PKV?",
    lead: "Benefits, deductible and long-term contributions: here you learn what matters in private health insurance.",
    mainTitle: "PKV or GKV?",
    mainBody:
      "Statutory and private health insurance differ, among other things, in contributions, benefits and the cover of family members. Which solution suits you depends on your professional, health and financial situation.",
    mainLink: "Read about the differences",
    side: [
      { title: "Anonymous preliminary risk assessment", text: "Have your health information assessed before an application." },
      { title: "Changing tariff within an existing contract", text: "Understand the options, requirements and important questions." },
    ],
    groups: "For employees · Self-employed · Civil servants (Beamte)",
  },
  bu: {
    label: "Occupational disability",
    title: ["When your income", "needs protection."],
    p1: "What happens if you can no longer practise your profession for health reasons?",
    p2: "Our articles explain how occupational disability insurance works and what matters for the monthly benefit, health questions and contract terms.",
    photoAlt: "Consultation table with a notebook and a cup in the sunlight",
    links: ["Planning the monthly benefit", "Understanding health questions", "Comparing contract terms"],
  },
  kapital: {
    label: "Investment",
    title: ["Investing money:", "Which questions come first?"],
    text: "Before you compare individual products, clarify your goal, your time horizon and your need for available money. Return, risk and costs should be considered together.",
    links: ["Investment basics", "Diversification clearly explained"],
    boxTitle: "Time. Risk. Costs.",
    trio: [
      { dt: "Time.", dd: "When do you need the money? The investment horizon influences which options fit your goals." },
      { dt: "Risk.", dd: "Which fluctuations and losses can you bear financially and personally?" },
      { dt: "Costs.", dd: "Which ongoing and one-off costs arise? They influence the investment result and should be comprehensible." },
    ],
  },
  faq: {
    title: "Frequently asked. Clearly answered.",
    items: [
      {
        q: "Is a preliminary risk assessment already an application?",
        a: "No. It serves as a provisional assessment by insurers. No insurance contract comes into being as a result. A response is to be understood in connection with the information submitted and does not replace a binding acceptance decision for a later application.",
      },
      {
        q: "Is the contribution enough for a PKV comparison?",
        a: "No. Benefits, deductible, contract terms and long-term financial affordability should also be taken into account. What matters is how the tariff fits your present and future life situation.",
      },
      {
        q: "Does diversification guarantee a safe investment?",
        a: "No. Broad diversification can reduce dependence on individual investments. It does not, however, remove all risks and does not generally protect against losses.",
      },
    ],
  },
  experience: {
    photoAlt: "Reviewing documents and an open book together.",
    title: "Knowledge from consulting practice.",
    nameRole: "insurance specialist (BWV)",
    text: "The topics are based on questions that come up again and again in insurance advice. Understandable explanations help you prepare for a personal conversation.",
    link: "More about Andreas Tonn",
  },
  cta: {
    title: "Still have a question?",
    lead: "Let's discuss what this information means for your personal situation.",
    button: "Arrange a personal conversation",
  },
};
