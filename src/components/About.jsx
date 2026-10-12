import './About.css'

export default function About() {
  const stats = [
    { value: '7+', label: '设计领域' },
    { value: '30+', label: '项目经验' },
    { value: '5+', label: '专业奖项' },
    { value: '2', label: '院校深造' },
  ]

  const skills = [
    { name: 'Photoshop', level: 95 },
    { name: 'Illustrator', level: 90 },
    { name: 'InDesign', level: 85 },
    { name: 'C4D', level: 70 },
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">关于我</span>
          <h2 className="section-title">
            用<strong>创意</strong>和<strong>技术</strong>
            <br />
            塑造视觉体验
          </h2>
        </div>

        <div className="about__grid">
          {/* 左侧：头像与基本信息 */}
          <div className="about__profile">
            <div className="about__avatar-wrap">
              <div className="about__avatar-frame">
                <img src="/avatar.jpg" alt="何一梦" className="about__avatar" />
              </div>
              <div className="about__avatar-glow"></div>
            </div>

            <div className="about__info">
              <h3 className="about__name">何一梦</h3>
              <p className="about__role">视觉设计师 / AI设计师 / 品牌设计师</p>

              <div className="about__meta-list">
                <div className="about__meta-item">
                  <span className="about__meta-label">所在地</span>
                  <span className="about__meta-value">河南 · 鹤壁</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">出生</span>
                  <span className="about__meta-value">2004.09</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">邮箱</span>
                  <a href="mailto:3093167464@qq.com" className="about__meta-value about__meta-link">
                    3093167464@qq.com
                  </a>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">电话</span>
                  <a href="tel:17739242558" className="about__meta-value about__meta-link">
                    17739242558
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 中间：个人介绍 */}
          <div className="about__bio">
            <div className="about__bio-block">
              <h4 className="about__bio-title">个人简介</h4>
              <p className="about__bio-text">
                视觉传达专业本科在读，具备专科阶段扎实的美术与设计功底。拥有商业设计师助理实习经历，参与文旅、餐饮方向商业落地项目。
              </p>
              <p className="about__bio-text">
                熟练PS、AI、InDesign平面全套软件，掌握C4D三维动效基础。拥有国家级、省级多项设计竞赛获奖经历，具备广告海报、品牌文创、包装版式的创意执行能力。
              </p>
              <p className="about__bio-text">
                善于理解业务需求，能够完成多轮方案迭代改稿，自主学习能力强，抗压能力良好，注重设计落地性。
              </p>
            </div>

            <div className="about__bio-block">
              <h4 className="about__bio-title">教育背景</h4>
              <div className="about__timeline">
                <div className="about__timeline-item">
                  <div className="about__timeline-dot"></div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-head">
                      <span className="about__timeline-school">沧州交通学院</span>
                      <span className="about__timeline-date">2025.09 — 2027.06</span>
                    </div>
                    <p className="about__timeline-detail">
                      视觉传达设计 · 本科在读
                    </p>
                    <p className="about__timeline-sub">
                      PS / AI / 插画设计 / 排版设计 / 字体设计 / IP设计 / C4D设计 / 智能辅助创意设计
                    </p>
                  </div>
                </div>

                <div className="about__timeline-item">
                  <div className="about__timeline-dot"></div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-head">
                      <span className="about__timeline-school">河北工艺美术职业学院</span>
                      <span className="about__timeline-date">2022.09 — 2025.06</span>
                    </div>
                    <p className="about__timeline-detail">
                      视觉传达设计专业 · 专科
                    </p>
                    <p className="about__timeline-sub">
                      插画设计 / 海报设计 / 字体设计 / UI设计 / 广告设计 / 包装设计 / 文创设计 / 图形创意设计
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__bio-block">
              <h4 className="about__bio-title">实习经历</h4>
              <div className="about__timeline">
                <div className="about__timeline-item">
                  <div className="about__timeline-dot"></div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-head">
                      <span className="about__timeline-school">石家庄斯艾旅游开发有限责任公司</span>
                      <span className="about__timeline-date">2024.08 — 2025.03</span>
                    </div>
                    <p className="about__timeline-detail">
                      设计师助理实习生
                    </p>
                    <p className="about__timeline-sub">
                      承接文旅、餐饮类商业落地设计工作，完成海报、宣传画册、线下物料排版等设计任务，累计输出落地物料30余份
                    </p>
                    <p className="about__timeline-sub">
                      参与多个商业项目前期创意构思，搜集整理视觉参考素材，根据品牌调性完成多轮方案迭代修改
                    </p>
                    <p className="about__timeline-sub">
                      协同团队对接业务需求，把控设计输出规范，兼顾视觉效果与印刷落地可行性，经手项目客户满意度95%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：数据与技能 */}
          <div className="about__sidebar">
            <div className="about__stats">
              {stats.map((stat, index) => (
                <div key={index} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about__skills">
              <h4 className="about__skills-title">技能掌握</h4>
              <div className="about__skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="about__skill-item">
                    <div className="about__skill-head">
                      <span className="about__skill-name">{skill.name}</span>
                      <span className="about__skill-level">{skill.level}%</span>
                    </div>
                    <div className="about__skill-bar">
                      <div
                        className="about__skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__awards">
              <h4 className="about__awards-title">获奖与证书</h4>
              <ul className="about__awards-list">
                <li>学校三等奖学金</li>
                <li>临摹比赛二等奖</li>
                <li>大广赛河北省优秀奖</li>
                <li>学院奖国家优秀奖</li>
                <li>学校文创比赛获奖</li>
                <li>普通话二乙证书</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
