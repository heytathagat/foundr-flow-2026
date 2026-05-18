export default function Logo({ className = '', height = 28, onClick }) {
  const wrapClass = `logo-img-wrap${onClick ? ' logo-btn' : ''}${className ? ` ${className}` : ''}`
  const img = <img src="/foundrflow.jpg" alt="Foundr Flow" className="logo-img" style={{ height }} />

  if (onClick) {
    return (
      <button type="button" className={wrapClass} onClick={onClick}>
        {img}
      </button>
    )
  }
  return <span className={wrapClass}>{img}</span>
}
