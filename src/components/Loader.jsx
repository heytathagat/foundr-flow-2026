import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-logo">Foundr<span>Flow</span></div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  )
}
