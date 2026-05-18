import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'
import { getArticle } from '../data/articles'

function ArticleBody({ sections }) {
  return (
    <div className="article-body">
      {sections.map((block, i) => {
        if (block.type === 'h2') {
          return <h2 className="article-h2" key={i}>{block.text}</h2>
        }
        if (block.type === 'ul') {
          return (
            <ul className="article-ul" key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }
        return <p className="article-p" key={i}>{block.text}</p>
      })}
    </div>
  )
}

export default function Article({ slug, onNav }) {
  const article = getArticle(slug)
  useReveal()

  if (!article) {
    return (
      <>
        <section className="section page-top">
          <div className="container">
            <h1 className="hdline">Article not found</h1>
            <button className="btn btn-outline" type="button" onClick={() => onNav('insights')}>
              ← Back to Insights
            </button>
          </div>
        </section>
        <Footer onNav={onNav} />
      </>
    )
  }

  return (
    <>
      <article className="article-page">
        <header className="article-header">
          <div className="container">
            <button
              type="button"
              className="article-back reveal"
              onClick={() => onNav('insights')}
            >
              ← Insights
            </button>
            <div className="ins-meta reveal reveal-delay-1">
              {article.date} · {article.read}
            </div>
            <h1 className="hdline article-title reveal reveal-delay-1">
              {article.title}
            </h1>
            <p className="body-text article-lead reveal reveal-delay-2">
              {article.desc}
            </p>
            <div className="ins-tags reveal reveal-delay-3">
              {article.tags.map((tag) => (
                <span className="ins-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </header>
        <div className="container article-content-wrap reveal">
          <ArticleBody sections={article.sections} />
        </div>
      </article>
      <Footer onNav={onNav} />
    </>
  )
}
