import type { TippContent } from "./tipp.types";

/** Englische Fassung (Entwurf wie die deutsche; Rechtstexte vor der Veröffentlichung juristisch prüfen). */
export const tippEn: TippContent = {
  meta: {
    title: "Referral reward: €200 for your recommendation | TONN",
    description: "Recommend us: €200 referral reward (Tippgeberprämie) when the person you refer takes out comprehensive private health insurance through our office. How it works and participation terms.",
    crumb: "Referral reward",
  },
  banner: {
    ariaLabel: "Referral reward",
    title: "Would you like to earn a €200 referral reward?",
    text: "Recommend us to others. If the person you refer takes out comprehensive private health insurance (Krankenvollversicherung) through us, you receive a €200 referral reward (Tippgeberprämie) under the participation terms.",
    cta: "How it works",
    note: ["Payout after six months of an existing insurance contract with all premiums paid in full. The ", "participation terms", " apply."],
  },
  page: {
    eyebrow: "Referral programme",
    title: "€200 referral reward for your recommendation",
    lead: "Do you know someone who is considering comprehensive private health insurance? Recommend us. If the person you refer takes out comprehensive private health insurance through our office, you receive a €200 referral reward (Tippgeberprämie) under the participation terms.",
    heroCta: "How it works",
    heroTermsLink: "Read the participation terms",
    stepsTitle: "How it works",
    steps: [
      { title: "You recommend our office", text: "You make the introduction and tell them about us. You do not have to advise anyone or choose a tariff." },
      { title: "The new client gets in touch on their own", text: "The person you refer contacts us on their own and says, at the first contact and before the consultation begins, who recommended us." },
      { title: "Payout once the conditions are met", text: "Once the requirements of the participation terms are met, the referral reward is paid out." },
    ],
    selfTitle: "Were you recommended to us?",
    selfText: "Then please get in touch with us yourself. At your first enquiry, tell us who recommended us to you.",
    selfHint: "The contact form has an optional field “Referred by” for this.",
    selfCta: "Get in touch",
    termsTitle: "Participation terms",
    termsPrivacy: ["Information on data protection can be found in the ", "privacy policy"],
    terms: [
      { title: "§ 1 Organiser", text: "The referral reward is organised by Andreas Tonn Versicherungen, owner Andreas Tonn, Sessendrupweg 54, 48161 Münster, Germany (provider details as in the legal notice), hereinafter “the office”." },
      { title: "§ 2 Participation", text: "Private individuals who are of legal age (hereinafter “referring person”) may take part." },
      { title: "§ 3 Amount of the reward", text: "For a new client who meets the conditions, the office pays the referring person a one-time €200. The reward is paid per new client, not per insurance component." },
      { title: "§ 4 Relevant contract", text: "Only the conclusion of a comprehensive private health insurance (private Krankenvollversicherung) is relevant. Supplementary insurance and a mere tariff change do not give rise to a claim to the referral reward." },
      { title: "§ 5 Recommendation", text: "The recommendation is recorded at the first contact, before the consultation begins. For this, the referred person states at their first enquiry who recommended us (for example in the field “Referred by” of the contact form). A later assignment is not possible." },
      { title: "§ 6 Excluded recommendations", text: "Self-referrals and persons with whom the office is already conducting a consultation on private health insurance are excluded." },
      { title: "§ 7 Conclusion of the contract", text: "The contract must be concluded through the office." },
      { title: "§ 8 Arising of the claim", text: "The claim to the referral reward arises when the contract has been in force without interruption for six months and the premiums for this period have been paid in full." },
      { title: "§ 9 Payout", text: "The payout is made within 30 days after the requirements under § 8 are met. Bank details are not collected via this website." },
      { title: "§ 10 Later termination", text: "If the contract is later terminated in the ordinary way after the payout, the referral reward that has been paid out does not have to be repaid." },
      { title: "§ 11 Role of the referring person", text: "The referring person merely makes the contact. They do not give advice and do not select a tariff. Advice and brokerage are provided exclusively by the office." },
    ],
  },
};
