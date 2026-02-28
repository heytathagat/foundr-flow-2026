export const site = {
  name: 'Foundr Flow',
  description:
    'A venture studio + early-stage investor for Tier 2 & Tier 3 founders—co-building products, distribution, and momentum from day zero.',
  location: 'Gurugram, Haryana, India · Built for Tier 2 & 3',
  email: 'hello@foundrflow.in',
  linkedin: 'https://linkedin.com/company/foundrflow',
  x: 'https://x.com/foundrflow',
} as const

export type NavItem = { label: string; href: string }

export const nav: NavItem[] = [
  { label: 'Thesis', href: '/thesis' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Partners', href: '/partners' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export type Partner = { name: string; logo: string; url?: string }

export type PartnersData = {
  colleges: Partner[]
  investmentPartners: Partner[]
  relevantPartners: Partner[]
}

export const partners: PartnersData = {
  colleges: [
    { name: 'CGC University', logo: '/partners/campus-cgc-university-nobg.png' },
    { name: 'IIT Delhi', logo: '/partners/campus-iit-delhi-nobg.png', url: 'https://home.iitd.ac.in' },
    { name: 'IILM University, Gurugram', logo: '/partners/campus-iilm-gurugram-nobg.png' },
    { name: 'SGT University', logo: '/partners/campus-sgt-university-nobg.png' },
    { name: 'Amity University', logo: '/partners/campus-amity-university-nobg.png', url: 'https://amity.edu' },
    { name: 'Baba Farid Group of Institutions', logo: '/partners/campus-baba-farid-nobg.png' },
  ],
  investmentPartners: [
    { name: 'ah! ventures', logo: '/partners/ah-ventures-nobg.png', url: 'https://ahventures.in' },
    { name: 'Soonicorn Ventures', logo: '/partners/soonicorn-ventures-nobg.png', url: 'https://soonicorn.com' },
    { name: 'Angel Blue', logo: '/partners/angel-blue-nobg.png', url: 'https://angelblue.in' },
    { name: 'The Stepup Ventures', logo: '/partners/stepup-ventures-nobg.png', url: 'https://thestepupventures.com' },
    { name: 'O₂ Angels Network', logo: '/partners/o2-angels-network-nobg.png', url: 'https://o2angels.net' },
    { name: 'Venture Catalysts++', logo: '/partners/venture-catalysts-nobg.png', url: 'https://venturecatalysts.in' },
  ],
  relevantPartners: [
    { name: 'Startup India', logo: '/partners/placeholder.svg', url: 'https://startupindia.gov.in' },
    { name: 'Google for Startups', logo: '/partners/placeholder.svg', url: 'https://developers.google.com/community' },
    { name: 'MeitY Startup Hub', logo: '/partners/placeholder.svg', url: 'https://meitystartuphub.in' },
    { name: 'Startup Punjab', logo: '/partners/placeholder.svg' },
    { name: 'Microsoft Learn Student Ambassadors', logo: '/partners/placeholder.svg' },
  ],
}

export type FocusArea = {
  title: string
  description: string
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Student & campus founders',
    description:
      'Makers building products out of college corridors, tech societies, and early careers in Tier 2 & 3 cities.',
  },
  {
    title: 'SaaS & tools from the edges',
    description:
      'Vertical tools, automation, and AI helpers that start with a real workflow in smaller markets.',
  },
  {
    title: 'Community & creator-led products',
    description:
      'Products that start with an audience: content, community, and niche distribution loops.',
  },
  {
    title: 'Brands from Bharat',
    description:
      'Digital‑first brands with unfair go‑to‑market in Tier 2 & 3—offline + online done right.',
  },
]

export type PortfolioCompany = {
  name: string
  sector: string
  stage: string
  year: string
  oneLiner: string
  status?: 'Active' | 'Exited'
}

export const portfolio: PortfolioCompany[] = [
  {
    name: 'FoundrX',
    sector: 'Community',
    stage: 'Studio',
    year: '2025',
    oneLiner: 'A community + content stack helping student and early‑stage founders ship faster.',
    status: 'Active',
  },
  {
    name: 'Campus Loop',
    sector: 'SaaS',
    stage: 'Studio',
    year: '2024',
    oneLiner: 'Operating system for college clubs and innovation cells to run like startups.',
    status: 'Active',
  },
  {
    name: 'BazaarStack',
    sector: 'Commerce',
    stage: 'Studio',
    year: '2024',
    oneLiner: 'Playbooks and tooling for Tier 2 & 3 D2C brands to launch and grow online.',
    status: 'Active',
  },
  {
    name: 'MentorGrid',
    sector: 'EdTech',
    stage: 'Studio',
    year: '2023',
    oneLiner: 'Structured mentoring journeys connecting operators with campus founders.',
    status: 'Active',
  },
  {
    name: 'BharatCart',
    sector: 'Commerce',
    stage: 'Studio',
    year: '2023',
    oneLiner: 'Full-stack commerce platform purpose-built for Tier 2 & Tier 3.',
    status: 'Active',
  },
  {
    name: 'Signalroom',
    sector: 'Ops',
    stage: 'Studio',
    year: '2022',
    oneLiner: 'Async updates and lightweight planning for small, fast teams.',
    status: 'Active',
  },
]

export type TeamMember = {
  name: string
  role: string
  bio: string
  focus: string[]
}

export const team: TeamMember[] = [
  {
    name: 'Tathagat Kumar',
    role: 'Studio Lead',
    bio: 'Founder-operator and ecosystem builder. Lives inside Tier 2/3 founder journeys—events, mentorship, and co-building across campuses and underdog cities.',
    focus: ['Community', 'Narrative', 'Mentorship', 'Founder support'],
  },
  {
    name: 'Ananya Mehra',
    role: 'Product & GTM',
    bio: 'Product and growth specialist. Works with studio teams on positioning, onboarding flows, and repeatable GTM from small experiments.',
    focus: ['Product', 'GTM', 'Experiment design'],
  },
  {
    name: 'Rohit Saini',
    role: 'Ops & Talent',
    bio: 'Helps studio companies hire, sell, and ship. Runs founder meetups, operator circles, and builds tactical playbooks founders can plug into.',
    focus: ['Hiring', 'Sales ops', 'Execution systems'],
  },
]

export type InsightPost = {
  title: string
  slug: string
  date: string
  readingTime: string
  excerpt: string
  tags: string[]
  body: { heading: string; paragraphs: string[] }[]
}

export const insights: InsightPost[] = [
  {
    title: 'The Tier 2/3 Advantage: distribution before product',
    slug: 'tier-2-3-advantage',
    date: '2026-01-12',
    readingTime: '6 min',
    excerpt:
      'Why the best early signal isn’t a demo day pitch—it’s a repeatable, low-cost distribution edge.',
    tags: ['Thesis', 'GTM'],
    body: [
      {
        heading: 'The misconception',
        paragraphs: [
          'Founders often assume they need a perfect product before they can build distribution. In reality, distribution is the only thing that de-risks iteration.',
          'In Tier 2/3 markets, relationships and trust loops behave like compounding channels.',
        ],
      },
      {
        heading: 'What we look for',
        paragraphs: [
          'Clear customer pull, not founder push.',
          'A repeatable acquisition loop that gets cheaper with learning.',
          'Retention proof points that aren’t driven by discounts.',
        ],
      },
    ],
  },
  {
    title: 'Fundraising is a sales process—build a pipeline',
    slug: 'fundraising-is-sales',
    date: '2025-12-02',
    readingTime: '5 min',
    excerpt:
      'Momentum isn’t luck. It’s sequencing, narrative, and pipeline hygiene.',
    tags: ['Fundraising'],
    body: [
      {
        heading: 'Think pipeline, not pitch',
        paragraphs: [
          'Treat fundraising like enterprise sales. Build a target list, track stages, and reduce time-to-next-step.',
          'Your goal is to create optionality: multiple partners moving in parallel, on a predictable cadence.',
        ],
      },
      {
        heading: 'Narrative that converts',
        paragraphs: [
          'The story is simple: why now, why you, why this market, and why you win.',
          'A great deck is a tool; the real asset is clarity.',
        ],
      },
    ],
  },
  {
    title: 'Diligence notes we wish every founder wrote',
    slug: 'diligence-notes',
    date: '2025-10-18',
    readingTime: '7 min',
    excerpt:
      'The fastest diligence is founder-led: crisp metrics, honest risks, and tight execution plans.',
    tags: ['Operations', 'Metrics'],
    body: [
      {
        heading: 'Make it easy to say yes',
        paragraphs: [
          'Share metrics the way you’d share them with your own board: honest, consistent, and comparable.',
          'Call out your risks and how you’re mitigating them. Surprise is the enemy of speed.',
        ],
      },
      {
        heading: 'What good looks like',
        paragraphs: [
          'A one-page metrics snapshot, updated monthly.',
          'Cohort retention and payback windows.',
          'A clear hiring plan tied to milestones.',
        ],
      },
    ],
  },
]

