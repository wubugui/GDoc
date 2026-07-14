---
id: narrative-editor-web
title: narrative_editor_web 叙事状态机
sidebar_position: 3
slug: /editors/narrative-domain/narrative-editor-web
---

# narrative_editor_web 叙事状态机

**叙事状态机作者画布**:编排 compositions / states / transitions / signals,经 QWebChannel 内嵌进主编辑器"叙事状态机"面板。

| 属性 | 值 |
|---|---|
| 模块 | `tools.narrative_editor_web` |
| 形态 | Web 应用(React + Vite + TypeScript，React Flow) |
| 启动 | `npm run dev:narrative-editor`(独立);正常使用是主编辑器内嵌 |
| 文档状态 | 🔴 无 README |

## 用途

以画布编排叙事状态机:compositions(组合)、states(状态)、transitions(转移)、signals(信号)。是主编辑器 30 个面板里**唯一非原生 PyQt** 的面板——底层为 Web 技术栈,通过 QWebChannel 桥接进 Qt。

## 启动

```bash
# 独立开发预览
npm run dev:narrative-editor
# 等价:vite --config tools/narrative_editor_web/vite.config.ts

# 构建
npm run build:narrative-editor
```

**正常使用是主编辑器内嵌**,加载逻辑见 `tools/editor/editors/narrative_state_editor.py`。

## 关键事实

- 页面标题为 `Narrative State Machine Editor`。
- 主编辑器 30 面板里**唯一非原生 PyQt** 的面板(React + Vite + React Flow,经 QWebChannel 桥接)。
- **盲区 / 只读**:
  - transition 的 from / to 只读——要在画布上拖连线来改。
  - 旧的跨图端点不可编辑。
  - `state.meta` 没有对应 UI。

## 相关

- [主编辑器 · 叙事状态机面板](../main-editor/overview)
- [可编辑内容面 / 盲区](../../reference/authoring-surface)
- [工具速查表](../tool-matrix)
