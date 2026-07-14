---
id: scene-depth-editor
title: scene_depth_editor 场景深度重建
sidebar_position: 1
slug: /editors/render-domain/scene-depth-editor
---

# scene_depth_editor 场景深度重建

场景深度重建与碰撞编辑工具——为场景背景生成深度图与碰撞数据，补足主编辑器改不到的部分。

| 属性 | 值 |
|---|---|
| 模块 | `tools.scene_depth_editor` |
| 形态 | 混合 UI(macOS 走 Qt 兼容层 `qt_compat`，其它平台走 Tkinter + PIL) |
| 启动 | `python -m tools.scene_depth_editor` |
| 文档状态 | 🔴 无 README(仅 docstring) |

## 用途

为场景背景重建深度并编辑碰撞。左面板提供 image / depth / camera / mapping 等控件，配合 `DepthEstimator`(含 `MODEL_OPTIONS` 模型选项)估算深度图。这是**主编辑器的盲区补充**——场景 `backgrounds` 与 `depthConfig` 主体(`M` / `shader` / `collision` / `depth_map`)在主编辑器里改不到,须靠本工具导出。

## 启动

```bash
python -m tools.scene_depth_editor
# 未登记 dev.sh / console，也可经主编辑器菜单打开
```

## 关键事实

- 🔴 无 README，仅有 docstring "Scene depth reconstruction and collision editor"。
- 窗口标题为"场景深度重建工具"。
- 左面板控件覆盖 image / depth / camera / mapping。
- 依赖 `DepthEstimator`，其 `MODEL_OPTIONS` 提供可选深度模型。
- 未登记 `dev.sh` / console,只能 `python -m` 或经主编辑器菜单启动。

## 相关

- [主编辑器 · 概览](../main-editor/overview)
- [创作面 · Authoring Surface](../../reference/authoring-surface)
- [工具速查表](../tool-matrix)
