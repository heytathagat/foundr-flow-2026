import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.left = `${mx}px`
        dot.current.style.top = `${my}px`
      }
    }

    const lerp = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      if (ring.current) {
        ring.current.style.left = `${rx}px`
        ring.current.style.top = `${ry}px`
      }
      raf = requestAnimationFrame(lerp)
    }

    const expand = () => {
      dot.current?.classList.add('expand')
      ring.current?.classList.add('expand')
    }
    const shrink = () => {
      dot.current?.classList.remove('expand')
      ring.current?.classList.remove('expand')
    }

    const interactive = 'button, a, .insight-item, .team-card, .focus-card, .thesis-item, .legal-card, .city-pill'

    document.addEventListener('mousemove', move)
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    raf = requestAnimationFrame(lerp)
    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
