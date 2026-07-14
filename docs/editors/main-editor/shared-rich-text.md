---
id: shared-rich-text
title: 通用控件 · 富文本字段 (RichTextField)
sidebar_position: 4
slug: /editors/main-editor/shared-rich-text
---

# 通用控件 · 富文本字段（RichTextField）

`RichTextField` 是主编辑器三个共享控件之三，用于所有需要**带引用的文本**的地方——对白、描述、档案正文等。

实现：`tools/editor/shared/rich_text_field.py` + `tag_catalog.py`。

## 一句话

富文本里可以插入 **8 种 `[tag:…]` 引用**，运行时会解析成对应的名字/数值/链接。

## 8 种 `[tag:…]` 引用

| 标签 | 引用对象 |
|---|---|
| `[string:…]` | 字符串表条目 |
| `[flag:…]` | flag 值 |
| `[item:…]` | 物品 |
| `[npc:…]` | NPC |
| `[player:…]` | 玩家（化身/称谓等） |
| `[quest:…]` | 任务 |
| `[rule:…]` | 规矩 |
| `[scene:…]` | 场景 |

## 插图标签 `[img:…]` 的特殊性

:::warning[`[img:…]` 只有档案编辑器有按钮]
`[img:短名]` 插图标签**运行时支持**，但只有 **Archive（档案）编辑器**提供了插入按钮。其它富文本框想插图，只能**手打** `[img:短名]`（短名先在[主编辑器 · 叠图 ID 面板](./overview) 里登记）。非档案位置的 `[img:…]` 属于[盲区](../../reference/authoring-surface)——GUI 无引导。
:::

## 其它

- 所有 **id 字段**（tag 里引用的 id）是纯文本，不做下拉校验——拼错不会即时报错，靠 [json_lang](../services/json-lang) 的 LSP/校验兜底。

## 相关

- [动作编辑器（ActionEditor）](./shared-action-editor)
- [条件编辑器（ConditionEditor）](./shared-condition-editor)
- [主编辑器总览](./overview)
- [可编辑内容面 / 危险区](../../reference/authoring-surface)
