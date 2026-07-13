---
id: main-editor-overview
title: 主编辑器总览
sidebar_position: 1
slug: /editors/main-editor/overview
---

# 主编辑器总览

主编辑器（`./dev.sh editor`）是 GameDraft **内容创作的核心工作台**——一个 PySide6 桌面应用，集中编辑几乎所有游戏数据，内含 **30 个编辑面板**、**约 40 个共享控件**，还能内嵌运行游戏预览、一键拉起外部工具。

:::note 文档建设状态
本页是主编辑器手册的**总览入口**（第 2 阶段内容）。30 个面板的逐个文档化、三个通用控件的详细说明、快捷键表等将在第 2 阶段补充。当前先给总览骨架。
:::

---

## 启动

```bash
./dev.sh editor
```

默认载入仓库根作为工程目录。启动后加载 `public/assets/data/**` 下的 JSON 数据。

---

## 界面布局

主编辑器是经典的 `QMainWindow` 结构：

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
│          │                                  │
├──────────┴──────────────────────────────────┤
│  状态栏                                       │
└─────────────────────────────────────────────┘
```

- **左侧导航树**：列出 30 个编辑面板，按 5 大组归类（见下）。
- **编辑区**：`QStackedWidget`——点左边哪项，右边就显示对应面板。
- **浏览器式导航**：支持 `Alt+←` / `Alt+→` 后退/前进，像浏览器一样在面板间穿梭。

---

## 30 个编辑面板（按 5 大组）

面板实现在 `tools/editor/editors/`，分 5 大组：

### 1. 物理世界
| 面板 | 编辑对象 | 关键能力 |
|---|---|---|
| Scene 场景 | 场景顶层 / 热区 / 区域 / NPC / 出生点 | 画布拖位置、拖碰撞多边形、画区域 |

### 2. 叙事编排
| 面板 | 编辑对象 |
|---|---|
| 过场 Cutscene | 15 种 present 步 + 33 项 action 步白名单 + parallel 嵌套 |
| 图对话 Dialogue Graph | 7 种节点（line/choice/switch/runActions/ownerState/contextState/end） |
| 叙事状态机 Narrative | compositions / states / transitions / signals（Web 编辑器嵌入） |
| 位面 Plane | movement / interaction / camera / healthDrain / lighting |
| Encounter 遭遇 | options / 三层规矩判定 |
| 临场长按 Pressure Hold | 蓄力 / 中断 / 完成 |
| 信号 Cue Signal | id / description / actions |
| 水域·转盘·扎纸小游戏 | 各自带画布 |
| Scenarios / Quest | 阶段流程 / 任务线 |

### 3. 规则与经济
| 面板 | 编辑对象 |
|---|---|
| Rule 规矩 | 三层（text/lockedHint/verified）+ 碎片 |
| Shop 商店 | items + price 表 |
| Item 物品 | id/type/maxStack/dynamicDescriptions |
| Filters 滤镜 | （读 filter_tool 产出的 JSON） |

### 4. 注册表与扩展
| 面板 | 编辑对象 |
|---|---|
| Flags | flag_registry：static / patterns（migrations/runtime 是盲区） |
| Actions | 只读汇总视图（102 种动作） |

### 5. 资源与本地化
| 面板 | 编辑对象 |
|---|---|
| Archive 档案 | 人物簿 / 见闻录 / 杂书匣 / 书籍（三级 Book→Page→Entry） |
| Strings | 分类树 + 键值（str/number/bool） |
| Audio | bgm / ambient / sfx / systemSfx |
| 动画浏览 | atlas + anim.json（只读，靠 video_to_atlas 导出） |
| 玩家化身 Avatar | |
| 叠图 ID / 文档揭示 / 气味 Profile | |

---

## 三个通用控件（贯穿所有面板）

几乎所有面板的动作、条件、文本都由这三个共享控件处理。**理解它们是用好主编辑器的前提**：

| 控件 | 能力 | 规模 |
|---|---|---|
| **ActionEditor** | 编辑动作；挂载点遍布任务/遭遇/热区/区域/场景/图对话/档案/过场/小游戏 | **102 种动作**，可无限嵌套，约 20 个有专用复杂表单 |
| **ConditionEditor** | 编辑条件；5 类叶子（flag/quest/scenario/scenarioLine/narrative）+ all/any/not 组合，深度 ≤32 | 5 叶 + 3 组合 |
| **RichTextField** | 富文本，8 种 `[tag:…]` 引用（string/flag/item/npc/player/quest/rule/scene） | `[img:…]` 只在档案编辑器有按钮 |

:::danger 动作内没有内嵌条件
条件只在外层面板**独立编辑**，不能塞在某个动作里。这是常见误区。
:::

> 这三个控件的详细文档将在第 2 阶段补充。

---

## 运行预览

主编辑器可以**内嵌运行游戏**做实时验证：

| 操作 | 效果 |
|---|---|
| `F5` | 先 save，再起 `npm run dev`（Vite），内嵌 WebEngine 预览 |
| `Ctrl+F5` | 独立窗口预览 |
| `Shift+F5` | 停止运行 |

内嵌的 LSP overlay 会把**未保存的编辑内容**实时同步给 IDE（json_lang LSP），保证预览与编辑一致。

---

## 外部工具菜单

`Tools → External tools` 菜单可一键拉起 8 个外部独立工具（另起进程）：

graph_editor · dialogue_graph_editor · scene_depth_editor · filter_tool · image_resizer · copy_manager · video_to_atlas · production_workbench · parallax_editor

---

## 危险区（必读）

主编辑器保存时，部分子结构会被**整体重建**（只写它认识的字段），手写塞的自定义键会被抹掉。详见 [可编辑内容面 / 危险区](../../reference/authoring-surface)。

简而言之：**场景顶层 + hotspot/npc/zone 的顶层键**手写安全；但 **hotspot.data、npc.patrol、spawnPoint、被编辑的对话节点、scenario.phase、已知 present 步、音频条目** 是重建区，只能写编辑器认识的字段。

---

## 接下来

- [危险区完整说明](../../reference/authoring-surface)
- [启动架构](../launch-architecture)
- [工具速查表](../tool-matrix)

> 🚧 30 个面板的逐个详细文档、三个通用控件详解、快捷键完整表将在**第 2 阶段**补充。
