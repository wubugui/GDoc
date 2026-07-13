---
id: workbench-overview
title: 生产工作台总览
sidebar_position: 1
slug: /editors/workbench/overview
---

# 生产工作台总览

生产工作台（`./dev.sh workbench`）是 GameDraft 的**生产管理/质检/素材任务**控制台——它不编辑游戏内容，而是辅助内容生产流程：剧情单元追踪与自动验收、每日检查、Graph 诊断、运行时 Debug、素材审计/候选/任务、图片工具、动画 Sheet、Codex/GPT 探针。

它是一个 PySide6 桌面应用，含 **10 个 Tab**，每个 Tab 有独立 console dock。

:::note 文档建设状态
本分区是第 2-3 阶段内容。10 个 Tab 的逐个文档化、剧情单元验收三步流程（检查脚本 → 发送运行 → 完成记录）等将在后续阶段补充。
:::

## 启动

```bash
./dev.sh workbench
```

## 10 个 Tab 概览

| Tab | 用途 |
|---|---|
| 剧情单元 StoryUnit | 剧情单元追踪 + 自动验收（生成验收脚本 → 发送到游戏运行 → 对比快照） |
| 每日检查 | |
| Graph 诊断 | |
| 运行时 Debug | |
| 素材审计 | |
| 素材候选 | |
| 图片工具 | |
| 动画 Sheet | 拼合/拆分 |
| 素材任务 | 生成 Codex prompt |
| Codex/GPT 探针 | |

## 与主编辑器的分工

主编辑器做**内容**，工作台做**流程/验收/素材任务**。两者并列、互补。工作台复用主编辑器的 `ProjectModel` 做只读数据访问。

> 🚧 10 个 Tab 的详细文档将在后续阶段补充。
