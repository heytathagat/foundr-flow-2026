// All site copy/data in one place.

export const NAV = [
  { label: 'Studio', to: '/studio' },
  { label: 'Process', to: '/process' },
  { label: 'About', to: '/about' },
];

export const CITIES = [
  'Jabalpur', 'Varanasi', 'Surat', 'Nashik', 'Coimbatore', 'Jaipur',
  'Patna', 'Bhopal', 'Vizag', 'Rajkot', 'Mangalore', 'Ludhiana', 'Indore', 'Guwahati',
];

export const PILLARS = [
  {
    num: '01',
    title: 'Product co-building',
    desc: "We don't advise from a deck — we embed. A product designer and a tech lead sit inside your team, run the sprints, and ship an MVP that real customers actually use.",
    icon: 'product',
  },
  {
    num: '02',
    title: 'Brand & positioning',
    desc: 'A company in Bhagalpur should be able to look like it was built in Bombay. We handle naming, identity, voice and the story that makes customers and investors lean in.',
    icon: 'brand',
  },
  {
    num: '03',
    title: 'Distribution access',
    desc: "Your first 100 customers shouldn't be a mystery. We open up our network of channel partners, trade bodies and on-ground operators across non-metro India.",
    icon: 'dist',
  },
  {
    num: '04',
    title: 'Capital & follow-ons',
    desc: 'We write the first cheque and stay close to the cap table — then actively work the next round, from angels to institutional, when the metrics are ready.',
    icon: 'capital',
  },
  {
    num: '05',
    title: 'Talent pairing',
    desc: 'The right CTO or growth lead changes the trajectory of a company. We match founders with proven operators from a community that wants to build outside the metros.',
    icon: 'talent',
  },
  {
    num: '06',
    title: 'Operational scaffold',
    desc: 'Incorporation, compliance, banking, payroll, legal — all the unglamorous infrastructure set up correctly from week one, so you spend your energy on the product.',
    icon: 'ops',
  },
];

export const COMPANIES = [
  { name: 'Khetika', abbr: 'Khe', sector: 'Agri-tech', city: 'Nashik, MH', stage: 'Series A', status: 'active', desc: "Farm-to-shelf supply-chain platform for Maharashtra's grape and onion belt.", metric: '₹12 Cr raised' },
  { name: 'GharKhata', abbr: 'Gk', sector: 'Fintech', city: 'Patna, BR', stage: 'Seed', status: 'active', desc: 'Credit and bookkeeping rails for kirana store owners across Tier 3 towns.', metric: '8,000+ stores' },
  { name: 'Navoday', abbr: 'Na', sector: 'EdTech', city: 'Jabalpur, MP', stage: 'Pre-seed', status: 'active', desc: 'Vernacular skilling for blue-collar workers looking to move up a wage band.', metric: '2,200 enrolled' },
  { name: 'VahanLink', abbr: 'Va', sector: 'Logistics', city: 'Ludhiana, PB', stage: 'Series A', status: 'active', desc: "Cross-docking network for Punjab's MSME exporters and hosiery clusters.", metric: '₹18 Cr raised' },
  { name: 'MediRun', abbr: 'Me', sector: 'HealthTech', city: 'Vizag, AP', stage: 'Acquired', status: 'exited', desc: 'Last-mile medicine delivery for coastal Tier 3 towns. Acquired in 2024.', metric: '2.8× return' },
  { name: 'TiffinBox', abbr: 'Ti', sector: 'FoodTech', city: 'Surat, GJ', stage: 'Acquired', status: 'exited', desc: 'B2B office-lunch platform for industrial Gujarat. Acquired by a national player in 2023.', metric: '3.1× return' },
];

