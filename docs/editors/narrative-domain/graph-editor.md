---
id: graph-editor
title: graph_editor 通用图编辑器
sidebar_position: 2
slug: /editors/narrative-domain/graph-editor
---

# graph_editor 通用图编辑器

早期/遗留的**通用节点图编辑器**:一个窗口里塞下多种内容面板(dialogue / encounter / quest / rule / scene / zone / item / flag / fragment)。

| 属性 | 值 |
|---|---|
| 模块 | `tools.graph_editor` |
| 形态 | PySide6 桌面(深色 Fusion 主题) |
| 启动 | `python -m tools.graph_editor <project_path>`(未登记 dev.sh/console) |
| 文档状态 | 🔴 无文档，语义最模糊 |

:::caution[疑似已废弃]
本工具**未进任何启动器**(既没登记 `dev.sh`，也没登记 console 脚本),疑似已被 `dialogue_graph_editor` + 主编辑器取代。使用前建议先向项目方确认它是否已废弃。
:::

## 用途

一个通用节点图编辑器,内含 dialogue / encounter / quest / rule / scene / zone / item / flag / fragment 等多种面板。定位早于当前的对话与叙事工具,是"通吃各类内容"的老式设计。

## 启动

```bash
python -m tools.graph_editor <project_path>
# 未登记 dev.sh / console 脚本;或经主编辑器菜单拉起
```

## 关键事实

- 窗口标题为 `Graph Editor - {project_path}`。
- 自带 `panels/action_editor.py`、`panels/condition_editor.py`,是主编辑器共享控件的**前身**。
- 结构位于 `tools/graph_editor/{model,panels,parsers,canvas,serializer.py,...}`。
- **疑似已被取代**:见页首 caution,用前先确认是否废弃。

## 相关

- [dialogue_graph_editor 图对话编辑器](./dialogue-graph-editor)
- [主编辑器 · 总览](../main-editor/overview)
- [工具速查表](../tool-matrix)
