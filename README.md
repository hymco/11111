# 何一梦设计作品集网站（可部署源码包）

视觉设计师 / AI设计师 / 品牌设计师 个人作品集网站，暗色高级、克制、科技感风格，PC 端优先，版心 1700px。

## 技术栈

- React 18 + Vite 5
- 纯手写 CSS（设计令牌集中在 `src/styles/global.css`）
- 无第三方 UI 组件库

## 页面结构

| 模块 | 说明 |
|---|---|
| Hero 首页 | 全屏首屏，Canvas 粒子流体动画背景 + 大标题 + 导航栏 + 联系按钮 |
| About 关于 | 新寸照头像、个人介绍、教育背景、实习经历、项目数据、技能条、获奖证书 |
| Works 作品 | 8 个筛选器 + 7 张真实作品大卡片，**点击卡片弹出该分类完整作品集画廊**（共 62 张） |
| Strengths 能力 | 6 张可点击能力卡片（品牌设计 / AI创意 / 视觉传达 / 三维 / 字体 / 其他），**点击弹出对应作品画廊**（共 43 张），支持分类总结 |
| Contact 联系 | 整屏收尾页 + 微信二维码（点击放大）+ 联系表单 + 页脚 |

作品画廊交互：弹层展示分类名称、作品数量、一句话分类总结；主图舞台左右切换、缩略图滚动条、图注说明；点击主图放大；键盘支持 Esc 关闭、← → 切换。

## 本地运行

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
```

## 构建与部署

```bash
npm run build      # 产物输出到 dist/
npm run preview    # 本地预览构建产物
```

将 `dist/` 目录上传到任意静态托管（Nginx / Vercel / Netlify / 腾讯云 COS / 阿里云 OSS 等）即可完成部署。
项目使用 `base: './'` 相对路径，可部署在任意子路径下。

## 目录结构

```
he-yimeng-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── avatar.jpg              # 头像（新寸照，白底深蓝西装证件照）
│   ├── qr.png                  # 微信二维码（Contact 点击放大）
│   ├── works/                  # 7 张封面图 + 7 大分类详情图（62 张，本地化）
│   │   ├── 01-packaging.jpg    # 包装·玉露仙竹山竹茶饮（2026 参赛）封面
│   │   ├── 02-poster.jpg       # 招贴·她力量铸红魂（2026 参赛）封面
│   │   ├── 03-book.jpg         # 书籍设计系列（2026）封面
│   │   ├── 04-poster.jpg       # 海报·未来海洋环保公益（2026）封面
│   │   ├── 05-ip.png           # IP·沧充亭狮冲冲文旅IP（2025）封面
│   │   ├── 06-vi.jpg           # VI·梦远旅行社 VIS 手册（2026）封面
│   │   ├── 07-cultural.jpg     # 文创·雄安站地域文创（2024 获奖）封面
│   │   └── packaging/ poster/ book/ haibao/ ip/ vi/ cultural/   # 分类详情图
│   └── strengths/              # 个人优势 6 类作品（43 张）
│       ├── brand/              # 品牌设计（泥咕咕手册 + LOGO合集）
│       ├── ai/                 # AI创意（清凉一夏/天空之城/匹诺曹漂流记）
│       ├── visual/             # 视觉传达（节气插画/海报/涂鸦/水墨）
│       ├── 3d/                 # 三维（Low Poly 场景）
│       ├── type/               # 字体（字体与书法字）
│       └── other/              # 其他（莲小艾IP/影视分镜）
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/global.css       # 设计令牌：色彩/字体/间距/动效
    ├── data/galleryData.js     # 13 个分类画廊数据集中管理（105 张作品）
    └── components/             # Navbar / Hero / About / Works / Strengths / Contact / GalleryModal
```

## 内容维护

- 新增/调整作品：修改 `src/data/galleryData.js`（分类、图片路径、总结文案），图片放入 `public/works/` 或 `public/strengths/` 对应目录。
- 更换头像：覆盖 `public/avatar.jpg`（建议 3:4 竖版）。
- 更换微信二维码：覆盖 `public/qr.png`。
- 联系方式：`src/components/About.jsx` 与 `src/components/Contact.jsx` 中的电话（17739242558）、邮箱（3093167464@qq.com）。

## 版本记录

- v0.3.0：头像换新寸照；Contact 新增微信二维码（点击放大）；Works 7 大卡片点击弹出分类完整作品画廊（62 张）；Strengths 重构为 6 张可点击能力卡片（品牌/AI创意/视觉传达/三维/字体/其他）并弹出对应作品画廊（43 张），未覆盖作品归入"其他设计"，支持分类总结；新增共享画廊组件 GalleryModal 与 galleryData 数据层。
- v0.2.0：按更新版简历更新 About 全部信息；Works 重构为 7 大分类筛选 + 7 张真实作品图；年份更新为 2026。
