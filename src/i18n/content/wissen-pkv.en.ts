import type { ArticleLabels, ArticleTranslation } from "./wissen.types";

/** ENTWURF – nicht fachlich/rechtlich geprüft, nicht veröffentlicht. Quelle der Aussagen: deutsche Beiträge. Werte für 2026 vor Veröffentlichung prüfen. */

export const articleLabelsEn: ArticleLabels = {
  home: "Home",
  guides: "Guides",
  breadcrumbAria: "Breadcrumbs",
  example: "Example",
  answerLabel: "In short",
  sourcesTitle: "Sources",
  sourceLang: "(in German)",
  relatedTitle: "Further reading",
  ctaTitle: "Still have a question?",
  ctaText: "Let's discuss what this information means for your personal situation.",
  ctaButton: "Arrange a personal conversation",
};

export const topicsEn: Record<string, string> = {
  "Private Krankenversicherung": "Private health insurance",
  "Berufsunfähigkeit": "Occupational disability",
  Kapitalanlage: "Investment",
};

export const pkvOderGkvEn: ArticleTranslation = {
  slug: "pkv-oder-gkv",
  topic: "Private health insurance",
  title: "PKV or GKV: differences and decision criteria",
  seo: {
    title: "Private or statutory health insurance (PKV or GKV): decision guide | TONN",
    description: "Who can choose between statutory and private health insurance? Contributions, benefits and decision criteria in a clear overview.",
  },
  answer:
    "Whether PKV or GKV fits better depends on your situation. First it matters whether you can choose at all: that depends mainly on employment and income. After that, contribution development, family, health and your long-term planning are decisive. Private health insurance is not automatically the better solution.",
  blocks: [
    { t: "h2", text: "Can you choose at all?" },
    {
      t: "p",
      text: "The choice between statutory and private health insurance is not open to everyone. For employees, compulsory insurance in statutory health insurance ends when regular annual earnings exceed the annual earnings threshold (Jahresarbeitsentgeltgrenze, § 6 para. 1 no. 1 SGB V). For 2026 this compulsory insurance threshold (Versicherungspflichtgrenze) is €77,400 per year, which is €6,450 per month. If it is exceeded, compulsory insurance ends in principle at the end of the calendar year (§ 6 para. 4 SGB V).",
    },
    {
      t: "p",
      text: "Civil servants (Beamte) are exempt from statutory health insurance if, under civil-service law, they are entitled to continued payment of salary and to government assistance with healthcare costs (Beihilfe) or free medical care (Heilfürsorge) (§ 6 para. 1 no. 2 SGB V). Self-employed people and freelancers can also insure privately. How this looks in your specific case depends on your form of employment and your previous insurance.",
    },
    { t: "link", text: "PKV for employees: switching, threshold and employer subsidy", href: "/private-krankenversicherung/angestellte" },
    { t: "link", text: "PKV for civil servants (Beamte): Beihilfe, residual-cost insurance and family", href: "/private-krankenversicherung/beamte" },
    { t: "link", text: "PKV for self-employed people and freelancers: tariffs, deductible and daily sickness allowance", href: "/private-krankenversicherung/selbststaendige" },
    { t: "h2", text: "How contributions differ" },
    {
      t: "p",
      text: "In statutory health insurance, the contribution is based on income subject to contributions. Income is only taken into account up to the contribution assessment ceiling (Beitragsbemessungsgrenze); in 2026 this is €69,750 per year. The general contribution rate is 14.6 percent, plus an additional contribution set by each health insurance fund (on average 2.9 percent). Employees and employers each bear half of the contributions. Children, spouses and registered partners can be covered free of charge through family insurance (Familienversicherung).",
    },
    {
      t: "p",
      text: "In private health insurance, the contribution does not depend on income but, among other things, on age and state of health at entry, the chosen tariff and scope of benefits, and a possible deductible. There is no free family insurance as in GKV; family members are insured individually. For old age, insurers build up ageing reserves (Alterungsrückstellungen). Contributions can nevertheless rise: insurers may adjust them if costs have risen permanently and an independent trustee agrees.",
    },
    { t: "h2", text: "Criteria for your decision" },
    {
      t: "ul",
      items: [
        "Eligibility: do you belong to the groups of people who can insure privately?",
        "Income and predictability: how secure is your income over the next few years, including during parental leave, part-time work or self-employment?",
        "Family: are you planning children, or is your partner not working? In PKV every person needs their own contract.",
        "Benefits: which benefits do you need? The statutory range of benefits is uniformly regulated; in PKV you agree it by contract.",
        "Health: in PKV the insurer asks health questions before the contract is concluded. Pre-existing conditions can lead to a risk surcharge, a benefit exclusion or rejection.",
        "Contribution in old age: how sustainable is the contribution even if your income falls?",
      ],
    },
    {
      t: "example",
      text: "An employee's income is above the compulsory insurance threshold for the first time. They are healthy but plan to have children in a few years. For them it is not only today's contribution that matters, but also how the costs for a family would develop in both systems.",
    },
    { t: "h2", text: "Limits of this overview" },
    {
      t: "p",
      text: "This article does not replace advice. Calculation figures such as the compulsory insurance threshold and the contribution assessment ceiling are adjusted every year; the values given apply to 2026. Whether a switch makes sense for you depends on your professional, health and financial situation. A later switch back to statutory health insurance is not possible in every case.",
    },
  ],
  sourceLabels: [
    "Federal Government: contribution assessment ceilings 2026 (compulsory insurance threshold, contribution assessment ceiling)",
    "Gesetze im Internet: § 6 SGB V, exemption from compulsory insurance",
    "Federal Ministry of Health: contributions to statutory health insurance",
    "BaFin: private health and long-term care insurance",
  ],
};

