export const attorneys = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Managing Partner',
    practiceAreas: ['Corporate & M&A', 'Commercial Contracts'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    bio: 'Priya founded Veritas Legal on the premise that legal counsel should be judged by the clarity of the decisions it produces, not the length of the memo. With over 18 years of experience in corporate law across Mumbai and New Delhi, she advises founders and boards on financing, governance, and transactions across the company lifecycle.',
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
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    bio: 'Arjun works at the intersection of corporate strategy and technology risk, helping product and engineering leadership understand legal exposure before it becomes a business problem. Based in Bengaluru, he has advised technology companies through platform launches, data governance overhauls, and acquisitions across India and Southeast Asia.',
    focus: [
      'Data governance and AI risk',
      'Technology licensing',
      'Platform terms and marketplace structure',
    ],
  },
  {
    id: 'kavya-nair',
    name: 'Kavya Nair',
    role: 'Partner — Disputes',
    practiceAreas: ['Dispute Resolution', 'Employment & Advisory'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    bio: 'Kavya leads the firm\'s dispute resolution practice with a philosophy grounded in commercial pragmatism: most disputes should end in a negotiated outcome, not a courtroom. A graduate of the National Law School of India University, she has guided leadership teams through high-stakes commercial disagreements and sensitive employment matters.',
    focus: [
      'Commercial dispute strategy',
      'Pre-litigation negotiation',
      'Workplace investigations',
    ],
  },
]

export const getAttorney = (id) => attorneys.find((a) => a.id === id)
