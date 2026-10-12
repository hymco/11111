import { useState } from 'react'
import GalleryModal from './GalleryModal.jsx'
import { worksCategories } from '../data/galleryData.js'
import './Works.css'

export default function Works() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeCategory, setActiveCategory] = useState(null)

  const works = [
    {
      id: 1,
      category: 'packaging',
      galleryKey: 'packaging',
      title: '玉露仙竹·山竹茶饮包装',
      subtitle: 'Packaging Design · 2026',
      description: '以山竹自然意象构建清新雅致的茶饮包装视觉，兼顾货架识别与品牌调性',
      image: '/works/01-packaging.jpg',
      size: 'large',
      tag: '参赛作品',
    },
    {
      id: 2,
      category: 'poster',
      galleryKey: 'poster',
      title: '她力量·铸红魂',
      subtitle: 'Poster Design · 2026',
      description: '巾帼赴国、热血铸魂，以女性力量致敬红色精神，含色彩提取与细节延展',
      image: '/works/02-poster.jpg',
      size: 'tall',
      tag: '参赛作品',
    },
    {
      id: 3,
      category: 'book',
      galleryKey: 'book',
      title: '书籍设计系列',
      subtitle: 'Book Design · 2026',
      description: '从版式、封面到装帧的整体书籍设计实践',
      image: '/works/03-book.jpg',
      size: 'normal',
      tag: '',
    },
    {
      id: 4,
      category: 'poster',
      galleryKey: 'haibao',
      title: '未来海洋 环保公益海报',
      subtitle: 'Poster Design · 2026',
      description: '聚焦海洋塑料污染议题，以视觉张力唤起环保意识',
      image: '/works/04-poster.jpg',
      size: 'wide',
      tag: '',
    },
    {
      id: 5,
      category: 'ip',
      galleryKey: 'ip',
      title: '沧充亭·狮冲冲 文旅IP',
      subtitle: 'IP Design · 2025',
      description: '从角色设定、表情延展到应用场景的系统化IP设计',
      image: '/works/05-ip.png',
      size: 'normal',
      tag: '',
    },
    {
      id: 6,
      category: 'vi',
      galleryKey: 'vi',
      title: '梦远旅行社 VIS 手册',
      subtitle: 'VI System · 2026',
      description: '标志设计、标准制图、标准色与辅助图形的全案品牌手册',
      image: '/works/06-vi.jpg',
      size: 'normal',
      tag: '',
    },
    {
      id: 7,
      category: 'cultural',
      galleryKey: 'cultural',
      title: '雄安站 地域文创',
      subtitle: 'Cultural Creative · 2024',
      description: '将城市地标转化为可携带的文化记忆',
      image: '/works/07-cultural.jpg',
      size: 'tall',
      tag: '获奖作品',
    },
  ]

  const filters = [
    { key: 'all', label: '全部作品' },
    { key: 'packaging', label: '包装设计' },
    { key: 'poster', label: '招贴设计' },
    { key: 'book', label: '书籍设计' },
    { key: 'ip', label: 'IP设计' },
    { key: 'poster2', label: '海报设计' },
    { key: 'vi', label: 'VI手册' },
    { key: 'cultural', label: '文创设计' },
  ]

  const filteredWorks = activeFilter === 'all'
    ? works
    : activeFilter === 'poster2'
      ? works.filter(w => w.id === 4)
      : works.filter(w => w.category === activeFilter)

  const openGallery = (work) => {
    const category = worksCategories.find((c) => c.key === work.galleryKey)
    if (category) setActiveCategory(category)
  }

  return (
    <section className="works section" id="works">
      <div className="container">
        <div className="works__header">
          <div className="works__header-left">
            <span className="section-label">精选作品</span>
            <h2 className="section-title">
              <strong>Selected</strong> Works
            </h2>
          </div>
          <p className="works__intro">
            涵盖包装、招贴、书籍、IP、海报、VI、文创等多个设计领域，
            每一件作品都是创意与执行的结晶。点击卡片查看完整作品集。
          </p>
        </div>

        {/* 筛选器 */}
        <div className="works__filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`works__filter-btn ${activeFilter === filter.key ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 作品网格 */}
        <div className="works__grid">
          {filteredWorks.map((work, index) => (
            <article
              key={work.id}
              className={`work-card work-card--${work.size}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openGallery(work)}
            >
              <div className="work-card__inner">
                <div className="work-card__image-wrap">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="work-card__image"
                    loading="lazy"
                  />
                  <div className="work-card__overlay"></div>
                  <div className="work-card__hover-content">
                    <span className="work-card__view-btn">
                      查看作品集
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="work-card__info">
                  <div className="work-card__meta">
                    <span className="work-card__category">{work.subtitle}</span>
                    <span className="work-card__number">
                      {work.tag ? <span className="work-card__tag-label">{work.tag}</span> : String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="work-card__title">{work.title}</h3>
                  <p className="work-card__description">{work.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 占位提示 */}
        <div className="works__placeholder-note">
          <span className="works__placeholder-dot"></span>
          更多作品持续更新中
        </div>
      </div>

      {activeCategory && (
        <GalleryModal category={activeCategory} onClose={() => setActiveCategory(null)} />
      )}
    </section>
  )
}
