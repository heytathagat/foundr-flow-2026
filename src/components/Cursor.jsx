import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) {
        dot.current.style.left = mx + 'px'
        dot.current.style.top = my + 'px'
      }
    }

    const lerp = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top = ry + 'px'
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

    document.addEventListener('mousemove', move)
    document.querySelectorAll('button, a, .insight-item, .team-card, .focus-card, .thesis-item').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    raf = requestAnimationFrame(lerp)
    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
