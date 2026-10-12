import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }

      reset() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.1
        this.life = Math.random() * 200 + 100
        this.maxLife = this.life
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life--
        const lifeRatio = this.life / this.maxLife
        this.opacity = (lifeRatio < 0.5 ? lifeRatio * 2 : (1 - lifeRatio) * 2) * 0.4
        if (this.life <= 0 ||
            this.x < -50 || this.x > window.innerWidth + 50 ||
            this.y < -50 || this.y > window.innerHeight + 50) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 201, 204, ${this.opacity})`
        ctx.fill()
      }
    }

    const particleCount = Math.min(120, Math.floor(window.innerWidth / 15))
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(107, 138, 253, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    let time = 0
    const drawFluidLayer = () => {
      time += 0.003
      const gradient = ctx.createRadialGradient(
        window.innerWidth * 0.7 + Math.sin(time) * 100,
        window.innerHeight * 0.5 + Math.cos(time * 0.7) * 80,
        0,
        window.innerWidth * 0.7,
        window.innerHeight * 0.5,
        500
      )
      gradient.addColorStop(0, 'rgba(107, 138, 253, 0.06)')
      gradient.addColorStop(0.5, 'rgba(107, 138, 253, 0.02)')
      gradient.addColorStop(1, 'rgba(107, 138, 253, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      const gradient2 = ctx.createRadialGradient(
        window.innerWidth * 0.2 + Math.cos(time * 0.8) * 60,
        window.innerHeight * 0.7 + Math.sin(time * 0.5) * 100,
        0,
        window.innerWidth * 0.2,
        window.innerHeight * 0.7,
        400
      )
      gradient2.addColorStop(0, 'rgba(200, 201, 204, 0.04)')
      gradient2.addColorStop(1, 'rgba(200, 201, 204, 0)')
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      drawFluidLayer()
      particles.forEach(p => { p.update(); p.draw() })
      drawLines()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__canvas-wrap">
        <canvas ref={canvasRef} className="hero__canvas" />
        <div className="hero__vignette"></div>
        <div className="hero__grid-overlay"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__meta">
          <span className="hero__meta-dot"></span>
          <span>Portfolio · 2026</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-text">视觉设计</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-text hero__title-text--light">
              与 <em>AI</em> 创意共生
            </span>
          </span>
        </h1>

        <p className="hero__subtitle">
          何一梦 — 视觉设计师 / AI设计师 / 品牌设计师
          <br />
          用设计语言诠释创意，以技术拓展想象边界
        </p>

        <div className="hero__actions">
          <a href="#works" className="hero__btn hero__btn--primary">
            <span>查看作品</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            联系合作
          </a>
        </div>

        <div className="hero__scroll-hint">
          <span>向下滚动</span>
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  )
}