export const STEPS = [
  { num: '01', title: 'Founder discovery', dur: 'Week 1–2', desc: "We start with a conversation — your market, your edge, your story. No deck required. We're underwriting people, not pitch formatting.", detail: 'Open application · Founder call · Reference checks' },
  { num: '02', title: 'Studio-fit sprint', dur: 'Week 3', desc: "A short working session with our core team. We build something together — it's the fastest way to test chemistry and how you actually execute.", detail: 'Working sprint · Market sizing · Offer' },
  { num: '03', title: 'Co-building begins', dur: 'Month 1–4', desc: 'We embed a product designer, a tech lead and a growth strategist into your founding team. Weekly joint sprints, shared targets, one Slack.', detail: 'MVP · Brand sprint · First customers' },
  { num: '04', title: 'Launch & growth', dur: 'Month 4–6', desc: 'Public launch with a real distribution plan behind it. We facilitate connections to our network of mentors, partners, and ecosystem enablers.', detail: 'Go-to-market · Network access · Growth support' },
  { num: '05', title: 'Scale support', dur: 'Ongoing', desc: 'Post-launch we stay on as an active board observer — supporting hiring, strategic planning, and the hard calls that come with scaling.', detail: 'Board seat · Ongoing mentorship · Long-term partnership' },
];

export const FAQS = [
  { q: 'Do I need a finished product or a deck to apply?', a: "No. We'd rather see how you think and what you've already pushed into the world, however rough. A working prototype, a spreadsheet of early customers, or a clear articulation of the problem matters far more than polished slides." },
  { q: 'How does the studio partnership work?', a: "It varies with stage and what we're putting in, but a typical studio partnership focuses on co-building, mentorship, and network access. We'll walk you through exactly how the collaboration works before anything is signed — no surprises." },
  { q: "I'm not in a Tier 2 or 3 city, but I'm building for one. Can I apply?", a: 'Yes. What we care about is genuine proximity to the market and the problem. If you are deeply serving non-metro India and understand it from the inside, location of incorporation is secondary.' },
  { q: 'What happens after the six-month sprint?', a: "We don't disappear. We stay on as an active board observer — supporting hiring, follow-on fundraising and the strategic calls that come with scaling. The intensity changes; the relationship doesn't." },
  { q: 'When does the next cohort start?', a: 'Cohort 04 begins August 2026, with applications closing July 15. We review on a rolling basis, so applying early genuinely helps.' },
];

export const TEAM = [
  { 
    name: 'Tathagat Kumar', 
    init: 'TK', 
    role: 'Founder & Investor', 
    bio: 'Tathagat Kumar is an investor and venture studio leader focused on backing and scaling high-potential startups across emerging sectors. Through strategic capital, mentorship, and ecosystem partnerships, he helps founders transform early-stage ideas into sustainable businesses.',
    photo: 'tathagat.jpeg'
  },
  { 
    name: 'Nihit Mehrotra', 
    init: 'NM', 
    role: 'CFO', 
    bio: 'Nihit brings deep financial expertise to help startups navigate the complexities of capital allocation, financial planning, and investor relations. With a focus on building sustainable financial foundations, he ensures that early-stage companies are positioned for long-term growth and scalability.',
    photo: 'nihit.jpeg'
  },
  { 
    name: 'Nikhil Gupta', 
    init: 'NG', 
    role: 'Strategic Advisor', 
    bio: 'Nikhil Gupta is a Most Admired BFSI Professional (2026) with extensive experience as an investor, startup mentor, and business strategist. As an Alternative Investment Fund Manager and seasoned banker, he brings deep expertise in financial services, investment management, and strategic advisory. A visiting faculty and podcast speaker, Nikhil shares his knowledge through mentorship and thought leadership, helping founders navigate complex financial landscapes and build scalable businesses.',
    photo: 'nikhil.jpg'
  },
];

export const MILESTONES = [
  { yr: '2021', title: 'Studio founded', desc: 'Started in a co-working floor in Indore with one conviction and zero portfolio.' },
  { yr: '2022', title: 'First cohort ships', desc: 'Four companies launched; two raised seed rounds within nine months.' },
  { yr: '2024', title: 'First exits', desc: 'MediRun and TiffinBox acquired, returning the early fund several times over.' },
  { yr: '2026', title: 'Cohort 04 opens', desc: 'Now backing founders across 18 cities, with ₹40Cr+ deployed into the portfolio.' },
];

export const CRITERIA = [
  'Pre-seed or pre-product stage',
  'Based in, or deeply serving, Tier 2 / Tier 3 India',
  'A non-trivial, genuinely scalable problem',
  'At least one full-time co-founder',
  'Open to an equity-based studio partnership',
];
