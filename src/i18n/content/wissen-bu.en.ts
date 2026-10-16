import type { ArticleTranslation } from "./wissen.types";

/** ENTWURF – nicht fachlich/rechtlich geprüft, nicht veröffentlicht. Quelle der Aussagen: deutsche Beiträge. */

export const buRentePlanenEn: ArticleTranslation = {
  slug: "bu-rente-planen",
  topic: "Occupational disability",
  title: "Planning the monthly occupational disability benefit (BU-Rente): need, term and existing entitlements",
  seo: {
    title: "Planning the BU benefit: amount, term and entitlements | TONN",
    description:
      "How high should the monthly occupational disability benefit (BU-Rente) be, how long should it run and which entitlements already exist? A guide to planning occupational disability insurance.",
  },
  answer:
    "As a guideline, the Verbraucherzentrale consumer advice centre cites around 80 percent of your current net income. The monthly occupational disability benefit should cover running expenses such as rent and household costs and ideally run until you reach retirement age. Check which entitlements you already have, because the statutory pension for reduced earning capacity (Erwerbsminderungsrente) is tied to stricter conditions.",
  blocks: [
    { t: "h2", text: "Working out your need" },
    {
      t: "p",
      text: "The starting point is your net income. The Verbraucherzentrale cites 80 percent of current net income as an often good guideline. Calculate which fixed expenses continue in an emergency: housing, insurance, mobility, maintenance payments, loans and reserves. Some of these may fall away, and some may be added, such as costs for care or therapy.",
    },
    {
      t: "example",
      text: "With a monthly gross income of €4,000, 66% corresponds to a monthly occupational disability benefit (BU-Rente) of €2,640 (€4,000 × 0.66). This amount serves as orientation for planning. The right level of cover depends on your running expenses, existing entitlements and your personal situation. Which benefit amount can be insured also depends on the underwriting guidelines of the respective insurer.",
    },
    { t: "h2", text: "Which entitlements already exist?" },
    {
      t: "p",
      text: "Statutory pension insurance does not pay an occupational disability pension but a pension for reduced earning capacity (Erwerbsminderungsrente). According to the Deutsche Rentenversicherung, it requires that, because of illness or disability, you can work less than six hours a day, and in any activity, not only in your previous profession. If you can work less than three hours a day, there is full reduction in earning capacity; at three to under six hours, partial reduction. In addition, you must have been insured in pension insurance for at least five years and have paid compulsory contributions for at least three years in the last five years before the reduction in earning capacity began.",
    },
    {
      t: "p",
      text: "The Verbraucherzentrale points out that the pension for reduced earning capacity is on average below the basic income support level (Grundsicherung). A private occupational disability insurance, by contrast, protects your previous profession. How high your statutory entitlement is, is shown by the pension information (Renteninformation) from the Deutsche Rentenversicherung.",
    },
    { t: "h2", text: "Setting the term" },
    {
      t: "p",
      text: "The Verbraucherzentrale recommends taking out the contract ideally until you reach retirement age, that is, until age 67. A shorter term lowers the contribution but leaves a gap between the end of the contract and the start of the pension.",
    },
    { t: "h2", text: "Looking at the benefit and the terms together" },
    {
      t: "ul",
      items: [
        "Dynamic increase (Dynamik): it helps to offset income increases and inflation so that the purchasing power of the benefit is maintained.",
        "Option to increase coverage without a new health assessment (Nachversicherungsgarantie): provided the contract conditions are met, it allows a higher benefit on certain events such as marriage, the birth of a child or career advancement, without a new health assessment.",
        "Waiver of abstract referral to other occupations (abstrakte Verweisung): the insurer then does not refer you to other activities. More on this in the article on contract terms.",
      ],
    },
    {
      t: "p",
      text: "The right scope depends on your income, your family and your running obligations. These notes do not replace a personal needs calculation.",
    },
  ],
  sourceLabels: [
    "Verbraucherzentrale: occupational disability, how to protect yourself against loss of income",
    "Deutsche Rentenversicherung: pensions for reduced earning capacity",
    "Gesetze im Internet: § 172 VVG, benefit paid by the insurer",
  ],
};

