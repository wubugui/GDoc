---
id: reference-authoring-surface
title: 可编辑内容面 / 危险区
sidebar_position: 1
slug: /reference/authoring-surface
---

# 可编辑内容面 / 危险区

> 本页是策划模式与内容创作的**配套参考**：逐面板列出编辑器实际暴露的可编辑字段、操作能力，以及最重要的——**危险区**（做内容时哪里安全、哪里会丢数据、哪里 GUI 改不到）。

:::note 文档建设状态
本页内容源自 GameDraft 项目的 `docs/editor-authoring-surface.md`（2026-06-14 快照）。权威源是编辑器代码本身——字段若有出入以代码为准。
第 5 阶段会从 `compatibility/*.json` 自动渲染更精细的"可编辑字段面"。当前先给核心概念。
:::

## 危险区的两层含义

这是用编辑器做内容前**必须先懂**的概念：

### 重建区（会丢数据）⚠️

编辑器 Apply（保存）时会**整体重建**该子结构，**只写它认识的字段**——你在 JSON 里手写塞的自定义键，用编辑器开一次面板保存就会被**抹掉**。

> **绝不能往这些结构塞自定义字段。**

典型重建区：
- `hotspot.data`（尤其 inspect 的 `data.text` 无控件会被丢）
- `npc.patrol`（只 route/speed/moveAnimState）
- `spawnPoint`（只 `{x,y}`）
- 被编辑过的对话节点（getter 从头重建，丢未知字段）
- `scenario.phase`（`outcome` 无 UI 且被丢）
- 已知 present 步（schema 外字段会丢）
- 音频条目（每条只写 `{src}`，volume/loop 等会被丢）

### 盲区（GUI 改不到）🚫

运行时支持、但编辑器**无任何入口**的字段——手写能在顶层 JSON 存活，但编辑器 GUI 维护不到。

> **落到盲区 = 超出编辑器可协作范围，应按升级流程处理，而不是闷头手写。**

典型盲区：
- `backgrounds`（主编辑器不可编辑，只 Scene Depth Editor 或手写）
- `depthConfig` 主体（M/shader/collision/depth_map，只 Scene Depth Editor 导出）
- `flag_registry.migrations` / `runtime` 块（GUI 完全不暴露，需手改）
- `game_config` 的 `playerAvatar`（独立编辑器）、`entityPixelDensityMatch`
- 非档案的 `[img:…]`（运行时认，但 GUI 无引导，只能手打）

## 一句话准则

> 场景顶层 + hotspot/npc/zone 的**顶层**键手写安全（Apply 保留）；但 **hotspot.data、npc.patrol、spawnPoint、被编辑的对话节点、scenario.phase、已知 present 步、音频条目** 是重建区。
>
> 需求一旦落到**盲区**，即超出编辑器可协作范围 → 走升级流程（补编辑器支持）或上报，不要闷头写人类维护不了的 JSON。

---

:::info 详细字段地图
各面板逐字段的"可编辑 / 重建区 / 盲区"完整清单，源自 `editor-authoring-surface.md`，将在第 2 阶段随主编辑器面板文档一起补充。当前如需查询，请参考 GameDraft 仓库内的原始文档。
:::
