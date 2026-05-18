import { useState, useEffect } from 'react'
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

const PAGES = { home: Home, thesis: Thesis, foundrx: FoundrX, team: Team, partners: Partners, insights: Insights, contact: Contact }

export default function App() {
  const [page, setPage] = useState('home')
  const [key, setKey] = useState(0)

  const navigate = (id) => {
    setPage(id)
    setKey(k => k + 1)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const PageComponent = PAGES[page] || Home

  return (
    <>
      <Loader />
      <Cursor />
      <Nav current={page} onNav={navigate} />
      <main key={key} className="page-enter">
        <PageComponent onNav={navigate} />
      </main>
    </>
  )
}
