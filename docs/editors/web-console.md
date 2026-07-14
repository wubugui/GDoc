---
id: web-console
title: Web 控制台(dev_console)
sidebar_position: 4
slug: /editors/web-console
---

# Web 控制台(dev_console)

GameDraft 的统一本地控制台 / 启动器 / 仪表盘——一站式启动各工具、开关游戏 dev server、跑构建与测试、开治理台。**"不知道该用哪个工具"时,从这里找。**

| 属性 | 值 |
|---|---|
| 模块 | `tools.dev_console` |
| 形态 | Web(自带 HTTP server,浏览器 UI) |
| 启动 | `./dev.sh console`(等价 `python -m tools.dev_console`) |
| 文档状态 | 🔴 无 README |

## 用途

它是 GameDraft 的**统一本地控制台**:把各工具的启动、游戏 dev server 的开关、构建 / 测试、以及治理台都收进一个浏览器界面。当你**不知道该用哪个工具**时,先来这里逛一圈准没错。

## 启动

```bash
./dev.sh console
# 等价:python -m tools.dev_console
```

## 关键事实

### 14 个工具按钮

每个按钮点击后走 `/api/tool` → `launch_tool(task)` 拉起对应工具:

| 按钮 | task | 说明 |
|---|---|---|
| 主编辑器 | `editor` | 主编辑器 |
| 生产工作台 | `workbench` | 生产工作台 |
| 对话图 | `dialogue-graph` | 对话图编辑 |
| 资源浏览器 | `asset-browser` | 资源浏览 |
| 资源入库 | `asset-ingest` | 资源入库 |
| 图片缩放 | `image-resizer` | 图片缩放 |
| 滤镜工具 | `filter-tool` | 滤镜处理 |
| LightVolume 实验室 | `lightvol` | LightVolume 实验室 |
| 动画预览 | `anim-preview` | 动画预览 |
| Parallax 编辑器 | `parallax-editor` | Parallax 编辑 |
| Skill/Workflow 治理 | `skill-governance` | 治理台 |
| Agent Canvas OS | `agent-canvas-os` | 独立仓库 |
| 编年史 v3 | `chronicle-sim` | 编年史模拟 v3 |
| 编年史 v2 | `chronicle-sim-v2` | 编年史模拟 v2 |

### 其它面板

- **游戏 dev server 开关**:端口 5173–5176。
- **Build**:`npm run build`。
- **Test**:`npm test`。
- **场景快捷入口**:从数据动态加载,来自 `map_config.json` / `game_config.json`。
- **叙事 warp 入口**:从数据动态加载,来自 `dev_narrative_warps.json`。

### 注意:不在这 14 个按钮里的工具

以下工具**不**在控制台按钮中,只能 `python -m` 或经主编辑器菜单打开:

- `video_to_atlas`
- `copy_manager`
- `scene_depth_editor`
- `graph_editor`
- `animation_pipeline`
- `json_lang`
- 独立模式的 `narrative_editor_web`

### 实现

- 单文件:`tools/dev_console/app.py`。
- 🔴 无 README。

## 相关

- [主编辑器 · 概览](./main-editor/overview)
- [工具速查表](./tool-matrix)
- [启动架构](./launch-architecture)
