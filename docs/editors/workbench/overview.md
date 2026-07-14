---
id: workbench-overview
title: 生产工作台总览
sidebar_position: 1
slug: /editors/workbench/overview
---

# 生产工作台总览

生产工作台（`./dev.sh workbench`）是 GameDraft 的**生产管理/质检/素材任务**控制台——它**不编辑游戏内容**，而是辅助内容生产流程：剧情单元追踪与自动验收、每日检查、Graph 诊断、运行时 Debug、素材审计/候选/任务、图片工具、动画 Sheet、Codex/GPT 探针。

它是一个 PySide6 桌面应用，含 **10 个 Tab**，每个 Tab 有独立 console dock。

## 启动

```bash
./dev.sh workbench
# 等价:python -m tools.production_workbench [project_root]
```

## 与主编辑器的分工

主编辑器做**内容**，工作台做**流程/验收/素材任务**。两者并列、互补。工作台复用主编辑器的 `ProjectModel` 做**只读**数据访问——它读游戏数据来诊断/验收，但不直接写内容。

## 10 个 Tab

权威源：`tools/production_workbench/workbench_window.py`（`addTab` 顺序即左→右）。

| # | Tab | 用途 | 底层 |
|---|---|---|---|
| 1 | **剧情单元** StoryUnit | 剧情单元编排 + 自动验收（生成验收脚本 → 发送到游戏运行 → 对比快照） | `story_units.py` / `story_acceptance.py` |
| 2 | **每日检查** DailyCheck | 每日例行检查 | `daily_check.py` |
| 3 | **Graph 诊断** | 图诊断，子 Tab：Overview / Compositions / Flow / ReadWrite（Flag/Action/State 写入）/ Routes / Warnings / Runtime | `graph_diagnostics.py` |
| 4 | **运行时 Debug** | 运行时调试，子 Tab：Overview / State（Narrative/Flags/Quests/Scenarios）/ Trace（Trace/Transitions/Issues）/ Commands | `runtime_debug.py` / `runtime_command.py` |
| 5 | **素材审计** AssetAudit | 素材引用审计（哪些素材被引用、哪些缺失/冗余） | `asset_audit.py` |
| 6 | **素材候选** AssetCandidate | 素材候选管理 | `asset_candidates.py` |
| 7 | **图片工具** ImageTools | 图片处理工具 | `image_tools.py` |
| 8 | **动画 Sheet** AnimationSheet | 动画 sheet 拼合/拆分 | `animation_sheet.py` |
| 9 | **素材任务** AssetTask | 素材任务管理（生成 Codex prompt） | `asset_tasks.py` |
| 10 | **Codex/GPT 探针** CodexProbe | Codex/GPT 探针 | `codex_probe.py` / `codex_asset_runner.py` |

:::note[剧情单元验收三步流程]
"剧情单元"是工作台的主打能力：**① 生成验收脚本 → ② 发送到正在运行的游戏 → ③ 对比运行前后快照**，自动判定该剧情单元是否达标。逐步操作文档将在后续阶段补充。
:::

## 相关

- [主编辑器总览](../main-editor/overview)
- [工具速查表](../tool-matrix)
- [启动架构](../launch-architecture)
