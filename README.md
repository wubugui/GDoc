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

## 部署到 GitHub Pages

本站部署到 **GitHub Pages**，线上地址：<https://wubugui.github.io/GDoc/>。

- **源码**在 `main` 分支；**构建产物**推送到 `gh-pages` 分支，Pages 从该分支的根目录 `/` 提供服务。
- 站点配置（`docusaurus.config.js`）：`url = https://wubugui.github.io`、`baseUrl = /GDoc/`、`organizationName = wubugui`、`projectName = GDoc`、`deploymentBranch = gh-pages`。

### 重新部署（改完文档后）

```bash
git add -A && git commit -m "更新文档" && git push   # 先推源码到 main
GIT_USER=wubugui USE_SSH=false npm run deploy          # 构建并推到 gh-pages
```

`npm run deploy` 会 `docusaurus build` 后把 `build/` 推到 `gh-pages`。约 30 秒后线上生效。

> 首次部署时 `gh-pages` 分支尚不存在，`docusaurus deploy` 会因找不到该分支而报错——已通过手动创建 `gh-pages` 分支解决；此后 `npm run deploy` 可正常增量部署。

### 可选：改用 GitHub Actions 自动部署

想让每次 push 到 `main` 就自动构建部署（免手动 `npm run deploy`）：

1. 给 `gh` 令牌补 `workflow` 权限：`gh auth refresh -h github.com -s workflow`
2. 加一个 Actions 工作流（`actions/upload-pages-artifact` + `actions/deploy-pages`），推到 `main`
3. 仓库 **Settings → Pages → Source** 改为 **GitHub Actions**

> 当前令牌无 `workflow` 权限，故先用 `gh-pages` 分支方式部署；上面三步可随时升级为自动部署。

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
- **部署**: GitHub Pages（`gh-pages` 分支）

## 文档建设阶段

本站按阶段推进（每阶段独立可部署、独立有价值）：

- ✅ **第 1 阶段**：脚手架 + 部署链路 + 首页 + 工具速查表 + 启动架构图（当前）
- 🟡 **第 2 阶段**：主编辑器手册（30 面板 + 3 通用控件）、生产工作台（10 Tab）、核心专项编辑器
- 🟡 **第 3 阶段**：资产/渲染/模拟/文案域编辑器手册
- 🔵 **第 4 阶段**：教程（端到端）+ 开发文档（C4 图、Godot 移植工作流）
- 🟣 **第 5 阶段**：玩家手册 + 活文档自动化（从 parity JSON 渲染架构现状页）
