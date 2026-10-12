import { useState, useEffect, useCallback } from 'react'
import './GalleryModal.css'

export default function GalleryModal({ category, onClose }) {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  const images = category.images || []
  const total = images.length

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
    setZoomed(false)
  }, [total])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total)
    setZoomed(false)
  }, [total])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  if (!total) return null

  const current = images[index]

  return (
    <div
      className={`gallery-modal ${zoomed ? 'is-zoomed' : ''}`}
      onClick={onClose}
    >
      <div className="gallery-modal__panel" onClick={(e) => e.stopPropagation()}>
        <header className="gallery-modal__header">
          <div className="gallery-modal__head">
            <div>
              <div className="gallery-modal__title-row">
                <h3 className="gallery-modal__title">{category.title}</h3>
                <span className="gallery-modal__count">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
              </div>
              <span className="gallery-modal__subtitle">
                {category.subtitle} · {category.badge}
              </span>
            </div>
            <button className="gallery-modal__close" onClick={onClose} aria-label="关闭">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <p className="gallery-modal__summary">{category.summary}</p>
        </header>

        <div className="gallery-modal__stage">
          <img
            src={current.src}
            alt={current.name}
            className="gallery-modal__image"
            onClick={(e) => {
              e.stopPropagation()
              setZoomed((z) => !z)
            }}
          />
          {total > 1 && (
            <>
              <button className="gallery-modal__nav gallery-modal__nav--prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="上一张">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="gallery-modal__nav gallery-modal__nav--next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="下一张">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="gallery-modal__caption">{current.name}</div>

        {total > 1 && (
          <div className="gallery-modal__thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                className={`gallery-modal__thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => { setIndex(i); setZoomed(false) }}
              >
                <img src={img.src} alt={img.name} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
