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
    readingTime: '16 min',
    excerpt:
      'Why the best early signal isn’t a demo day pitch—it’s a repeatable, low-cost distribution edge.',
    tags: ['Thesis', 'GTM'],
    body: [
      {
        heading: 'In brief',
        paragraphs: [
          'The strongest early signal we see in Tier 2 and Tier 3 founder journeys isn’t a polished demo or a perfect pitch—it’s a repeatable, low-cost distribution edge. Founders who figure out how to reach and retain users before they over-invest in product tend to build more resilient companies. This note lays out why we prioritise distribution and narrative from day zero, what we mean by “customer pull,” and how trust and relationships in smaller markets compound in ways that metros don’t.',
        ],
      },
      {
        heading: 'The misconception: product first, distribution later',
        paragraphs: [
          'Founders often assume they need a perfect product before they can build distribution. The mental model goes: build it, then market it. In reality, distribution is the only thing that de-risks iteration. If you don’t know how to get in front of users cheaply and repeatedly, every product change is a shot in the dark.',
          'In Tier 2 and Tier 3 markets, this shows up in a specific way. Access to capital and talent is tighter, so the cost of “building first and figuring out distribution later” is higher. The founders who win are usually the ones who find a wedge—a community, a workflow, a content loop, or a relationship channel—that gets them in front of the right people without burning through runway.',
          'We’re not saying product doesn’t matter. We’re saying that without a path to users, product excellence is invisible. Distribution is what makes your product visible, testable, and improvable. Once you have a repeatable way to reach users, every iteration gets feedback from real behaviour, not assumptions.',
        ],
      },
      {
        heading: 'Why Tier 2/3 relationships behave differently',
        paragraphs: [
          'In Tier 2 and Tier 3 India, relationships and trust loops behave like compounding channels. Word of mouth travels faster within tighter networks. A single campus, college society, or local business association can become a distribution engine if the founder is genuinely embedded.',
          'That doesn’t mean “just do community.” It means: understand who already trusts whom in your space, and design your first loop around that. Sometimes it’s a WhatsApp group, sometimes it’s a physical meetup, sometimes it’s a content series that gets forwarded. The common thread is that the founder is not an outsider spraying messages—they’re inside the loop, adding value first.',
          'Metro markets are noisier and more saturated. In smaller cities and campuses, the same effort often yields sharper signal: you can see who’s engaging, who’s referring, and who’s sticking. That clarity is an advantage. Use it to learn what resonates before scaling spend.',
        ],
      },
      {
        heading: 'What we look for: pull, not push',
        paragraphs: [
          'We look for clear customer pull, not founder push. Pull means users or customers are already seeking something you provide—even if the product is imperfect. It shows up as repeat sign-ups, referrals, or “when can we get access?” without heavy incentives.',
          'A repeatable acquisition loop that gets cheaper with learning is the next layer. Early on, cost per user might be high. The question is whether you’re learning which channels and messages work, so that over time the same or better results cost less. Founders who treat early distribution as an experiment, with clear hypotheses and metrics, tend to get there faster.',
          'Retention proof points that aren’t driven by discounts matter more than vanity growth. We’d rather see a small cohort that comes back because the product is useful than a large cohort that’s there for a promo. Retention is the best signal that distribution is finding the right people.',
        ],
      },
      {
        heading: 'Putting it into practice',
        paragraphs: [
          'If you’re pre-product or early-product, start by naming your wedge: the one channel or community where you can show up consistently and add value. Then design a minimal loop—content, event, or tool—that gets you in front of them and captures signal. Measure sign-ups, referrals, and repeat use. Iterate on the loop before over-building the product.',
          'If you’re already live, audit where your users actually come from. Double down on the channels that bring people who stay. Kill or deprioritise the rest. In Tier 2/3, a single strong channel often beats a scattered “we’re on every platform” approach.',
          'Distribution before product isn’t a slogan—it’s a sequence. Get the loop working, then let the product and narrative sharpen with real feedback. That’s the Tier 2/3 advantage when you use it right.',
        ],
      },
    ],
  },
  {
    title: 'Fundraising is a sales process—build a pipeline',
    slug: 'fundraising-is-sales',
    date: '2025-12-02',
    readingTime: '18 min',
    excerpt:
      'Momentum isn’t luck. It’s sequencing, narrative, and pipeline hygiene.',
    tags: ['Fundraising'],
    body: [
      {
        heading: 'In brief',
        paragraphs: [
          'Fundraising feels random when it’s reactive. When you treat it like a sales process—with a pipeline, stages, and a clear narrative—momentum becomes predictable. This piece covers why we tell founders to think pipeline first, how to build a target list and track stages, and what “narrative that converts” actually means in practice. The goal isn’t to pitch harder; it’s to create optionality so that multiple conversations move in parallel on a predictable cadence.',
        ],
      },
      {
        heading: 'Think pipeline, not pitch',
        paragraphs: [
          'Treat fundraising like enterprise sales. That means: build a target list of potential investors or partners, define clear stages (e.g. intro, first call, deep dive, term sheet), and work to reduce time-to-next-step at every stage. The founders who raise with less stress are usually the ones who started early, kept a simple CRM or sheet, and never let the pipeline go empty.',
          'Your goal is to create optionality: multiple partners moving in parallel, on a predictable cadence. If you have only one or two conversations at a time, you’re at the mercy of their timeline and mood. When you have five or ten in motion, you can afford to be clear on terms and walk away from bad fit. That’s not manipulation—it’s basic pipeline hygiene.',
          'Pipeline also forces you to be honest about where you are. “We’re in early conversations” is different from “we have three second meetings next week.” Knowing the real state of your pipeline helps you prioritise: who to follow up with, who to prep for, and when to broaden the list.',
        ],
      },
      {
        heading: 'Building and maintaining the list',
        paragraphs: [
          'Start with a list of funds and angels that are relevant to your stage, sector, and geography. Tier 2/3 founders often under-list because they assume “they won’t care.” Many investors are actively looking for non-metro and non-obvious deals. Do the work: check their portfolio, recent tweets or posts, and thesis. Add only those who could realistically write a check or lead a round for you.',
          'Tag each contact with stage: not contacted, intro sent, first call done, follow-up scheduled, passed or passed on. Update the list at least weekly. If a name has been stuck in “intro sent” for two weeks with no response, either follow up once more or move on. Stale pipelines create false hope.',
          'Warm intros beat cold outreach every time. Map your network: who can introduce you to which investor? Ask for one intro at a time, with a short blurb they can forward. Make it easy for the introducer; make it easy for the investor to say “yes” to a call. After the call, always know the next step and who owns it.',
        ],
      },
      {
        heading: 'Narrative that converts',
        paragraphs: [
          'The story is simple: why now, why you, why this market, and why you win. Why now: what’s changed in the market, tech, or behaviour that makes this the right moment? Why you: what’s your unfair advantage—team, distribution, insight, or execution? Why this market: why is it big enough and why are you well placed to capture it? Why you win: what’s the one thing that will make you the default choice for your customer?',
          'A great deck is a tool; the real asset is clarity. If you can’t explain the above in a few minutes without slides, the deck won’t save you. Practice the narrative out loud. Cut jargon. Lead with the problem and the wedge, not the feature list. Investors see hundreds of decks; the ones they remember are the ones where the founder was clear and confident without being slick.',
          'For Tier 2/3 founders, “why you” often includes your distribution edge or local insight. Don’t undersell it. “We’re from Jaipur and we understand the local retailer” is a real moat if the market is large enough. Tie it to numbers: show that you can acquire or retain users in a way that’s hard to replicate from a metro office.',
        ],
      },
      {
        heading: 'Cadence and closing',
        paragraphs: [
          'Momentum isn’t luck. It’s sequencing. Run multiple conversations in parallel so that you’re not waiting on one yes. Follow up on time. Send updates and materials when you say you will. Small discipline—reply same day, send the deck within 24 hours—signals that you run a tight process. That builds trust.',
          'When term sheets or serious interest appear, get help. A lawyer or an experienced founder can review terms and help you compare. Don’t optimise only for valuation; consider board seat, control, and follow-on dynamics. And don’t forget: the best outcome is a partner who adds value beyond the check. Pipeline gives you the option to choose.',
          'In the end, fundraising is a sales process. Build the list, move the stages, sharpen the narrative, and keep the pipeline full. Do that, and momentum becomes something you engineer—not something you wait for.',
        ],
      },
    ],
  },
  {
    title: 'Diligence notes we wish every founder wrote',
    slug: 'diligence-notes',
    date: '2025-10-18',
    readingTime: '20 min',
    excerpt:
      'The fastest diligence is founder-led: crisp metrics, honest risks, and tight execution plans.',
    tags: ['Operations', 'Metrics'],
    body: [
      {
        heading: 'In brief',
        paragraphs: [
          'The fastest diligence is the one founders lead themselves: crisp metrics, honest risks, and tight execution plans. Investors and partners move quickly when they don’t have to dig for the story. This note describes what “make it easy to say yes” looks like in practice—from a one-page metrics snapshot and cohort view to calling out risks and mitigations—and why surprise is the enemy of speed. We also outline what good looks like: consistent definitions, clear hiring plans, and updates that don’t require a forensic audit.',
        ],
      },
      {
        heading: 'Make it easy to say yes',
        paragraphs: [
          'Share metrics the way you’d share them with your own board: honest, consistent, and comparable. That means the same definitions every time (e.g. MRR, active user, retention), the same time windows (e.g. last 30 days, last quarter), and no cherry-picking. When an investor or partner can trust that the numbers are real and comparable, they can focus on the story and the fit instead of fact-checking.',
          'Call out your risks and how you’re mitigating them. Surprise is the enemy of speed. If you know that churn is high in one segment, or that one key customer is 60% of revenue, say it. Then say what you’re doing about it. Hiding or soft-pedalling risks doesn’t protect you—it gets discovered later and erodes trust. Proactively naming risks and mitigations shows maturity and makes it easier for the other side to say yes.',
          'Structure the story. Lead with a one-pager: problem, solution, traction, team, ask. Then provide a metrics appendix and a short narrative. Don’t make people hunt through a 40-page deck or 10 tabs to understand the business. The best founders make the key facts findable in under five minutes.',
        ],
      },
      {
        heading: 'What good looks like: the one-page snapshot',
        paragraphs: [
          'A one-page metrics snapshot, updated monthly, is worth more than ad-hoc updates. Include: top-level numbers (revenue, users, growth rate), cohort retention or payback if relevant, burn and runway, and 2–3 key milestones for the next 90 days. Use the same format every month so that trends are obvious. This becomes the single source of truth for you and for anyone you’re talking to.',
          'Cohort retention and payback windows matter more than vanity totals. Show that users or customers who came in 3 or 6 months ago are still there, and if possible what they’re worth. If you’re in e-commerce or SaaS, unit economics—CAC, LTV, payback—should be visible. Founders who can point to a cohort table and explain it clearly signal that they run the business with discipline.',
          'A clear hiring plan tied to milestones helps. Who do you need to hire in the next 6–12 months, and for what outcome? This shows that you’re thinking ahead about capacity and that you’re not just “hiring when we have money.” It also gives investors a sense of how you’ll use capital.',
        ],
      },
      {
        heading: 'Risks and mitigations',
        paragraphs: [
          'Dedicate a section to risks and mitigations. List 3–5 key risks: customer concentration, competition, regulatory, key-person, or execution. For each, write one or two lines on how you’re mitigating. For example: “Single customer is 40% of revenue; we’re adding two similar-sized deals in pipeline and have a retention plan with the customer.” This doesn’t invite more scrutiny—it pre-empts it and shows you’re on top of the business.',
          'If something has gone wrong in the past—a churn spike, a failed launch, a key departure—briefly acknowledge it and what you learned or changed. Sweeping it under the rug is worse than a short, honest note. The goal is to be the one telling the story, not the one being asked “why didn’t you mention this?”',
        ],
      },
      {
        heading: 'Execution and next steps',
        paragraphs: [
          'Tie everything to execution. What are the next 3–6 milestones, and what does success look like for each? What’s the plan for the next quarter? Investors and partners want to know that you have a rhythm: you set goals, you track them, and you adjust. A simple “next 90 days” section with clear owners and outcomes goes a long way.',
          'Finally, keep it current. A diligence pack or metrics doc that’s two months old is worse than none—it suggests you’re not on top of the numbers. Update at least monthly, and when you’re in an active process, update before every meaningful conversation. The fastest diligence is founder-led, and the founders who lead it well are the ones who make it easy to say yes.',
        ],
      },
    ],
  },
]

