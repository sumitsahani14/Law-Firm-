export const attorneys = [
  {
    id: 'maya-sterling',
    name: 'Maya Sterling',
    role: 'Managing Partner',
    practiceAreas: ['Corporate & M&A', 'Commercial Contracts'],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    bio: 'Maya founded Veritas Legal on the premise that legal counsel should be judged by the clarity of the decisions it produces, not the length of the memo. She advises founders and boards on financing, governance, and transactions across the company lifecycle.',
    focus: [
      'Venture financing and governance',
      'M&A strategy and negotiation',
      'Board advisory',
    ],
  },
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Partner — Corporate & Technology',
    practiceAreas: ['Technology & Data', 'Corporate & M&A'],
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    bio: 'Arjun works at the intersection of corporate strategy and technology risk, helping product and engineering leadership understand legal exposure before it becomes a business problem. He has advised technology companies through platform launches, data governance overhauls, and acquisitions.',
    focus: [
      'Data governance and AI risk',
      'Technology licensing',
      'Platform terms and marketplace structure',
    ],
  },
  {
    id: 'elena-brooks',
    name: 'Elena Brooks',
    role: 'Partner — Disputes',
    practiceAreas: ['Dispute Resolution', 'Employment & Advisory'],
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    bio: 'Elena leads the firm\u2019s dispute resolution practice with a philosophy grounded in commercial pragmatism: most disputes should end in a negotiated outcome, not a courtroom. She has guided leadership teams through high-stakes commercial disagreements and sensitive employment matters.',
    focus: [
      'Commercial dispute strategy',
      'Pre-litigation negotiation',
      'Workplace investigations',
    ],
  },
]

export const getAttorney = (id) => attorneys.find((a) => a.id === id)
