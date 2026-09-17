export const caseStudies = [
  {
    id: 'technology',
    label: 'FEATURED MATTER',
    practiceArea: 'Technology & Data',
    title: 'Helping a fast-growing technology company scale without slowing down.',
    summary:
      'A Series B technology company needed contract and data-governance infrastructure that could keep pace with rapid enterprise sales growth.',
    challenge:
      'The company\u2019s contract review process had not been rebuilt since its early days, and enterprise sales cycles were slowing under the weight of manual legal review. At the same time, new data-privacy obligations tied to enterprise customers were creating uncertainty about what the platform could and could not do with customer data.',
    approach:
      'We rebuilt the company\u2019s commercial contract playbook around its actual sales motion, created pre-approved fallback positions for common negotiation points, and ran a full data-governance review aligned to the company\u2019s enterprise commitments.',
    outcome:
      'Contract turnaround time improved significantly, sales and legal friction dropped, and the company entered its next funding round with clean, well-documented data practices.',
    metrics: [
      { value: '+42%', label: 'Contract turnaround' },
      { value: '-28%', label: 'Operational friction' },
      { value: '6 weeks', label: 'Implementation' },
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
  {
    id: 'consumer',
    label: 'CASE STUDY',
    practiceArea: 'Commercial Contracts',
    title: 'Rebuilding vendor infrastructure for a growing consumer brand.',
    summary:
      'A direct-to-consumer brand scaling into wholesale needed contract infrastructure that could support a rapidly expanding retail footprint.',
    challenge:
      'The brand\u2019s wholesale agreements had been drafted individually for each retailer, creating inconsistent terms, unclear liability exposure, and a growing administrative burden as the retail footprint expanded nationally.',
    approach:
      'We standardized the brand\u2019s wholesale and distribution agreements into a tiered template structure, clarified liability and returns provisions, and trained the internal team to manage routine negotiations without outside counsel.',
    outcome:
      'The brand entered new retail partnerships faster, with consistent terms and clearer risk allocation across its distribution network.',
    metrics: [
      { value: '+35%', label: 'Faster deal close' },
      { value: '-40%', label: 'Outside counsel spend' },
      { value: '4 weeks', label: 'Rollout' },
    ],
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
  },
  {
    id: 'enterprise',
    label: 'CASE STUDY',
    practiceArea: 'Dispute Resolution',
    title: 'Resolving a complex commercial dispute for a regional enterprise.',
    summary:
      'A regional enterprise faced a significant contract dispute with a long-standing supplier that threatened a key operational relationship.',
    challenge:
      'A disagreement over contract interpretation with a critical supplier had escalated to the point of a formal demand letter, putting a operationally important relationship — and significant commercial value — at risk.',
    approach:
      'We conducted a rapid exposure assessment, developed a negotiation strategy grounded in the commercial relationship rather than positional bargaining, and led structured discussions toward a resolution both sides could accept.',
    outcome:
      'The dispute was resolved through negotiated settlement, preserving the supplier relationship and avoiding the cost and delay of formal proceedings.',
    metrics: [
      { value: '10 weeks', label: 'To resolution' },
      { value: '-60%', label: 'Est. litigation cost avoided' },
      { value: '1', label: 'Relationship preserved' },
    ],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
]

export const getCaseStudy = (id) => caseStudies.find((c) => c.id === id)
