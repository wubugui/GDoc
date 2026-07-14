---
id: shared-condition-editor
title: 通用控件 · 条件编辑器 (ConditionEditor)
sidebar_position: 3
slug: /editors/main-editor/shared-condition-editor
---

# 通用控件 · 条件编辑器（ConditionEditor）

`ConditionEditor` 是主编辑器三个共享控件之二，负责编辑**"什么情况下成立"**的判定表达式。

实现：`tools/editor/shared/condition_editor.py` + `condition_expr_tree.py`。

## 一句话

**条件 = 一棵布尔表达式树**：叶子是"某个状态是否满足"，中间节点用 `all` / `any` / `not` 组合。

## 5 类叶子条件

| 叶子类型 | 判定对象 |
|---|---|
| `flag` | 某个 flag 的值 |
| `quest` | 任务状态 |
| `scenario` | scenario 状态 |
| `scenarioLine` | scenario 中某一 line |
| `narrative` | 叙事状态机状态 |

## 3 种组合

| 组合 | 语义 |
|---|---|
| `all` | 全部子条件都成立（逻辑与） |
| `any` | 任一子条件成立（逻辑或） |
| `not` | 取反 |

组合可以嵌套，**最大深度 ≤ 32**。

## 条件在哪编辑，不在哪编辑

:::danger[条件独立于动作]
条件**只在外层面板独立编辑**（遭遇的 `conditions`、任务的 requires、转场的 unlockConditions 等），**不能塞进某个[动作](./shared-action-editor)里**。想表达"满足条件才执行"，用 `chooseAction` / `randomBranch` 这类带分支的动作，或在挂载点的条件槽里写。
:::

## 相关

- [动作编辑器（ActionEditor）](./shared-action-editor)
- [富文本字段（RichTextField）](./shared-rich-text)
- [主编辑器总览](./overview)
- [可编辑内容面 / 危险区](../../reference/authoring-surface)
