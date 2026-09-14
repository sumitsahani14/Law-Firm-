export const articles = [
  {
    id: 'article-1',
    category: 'Corporate',
    date: '2026-06-12',
    readTime: '6 min read',
    title: 'The Legal Risks of Scaling Too Quickly',
    excerpt:
      'Rapid growth exposes gaps in governance, contracts, and employment structure long before anyone notices them. Here is what tends to break first, and how to get ahead of it.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=80',
    body: [
      'Growth has a way of outrunning the legal foundations underneath it. A company that raised a seed round with a two-page cap table can, eighteen months later, have dozens of stakeholders, multiple jurisdictions, and contracts that were negotiated under very different assumptions.',
      'The risk is rarely one dramatic failure. It is usually a series of small gaps — a missing IP assignment, an informal side agreement with an early advisor, a policy that was never written down — that compound quietly until a financing round, acquisition, or dispute forces them into the open.',
      'The most resilient companies treat legal structure as infrastructure, not paperwork. That means revisiting governance, contracts, and employment policy at each stage of growth, rather than only when a transaction forces the issue.',
      'In practice, this looks like a quarterly review cadence tied to headcount and revenue milestones, clear ownership over contract templates, and a standing relationship with counsel who understands the business well enough to flag issues before they become expensive.',
    ],
  },
  {
    id: 'article-2',
    category: 'Contracts',
    date: '2026-05-28',
    readTime: '7 min read',
    title: 'What Founders Should Know Before Signing a Major Commercial Agreement',
    excerpt:
      'A large commercial contract can define a company\u2019s trajectory for years. These are the terms founders most often overlook, and why they matter more than they appear to.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80',
    body: [
      'A major commercial agreement is rarely just about price and delivery. Termination rights, exclusivity language, and liability caps often carry more long-term consequence than the headline commercial terms, yet they receive the least scrutiny under deal pressure.',
      'Exclusivity clauses in particular deserve careful reading. A seemingly reasonable exclusivity period can quietly foreclose an entire category of future partnerships, especially for companies in adjacent or overlapping markets.',
      'Liability and indemnification provisions determine who bears the cost when something goes wrong — and "something" is not hypothetical at scale. Founders should understand precisely what is capped, what is carved out, and what that means in a worst-case scenario.',
      'The goal is not to negotiate every clause to the last percentage point. It is to understand, before signing, exactly what the agreement commits the business to — and to negotiate hardest on the handful of terms that actually carry risk.',
    ],
  },
  {
    id: 'article-3',
    category: 'Technology',
    date: '2026-04-15',
    readTime: '8 min read',
    title: 'AI, Data, and the New Rules of Business',
    excerpt:
      'As companies adopt AI tools across operations, the legal questions are shifting faster than most internal policies can keep up. Here is a practical framework for thinking about the risk.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80',
    body: [
      'The legal questions raised by AI adoption rarely start with the technology itself. They start with data: what data feeds a given tool, who owns it, what representations have been made to the people it describes, and where that data ultimately lives.',
      'Automated decision-making introduces a second layer of exposure. When a tool materially influences a decision about a customer, employee, or transaction, businesses should be able to explain that decision — not just to a regulator, but to themselves.',
      'Vendor terms deserve particular attention. Many AI tool providers reserve broad rights to use customer inputs for model training by default. Understanding — and where necessary negotiating — those terms is now a standard part of technology procurement.',
      'None of this requires treating AI adoption as uniquely dangerous. It requires the same discipline companies already apply to other operational risk: know what you\u2019re using, understand what it touches, and document the decisions you make along the way.',
    ],
  },
  {
    id: 'article-4',
    category: 'Employment',
    date: '2026-03-22',
    readTime: '5 min read',
    title: 'Structuring Equity Compensation as You Scale',
    excerpt:
      'Equity that made sense for a five-person team can create real problems at fifty. A look at how growing companies should think about their equity structure over time.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80',
    body: [
      'Early equity grants are often made quickly, with informal terms and limited documentation. That approach rarely survives contact with a Series B diligence process or a later dispute.',
      'As companies scale, equity structure should evolve alongside headcount — vesting schedules, acceleration provisions, and option pool sizing all deserve periodic review rather than a single early decision left untouched for years.',
      'Clear, consistent documentation protects the company as much as it protects employees. When equity terms are ambiguous, the ambiguity tends to resolve in the most expensive way possible.',
    ],
  },
  {
    id: 'article-5',
    category: 'Disputes',
    date: '2026-02-10',
    readTime: '6 min read',
    title: 'When to Negotiate and When to Litigate',
    excerpt:
      'Not every commercial disagreement calls for the same response. A framework for deciding how hard to push, and when.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=80',
    body: [
      'Litigation is expensive, slow, and rarely produces the outcome either side initially wanted. That does not mean it should never be pursued — only that it should be a deliberate choice, not a default reaction.',
      'The first question worth asking is commercial, not legal: what outcome actually serves the business? Preserving a relationship, protecting a reputation, and recovering a specific loss often call for very different strategies.',
      'Structured negotiation and mediation resolve the large majority of commercial disputes we see, often faster and at a fraction of the cost of formal proceedings — while still preserving the option to escalate if the other side will not engage in good faith.',
    ],
  },
  {
    id: 'article-6',
    category: 'Intellectual Property',
    date: '2026-01-18',
    readTime: '5 min read',
    title: 'IP Diligence: What Acquirers Actually Look For',
    excerpt:
      'IP diligence can make or break a transaction timeline. Here is what tends to raise flags, and how to prepare for it in advance.',
    image:
      'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?w=1000&q=80',
    body: [
      'Acquirers look first for clean ownership. Every piece of meaningful IP should be traceably assigned to the company — from founders, employees, and contractors alike — with no gaps in the chain of title.',
      'Open-source usage is a frequent source of delay. Companies should maintain a clear inventory of dependencies and their license terms well before diligence begins, not scramble to assemble one under deal pressure.',
      'Trademark and trade secret protection are often under-prioritized relative to patents, despite frequently mattering more to an acquirer\u2019s actual valuation of the business.',
    ],
  },
]

export const getArticle = (id) => articles.find((a) => a.id === id)