export const gesundheitsfragenBuEn: ArticleTranslation = {
  slug: "gesundheitsfragen-bu",
  topic: "Occupational disability",
  title: "Health questions in BU: preparation and complete information",
  seo: {
    title: "Health questions in BU: how to prepare properly | TONN",
    description:
      "Why complete information matters in the health questions of BU, what can happen if information is wrong, and how to prepare.",
  },
  answer:
    "Answer health questions completely and correctly. Under § 19 VVG you must disclose the risk-relevant circumstances that the insurer asks about in text form. Wrong or incomplete information can lead to the insurer withdrawing from the contract, terminating it or adjusting it. Prepare with documents and, if you have pre-existing conditions, clarify in advance how insurers assess them.",
  blocks: [
    { t: "h2", text: "What the law requires" },
    {
      t: "p",
      text: "Before the contract is concluded, you must disclose to the insurer the circumstances known to you that are significant for its decision, insofar as it asks about them in text form (§ 19 para. 1 VVG). What counts are therefore the questions asked. Answer them exactly as they are worded, with the period and scope stated there.",
    },
    { t: "h2", text: "What can happen if information is wrong" },
    {
      t: "ul",
      items: [
        "In the case of intent or gross negligence, the insurer can withdraw from the contract.",
        "In the case of slight negligence, withdrawal is excluded; a right of termination comes into consideration.",
        "If the insurer would also have concluded the contract with correct information, only on different terms, it can demand these retroactively.",
        "Its rights presuppose that it informed you of the consequences by a separate notice in text form (§ 19 para. 5 VVG).",
      ],
    },
    {
      t: "p",
      text: "The insurer must exercise its rights in writing within one month after it learns of the breach. After five years from conclusion of the contract they expire, and in the case of intent or fraud after ten years (§ 21 VVG). Do not rely on these deadlines: in the event of a claim, insurers usually check the information closely.",
    },
    { t: "h2", text: "How to prepare" },
    {
      t: "ul",
      items: [
        "Establish exactly what is being asked and for what period, such as treatments, diagnoses or medication.",
        "Put together doctor visits, diagnoses and treatments from your memory and your documents. If necessary, ask your doctors and your health insurance fund for an overview.",
        "If in doubt, do not answer questions from memory alone, but on the basis of the documents.",
        "Ask if a question is unclear, and record the answer in writing.",
        "Keep a copy of the application with all the information.",
      ],
    },
    { t: "h2", text: "Clarifying pre-existing conditions in advance" },
    {
      t: "p",
      text: "If you have pre-existing conditions, an anonymous preliminary risk assessment can help. It shows how insurers are likely to assess your information before an application is made. The Verbraucherzentrale recommends the support of an experienced intermediary or an independent insurance adviser (unabhängiger Versicherungsberater) for this.",
    },
    {
      t: "example",
      text: "A person has been taking medication occasionally for years for complaints. The application question asks which medication was taken regularly in recent years. They look up the prescriptions, check whether their use falls under it, and give the answer completely.",
    },
    {
      t: "p",
      text: "This article does not replace legal advice. How your specific information has an effect depends on the individual case and the contract terms.",
    },
  ],
  sourceLabels: [
    "Gesetze im Internet: § 19 VVG, duty of disclosure",
    "Gesetze im Internet: § 21 VVG, exercise of the insurer's rights",
    "Verbraucherzentrale: occupational disability, how to protect yourself against loss of income",
  ],
};

