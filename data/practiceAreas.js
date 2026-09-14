export const practiceAreas = [
  {
    id: 'corporate',
    number: '01',
    title: 'Corporate & M&A',
    short: 'Formation, financing, governance, and transactions for growing companies.',
    description:
      'We advise founders and boards through the full lifecycle of a company — from incorporation and early financing to acquisitions, divestitures, and exit. Our approach favors clear structuring decisions made early, so later transactions move faster.',
    services: [
      'Entity formation & governance',
      'Venture financing & term sheets',
      'Mergers, acquisitions & divestitures',
      'Shareholder & investor agreements',
      'Corporate restructuring',
    ],
    problems: [
      'We need to raise a financing round without giving up control we don\u2019t need to.',
      'We\u2019re acquiring a company and need diligence done quickly and correctly.',
      'Our cap table has gotten complicated and needs to be cleaned up.',
    ],
  },
  {
    id: 'technology',
    number: '02',
    title: 'Technology & Data',
    short: 'Product, platform, and data counsel for technology-driven businesses.',
    description:
      'Technology companies face legal questions that move as fast as their product roadmaps. We help teams ship with confidence — advising on data governance, platform terms, AI-related risk, and the regulatory questions that come with scale.',
    services: [
      'Data privacy & governance',
      'AI & automated-decision risk review',
      'Platform & marketplace terms',
      'Technology licensing',
      'Regulatory readiness',
    ],
    problems: [
      'We\u2019re launching a feature that touches user data and need a compliance read.',
      'We want to understand our exposure before adopting a new AI tool internally.',
      'Our terms of service haven\u2019t kept pace with how the product actually works.',
    ],
  },
  {
    id: 'contracts',
    number: '03',
    title: 'Commercial Contracts',
    short: 'Agreements that protect the business without slowing it down.',
    description:
      'Contracts should reduce risk, not create friction. We draft and negotiate commercial agreements built around how your business actually operates, with an eye toward long-term relationships rather than one-off wins.',
    services: [
      'Master service & vendor agreements',
      'Enterprise sales contracts',
      'Partnership & channel agreements',
      'NDAs & confidentiality frameworks',
      'Contract playbooks & templates',
    ],
    problems: [
      'Our sales team is stuck waiting weeks for contract review.',
      'A vendor relationship went sideways and we need to understand our position.',
      'We want standard paper so we stop redrafting from scratch every deal.',
    ],
  },
  {
    id: 'disputes',
    number: '04',
    title: 'Dispute Resolution',
    short: 'Practical strategy for commercial disputes, from negotiation to resolution.',
    description:
      'Most disputes are resolved long before a courtroom. We focus first on the commercial outcome that actually serves your business, using negotiation and structured resolution wherever possible, and litigation posture when it is genuinely necessary.',
    services: [
      'Commercial dispute strategy',
      'Contract & breach disputes',
      'Pre-litigation negotiation',
      'Arbitration & mediation support',
      'Risk assessment & exposure analysis',
    ],
    problems: [
      'A counterparty isn\u2019t honoring an agreement and we need a path forward.',
      'We received a demand letter and want to understand our real exposure.',
      'We\u2019d rather resolve this without years of litigation cost.',
    ],
  },
  {
    id: 'employment',
    number: '05',
    title: 'Employment & Advisory',
    short: 'Employment structure and policy counsel as teams scale.',
    description:
      'As companies grow, employment questions multiply. We help leadership teams build sound policies, navigate sensitive situations, and structure compensation and equity in ways that hold up as headcount scales.',
    services: [
      'Employment policy & handbooks',
      'Executive & equity compensation',
      'Workplace investigations support',
      'Separation & transition agreements',
      'Classification & compliance review',
    ],
    problems: [
      'We\u2019re scaling quickly and our policies haven\u2019t kept up.',
      'We need to handle a sensitive personnel situation carefully.',
      'We\u2019re structuring equity for new hires and want it done right.',
    ],
  },
  {
    id: 'ip',
    number: '06',
    title: 'Intellectual Property',
    short: 'Protecting the ideas and assets that make your business defensible.',
    description:
      'Your intellectual property is often your most valuable asset and your least understood. We help identify what actually needs protecting, put the right structures in place, and defend that position when it matters.',
    services: [
      'IP strategy & portfolio review',
      'Trademark & brand protection',
      'IP licensing & assignment',
      'Trade secret protection',
      'IP diligence for transactions',
    ],
    problems: [
      'We\u2019re not sure what parts of our product are actually protectable.',
      'We need IP assignment cleaned up before a financing round.',
      'A competitor may be using something that looks a lot like ours.',
    ],
  },
]

export const getPracticeArea = (id) => practiceAreas.find((p) => p.id === id)
