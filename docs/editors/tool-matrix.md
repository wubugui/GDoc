---
id: tool-matrix
title: 工具速查表
sidebar_position: 3
slug: /editors/tool-matrix
---

# 工具速查表

GameDraft 全部 **20 个编辑器/工具** 的一览表。按域分组，每个工具给出用途、技术形态、启动方式、文档状态。

> 想看启动链怎么串起来 → [启动架构](./launch-architecture)
> 想知道该用哪个入口 → [编辑器总览](./overview)

---

## 统一启动命令

绝大多数工具用 `./dev.sh <task>` 启动（task 名见下表"启动"列）。少数未注册到 `dev.sh` 的工具，用 `python -m tools.<module>` 或通过主编辑器菜单拉起。

---

## 主编辑器与生产工具

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **主编辑器** | PySide6 桌面 | `./dev.sh editor` | 🟡 无独立 README，但 `editor-authoring-surface.md` 是事实手册 |
| **生产工作台** | PySide6 桌面（10 Tab） | `./dev.sh workbench` | 🔴 无 |
| **Web 控制台** | Python Web | `./dev.sh console` | 🔴 无 |

---

## 资产域

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **asset_browser** 资源浏览器 | PySide6 桌面 | `./dev.sh asset-browser` | 🔴 无 |
| **asset_ingest** 分类导入 | PySide6 桌面 | `./dev.sh asset-ingest` | 🔴 无 |
| **image_resizer** 图片缩放/镜像 | PySide6 桌面 | `./dev.sh image-resizer` | 🔴 无（工具极简单） |
| **video_to_atlas** 视频→图集 | PySide6 桌面 | `python -m tools.video_to_atlas` 或主编辑器菜单 | 🟢 详细 |
| **animation_pipeline** 动画后处理 | 命令行（无 GUI） | `python -m tools.animation_pipeline.produce --clips-dir <dir> --out <dir>` | 🟢 详细 |

---

## 动画域

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **anim_preview** 动画预览 | Web 应用（PixiJS） | `./dev.sh anim-preview` 或 `npm run dev:anim-preview`（端口 5199） | 🔴 无（启动在 `__main__.py` docstring） |

---

## 图与叙事域

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **dialogue_graph_editor** 图对话编辑器 | PySide6 桌面 | `./dev.sh dialogue-graph`（带 `--project`） | 🟡 无独立 README，`editor-authoring-surface.md` 有专节 |
| **graph_editor** 通用图编辑器 | PySide6 桌面 | `python -m tools.graph_editor --project <root>` 或主编辑器菜单 | 🔴 无（语义最模糊，待澄清） |
| **narrative_editor_web** 叙事状态机 | Web 应用（React Flow） | `npm run dev:narrative-editor`（默认嵌入主编辑器） | 🔴 无（authoring-surface 有专节） |

---

## 渲染域

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **scene_depth_editor** 场景深度重建 | Tkinter 桌面 | `python -m tools.scene_depth_editor` 或主编辑器菜单 | 🔴 无 |
| **lightvolume_lab** 光照体积烘焙 | Web 应用 | `./dev.sh lightvol`（端口 8099） | 🔴 无（启动在 `__main__.py` docstring） |
| **parallax_editor** 视差场景编辑器 | Web 应用（PixiJS） | `./dev.sh parallax-editor` 或 `npm run dev:parallax-editor`（端口 5205） | 🔴 无 |
| **filter_tool** 滤镜工具 | PySide6 桌面 | `./dev.sh filter-tool` 或 `npm run filter-tool` | 🟢 简略完整 |

---

## 文案域

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **copy_manager** 文案管理/导出 | PySide6 桌面 | `python -m tools.copy_manager` 或主编辑器菜单 | 🔴 无 |

---

## 模拟域

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **chronicle_sim_v2** 编年史 v2 | PySide6 桌面 GUI | `./dev.sh chronicle-sim-v2` | 🟡 中等（偏运维） |
| **chronicle_sim_v3** 编年史 v3 | 命令行（typer） | `./dev.sh chronicle-sim` | 🔴 无（18 类节点需从代码提炼） |

---

## 语言服务

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **json_lang** JSON 即语言 IDE/LSP | CLI + LSP server + VS Code 扩展 | `./dev.sh json-lang`（构建 schema） | 🟢 非常详细 |

---

## 治理台

| 工具 | 形态 | 启动 | README 状态 |
|---|---|---|---|
| **skill_workflow_governance** | CLI + dashboard.html + MCP server | `./dev.sh skill-governance` | 🟢 详细 |

---

## README 状态图例

| 图例 | 含义 | 写手册工作量 |
|---|---|---|
| 🟢 详细 | README 充分，可直接整理成用户手册 | 小 |
| 🟡 中等/有专节 | README 偏运维，或 authoring-surface 有字段专节 | 中 |
| 🔴 无 | 无任何文档，需从代码提炼 | 大 |

---

## 按文档状态统计

- 🟢 **有详细 README**（4 个）：animation_pipeline、json_lang、video_to_atlas、skill_workflow_governance（+ filter_tool 简略完整）
- 🟡 **有部分素材**（4 个）：主编辑器、dialogue_graph_editor、narrative_editor_web、chronicle_sim_v2
- 🔴 **完全无文档**（12 个）：asset_browser、asset_ingest、image_resizer、graph_editor、copy_manager、scene_depth_editor、parallax_editor、anim_preview、lightvolume_lab、dev_console、production_workbench、chronicle_sim_v3

:::info 工作量分级（后续阶段参考）
- **S 级（最大）**：主编辑器（30 面板 + 40 共享控件）
- **A 级（大）**：production_workbench（10 Tab）、dev_console（作为总入口必写）
- **B 级（中）**：graph_editor、chronicle_sim_v3、copy_manager、scene_depth_editor、parallax_editor
- **C 级（小）**：其余工具职责清晰，整理成统一格式即可
:::