export const risikovoranfrageEn: ArticleTranslation = {
  slug: "anonyme-risikovoranfrage",
  topic: "Private health insurance",
  title: "Anonymous preliminary risk assessment: process, benefits and limits",
  seo: {
    title: "Anonymous preliminary risk assessment for PKV and BU: how it works | TONN",
    description:
      "What is an anonymous preliminary risk assessment? Process, benefits and limits for private health insurance and occupational disability insurance, clearly explained.",
  },
  answer:
    "In an anonymous preliminary risk assessment (anonyme Risikovoranfrage), an intermediary or service provider asks insurers in advance whether, and on what terms, they would insure a person, without giving a name or address. No contract and no application come into being. It is particularly helpful in the case of pre-existing conditions. Whether and to what extent the answer is binding depends on the conditions stated in it.",
  blocks: [
    { t: "h2", text: "What a preliminary risk assessment is for" },
    {
      t: "p",
      text: "Before a private health or occupational disability insurance policy is taken out, the insurer asks health questions. People with pre-existing conditions often do not know in advance how they will be assessed. A rejection or a risk surcharge can affect later applications. With the anonymous preliminary risk assessment, the assessment can be clarified in advance.",
    },
    { t: "h2", text: "How it works" },
    {
      t: "ul",
      items: [
        "Your health information is carefully compiled together.",
        "An intermediary or service provider submits it to several insurers without your name and without your address. This is because the same condition can be assessed differently depending on the insurer.",
        "The insurers report back whether and how they would accept the risk.",
        "Possible outcomes are standard acceptance, risk surcharge, benefit exclusion or rejection.",
        "Only then do you decide whether, and with which insurer, you submit an application.",
      ],
    },
    {
      t: "p",
      text: "The Verbraucherzentrale consumer advice centre recommends an anonymous preliminary risk assessment, using occupational disability insurance as its example, if difficulties are to be expected because of pre-existing conditions.",
    },
    {
      t: "p",
      text: "In our experience, an insurer's answer can be binding for the assessment of a specific pre-existing condition that was asked about. What matters are the wording, the stated conditions and the information submitted. If an application is made later, we submit this answer with it. No commitment for the entire contract is attached to it.",
    },
    { t: "h2", text: "Why complete information matters" },
    {
      t: "p",
      text: "The following also applies to the preliminary assessment: the information must match what you later state in the application. Under § 19 VVG, you must disclose to the insurer the risk-relevant circumstances known to you that it asks about in text form (Textform). If this duty of disclosure (Anzeigepflicht) is breached, the insurer can, under certain conditions, withdraw from the contract, terminate it or adjust it. A favourable result based on incomplete information therefore does not help you.",
    },
    { t: "h2", text: "Limits of the preliminary risk assessment" },
    {
      t: "ul",
      items: [
        "The preliminary risk assessment does not replace an insurance application. The answer relates to the information submitted and the conditions stated in it.",
        "Not every insurer accepts anonymous enquiries. An experienced intermediary generally knows which ones do.",
        "Results can change if your health or your information changes.",
        "It does not replace advice on tariff and terms. Acceptance alone says nothing yet about whether the contract suits you.",
      ],
    },
    {
      t: "example",
      text: "A person had back treatment some years ago and wants to take out occupational disability insurance. Through the anonymous preliminary assessment, they find out which insurers would accept them without a surcharge, with a surcharge or with a benefit exclusion, and can then submit an application to a suitable provider in a targeted way.",
    },
  ],
  sourceLabels: [
    "Verbraucherzentrale: occupational disability, how to protect yourself against loss of income",
    "Gesetze im Internet: § 19 VVG, duty of disclosure",
    "BaFin: private health and long-term care insurance (notes on health questions)",
  ],
};

