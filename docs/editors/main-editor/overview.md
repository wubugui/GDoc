---
id: main-editor-overview
title: 主编辑器总览
sidebar_position: 1
slug: /editors/main-editor/overview
---

# 主编辑器总览

主编辑器(`./dev.sh editor`)是 GameDraft **内容创作的核心工作台**——一个 PySide6 桌面应用，集中编辑几乎所有游戏数据，内含 **30 个编辑面板**、**约 40 个共享控件**，还能内嵌运行游戏预览、一键拉起外部工具。

## 启动

```bash
./dev.sh editor
# 等价:.tools/venv/bin/python -m tools.editor [project_path]
```

不带参数时默认载入仓库根作为工程目录。启动后加载 `public/assets/data/**` 下的 JSON 数据。入口 `tools/editor/__main__.py` 装了全局 excepthook 与 WebEngine 预载。

---

## 界面布局

主编辑器是经典的 `QMainWindow` 结构，左侧是 **导航树（`QTreeWidget`）+ 堆叠页（`QStackedWidget`）**，不是标签页：

```
┌─────────────────────────────────────────────┐
│  菜单栏 (Tools / View / Run / ...)           │
├──────────┬──────────────────────────────────┤
│          │                                  │
│  左侧    │                                  │
│  导航树   │       当前选中面板的编辑区        │
│  (30个   │       (QStackedWidget 按选择切换) │
│   面板)  │                                  │
│          │                                  │
├──────────┴──────────────────────────────────┤
│  状态栏                                       │
└─────────────────────────────────────────────┘
```

- **左侧导航树**：列出 30 个编辑面板，按 5 大组归类（见下）。
- **编辑区**：`QStackedWidget`——点左边哪项，右边就显示对应面板。
- **浏览器式导航**：支持 `Alt+←` / `Alt+→` 后退/前进，像浏览器一样在面板间穿梭。

:::info[面板定义在哪]
导航树的权威顺序在 `tools/editor/main_window.py` 的 `rows` 列表，每行是 `(导航路径, 标签, 编辑器类)`。各面板实现在 `tools/editor/editors/*.py`。字段级"能改什么/哪里危险"以代码为准，见 [可编辑内容面 / 危险区](../../reference/authoring-surface)。
:::

---

## 30 个编辑面板（按 5 大组）

下表是导航树里的全部 30 个数据面板（另有一个"Game"运行预览页不计入）。**编辑器类**列给出实现文件，方便定位代码。

### 1. 物理世界

| 面板 | 编辑对象 | 实现 |
|---|---|---|
| **Scene** 场景 | 场景顶层 / hotspot（5 型）/ NPC / zone / spawnPoint 的可视化画布（世界坐标） | `scene_editor.py` |
| **角色** | `character_registry.json`——角色身份（名字/动画包/对话头像）一处定义，场景 NPC 用 `characterId` 引用 | `character_registry_editor.py` |
| **Map** 地图 | `map_config.json`——可拖拽画布 + 转场边（sceneId/name/x/y/unlockConditions） | `map_editor.py` |

### 2. 叙事编排

| 面板 | 编辑对象 | 实现 |
|---|---|---|
| **过场** Cutscene | `steps` 序列：present / action / parallel（自上而下 + parallel fork-join） | `timeline_editor.py` |
| **图对话** Dialogue Graph | 7 种节点（line/choice/switch/runActions/ownerState/contextState/end），内嵌独立包的 widget | `dialogue_graph_editor_tab.py` |
| **叙事状态机** Narrative | compositions/states/transitions/signals——PySide 壳内嵌 React Flow（唯一非原生 PyQt 面板） | `narrative_state_editor.py` |
| **位面** Plane | `planes.json`：movement/interaction/camera/healthDrain/lighting；子 Tab 配置/点名状态机/归属实体/问题 | `plane_editor.py` |
| **Encounter** 遭遇 | `encounters.json`：option 分支（text/type/requiredRule/conditions/consumeItems/resultActions） | `encounter_editor.py` |
| **临场长按** Pressure Hold | `pressure_holds.json`：蓄力 + 可中断 interrupts + onComplete | `pressure_signal_editor.py` |
| **信号 Cue** | `signal_cues.json`：具名可复用的表现 Action 序列 | `pressure_signal_editor.py` |
| **水域小游戏** | `water_minigames/`（实例 + 实体，带画布） | `water_minigame_editor.py` |
| **转盘小游戏** | 糖画转盘 `sugar_wheel/`（外观/指针校准/物理/sectors/atmosphereGroups） | `sugar_wheel_editor.py` |
| **扎纸小游戏** | `paper_craft`（订单/部件/槽位/纸色/收尾，槽位带画布） | `paper_craft_editor.py` |
| **Scenarios** | `scenarios.json`（id/requires/phases/exposes） | `narrative_data_editors.py` |
| **Quest** 任务 | `quests.json` + `questGroups.json`：三栏（分组树 + 图视图 + 属性），拖拽改父子带环检测 | `quest_editor.py` |

### 3. 规则与经济

| 面板 | 编辑对象 | 实现 |
|---|---|---|
| **Rule** 规矩 | `rules.json`：三层（text/lockedHint/verified）+ 碎片；子 Tab Rules/Fragments | `rule_editor.py` |
| **Shop** 商店 | `shops.json`（id/name/items 价格表） | `shop_editor.py` |
| **Item** 物品 | `items.json`（id/name/type/maxStack/buyPrice/dynamicDescriptions） | `item_editor.py` |
| **Filters** 滤镜 | 与 [filter_tool](../render-domain/filter-tool) 共用 `data/filters` 目录（读其产出的 JSON） | `filter_editor.py` |

