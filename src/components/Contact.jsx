import { useState, useEffect } from 'react'
import './Contact.css'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  useEffect(() => {
    if (!qrOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setQrOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [qrOpen])

  const contactItems = [
    {
      label: '邮箱',
      value: '3093167464@qq.com',
      href: 'mailto:3093167464@qq.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      label: '电话',
      value: '17739242558',
      href: 'tel:17739242558',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      label: '微信',
      value: '扫码添加',
      href: '#',
      qr: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
    {
      label: '位置',
      value: '河南 · 鹤壁',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="contact__bg">
        <div className="contact__bg-grid"></div>
        <div className="contact__bg-glow"></div>
      </div>

      <div className="container">
        <div className="contact__inner">
          <div className="contact__header">
            <span className="section-label">联系合作</span>
            <h2 className="contact__title">
              期待与你
              <br />
              <strong>共创精彩</strong>
            </h2>
            <p className="contact__subtitle">
              无论是品牌设计、视觉创意还是项目合作，
              欢迎随时联系，让我们一起探索设计的无限可能。
            </p>

            <div className="contact__list">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`contact-item ${item.qr ? 'contact-item--qr' : ''}`}
                  onClick={(e) => {
                    if (item.qr) {
                      e.preventDefault()
                      setQrOpen(true)
                    }
                  }}
                >
                  <div className="contact-item__icon">{item.icon}</div>
                  <div className="contact-item__content">
                    <span className="contact-item__label">{item.label}</span>
                    <span className="contact-item__value">{item.value}</span>
                  </div>
                  {item.qr ? (
                    <img src="/qr.png" alt="微信二维码" className="contact-item__qr-thumb" />
                  ) : (
                    <svg className="contact-item__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-header">
              <h3 className="contact__form-title">发送消息</h3>
              <p className="contact__form-subtitle">填写下方表单，我会尽快回复您</p>
            </div>

            <div className="contact__form-body">
              <div className="contact__field">
                <label className="contact__label">您的称呼</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="请输入您的姓名"
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">邮箱地址</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="请输入您的邮箱"
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">项目描述</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="简单描述一下您的项目需求..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact__submit" disabled={submitted}>
                {submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    发送成功
                  </>
                ) : (
                  <>
                    <span>发送消息</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* 页脚 */}
        <footer className="footer">
          <div className="footer__top">
            <div className="footer__brand">
              <span className="footer__logo">HYM</span>
              <span className="footer__name">何一梦 · 设计师作品集</span>
            </div>
            <div className="footer__nav">
              <a href="#hero">首页</a>
              <a href="#about">关于</a>
              <a href="#works">作品</a>
              <a href="#strengths">能力</a>
              <a href="#contact">联系</a>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copy">
              © 2026 何一梦 He Yimeng. All rights reserved.
            </p>
            <p className="footer__tag">
              Designed &amp; Crafted with passion
            </p>
          </div>
        </footer>
      </div>

      {qrOpen && (
        <div className="contact__qr-modal" onClick={() => setQrOpen(false)}>
          <div className="contact__qr-panel" onClick={(e) => e.stopPropagation()}>
            <button className="contact__qr-close" onClick={() => setQrOpen(false)} aria-label="关闭">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src="/qr.png" alt="微信二维码" className="contact__qr-img" />
            <p className="contact__qr-title">微信扫码 · 期待与您交流</p>
            <p className="contact__qr-sub">何一梦 He Yimeng</p>
          </div>
        </div>
      )}
    </section>
  )
}