export const buVertragsbedingungenEn: ArticleTranslation = {
  slug: "bu-vertragsbedingungen",
  topic: "Occupational disability",
  title: "BU contract terms: important concepts clearly explained",
  seo: {
    title: "BU policy terms and conditions: key concepts explained | TONN",
    description:
      "Occupational disability, abstract referral, option to increase coverage, dynamic increase: the most important concepts in the terms of an occupational disability insurance, clearly explained.",
  },
  answer:
    "What matters is when the insurer pays and what it may refer you to. Under § 172 VVG, a person is occupationally disabled if they are likely to be permanently unable to practise their most recently practised profession. Whether the insurer may refer you to other activities depends on the agreed terms. The terms differ depending on the insurer.",
  blocks: [
    { t: "h2", text: "Occupational disability" },
    {
      t: "p",
      text: "The law defines occupational disability (Berufsunfähigkeit) in § 172 para. 2 VVG: a person is occupationally disabled if, as a result of illness, bodily injury or a loss of strength beyond what is normal for their age, they are likely to be permanently unable, wholly or partly, to practise their profession. What counts is the most recently practised profession, as it was shaped without health impairment. What your contract provides in detail is set out in the terms.",
    },
    { t: "h2", text: "Abstract referral" },
    {
      t: "p",
      text: "Under § 172 para. 3 VVG, insurer and policyholder can agree that benefits are only paid if the insured person also cannot pursue any other reasonable activity that corresponds to their education, experience and position in life. This is called abstract referral (abstrakte Verweisung). The Verbraucherzentrale describes waiving it as an essential condition: the insurer then does not check whether, with your knowledge, you could still pursue another activity.",
    },
    { t: "h2", text: "Benefit amount and term" },
    {
      t: "p",
      text: "The insured monthly benefit and the contract duration determine how far you are protected in an emergency. As a guideline, around 80 percent of net income applies, and the term should ideally extend until you reach retirement age. More on this in the article on planning the monthly occupational disability benefit.",
    },
    { t: "h2", text: "Option to increase coverage without a new health assessment (Nachversicherungsgarantie)" },
    {
      t: "p",
      text: "It makes it possible, provided the contract conditions are met, to increase the benefit on certain events such as marriage, the birth of a child or career advancement without a new health assessment. Pay attention to which events count, up to what age and to what extent the increase is possible.",
    },
    { t: "h2", text: "Dynamic increase (Dynamik)" },
    {
      t: "p",
      text: "A dynamic increase raises contribution and benefit regularly. It is meant to absorb income increases and inflation so that the purchasing power of the benefit is maintained. Check whether the increase also continues in the event of a claim.",
    },
    { t: "h2", text: "Health questions and duty of disclosure" },
    {
      t: "p",
      text: "Wrong or incomplete information in the health questions can allow withdrawal, termination or adjustment of the contract (§ 19 VVG). More on this in the article on health questions.",
    },
    { t: "h2", text: "What to look out for when comparing" },
    {
      t: "ul",
      items: [
        "Does abstract referral apply, or has it been waived?",
        "Does the term extend until retirement?",
        "Is there a dynamic increase and an option to increase coverage without a new health assessment, and on what conditions?",
        "Are the conditions for a claim described in an understandable way?",
      ],
    },
    {
      t: "example",
      text: "A person works in an office and, after an illness, can no longer practise their profession but would in principle be suited to another activity. Whether the insurer pays depends on whether it may refer them to that other activity. This is regulated by the referral clause in the contract.",
    },
    {
      t: "p",
      text: "The terms of individual insurers cannot be transferred to the whole market. Have the specific terms checked before you take out a policy.",
    },
  ],
  sourceLabels: [
    "Gesetze im Internet: § 172 VVG, benefit paid by the insurer",
    "Gesetze im Internet: § 19 VVG, duty of disclosure",
    "Verbraucherzentrale: occupational disability, how to protect yourself against loss of income",
  ],
};

