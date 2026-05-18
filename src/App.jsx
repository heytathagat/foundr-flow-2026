import { useState } from 'react'
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

export default function App() {
  const [page, setPage] = useState('home')
  const [articleSlug, setArticleSlug] = useState(null)
  const [key, setKey] = useState(0)

  const navigate = (id, slug = null) => {
    setPage(id)
    setArticleSlug(slug)
    setKey((k) => k + 1)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

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