export const tarifwechselEn: ArticleTranslation = {
  slug: "tarifwechsel-pkv",
  topic: "Private health insurance",
  title: "Changing tariff in PKV: options within an existing contract",
  seo: {
    title: "Changing your PKV tariff under § 204 VVG: your options | TONN",
    description: "When is a tariff change possible in PKV, what happens to the ageing reserves and what should you look out for before switching?",
  },
  answer:
    "Privately insured people can require the insurer to let them switch to another tariff with similar insurance cover (§ 204 VVG). Acquired rights and the ageing reserves (Alterungsrückstellung) are credited in the process. For higher or more comprehensive benefits, however, the insurer may require a risk surcharge, a benefit exclusion or a waiting period.",
  blocks: [
    { t: "h2", text: "What the law provides" },
    {
      t: "p",
      text: "Under § 204 para. 1 VVG, you can require the insurer to accept applications to switch to other tariffs with similar insurance cover. The rights acquired under the contract and the ageing reserves must be credited. A switch can make sense if you want to lower the contribution or obtain better cover.",
    },
    { t: "h2", text: "Switching with additional benefits" },
    {
      t: "p",
      text: "If the benefits in the new tariff are higher or more comprehensive, the insurer may require a benefit exclusion, an appropriate risk surcharge or a waiting period (Wartezeit) for the additional benefit. BaFin points out that a health assessment (Gesundheitsprüfung) is also possible for this. You can avoid this by waiving the additional benefit.",
    },
    { t: "h2", text: "Advice and information from the insurer" },
    {
      t: "p",
      text: "According to BaFin's guidance, the insurer must take the rights acquired so far into account and advise on a tariff change. In the case of contribution adjustments, it must also point out the right to switch. It is best to request target tariffs and their terms in writing before you decide.",
    },
    { t: "h2", text: "Switching to another insurer" },
    {
      t: "p",
      text: "Switching to another insurer is something different from a tariff change within the existing contract. According to BaFin, for contracts concluded after 2009 part of the ageing reserves can be transferred, but not for older contracts. In addition, the new insurer asks health questions and, except in the basic tariff, is not obliged to accept you.",
    },
    { t: "h2", text: "Basic tariff" },
    {
      t: "p",
      text: "Switching to the basic tariff (Basistarif) is only possible under § 204 VVG under certain conditions, including a contract concluded after 2009 and an age over 55 years, or receipt of a pension or need for assistance (Hilfebedürftigkeit). In the basic tariff, risk surcharges and benefit exclusions are not permitted. It is to be understood as an option, not as a standard solution.",
    },
    { t: "h2", text: "Checklist before a switch" },
    {
      t: "ul",
      items: [
        "Which benefits fall away or are added? Compare benefit descriptions, not just the contribution.",
        "How do deductible and contribution development affect you in the long term?",
        "Does the insurer require a surcharge, exclusion, waiting period or health assessment for additional benefits?",
        "Are the ageing reserves and acquired rights credited in a comprehensible way?",
        "Do you have all commitments and terms in writing?",
      ],
    },
    {
      t: "example",
      text: "A person pays a high contribution in their current tariff and is considering a tariff with a higher deductible from the same insurer. Because the benefits are not more comprehensive, the switch may be possible without a health assessment. Whether it makes sense depends on whether they could bear the higher deductible in an emergency.",
    },
    {
      t: "p",
      text: "Which options exist in your contract can only be judged on the basis of your terms and tariffs. This overview does not replace legal or professional advice.",
    },
  ],
  sourceLabels: [
    "Gesetze im Internet: § 204 VVG, change of tariff",
    "BaFin: private health and long-term care insurance",
    "BaFin: health and long-term care insurance (overview)",
  ],
};