export const ursachenFolgenEn: ArticleTranslation = {
  slug: "berufsunfaehigkeit-ursachen-folgen",
  topic: "Occupational disability",
  title: "Occupational disability: causes and financial consequences",
  seo: {
    title: "Occupational disability: causes and financial consequences | TONN",
    description:
      "Which causes can lead to occupational disability, why office jobs are also affected and what a loss of income means financially.",
  },
  answer:
    "Occupational disability can affect people in very different professions. What matters is whether health limitations impair the specific professional activity. Besides physical illnesses and the consequences of accidents, mental illnesses can also play a role. If income is lost for a longer period, many financial obligations continue.",
  blocks: [
    { t: "h2", text: "Why an office job can also be affected" },
    {
      t: "p",
      text: "If you work mainly at a desk, you may at first associate occupational disability with physically demanding activities. But an office job also requires resilience, concentration and the ability to make decisions.",
    },
    {
      t: "p",
      text: "An illness can mean that exactly these requirements can no longer be met. What matters is therefore not only the job title but the actual working day: which tasks do you take on? What responsibility do you carry? And which abilities do you regularly need for it?",
    },
    { t: "h2", text: "Which causes come into question" },
    {
      t: "p",
      text: "Mental illnesses, illnesses of the musculoskeletal system, cancer and cardiovascular diseases can impair professional performance. The consequences of an accident also come into question as a cause.",
    },
    {
      t: "p",
      text: "A diagnosis alone, however, does not automatically mean occupational disability. What counts is how severely and for how long the illness restricts the specific activity and which conditions the insurance contract sets.",
    },
    { t: "h2", text: "Three examples from working life" },
    {
      t: "p",
      text: "The following situations are simplified examples. They do not constitute a commitment to an insurance benefit.",
    },
    { t: "h3", text: "Office and project work" },
    {
      t: "p",
      text: "A project manager has to coordinate deadlines, process complex information and make decisions. A severe mental illness can make these tasks considerably harder over a longer period, even though the work is physically undemanding.",
    },
    { t: "h3", text: "Trades and physical work" },
    {
      t: "p",
      text: "A craftsman depends on mobility and physical resilience. Lasting limitations in the back, shoulder or knee can make essential activities impossible.",
    },
    { t: "h3", text: "Self-employment" },
    {
      t: "p",
      text: "A self-employed woman personally handles advice, organisation and customer care. If she can no longer cope with these tasks for health reasons, then besides her personal income the financial situation of her business can also come under pressure. Private income protection and business protection should therefore be looked at separately.",
    },
    { t: "h2", text: "What a loss of income means financially" },
    {
      t: "p",
      text: "Rent, loan instalments, household costs and family obligations do not disappear automatically when income stops. Your own retirement provision must also be taken into account in the planning.",
    },
    {
      t: "p",
      text: "Reserves can bridge a period. How long they last depends on the funds available and the running expenses.",
    },
    {
      t: "p",
      text: "A simple calculation example: with €2,000 of uncovered expenses per month, €24,000 of freely available reserves last, arithmetically, for twelve months. Additional expenses or unexpected costs shorten this period.",
    },
    {
      t: "p",
      text: "The personal question is therefore: how long could you meet your running obligations without your previous income?",
    },
    { t: "link", text: "Planning the monthly occupational disability benefit: determining need and term", href: "/wissen/bu-rente-planen" },
    { t: "h2", text: "When a private BU insurance can pay" },
    {
      t: "p",
      text: "Many contracts provide a benefit if the insured person is likely to be unable, for at least six months, to practise their profession as practised when in good health to an extent of at least 50 percent. What always matters are the agreed terms, possible exclusions and the examination of the individual case.",
    },
    {
      t: "p",
      text: "A sick note alone is therefore not an automatic commitment to a benefit from BU insurance.",
    },
    { t: "h2", text: "What to check for your own protection" },
    {
      t: "p",
      text: "Start with your working day and your financial obligations. How much income do you need each month? Which reserves and existing protection are available? Until what age should the protection extend?",
    },
    {
      t: "p",
      text: "Then check the contract terms and prepare the health questions carefully. Answer the specific questions asked completely and truthfully within the periods asked about.",
    },
    {
      t: "p",
      text: "If you have pre-existing conditions, an anonymous preliminary risk assessment can help clarify the assessment of different insurers before an application. A particular result cannot be guaranteed.",
    },
  ],
  sourceLabels: [
    "Verbraucherzentrale: occupational disability – how to protect yourself against loss of income",
    "Alte Leipziger: occupational disability insurance and previous mental health conditions",
  ],
  cta: {
    title: "How well is your income protected?",
    text: "Together we look at your profession, your running obligations and your existing protection. This makes it possible to clarify which cover fits your personal situation.",
    label: "Arrange a free initial consultation",
  },
};
