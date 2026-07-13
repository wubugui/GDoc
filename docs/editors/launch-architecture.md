---
id: launch-architecture
title: 启动架构
sidebar_position: 2
slug: /editors/launch-architecture
---

# 启动架构

所有编辑器共享**一条三层启动链**。理解这条链，你就知道每个工具是怎么被拉起来的，以及出问题时去哪查。

---

## 三层启动链

```mermaid
flowchart LR
    U["👤 用户命令<br/>./dev.sh &lt;task&gt;"] -->|"exec python -m tools.dev"| D["Task Runner<br/>tools/dev/__main__.py"]
    U2["🌐 Web 控制台<br/>./dev.sh console"] -->|"launch_tool(task)" --> U
    U3["📦 npm scripts<br/>(3 个 Web 工具)"] --> D
    D -->|"查 TOOL_MODULES 映射表"| L["Launcher<br/>tools/dev/launch.py"]
    L -->|"python -m tools.&lt;module&gt;" --> T["实际工具进程"]

    style U fill:#e1f5ff
    style U2 fill:#e1f5ff
    style U3 fill:#e1f5ff
    style T fill:#fff4e1
```

**三层职责**：

| 层 | 文件 | 职责 |
|---|---|---|
| ① 入口层 | `dev.sh`（一行）· `dev.sh console`（Web）· `npm run *` | 用户敲的命令 |
| ② 调度层 | `tools/dev/__main__.py` + `tools/dev/launch.py` | 注册子命令、查 `TOOL_MODULES` 映射表、注入工程根作 cwd |
| ③ 工具层 | `python -m tools.<module>` | 真正的编辑器进程 |

---

## TOOL_MODULES：工具启动映射表（权威源）

`tools/dev/launch.py` 里的 `TOOL_MODULES` 字典是**"task 名 → 模块"的权威映射**。下表是当前注册的 16 个工具（数据来自该文件）：

| task 名 | 实际模块 | 说明 |
|---|---|---|
| `console` | `tools.dev_console` | **Web 控制台**（启动器/仪表盘） |
| `editor` | `tools.editor` | **主编辑器**（内容创作中枢） |
| `asset-browser` | `tools.asset_browser.main` | 资源内容浏览器 |
| `asset-ingest` | `tools.asset_ingest.main` | 分类导入窗口 |
| `image-resizer` | `tools.image_resizer` | 图片缩放/镜像 |
| `dialogue-graph` | `tools.dialogue_graph_editor` | 图对话编辑器 |
| `workbench` | `tools.production_workbench` | 生产工作台 |
| `chronicle-sim-v2` | `tools.chronicle_sim_v2` | 编年史模拟器 v2（GUI） |
| `chronicle-sim` | `tools.chronicle_sim_v3` | 编年史模拟器 v3（CLI） |
| `filter-tool` | `tools.filter_tool` | 滤镜工具 |
| `lightvol` | `tools.lightvolume_lab` | 光照体积烘焙 |
| `anim-preview` | `tools.anim_preview` | 动画预览 |
| `parallax-editor` | `tools.parallax_editor` | 视差场景编辑器 |
| `skill-governance` | `tools.skill_workflow_governance.console` | Skill/Workflow 治理台 |
| `validate-data` | `tools.editor.validate` | 数据校验 |
| `json-lang` | `tools.json_lang.build` | json_lang 索引器 |

:::note 注意
`graph_editor`、`copy_manager`、`scene_depth_editor`、`video_to_atlas` **不在** `TOOL_MODULES` 里——它们通过**主编辑器的 `Tools → 外部工具` 菜单**拉起，或直接 `python -m tools.<module>`。详见各工具页。
:::

---

## Web 工具的特殊启动路径

3 个 Web 工具（`anim_preview` / `parallax_editor` / `narrative_editor_web`）有额外的 npm 入口：

| 命令 | 等价 dev.sh task | 用途 |
|---|---|---|
| `npm run dev:anim-preview` | `./dev.sh anim-preview` | 动画预览（Vite 端口 5199） |
| `npm run dev:parallax-editor` | `./dev.sh parallax-editor` | 视差编辑器（Vite 端口 5205） |
| `npm run dev:narrative-editor` | （仅主编辑器嵌入） | 叙事状态机编辑器 |

Web 工具的共性：**Python 起本地静态/Vite 服务 → 自动开浏览器**，复用 `tools.dev.paths` 定位工程根与 Node。

---

## Agent Canvas OS（独立仓库，非 tools 模块）

`dev.sh` 还能拉起 **Agent Canvas OS**——但它**不在 GameDraft 仓库**，是 `~/AIWork/agent-canvas-os` 下的独立项目，通过 `scripts/start.sh` 启动（端口 3100）。属于工作流辅助工具，不属于编辑器矩阵。

---

## 排错指引

| 症状 | 原因 / 处理 |
|---|---|
| `Project Python runtime missing` | 没跑过 `./bootstrap.sh`，项目 Python 环境未就绪。先 `./bootstrap.sh`。 |
| task 名拼错 | 对照上面 `TOOL_MODULES` 表的 task 名，区分大小写与连字符（如 `asset-ingest` 不是 `asset_ingest`）。 |
| Web 工具起不来 | 检查 Node 版本（需 20+），以及端口是否被占用。 |
| 主编辑器菜单拉起外部工具失败 | 那 4 个未注册工具（graph_editor/copy_manager/scene_depth_editor/video_to_atlas）依赖被正确安装，且工作目录在工程根。 |

---

## 接下来

- [工具速查表](./tool-matrix) —— 查任意工具的启动命令与形态
- [主编辑器](./main-editor/overview) —— 内容创作核心
