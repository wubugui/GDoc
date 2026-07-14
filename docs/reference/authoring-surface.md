---
id: reference-authoring-surface
title: 可编辑内容面 / 危险区
sidebar_position: 1
slug: /reference/authoring-surface
---

# 可编辑内容面 / 危险区

> 本页是策划模式与内容创作的**配套参考**：逐面板列出编辑器实际暴露的可编辑字段、操作能力，以及最重要的——**危险区**（做内容时哪里安全、哪里会丢数据、哪里 GUI 改不到）。

:::note[关于本页]
本页内容源自 GameDraft 项目的 `docs/editor-authoring-surface.md`（2026-06-14 快照）。**权威源是编辑器代码本身**——字段若有出入以代码为准。未来计划从 `compatibility/*.json` 自动渲染更精细的"可编辑字段面"（活文档）。
:::

## 危险区的两层含义

这是用编辑器做内容前**必须先懂**的概念。

### ⚠️ 重建区（会丢数据）

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

### 🚫 盲区（GUI 改不到）

运行时支持、但编辑器**无任何入口**的字段——手写能在顶层 JSON 存活，但编辑器 GUI 维护不到。

> **落到盲区 = 超出编辑器可协作范围，应按升级流程处理，而不是闷头手写。**

典型盲区：

- `backgrounds`（主编辑器不可编辑，只 [Scene Depth Editor](../editors/render-domain/scene-depth-editor) 或手写）
- `depthConfig` 主体（M/shader/collision/depth_map，只 Scene Depth Editor 导出）
- `flag_registry.migrations` / `runtime` 块（GUI 完全不暴露，需手改）
- `game_config` 的 `playerAvatar`（独立编辑器）、`entityPixelDensityMatch`
- 非档案的 `[img:…]`（运行时认，但 GUI 无引导，只能手打）
- `cameraX` / `cameraY`、扎纸小游戏的高级字段

---

## 三个通用原语（贯穿所有面板）

动作、条件、文本这三件事在所有面板里由同一套共享控件处理。理解它们是理解整张可编辑面的前提：

| 原语 | 规模 | 关键约束 | 详解 |
|---|---|---|---|
| **动作** ActionEditor | 102 种动作 | 无内嵌条件；`setNarrativeState` 仅 DEBUG | [动作编辑器](../editors/main-editor/shared-action-editor) |
| **条件** ConditionEditor | 5 叶 + all/any/not | 嵌套 ≤32；独立于动作 | [条件编辑器](../editors/main-editor/shared-condition-editor) |
| **文本** RichTextField | 8 种 `[tag:…]` | `[img:…]` 按钮只在档案编辑器 | [富文本字段](../editors/main-editor/shared-rich-text) |

---

## 逐面板字段地图（节选）

以下按面板给出"能改什么 / 重建区 / 盲区 / 主动删除"，覆盖最常踩坑的面板。完整字段清单以 `docs/editor-authoring-surface.md` 原文与代码为准。

### 场景 / 世界（`scene_editor.py`）

- **可编辑**：场景顶层（name / worldWidth / worldHeight / worldScale / bgm / filterId / camera.zoom / pixelsPerUnit / walk·runSpeed / ambientSounds / onEnter / depthConfig 的 depth_tolerance + floor_offset）；hotspot（5 型：inspect / pickup / transition / npc / encounter）；zone；NPC；spawnPoint。
- **重建区**：`hotspot.data`（尤其 inspect `data.text` 无控件会被丢）、`npc.patrol`（只 route/speed/moveAnimState）、`spawnPoint`（只 `{x,y}`）。
- **主动删除**：`zone.x/y/width/height/ruleSlots`、`npc.dialogueFile/dialogueKnot`；切 depth_floor 会删 zone 的 onEnter/onStay/onExit。
- **盲区**：`backgrounds`、`depthConfig` 主体（只 Scene Depth Editor 导出）；`anim.json` 只读（靠 video_to_atlas）。无复制、无列表重排。

### 图对话（`dialogue_graph_editor`）

- 7 种节点：line / choice / switch / runActions / ownerState / contextState / end。
- **重建区**：被打开编辑过的节点从头重建、丢未知字段；未编辑节点原样保留；图级 `preconditions` 非 dict 叶子单独保留。

### 过场 Cutscene（`timeline_editor.py`）

- 15 种 present 步 + action 步（type 来自 33 项白名单 `src/data/cutscene_action_allowlist.json`）+ parallel。
- **重建区**：已知 present 步 schema 外字段会丢（未知 present type 反而靠 deepcopy 保住）。顶层旧 `commands` 被 pop。

### 叙事状态机（Web `narrative_editor_web`）

- compositions / states / transitions / signals。
- **盲区 / 只读**：transition 的 from/to 只读（在画布上改）；旧跨图端点不可编辑；state.meta 无 UI。

### 玩法系统数据表（节选）

| 面板 / 文件 | 要点与危险区 |
|---|---|
| **位面** `planes.json` | normal 拒删、id 只读；数值 6 位小数往返保真 |
| **任务** `quests.json` + `questGroups.json` | 拖拽改父子带环检测、无复制；删 deprecated `nextQuestId` |
| **遭遇** `encounters.json` | option 分支（text/type/requiredRule/conditions/consumeItems/resultActions） |
| **规矩** `rules.json` | 删旧 verified/description/source、空层回填 |
| **物品** `items.json` | dynamicDescriptions 只能加、不能删单条 |
| **商店** `shops.json` | items 价格表 |
| **地图** `map_config.json` | 画布拖坐标 |
| **档案** `archive/*.json` | book page 不能删、impressions 只能加不能删；切换未 Apply 会丢 |

### 配置 / 系统 / 小游戏（节选）

| 面板 | 危险区 |
|---|---|
| **game_config** | 盲区：playerAvatar（独立编辑器）、entityPixelDensityMatch |
| **strings** | 不能删键/分类；数组叶子被压成字符串 |
| **audio** | 每条只写 `{src}`，volume/loop 会被丢 |
| **filter** | id = 文件名，只读 |
| **flag_registry** | `migrations` / `runtime` 块 GUI 完全不暴露（需手改） |
| **action_registry** | 只读汇总视图，无对应文件 |
| **小游戏（水域/转盘/扎纸）** | `index.json` 登记 `{id,label,file}`；删实例**不清理**盘上旧 `<id>.json` |

---

## 一句话准则

> 场景顶层 + hotspot/npc/zone 的**顶层**键手写安全（Apply 保留）；但 **hotspot.data、npc.patrol、spawnPoint、被编辑的对话节点、scenario.phase、已知 present 步、音频条目** 是**重建区**。
>
> 需求一旦落到**盲区**（cameraX/cameraY、migrations/runtime、扎纸高级字段、非档案 `[img:]`），即超出编辑器可协作范围 → 走升级流程（补编辑器支持）或上报，不要闷头写人类维护不了的 JSON。

---

:::info[更细的字段面]
各面板逐字段的"可编辑 / 重建区 / 盲区"完整清单，源自 `editor-authoring-surface.md`。未来计划从 `compatibility/*.json` 自动渲染成活文档（代码变则文档变）。当前如需精确查询，请参考 GameDraft 仓库内的原始文档。
:::
