import { useState } from 'react'
import GalleryModal from './GalleryModal.jsx'
import { strengthCategories } from '../data/galleryData.js'
import './Strengths.css'

export default function Strengths() {
  const [activeCategory, setActiveCategory] = useState(null)

  const strengths = [
    {
      key: 'brand',
      icon: 'brand',
      title: '品牌设计',
      subtitle: 'Brand Design',
      description: '从非遗宣传手册到拾光、麦香等品牌LOGO，覆盖品牌策略与视觉识别全链路，打造高辨识度品牌形象。',
      tags: ['LOGO设计', 'VI系统', '品牌手册', '品牌策略'],
    },
    {
      key: 'ai',
      icon: 'ai',
      title: 'AI创意',
      subtitle: 'AI Creative',
      description: '将AI生成能力与设计思维结合，探索超现实场景与东方意境的视觉可能，构建高效创意工作流。',
      tags: ['AI绘画', '智能辅助', '创意探索', '效率提升'],
    },
    {
      key: 'visual',
      icon: 'visual',
      title: '视觉传达',
      subtitle: 'Visual Design',
      description: '节气插画、主题海报、涂鸦与水墨书画等多媒介视觉表达，精准把控画面节奏与视觉张力。',
      tags: ['插画设计', '海报设计', '排版设计', '图形创意'],
    },
    {
      key: '3d',
      icon: '3d',
      title: '三维',
      subtitle: '3D Design',
      description: '掌握 C4D 与 Blender 等三维工具，具备 Low Poly 场景构建与产品可视化能力，为项目增添立体层次。',
      tags: ['C4D', 'Blender', '产品渲染', '场景构建'],
    },
    {
      key: 'type',
      icon: 'type',
      title: '字体',
      subtitle: 'Typography',
      description: '汉字字体与书法字创作，从品牌字到主题字，探索字形结构、笔画韵律与文化的结合。',
      tags: ['字体设计', '书法字', '字形创意', '品牌字'],
    },
    {
      key: 'other',
      icon: 'other',
      title: '其他',
      subtitle: 'Others',
      description: 'IP形象设定与影视分镜等更多维度设计尝试，展示跨领域适应能力与多元创作视野。',
      tags: ['IP设定', '影视分镜', '跨领域', '多元创作'],
    },
  ]

  const getIcon = (type) => {
    const icons = {
      brand: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      ai: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"></rect>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"></circle>
        </svg>
      ),
      visual: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <path d="M21 15l-5-5L5 21"></path>
        </svg>
      ),
      '3d': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      type: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
      ),
      other: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1"></rect>
        </svg>
      ),
    }
    return icons[type] || icons.brand
  }

  const openGallery = (strength) => {
    const category = strengthCategories.find((c) => c.key === strength.key)
    if (category) setActiveCategory(category)
  }

  return (
    <section className="strengths section" id="strengths">
      <div className="container">
        <div className="strengths__header">
          <span className="section-label">个人优势</span>
          <h2 className="section-title">
            多维度<strong>设计能力</strong>
          </h2>
          <p className="strengths__intro">
            从品牌到 AI 创意，从平面到三维，从字体到多元探索，
            构建全面且深入的设计能力矩阵。点击卡片查看对应作品。
          </p>
        </div>

        <div className="strengths__grid">
          {strengths.map((strength, index) => (
            <div
              key={strength.key}
              className="strength-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openGallery(strength)}
            >
              <div className="strength-card__icon">
                {getIcon(strength.icon)}
              </div>
              <div className="strength-card__content">
                <div className="strength-card__head">
                  <h3 className="strength-card__title">{strength.title}</h3>
                  <span className="strength-card__subtitle">{strength.subtitle}</span>
                </div>
                <p className="strength-card__description">{strength.description}</p>
                <div className="strength-card__tags">
                  {strength.tags.map((tag, i) => (
                    <span key={i} className="strength-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="strength-card__number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="strength-card__glow"></div>
            </div>
          ))}
        </div>
      </div>

      {activeCategory && (
        <GalleryModal category={activeCategory} onClose={() => setActiveCategory(null)} />
      )}
    </section>
  )
}
