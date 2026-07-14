---
id: dialogue-graph-editor
title: dialogue_graph_editor 图对话编辑器
sidebar_position: 1
slug: /editors/narrative-domain/dialogue-graph-editor
---

# dialogue_graph_editor 图对话编辑器

独立运行的**图对话编辑器**:以节点图的形式编排对话和节点关系。同一套 widget 也内嵌进主编辑器的"图对话"面板。

| 属性 | 值 |
|---|---|
| 模块 | `tools.dialogue_graph_editor` |
| 形态 | PySide6 桌面(深色 Fusion 主题) |
| 启动 | `./dev.sh dialogue-graph`(以 `--project <root>` 传入) |
| 文档状态 | 🟡 无独立 README，authoring-surface 有专节 |

## 用途

用节点图编排对话:7 种节点类型——line / choice / switch / runActions / ownerState / contextState / end。适合分支复杂、跨节点跳转多的对话。

## 启动

```bash
./dev.sh dialogue-graph
# 等价:python -m tools.dialogue_graph_editor --project <root>
```

也可从主编辑器 `Tools → External tools` 拉起，或直接用主编辑器内嵌的"图对话"面板。

## 关键事实

- 核心组件 `DialogueGraphEditorWidget`(`tools/dialogue_graph_editor/editor_widget.py`)，主编辑器"图对话"页复用同一 widget。
- **危险区**:被打开编辑过的节点在保存时会**从头重建**、丢弃未知字段;未编辑的节点原样保留。详见 [危险区](../../reference/authoring-surface)。

## 相关

- [主编辑器 · 图对话面板](../main-editor/overview)
- [可编辑内容面 / 危险区](../../reference/authoring-surface)
- [工具速查表](../tool-matrix)
