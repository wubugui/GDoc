---
id: shared-action-editor
title: 通用控件 · 动作编辑器 (ActionEditor)
sidebar_position: 2
slug: /editors/main-editor/shared-action-editor
---

# 通用控件 · 动作编辑器（ActionEditor）

`ActionEditor` 是主编辑器**贯穿所有面板**的三个共享控件之一。任务、遭遇、热区、区域、场景、图对话、档案、过场、小游戏……几乎所有"发生了什么"都由它编辑。

实现：`tools/editor/shared/action_editor.py`。

## 一句话

**动作 = 游戏里"要做的事"**——播对白、给物品、改 flag、切场景、放特效……ActionEditor 就是编排这些事的统一表单。

## 规模与形态

| 维度 | 事实 |
|---|---|
| 动作种类 | **102 种**（`ACTION_TYPES`） |
| 专用复杂表单 | 约 **20 个**动作有各自的复杂表单，其余是通用键值表单 |
| 嵌套 | 可**无限嵌套**——某些动作本身以"子动作列表"为参数 |
| DEBUG-only | 只有 `setNarrativeState` 是调试专用，**普通内容不可新建** |

## 可嵌套子动作的宿主

以下动作把"一串子动作"作为参数，因此可以层层嵌套：

- `runActions` —— 顺序执行一组动作
- `chooseAction` —— 按条件择一
- `randomBranch` —— 随机分支
- `addDelayedEvent` —— 延时触发
- `enableRuleOffers` —— 开启规矩提示

## 挂载点（哪里能编辑动作）

动作的挂载点遍布：

任务 · 遭遇 · 热区（hotspot）· 区域（zone）· 场景 onEnter · 图对话节点 · 档案 · 过场步 · 小游戏结算 ……

## 常见误区

:::danger[动作里没有内嵌条件]
ActionEditor **不含**条件控件。"满足某条件才执行"这种逻辑，要么用 `chooseAction` 这类带分支的动作，要么在**外层面板**用[条件编辑器](./shared-condition-editor)独立编辑。**不能**把条件塞进任意一个动作里。
:::

## 相关

- [条件编辑器（ConditionEditor）](./shared-condition-editor)
- [富文本字段（RichTextField）](./shared-rich-text)
- [主编辑器总览](./overview)
- [可编辑内容面 / 危险区](../../reference/authoring-surface)
