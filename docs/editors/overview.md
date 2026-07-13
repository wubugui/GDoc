---
id: overview
title: 编辑器总览
sidebar_position: 1
slug: /editors/overview
---

# 编辑器总览

GameDraft 配套了一套 **20 个编辑器/工具**，覆盖游戏内容的几乎所有方面——场景、对白、过场、任务、物品、规矩、小游戏，以及资源管线（抠图、动画、视差）、渲染（深度、光照）、文案、叙事模拟。

本手册教你**怎么用每一个工具**。

---

## 两个统一入口

所有工具共享一条启动链（详见[启动架构](./launch-architecture)）。日常使用时，你只需记住**两个入口**：

| 入口 | 命令 | 形态 | 适合什么时候用 |
|---|---|---|---|
| **主编辑器** | `./dev.sh editor` | 桌面应用 | 编辑**游戏内容**——场景/对白/任务/物品/规矩/小游戏等。内容创作的核心工作台，内含 30 个面板，并可通过 `Tools → 外部工具` 菜单一键拉起 8 个外部编辑器。 |
| **Web 控制台** | `./dev.sh console` | 浏览器页面 | 一站式**启动器/仪表盘**——列了 14 个工具按钮，还能运行游戏、构建、跑测试、看治理台。不知道"该用哪个工具"时，从这里找。 |

:::info 推荐上手姿势
**内容创作** → 直接开主编辑器（`./dev.sh editor`）。
**不知道该用啥** → 开 Web 控制台（`./dev.sh console`）当工具箱。
:::

---

## 工具矩阵

完整的 20 个工具速查表见 [**工具速查表**](./tool-matrix)，包含每个工具的用途、形态、启动命令、README 状态。这里按域给一个快速导览：

- **物理世界 / 叙事编排 / 规则经济 / 注册表 / 资源本地化** → 都在[主编辑器](./main-editor/overview)里（30 个面板）
- **资产域**：asset_browser · asset_ingest · image_resizer · video_to_atlas · animation_pipeline
- **动画域**：anim_preview
- **图与叙事域**：dialogue_graph_editor · graph_editor · narrative_editor_web
- **渲染域**：scene_depth_editor · lightvolume_lab · parallax_editor · filter_tool
- **文案域**：copy_manager
- **模拟域**：chronicle_sim_v2 · chronicle_sim_v3
- **语言服务**：json_lang
- **生产管理**：[production_workbench](./workbench/overview)
- **治理台**：skill_workflow_governance（附录级）

> 各工具的启动命令与形态见 [工具速查表](./tool-matrix)。各工具的详细使用页随阶段推进补充。

:::warning 文档建设状态
本手册处于**第 1 阶段**——脚手架与速查表已就绪，各工具的详细使用文档按阶段逐步补充。
带链接的页面已写，未带链接的页面（工具矩阵里标"待补充"）是后续阶段的内容。
:::

---

## 一个必须先懂的概念：危险区

在做内容编辑前，**务必先读 [可编辑内容面 / 危险区](../reference/authoring-surface)**。它定义了两个会让数据丢失/改不到的"雷区"：

- **重建区（会丢数据）**：编辑器保存时会**整体重建**该子结构，只写它认识的字段——你在 JSON 里手写塞的自定义键，用编辑器开一次面板保存就被抹掉。
- **盲区（GUI 改不到）**：运行时支持、但编辑器无入口的字段——你只能手写 JSON 维护，编辑器帮不到你。

落到盲区 = 超出编辑器可协作范围，应走升级流程，而不是闷头手写。

---

## 接下来

- 想跑起来 → [教程：5 分钟跑起来](../tutorials/intro)
- 想看启动链细节 → [启动架构](./launch-architecture)
- 想查某个工具 → [工具速查表](./tool-matrix)
- 要做内容创作 → [主编辑器](./main-editor/overview)
