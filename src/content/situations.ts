/**
 * Situation data — each entry must be 100% unique content per
 * strategy/PROGRAMMATIC-SEO.md §3. PA-specific legal references required.
 */

export interface SituationData {
  slug: string;
  name: string;
  headline: string;
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  empathyIntro: string[];
  threeOptions: {
    listWithAgent: { title: string; body: string };
    fsbo: { title: string; body: string };
    sellToCovenant: { title: string; body: string };
  };
  whenWeFit: string[];
  phillySpecifics: {
    heading: string;
    body: string[];
    checklist?: string[];
  };
  faqs: { question: string; answer: string }[];
  relatedNeighborhoods: string[];
  relatedSituations: string[];
}

export const SITUATIONS: SituationData[] = [
  {
    slug: "inherited-house",
    name: "Inherited House",
    headline: "Selling an Inherited House in Philadelphia",
    blurb: "You inherited a rowhome. We'll walk you through the real options.",
    metaTitle: "Selling an Inherited House in Philadelphia — Honest Options",
    metaDescription: "Inherited a Philly house? Here are your real options: list, FSBO, or sell for cash. What each means, what it pays, and when to pick which.",
    h1: "Selling an inherited house in Philadelphia.",
    lede: "You inherited a house. Maybe your parents' rowhome, maybe an aunt's twin. Now you have keys, a tax bill, and decisions to make. Here are your real options — honestly described.",
    empathyIntro: [
      "Inheriting a house in Philly is rarely simple. Grief is still there. Family members disagree. The house might be empty, might have stuff in it going back 40 years, might need work you never noticed when you were visiting.",
      "And the clock starts ticking. Property taxes keep coming. Water bills don't stop. Insurance has to stay paid. If the house is vacant, insurers often charge more — or cancel the policy after 60 days. So a decision has to get made. Here's how to think about it.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "List with a real estate agent",
        body: "If the house is in decent shape and you can wait 3-6 months, this nets the most money. You'll pay about 6% in commissions and probably need to clean it out, maybe paint or make small repairs. An agent will manage showings and negotiate. Pick this if the house is presentable, you can carry the costs for a few months, and you want maximum dollar.",
      },
      fsbo: {
        title: "Sell it yourself (FSBO)",
        body: "You list it online (Zillow, FSBO.com), show it yourself, negotiate yourself, and pay for your own title/legal work. You save the agent commission but take on all the work. Pick this if you have time, patience, and some real estate knowledge. Most inherited-house sellers don't have the bandwidth for it.",
      },
      sellToCovenant: {
        title: "Sell to a cash buyer (us or another)",
        body: "You get a written cash offer, you don't fix anything, you don't clean anything out, you close in 30-60 days. The offer is below retail — usually 25% to 55% of what the house would sell for fixed up. Pick this if the house needs work, you're out of state, the family wants it done fast, or you just want the keys out of your life.",
      },
    },
    whenWeFit: [
      "The house needs significant work and you don't want to manage contractors.",
      "You're out of state or don't live near the house.",
      "The family wants a clean, fast decision without months of showings.",
      "The house is vacant and you're worried about break-ins, pipes freezing, or insurance lapsing.",
      "There are multiple heirs and you want to distribute cash rather than manage a property together.",
    ],
    phillySpecifics: {
      heading: "Pennsylvania inheritance specifics",
      body: [
        "In Pennsylvania, you can't sell an inherited house until probate assigns someone the legal authority to sign. That person is called an 'executor' (if there was a will) or an 'administrator' (if there wasn't).",
        "The Philadelphia Register of Wills (Room 185, City Hall) issues Letters Testamentary or Letters of Administration. Once you have those Letters, you can sign to sell. It typically takes 4-8 weeks to get them after submitting the paperwork. A probate lawyer can speed things up if the estate is complicated.",
        "Pennsylvania also has an inheritance tax (not a federal estate tax — a state tax). For children inheriting from a parent, the rate is 4.5% of the estate value. The estate usually owes this within 9 months. Your probate lawyer will walk you through it.",
      ],
      checklist: [
        "Copy of the death certificate",
        "Letters Testamentary or Letters of Administration from Register of Wills",
        "Deed to the property (we can pull this for you)",
        "Most recent property tax bill",
        "Any existing mortgage statements",
        "Photo ID for the signing executor/administrator",
      ],
    },
    faqs: [
      {
        question: "Can I sell the house before probate is finished?",
        answer: "You can sign a contract and start the process, but you can't actually close until the Register of Wills has issued Letters and the sale is approved. A good probate lawyer can get this done in 6-10 weeks.",
      },
      {
        question: "What if there are multiple heirs who disagree about selling?",
        answer: "Every heir with an ownership share has to sign. If one heir refuses, you can sometimes buy out their share, or you may need to file a partition action in court. It's harder, but it's not unusual.",
      },
      {
        question: "Do I have to empty the house before selling to you?",
        answer: "No. Leave anything you don't want. We'll handle the cleanout after closing. Take what matters to you and leave the rest.",
      },
    ],
    relatedNeighborhoods: ["west-philadelphia", "frankford", "south-philadelphia", "germantown"],
    relatedSituations: ["probate-house", "vacant-house"],
  },
  {
    slug: "probate-house",
    name: "Probate House",
    headline: "Selling a House in Probate in Philadelphia",
    blurb: "We work with your probate attorney. We close when the court allows.",
    metaTitle: "Selling a House in Probate in Philadelphia — Cash Buyer",
    metaDescription: "Selling a house in Philly probate? We handle 14+ probate deals. Work with your lawyer, wait for court approval, close fast when the estate is ready.",
    h1: "Selling a house in probate.",
    lede: "Probate slows everything down. But it doesn't stop the bills, the insurance requirements, or the family pressure. If you're an executor or administrator trying to sell a Philly house through probate, here's what you need to know.",
    empathyIntro: [
      "Probate is one of the hardest times to be responsible for a house. You're grieving. You're coordinating with family members who have opinions. You're following a process you've never been through before. And you're trying to do right by whoever left the house behind.",
      "We've closed 14 probate deals in Philly since 2021. We know the process, we know the Register of Wills, and we know how to wait patiently for paperwork while not letting the deal stall out.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "List with an agent, once you have Letters",
        body: "Once you have Letters Testamentary or Letters of Administration, you can list. Agents don't handle the probate work — that's your lawyer. But they'll list the property, manage showings, and negotiate. Timeline from Letters to close: usually 3-5 months with an agent listing. Good choice if the house is presentable and you're not in a hurry.",
      },
      fsbo: {
        title: "Sell it yourself",
        body: "Same logistics as non-probate FSBO, plus you're coordinating around probate court schedules. Hard for most first-time executors to handle.",
      },
      sellToCovenant: {
        title: "Sell to us",
        body: "We sign the contract as soon as you're ready, work with your probate attorney on timing, and close when the court and title company say we can. We buy as-is, so the house can stay however it is through the probate process. No cleanup, no showings, no inspections for us.",
      },
    },
    whenWeFit: [
      "The executor is out of state and can't manage a listing.",
      "The estate has bills piling up (property taxes, water, insurance) and needs cash flow.",
      "The house needs work and you don't want to coordinate repairs during probate.",
      "Multiple beneficiaries want a clean, fast distribution of cash.",
      "You want to wait for court clearance but still have a deal lined up.",
    ],
    phillySpecifics: {
      heading: "Philadelphia probate process",
      body: [
        "Philadelphia probate goes through the Register of Wills at City Hall, Room 185. The process starts by filing a petition, submitting the will (if there is one), and paying filing fees. Fees depend on estate value.",
        "Letters Testamentary (with a will) or Letters of Administration (without a will) typically issue within 2-6 weeks after filing. Once you have Letters, you're legally authorized to act on behalf of the estate, including selling real estate.",
        "If the estate is small (under $50,000), Pennsylvania allows a simplified process. If the estate is complex (multiple heirs disputing, assets in multiple states, significant debts), it can take 6-12 months. A Philly probate lawyer is worth every dollar for anything beyond a simple single-heir estate.",
      ],
      checklist: [
        "Death certificate (multiple copies — you'll need them)",
        "Original will, if there is one",
        "List of heirs with contact info",
        "Estate's estimated asset value",
        "Filing fee for the Register of Wills",
        "Short Certificate (issued after Letters — proves your authority)",
      ],
    },
    faqs: [
      {
        question: "Can I accept an offer before Letters are issued?",
        answer: "You can sign a contract contingent on receiving Letters, but you can't close until you have them. We're happy to sign early and wait.",
      },
      {
        question: "Do you work with probate attorneys?",
        answer: "Yes. We send everything through your attorney — contract, title work, closing docs. You don't have to coordinate between us and them.",
      },
      {
        question: "What's a Short Certificate and why do I need one?",
        answer: "A Short Certificate is a document from the Register of Wills that proves you're the authorized executor or administrator. Act Land Services needs a current Short Certificate (usually issued within 60 days of closing) to close the deal.",
      },
    ],
    relatedNeighborhoods: ["west-philadelphia", "south-philadelphia", "germantown", "frankford"],
    relatedSituations: ["inherited-house", "vacant-house"],
  },
  {
    slug: "divorce-house",
    name: "Divorce House",
    headline: "Selling a House During Divorce in Philadelphia",
    blurb: "One clean cash close. Both parties sign. No open houses.",
    metaTitle: "Selling Your Philly House During Divorce — Cash Offer",
    metaDescription: "Divorcing in Philly and need to sell the house? We work with both parties, close fast, keep it clean. No open houses, no months of negotiation.",
    h1: "Selling a house during divorce.",
    lede: "Divorce is hard enough without a 4-month real estate listing dragging through it. When both parties just want the house done, cash, and split, we make it straightforward. One contract, both signatures, clean close.",
    empathyIntro: [
      "Couples going through divorce often don't want to spend 4-6 months running a traditional listing. They want the house gone, the equity split, and both parties moving forward.",
      "We've done this kind of deal before. We know to send things to both spouses, both lawyers, and both at the closing table. No drama, no favoritism, just a clean transaction.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "List with an agent",
        body: "Nets more money but takes 3-5 months and requires both parties to cooperate through showings, negotiations, and closing. Works if you're on decent terms and not in a rush. Doesn't work if the divorce is contentious or timing is tight.",
      },
      fsbo: {
        title: "Sell it yourself",
        body: "Rarely a good idea during divorce. Requires both spouses to jointly manage a sale, which is often the opposite of what either wants.",
      },
      sellToCovenant: {
        title: "Sell to us",
        body: "Both spouses sign the same contract. We close in 30-60 days. At closing, the proceeds get split however your divorce agreement specifies. We don't care about the split — we care about making sure both parties are okay with the number and ready to close. Works even if the spouses aren't speaking to each other.",
      },
    },
    whenWeFit: [
      "Both spouses agree on selling but want it done fast.",
      "The house needs work neither party wants to pay for during the divorce.",
      "The divorce timeline is pushing a specific sale date.",
      "One spouse has moved out and the house is sitting empty or under-maintained.",
      "The financial pressure of divorce requires cash now, not in 6 months.",
    ],
    phillySpecifics: {
      heading: "Pennsylvania marital property basics",
      body: [
        "Pennsylvania is an 'equitable distribution' state (not community property). That means the court divides marital property fairly, not necessarily 50/50. Fair can mean 60/40 or 55/45 depending on circumstances.",
        "The house is usually marital property if it was bought during the marriage. Even if only one spouse is on the deed, the house might be marital property for purposes of divorce. Your divorce attorney will advise you on the specific split.",
        "For the sale itself, both spouses typically need to sign the deed at closing, whether or not both are on the original title. Title company (Act Land Services) will confirm signing requirements when they pull title.",
      ],
      checklist: [
        "Divorce case number (if case is active)",
        "Marital settlement agreement, if one exists",
        "Current deed to the property",
        "Most recent mortgage statement",
        "Agreement on how to split proceeds",
        "Each spouse's current mailing address and contact info",
      ],
    },
    faqs: [
      {
        question: "What if one spouse won't cooperate?",
        answer: "Both spouses have to agree to sell. If one won't sign, the sale can't happen without a court order. That's a conversation for divorce attorneys, not us.",
      },
      {
        question: "Can we close before the divorce is finalized?",
        answer: "Often yes, with both spouses' consent and your attorneys' approval. Proceeds can be held in escrow by an attorney or title company until the divorce agreement specifies the split.",
      },
      {
        question: "Do you coordinate with divorce attorneys?",
        answer: "Yes. We send contracts, offers, and closing docs to both attorneys if that's what the parties prefer. Everything stays clean and documented.",
      },
    ],
    relatedNeighborhoods: ["center-city", "south-philadelphia", "fishtown", "northeast-philadelphia"],
    relatedSituations: ["inherited-house", "tired-landlord"],
  },
  {
    slug: "foreclosure",
    name: "Foreclosure",
    headline: "Selling a Philly House to Avoid Foreclosure",
    blurb: "If there's time, we'll tell you. If there isn't, we'll point you to help.",
    metaTitle: "Selling Your Philly House Before Foreclosure — Options",
    metaDescription: "Facing foreclosure in Philly? Here's how cash sales work, whether we can help, and what to do if we can't. Honest guidance on timing and options.",
    h1: "Selling before foreclosure in Philadelphia.",
    lede: "If you're behind on the mortgage and worried about losing the house, you have options. A cash sale is sometimes one of them. Sometimes it isn't. Here's the honest breakdown.",
    empathyIntro: [
      "Foreclosure is scary and stressful and lonely. You get certified letters, sheriff-sale notices, and calls from lawyers. You might feel like you don't have control. You do — but the clock matters, and the options narrow the closer you get to the sheriff sale date.",
      "We'll tell you straight whether we can help. If we can, we'll move fast. If we can't, we'll tell you who to call — including free housing counselors who work on this every day.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "List with an agent",
        body: "Usually takes too long during active foreclosure — typical listings run 3-5 months, and sheriff sale dates don't wait. Works only if you have 6+ months before the sheriff sale date and your house is in decent shape.",
      },
      fsbo: {
        title: "Loan modification with the lender",
        body: "If you want to keep the house, call your lender first. Most big Philly-area lenders will negotiate loan modifications, forbearance, or repayment plans. It's not always successful, but it's free to try. Start with Save Your Home Philly: 215-334-HOME.",
      },
      sellToCovenant: {
        title: "Sell to us for cash",
        body: "Works if you have at least 6-8 weeks before the sheriff sale date and if our offer is enough to pay off your mortgage and liens. We can close fast — as fast as 14 days in a real emergency. But if you're 2 weeks from sheriff sale and the payoff is higher than our offer, we can't help, and we'll tell you.",
      },
    },
    whenWeFit: [
      "You're 6-12+ weeks away from sheriff sale.",
      "The house has equity — our offer covers the mortgage payoff plus liens.",
      "You want to sell rather than fight to keep the house.",
      "You need speed and can't wait for a traditional listing.",
    ],
    phillySpecifics: {
      heading: "Philadelphia sheriff sale process",
      body: [
        "Philadelphia sheriff sales happen monthly. Once the mortgage holder files for foreclosure, it typically takes 6-12 months to get to a sheriff sale. You'll get written notice before the sale date — by law, the lender has to give you specific notices.",
        "Before sheriff sale, you can still sell the house yourself as long as the proceeds cover the mortgage payoff, any liens (taxes, water, L&I), and closing costs. This is called a 'workout' and it's normal.",
        "If the payoff exceeds your house's value, you're underwater. A regular sale can't happen — you'd need to negotiate a short sale with your lender. Short sales are harder and slower than we can typically help with.",
        "Philadelphia has a free housing counseling program: Save Your Home Philly Hotline, 215-334-HOME. They help homeowners facing foreclosure, for free. Call them first.",
      ],
    },
    faqs: [
      {
        question: "How fast can you close if I'm facing sheriff sale in 30 days?",
        answer: "We've closed in 14 days when needed. It depends on title, the payoff, and how quickly your lender responds to a payoff request. Call us immediately so we can run the numbers.",
      },
      {
        question: "What if I'm underwater — mortgage higher than house value?",
        answer: "Then a cash sale to us probably won't work. You'd need a short sale, which requires lender approval. We can refer you to someone who handles short sales.",
      },
      {
        question: "Can you negotiate with my lender?",
        answer: "Not really. The homeowner (or their attorney) negotiates with the lender. We can only buy the house for the amount we offer. If your lender needs to forgive debt, that's between you and them.",
      },
    ],
    relatedNeighborhoods: ["north-philadelphia", "west-philadelphia", "kensington"],
    relatedSituations: ["tax-delinquent", "vacant-house"],
  },
  {
    slug: "tired-landlord",
    name: "Tired Landlord",
    headline: "Tired of Being a Philly Landlord?",
    blurb: "Tenants in place? We'll buy it as-is, with the lease attached.",
    metaTitle: "Selling Rental Property in Philadelphia — Tired Landlord Cash Offer",
    metaDescription: "Done being a Philly landlord? We buy rental properties with tenants in place, as-is. Fair cash offer in 24 hours. No evictions, no vacancy needed.",
    h1: "Selling rental property as a tired landlord.",
    lede: "You bought a Philly rowhome as a rental 10 years ago because it looked like easy income. It wasn't. The tenants turn over, L&I keeps sending notices, and the repair bills keep coming. You're ready to be done. Here's how we can help.",
    empathyIntro: [
      "Every tired landlord we've bought from has the same story with different details. The calls at 2am about the water heater. The eviction that took 5 months. The $8,000 HVAC replacement. The L&I violation you didn't know existed until the letter came. The 40% of the market rate you're actually clearing after expenses.",
      "You don't have to keep doing this. You can sell the property, with the tenants still in place, and move on. We buy tenanted Philly rentals regularly — 21 of our 55+ closed deals have been tired-landlord sales.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "List with an agent (tenants stay or leave)",
        body: "Some agents will list tenanted properties, but most prefer vacant. Showings with tenants in place are hard — you need tenant cooperation, which tenants rarely give. You usually end up either waiting until the lease ends (months) or paying cash-for-keys to get them out. Works, but slow.",
      },
      fsbo: {
        title: "Sell to another investor",
        body: "Other small landlords sometimes buy tenanted rentals directly. You'd find them through Philly REIA, BiggerPockets, or direct networking. Saves the agent commission but takes effort and usually gets you a similar price to selling to us.",
      },
      sellToCovenant: {
        title: "Sell to us",
        body: "We buy with tenants in place, subject to the existing lease. No showings. No tenant displacement. No cash-for-keys. We take over landlord duties at closing. Fair cash price based on the rental math — rent, repair condition, and the tenant situation.",
      },
    },
    whenWeFit: [
      "You have 1-5 Philly rentals and you're done with the lifestyle.",
      "Your tenants are still there and you don't want to evict them.",
      "The property has deferred maintenance you can't afford to tackle.",
      "You have open L&I violations or code issues.",
      "You want to simplify and cash out your equity.",
    ],
    phillySpecifics: {
      heading: "Philadelphia landlord-specific realities",
      body: [
        "Philadelphia has one of the stronger tenant-protection frameworks in Pennsylvania. Evictions take time (often 4-8 months through the courts) and are expensive. Good Cause Eviction Law has been debated for years.",
        "L&I (Licenses & Inspections) can be aggressive about enforcement, especially on older rental rowhomes. Violations for peeling paint, missing smoke detectors, or open code issues are common and can accumulate fast.",
        "Rental licenses are required for nearly all Philly rentals. If your rental isn't licensed, you might owe back fees at closing. We factor that into the offer.",
      ],
    },
    faqs: [
      {
        question: "What about the security deposit I'm holding?",
        answer: "At closing, we take over the security deposit. You give it to us (or it's credited on the settlement sheet) and we become responsible for returning it to the tenant when they eventually move out.",
      },
      {
        question: "What if the tenant is behind on rent?",
        answer: "We'll still buy. We factor the back rent into our underwriting. After closing, we handle the collection or eviction ourselves.",
      },
      {
        question: "Can you buy multiple rentals at once?",
        answer: "Yes. We've closed 3-4 rentals from the same landlord on the same day. Send us the addresses and we'll make offers on each.",
      },
    ],
    relatedNeighborhoods: ["north-philadelphia", "olney", "kensington", "west-philadelphia"],
    relatedSituations: ["code-violations", "vacant-house"],
  },
  {
    slug: "code-violations",
    name: "Code Violations",
    headline: "Selling a Philly House with Code Violations",
    blurb: "L&I notices don't scare us. We've closed on houses with 20+ violations.",
    metaTitle: "Selling a Philly House with L&I Code Violations — We Buy As-Is",
    metaDescription: "Open L&I violations on your Philly house? We buy as-is, with violations in place. Fair cash offer, no repairs, no clearing needed on your end.",
    h1: "Selling a house with code violations.",
    lede: "Philadelphia L&I (Licenses & Inspections) can put a lot of pressure on homeowners with open violations. If you have a stack of notices and no way to clear them, we can still buy the house. We'll take the violations with the property.",
    empathyIntro: [
      "L&I violations have a way of stacking up. One missed inspection leads to a citation, which leads to a hearing, which leads to a judgment. Before you know it, you have six violations and don't know how to start clearing them.",
      "If it's gotten to the point where you'd rather sell than fix, we understand. We've closed houses with 20+ open violations. You don't have to clear any of them before selling to us.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "Clear violations, then list",
        body: "Some violations have to be cleared before a traditional listing can close. Buyers' lenders often require clean L&I certifications. If you can afford the repair work and want to maximize price, this is the path. Usually takes 2-4 months of contractor work plus the listing time.",
      },
      fsbo: {
        title: "Sell to a cash investor",
        body: "Most cash investors will buy with violations in place. You save the cost of clearing. Find investors through Philly REIA, BiggerPockets, or direct contact (us or others).",
      },
      sellToCovenant: {
        title: "Sell to us — violations stay with the house",
        body: "We buy with open violations. After closing, we become responsible for clearing them. You walk away clean. This is the fastest path when the violations are too expensive or complicated for you to clear yourself.",
      },
    },
    whenWeFit: [
      "You have 3+ open L&I violations you can't afford to clear.",
      "The violations are serious (structural, zoning, demolition orders).",
      "You've received a writ or citation with penalties accumulating.",
      "The house has been through L&I hearings you couldn't attend.",
      "You inherited a house with pre-existing violations.",
    ],
    phillySpecifics: {
      heading: "Philadelphia L&I violations explained",
      body: [
        "L&I issues violations for a wide range of issues: structural problems, unpermitted work, zoning issues, missing smoke detectors, peeling paint, fire code violations, and more. Minor violations get a notice. Serious ones get hearings and penalties.",
        "Common Philly violation types include: 'maintain exterior property surfaces,' 'install operational smoke detectors,' 'provide adequate handrails,' 'correct unsafe electrical,' 'repair/remove/replace deteriorated roof,' and 'obtain required permits for prior work.'",
        "Violations don't automatically clear when a house is sold — they follow the property. When we buy, the violations become ours. We work with L&I to schedule re-inspections and clear them after we've done the repair work.",
        "Check the status of violations on a specific Philly property at eclipse.phila.gov (the city's public records site). Type in the address and you can see every open violation.",
      ],
    },
    faqs: [
      {
        question: "I have a demolition order on my house. Can you still buy it?",
        answer: "Sometimes yes. Depends on the demolition order specifics. Send us the address and we'll check. If demolition is imminent, time is the issue.",
      },
      {
        question: "What if L&I is fining me monthly?",
        answer: "Ongoing fines get factored into the offer. We can't make them disappear, but we can buy the house, take over responsibility, and stop the fine accumulation in your name.",
      },
      {
        question: "Will I still owe the fines after you buy the house?",
        answer: "Fines accrued before closing belong to the person who owned the house when they accrued. We can negotiate to pay old fines out of closing proceeds so you walk away completely clear.",
      },
    ],
    relatedNeighborhoods: ["kensington", "north-philadelphia", "west-philadelphia"],
    relatedSituations: ["vacant-house", "tax-delinquent", "tired-landlord"],
  },
  {
    slug: "tax-delinquent",
    name: "Tax Delinquent",
    headline: "Behind on Philly Property Taxes?",
    blurb: "Sheriff sale on the calendar? There may still be a path.",
    metaTitle: "Behind on Philly Property Taxes — Sell for Cash Before Sheriff Sale",
    metaDescription: "Behind on Philadelphia property taxes? We buy houses with back taxes all the time. Fair cash offer, back taxes paid at closing, no sheriff sale.",
    h1: "Selling a Philly house with back property taxes.",
    lede: "If you're behind on Philadelphia property taxes, the city can take your house. That's the hard truth. But it takes time, and you have options along the way. Here's what those options look like.",
    empathyIntro: [
      "Property taxes in Philly pile up fast. A $2,000 annual bill that goes unpaid can balloon to $8,000-$15,000 with penalties, interest, and city collection fees over just a few years. The paperwork gets scary — water bills, tax bills, legal notices.",
      "We buy houses with back taxes regularly. You don't have to clear the taxes before selling to us. The unpaid amount gets paid out of the sale price at closing.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "Payment plan with the Philly Tax Center",
        body: "If you want to keep the house, call the Philly Tax Center first. They offer payment plans that can prevent sheriff sale. Works if you have some income to make monthly payments and you can commit to consistency.",
      },
      fsbo: {
        title: "List with an agent (tax-delinquent but pre-sheriff)",
        body: "You can sell a tax-delinquent property on the open market as long as sheriff sale hasn't happened yet. Back taxes get paid at closing from the sale price. This nets the most money if you have time (3-6 months before sheriff sale).",
      },
      sellToCovenant: {
        title: "Sell to us for cash",
        body: "Faster than a listing. We buy with back taxes owed, and we pay those taxes at closing out of the sale price. Works when you're 2-6 months from sheriff sale and can't wait for a traditional listing. Works when the tax bill has grown too large to pay but there's still equity in the house.",
      },
    },
    whenWeFit: [
      "You owe 3+ years of back property taxes.",
      "You're worried about sheriff sale but it hasn't happened yet.",
      "You can't afford a payment plan.",
      "The house has equity — sale price covers back taxes plus you walk with cash.",
      "You want to sell before the tax bill grows further.",
    ],
    phillySpecifics: {
      heading: "Philadelphia property tax delinquency",
      body: [
        "Philly property taxes are assessed annually and due March 31. If you don't pay by December 31, the Department of Revenue adds penalties (up to 15%) and interest. Unpaid taxes become a lien on the property.",
        "If taxes stay unpaid for 2+ years, the city can list the property for sheriff sale. Properties are sold at auction to the highest bidder (minimum bid usually covers back taxes and fees). If the auction goes through, you lose the house and any equity in it.",
        "You can check your tax status online at tax-services.phila.gov. Payment plans are available through the Revenue Department at 215-686-6442.",
        "Water bills and L&I fines are separate from taxes but can also become liens and affect closing. Ask for payoffs from all three at 215-686-6995 (water), 215-686-6442 (revenue), and 215-686-8686 (L&I).",
      ],
    },
    faqs: [
      {
        question: "What if my back taxes are more than the house is worth?",
        answer: "Then a cash sale probably isn't enough — the back taxes would exceed the sale proceeds. In that case, negotiating with the city or exploring other options is necessary.",
      },
      {
        question: "Can I still sell if there's a sheriff sale scheduled?",
        answer: "Yes, up until the sheriff sale date. Sale has to close before the auction. That's tight timing — call us immediately if this is you.",
      },
      {
        question: "Do you pay the back taxes directly or does it come out of my money?",
        answer: "Back taxes are paid at closing out of the sale price. So if we offer $100,000 and you owe $12,000 in back taxes, $12,000 goes to the city and $88,000 (minus any other closing costs and liens) goes to you.",
      },
    ],
    relatedNeighborhoods: ["north-philadelphia", "kensington", "west-philadelphia"],
    relatedSituations: ["foreclosure", "code-violations", "vacant-house"],
  },
  {
    slug: "vacant-house",
    name: "Vacant House",
    headline: "Selling a Vacant Philly House",
    blurb: "Empty, boarded, or squatter-risk? We buy it before it gets worse.",
    metaTitle: "Selling a Vacant Philly House — Cash Buyer, Any Condition",
    metaDescription: "Have a vacant Philly house costing you money? We buy vacant houses — squatters, boarded, deteriorating. Fair cash offer in 24 hours.",
    h1: "Selling a vacant house.",
    lede: "Vacant houses are expensive. Insurance rates go up (if coverage is available at all). Vandals and squatters notice empty houses. Pipes freeze, roofs leak, and the longer it sits, the worse it gets. If you have a vacant Philly rowhome, we'll buy it as-is.",
    empathyIntro: [
      "Vacant houses have a way of getting worse fast. Every month they sit empty, something happens. A broken window. A squatter. A burst pipe in winter. L&I files a complaint. The insurance company drops coverage. Property taxes keep coming.",
      "If you have a vacant house you haven't been able to deal with, we get it. We buy vacant houses regularly. You don't have to fix anything, clean anything, or even visit.",
    ],
    threeOptions: {
      listWithAgent: {
        title: "Clean it out, list with an agent",
        body: "Works if the house is in reasonably decent shape. You'd need to remove any belongings, possibly paint or do minor repairs, and sit through showings. Takes 3-5 months. Nets the most money if the house is sound.",
      },
      fsbo: {
        title: "Rent it out",
        body: "If the house is livable, you could rent it and keep the asset. But you'd need to fix it up enough to be rentable and take on landlord responsibilities (see our Tired Landlord page). Not the right call if you're vacating the house because you don't want to manage real estate.",
      },
      sellToCovenant: {
        title: "Sell to us",
        body: "We buy vacant houses in any condition. Boarded up, squatter-occupied, roof collapsed, basement flooded — we buy it. No cleanout required. No inspections. You take what you want and leave the rest. We close in 30-60 days and handle everything on the house after.",
      },
    },
    whenWeFit: [
      "The house has been vacant for 6+ months.",
      "You don't live nearby and can't manage the property.",
      "The house has structural or serious maintenance issues.",
      "There's a squatter, or a risk of squatters.",
      "Insurance is lapsing or has been canceled.",
    ],
    phillySpecifics: {
      heading: "Vacant property risks in Philadelphia",
      body: [
        "Philadelphia has an estimated 26,000+ vacant properties, and the city is aggressive about enforcement. L&I can issue vacant-property violations, citations, and even demolition orders for abandoned or deteriorating houses.",
        "Squatters are a real risk in Philly vacant houses, particularly in North and West Philadelphia. Removing squatters requires legal process — you can't just change the locks. Having legal occupancy takes 2-4 months minimum through Philadelphia Municipal Court.",
        "Vacant-home insurance is expensive and limited. Most standard homeowners policies cancel after 30-60 days of vacancy. Specialty vacant-property coverage exists but costs 3-5x normal rates.",
      ],
    },
    faqs: [
      {
        question: "What if there are squatters in the house?",
        answer: "We still buy. We handle squatter removal through a lawyer after closing. You don't have to deal with them.",
      },
      {
        question: "The roof is collapsing and the basement has standing water. Too damaged?",
        answer: "No. We buy houses in rough condition all the time. Send photos if you can, or just send the address and let us walk through.",
      },
      {
        question: "Can you close fast if I'm worried the house will be vandalized?",
        answer: "Yes. 14-day closings are possible. If the house is at active risk, we can close faster than most traditional buyers.",
      },
    ],
    relatedNeighborhoods: ["kensington", "north-philadelphia", "west-philadelphia"],
    relatedSituations: ["code-violations", "inherited-house", "tax-delinquent"],
  },
];
