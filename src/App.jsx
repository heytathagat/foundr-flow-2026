import { useState, useEffect, useCallback } from 'react'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Home from './pages/Home'
import Thesis from './pages/Thesis'
import FoundrX from './pages/FoundrX'
import Team from './pages/Team'
import Partners from './pages/Partners'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Article from './pages/Article'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import { getArticle } from './data/articles'

const PAGES = {
  home: Home,
  thesis: Thesis,
  foundrx: FoundrX,
  team: Team,
  partners: Partners,
  insights: Insights,
  contact: Contact,
  privacy: PrivacyPolicy,
  terms: TermsOfUse,
}

const VALID_PAGES = new Set(Object.keys(PAGES))

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (!raw) return { page: 'home', slug: null }

  if (raw.startsWith('article/')) {
    const slug = raw.slice(8)
    if (getArticle(slug)) return { page: 'article', slug }
    return { page: 'insights', slug: null }
  }

  if (VALID_PAGES.has(raw)) return { page: raw, slug: null }
  return { page: 'home', slug: null }
}

function hashFor(page, slug) {
  if (page === 'article' && slug) return `#/article/${slug}`
  if (page === 'home') return ''
  return `#/${page}`
}

export default function App() {
  const [page, setPage] = useState('home')
  const [articleSlug, setArticleSlug] = useState(null)
  const [key, setKey] = useState(0)

  const applyRoute = useCallback(({ page: p, slug }) => {
    setPage(p)
    setArticleSlug(slug)
    setKey((k) => k + 1)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const navigate = useCallback((id, slug = null) => {
    const nextHash = hashFor(id, slug)
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash
    }
    applyRoute({ page: id, slug })
  }, [applyRoute])

  useEffect(() => {
    const onHashChange = () => applyRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    onHashChange()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [applyRoute])

  const renderPage = () => {
    if (page === 'article') {
      return <Article slug={articleSlug} onNav={navigate} />
    }
    const PageComponent = PAGES[page] || Home
    return <PageComponent onNav={navigate} />
  }

  return (
    <>
      <Loader />
      <Cursor />
      <Nav current={page} onNav={navigate} />
      <main key={key} className="page-enter">
        {renderPage()}
      </main>
    </>
  )
}
