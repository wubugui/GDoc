---
id: tutorials-intro
title: 5 分钟跑起来
sidebar_position: 1
slug: /tutorials/intro
---

# 5 分钟跑起来

本教程带你从零启动 GameDraft 游戏与编辑器，并认识日常工作的两个入口。

:::note[关于本教程]
"跑起来 + 认识入口"这一段是完整的、可照做的。**改内容的端到端流程**（改一段对白、导一张立绘等）是第 4 阶段内容，会另起教程；本页末尾先给出方向。
:::

## 前置：环境要求

- **Node.js ≥ 20**（推荐 20 LTS）
- Python（由 bootstrap 建独立 venv，不污染系统）
- 已克隆 GameDraft 游戏仓库（`~/AIWork/GameDraft/`）

## 第 1 步：初始化环境（只做一次）

首次运行前，在游戏仓库根目录初始化 Python 环境与依赖：

```bash
./bootstrap.sh
```

这会建立 `.tools/venv`，安装 DVC，并检查 Node 20+。

:::tip[没跑 bootstrap 会怎样]
后面任何 `./dev.sh <task>` 都会报 `Project Python runtime missing`。见到这个提示，回来先跑 `./bootstrap.sh`。
:::

## 第 2 步：启动游戏

```bash
./dev.sh dev      # 起游戏(等价 npm run dev,Vite 开发服)
```

浏览器打开 Vite 提示的本地地址（通常 `http://localhost:5173`），就能看到游戏在跑。

## 第 3 步：打开两个入口之一

GameDraft 有一套 20 多个工具，但日常你只需记住**两个入口**：

```bash
./dev.sh editor   # 主编辑器:改游戏内容(场景/对白/任务/物品……)
./dev.sh console  # Web 控制台:一站式启动器/仪表盘
```

- **想改内容** → 直接开[主编辑器](../editors/main-editor/overview)。
- **不知道该用哪个工具** → 开 [Web 控制台](../editors/web-console)当工具箱，它列了 14 个工具按钮，还能一键起游戏、构建、跑测试。

详见 [编辑器总览](../editors/overview) 与 [启动架构](../editors/launch-architecture)。

## 第 4 步：在主编辑器里逛一圈

打开主编辑器后，左侧导航树列出 **30 个编辑面板**（按物理世界 / 叙事编排 / 规则与经济 / 注册表 / 资源本地化 5 组）。建议先熟悉：

1. **Scene 场景**——游戏世界的可视化画布，拖 NPC、画区域。
2. **图对话**——对白的节点图。
3. 顶部 `F5`——先保存再内嵌跑游戏，实时看改动效果。

:::danger[动手改之前先读这一页]
主编辑器保存时部分结构会**整体重建**，手写的自定义字段可能被抹掉。第一次做内容前，务必先看 [可编辑内容面 / 危险区](../reference/authoring-surface)——它讲清哪里安全、哪里会丢数据。
:::

## 接下来

- [编辑器总览](../editors/overview) —— 20+ 工具的心智地图
- [主编辑器总览](../editors/main-editor/overview) —— 30 面板 + 3 通用控件
- [工具速查表](../editors/tool-matrix) —— 查任意工具的启动命令
- [可编辑内容面 / 危险区](../reference/authoring-surface) —— 做内容前必读

> 🚧 完整的"改一段对白 / 导一张立绘"端到端流程将在**第 4 阶段**补充。
