# GameDraft 文档站

GameDraft 项目的文档站，基于 [Docusaurus 3](https://docusaurus.io/)。

**这是一个独立项目**——与 GameDraft 游戏仓库（`~/AIWork/GameDraft/`）物理隔离。本仓库不依赖游戏代码，文档内容自包含。

## 内容优先级

1. **编辑器使用手册**（主角）—— 20 个编辑器/工具怎么用
2. **开发文档** —— 项目双壳结构、Godot 移植工作流、命令清单
3. **玩家手册** —— 依赖游戏内容稳定后补充

## 环境要求

- **Node.js ≥ 20**（推荐 20 LTS；当前系统 Node 26 也可用）
- npm

## 本地开发

```bash
npm install        # 安装依赖
npm run start      # 起开发服（默认 http://localhost:3000，热重载）
```

## 构建

```bash
npm run build      # 产出静态文件到 build/
npm run serve      # 本地预览构建产物（http://localhost:3000）
```

## 部署到 Cloudflare Pages

本站部署到 Cloudflare Pages，通过 Git 连接实现自动部署。

### 一次性配置

1. **推到 Git 远程仓库**（GitHub / GitLab / Gitee 均可）：

   ```bash
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```

2. **Cloudflare Pages 连接仓库**：
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Pages → Connect to Git
   - 选择本仓库
   - 构建配置：
     - **Framework preset**: `Docusaurus`
     - **Build command**: `npm run build`
     - **Build output directory**: `build`
     - **Node version**（环境变量）: `NODE_VERSION = 20`（或 22）
   - 点 Save and Deploy

3. **部署后**：每次 push 到主分支自动重新构建部署。PR 会生成预览部署。

### 配置站点域名

部署成功后，Cloudflare 会给一个 `*.pages.dev` 域名。如需自定义域名，在 Pages 项目设置里绑定。

> ⚠️ 绑定自定义域名后，记得改 `docusaurus.config.js` 里的 `url` 字段为你的实际域名。

## 项目结构

```
GameDraft-docs/
├── docs/                # 文档内容（Markdown）
│   ├── editors/         # 编辑器手册（主角）
│   ├── tutorials/       # 教程
│   ├── dev/             # 开发文档
│   ├── reference/       # 参考文档
│   └── player/          # 玩家手册
├── src/                 # Docusaurus 页面/组件/样式
│   ├── pages/           # 首页等独立页
│   └── css/             # 自定义样式
├── static/              # 静态资源（图片等）
├── docusaurus.config.js # 站点配置
├── sidebars.js          # 侧边栏配置
└── package.json
```

## 技术栈

- **框架**: Docusaurus 3.10 (classic preset)
- **搜索**: `@easyops-cn/docusaurus-search-local`（本地中文搜索，无需 Algolia）
- **图表**: `@docusaurus/theme-mermaid`（Mermaid 流程图/架构图）
- **部署**: Cloudflare Pages

## 文档建设阶段

本站按阶段推进（每阶段独立可部署、独立有价值）：

- ✅ **第 1 阶段**：脚手架 + 部署链路 + 首页 + 工具速查表 + 启动架构图（当前）
- 🟡 **第 2 阶段**：主编辑器手册（30 面板 + 3 通用控件）、生产工作台（10 Tab）、核心专项编辑器
- 🟡 **第 3 阶段**：资产/渲染/模拟/文案域编辑器手册
- 🔵 **第 4 阶段**：教程（端到端）+ 开发文档（C4 图、Godot 移植工作流）
- 🟣 **第 5 阶段**：玩家手册 + 活文档自动化（从 parity JSON 渲染架构现状页）
