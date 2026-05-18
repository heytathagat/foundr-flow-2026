import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'
import { ARTICLES } from '../data/articles'

const INSIGHTS = [
  {
    slug: 'tier2-advantage',
    date: 'Jan 12, 2026',
    read: '16 min read',
    title: 'The Tier 2/3 Advantage: distribution before product',
    desc: 'Why the best early signal isn\'t a demo day pitch — it\'s a repeatable, low-cost distribution edge that only founders with ground-level access can build.',
    tags: ['Thesis', 'GTM', 'Distribution'],
  },
  {
    slug: 'fundraising-pipeline',
    date: 'Dec 2, 2025',
    read: '18 min read',
    title: 'Fundraising is a sales process — build a pipeline',
    desc: 'Momentum isn\'t luck. It\'s sequencing, narrative, and pipeline hygiene. Here\'s how to treat your fundraise like a sales motion with clear stages.',
    tags: ['Fundraising', 'Strategy'],
  },
  {
    slug: 'diligence-notes',
    date: 'Oct 18, 2025',
    read: '20 min read',
    title: 'Diligence notes we wish every founder wrote',
    desc: 'The fastest diligence is founder-led: crisp metrics, honest risks, and tight execution plans. Here\'s what we look for before we write a cheque.',
    tags: ['Operations', 'Metrics'],
  },
  {
    slug: 'operator-investors',
    date: 'Sep 5, 2025',
    read: '12 min read',
    title: 'Why operator-investors build better companies',
    desc: 'The difference between advice and co-building. How hands-on studio support compounds value in ways passive capital simply cannot match.',
    tags: ['Studio Model', 'Operations'],
  },
  {
    slug: 'local-networks',
    date: 'Aug 14, 2025',
    read: '9 min read',
    title: 'The hidden leverage of local networks in Tier 2 cities',
    desc: 'Why a founder in Indore or Coimbatore often has stronger early distribution than someone building the same product in Bengaluru.',
    tags: ['Networks', 'Tier 2'],
  },
]

export default function Insights({ onNav }) {
  useReveal()

  const openArticle = (slug) => {
    if (slug && ARTICLES[slug]) onNav('article', slug)
  }

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Insights</div>
            <h1 className="hdline reveal reveal-delay-1">
              Notes from the<br /><em>studio floor.</em>
            </h1>
            <p className="body-text reveal reveal-delay-2">
              Short, practical writing from building with founders across Tier 2 & 3 cities.
            </p>
          </div>

          <div>
            {INSIGHTS.map((ins, i) => {
              const clickable = Boolean(ins.slug)
              return (
                <div
                  className={`insight-item reveal reveal-delay-${(i % 3) + 1}${clickable ? ' insight-item-link' : ''}`}
                  key={ins.slug || ins.title}
                  onClick={clickable ? () => openArticle(ins.slug) : undefined}
                  onKeyDown={clickable ? (e) => e.key === 'Enter' && openArticle(ins.slug) : undefined}
                  role={clickable ? 'button' : undefined}
                  tabIndex={clickable ? 0 : undefined}
                >
                  <div>
                    <div className="ins-meta">{ins.date} · {ins.read}</div>
                    <div className="ins-title">{ins.title}</div>
                    <div className="ins-desc">{ins.desc}</div>
                    <div className="ins-tags">
                      {ins.tags.map((tag) => (
                        <span className="ins-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  {clickable && <div className="ins-arrow">→</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