### 4. 注册表与扩展

| 面板 | 编辑对象 | 实现 |
|---|---|---|
| **Flags** | `flag_registry.json`：static flags + patterns（`migrations`/`runtime` 块不暴露——盲区） | `flag_registry_editor.py` |
| **Actions** | 集中式 Action 注册表：浏览/筛选/跳源（只读汇总，无对应文件） | `action_registry_editor.py` |

### 5. 资源与本地化

| 面板 | 编辑对象 | 实现 |
|---|---|---|
| **Archive** 档案 | `archive/{characters,lore,documents,books}.json`；唯一有 `[img:]` 插图按钮的面板 | `archive_editor.py` |
| **Strings** | `strings.json` 树形（分类下键值：str RichText / number / bool） | `string_editor.py` |
| **Audio** | `audio_config.json`；子 Tab BGM/Ambient/SFX/System SFX | `audio_editor.py` |
| **动画浏览** | `anim.json` 的 states（帧序/帧率/循环/世界尺寸可编辑，图集字段只读，靠 [video_to_atlas](../asset-domain/video-to-atlas) 导出） | `anim_editor.py` |
| **玩家化身** Avatar | `game_config.playerAvatar`（动画 manifest + idle/walk/run/clip 映射） | `player_avatar_editor.py` |
| **叠图 ID** | `overlay_images.json`（短 id→路径，供 showOverlayImage/blendOverlayImage） | `overlay_images_editor.py` |
| **文档揭示** | `document_reveals.json`（blurred/clear 图 + revealCondition + 动画） | `narrative_data_editors.py` |
| **气味 Profile** | 气味 Profile（色/飘法/特殊渲染），QtWebEngine 实时预览与游戏 HUD 同一 renderer | `smell_profile_editor.py` |
| **Config** | `game_config.json`（initialScene/initialQuest/viewport/windowSize/startupFlags 等） | `game_config_editor.py` |

---

## 三个通用控件（贯穿所有面板）

几乎所有面板的动作、条件、文本都由这三个共享控件处理。**理解它们是用好主编辑器的前提**：

| 控件 | 能力 | 规模 | 详细文档 |
|---|---|---|---|
| **ActionEditor** | 编辑动作；挂载点遍布任务/遭遇/热区/区域/场景/图对话/档案/过场/小游戏 | **102 种动作**，可无限嵌套，约 20 个有专用复杂表单 | [动作编辑器](./shared-action-editor) |
| **ConditionEditor** | 编辑条件；5 类叶子 + all/any/not 组合，深度 ≤32 | 5 叶 + 3 组合 | [条件编辑器](./shared-condition-editor) |
| **RichTextField** | 富文本，8 种 `[tag:…]` 引用 | `[img:…]` 只在档案编辑器有按钮 | [富文本字段](./shared-rich-text) |

:::danger[动作内没有内嵌条件]
条件只在外层面板**独立编辑**，不能塞在某个动作里。这是常见误区。详见[条件编辑器](./shared-condition-editor)。
:::

---

## 运行预览

主编辑器可以**内嵌运行游戏**做实时验证（导航树末尾的"Game"页，`game_browser.py`）：

| 操作 | 效果 |
|---|---|
| `F5` | 先 save，再起 `npm run dev`（Vite），内嵌 WebEngine 预览 |
| `Ctrl+F5` | 独立窗口预览 |
| `Shift+F5` | 停止运行 |

内嵌的 LSP overlay 会把**未保存的编辑内容**实时同步给 IDE（json_lang LSP），保证预览与编辑一致。

---

## 外部工具菜单

`Tools → External tools (new process)` 菜单可一键拉起 **9 个**外部独立工具（另起进程），菜单顺序如下：

[Graph Editor](../narrative-domain/graph-editor) · [Dialogue Graph Editor](../narrative-domain/dialogue-graph-editor) · [Scene Depth Editor](../render-domain/scene-depth-editor) · [Filter Tool](../render-domain/filter-tool) · [Image Resizer](../asset-domain/image-resizer) · [Copy Manager](../narrative-domain/copy-manager) · [Video to Atlas](../asset-domain/video-to-atlas) · [Production Workbench](../workbench/overview) · [Parallax 场景编辑器](../render-domain/parallax-editor)

---

## 危险区（必读）

主编辑器保存时，部分子结构会被**整体重建**（只写它认识的字段），手写塞的自定义键会被抹掉。

简而言之：**场景顶层 + hotspot/npc/zone 的顶层键**手写安全；但 **hotspot.data、npc.patrol、spawnPoint、被编辑的对话节点、scenario.phase、已知 present 步、音频条目** 是重建区，只能写编辑器认识的字段。完整字段地图见 → [可编辑内容面 / 危险区](../../reference/authoring-surface)。

---

## 接下来

- [动作编辑器](./shared-action-editor) · [条件编辑器](./shared-condition-editor) · [富文本字段](./shared-rich-text) —— 三个通用控件详解
- [可编辑内容面 / 危险区](../../reference/authoring-surface) —— 逐面板字段地图
- [启动架构](../launch-architecture) · [工具速查表](../tool-matrix)
