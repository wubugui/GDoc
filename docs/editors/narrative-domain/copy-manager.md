---
id: copy-manager
title: copy_manager 文案管理/导出
sidebar_position: 4
slug: /editors/narrative-domain/copy-manager
---

# copy_manager 文案管理/导出

集中式**游戏文本/文案管理工具**:菜单、工具栏、搜索、树视图与详情面板一体,便于批量管理与导出文案。

| 属性 | 值 |
|---|---|
| 模块 | `tools.copy_manager` |
| 形态 | PySide6 桌面 |
| 启动 | `python -m tools.copy_manager [--project <path>]`(未登记 dev.sh/console) |
| 文档状态 | 🔴 无 README |

## 用途

集中管理游戏内的文本/文案:菜单栏、工具栏、搜索框、树视图与详情面板。相较主编辑器的 "Strings" 面板,这里更偏**批量文案管理与导出**。

## 启动

```bash
python -m tools.copy_manager [--project <path>]
# 未登记 dev.sh / console 脚本;或经主编辑器菜单拉起
```

也可从主编辑器 `Tools → External tools` 拉起。

## 关键事实

- 无 README,仅一句 docstring:"Copy Manager — centralized game text/copy management tool"。
- 是主编辑器 `Tools → External tools` 菜单里的一员。
- 与主编辑器 "Strings" 面板相关,但更偏批量文案管理/导出。

## 相关

- [主编辑器 · 总览](../main-editor/overview)
- [工具速查表](../tool-matrix)
