---
id: tutorials-intro
title: 5 分钟跑起来
sidebar_position: 1
slug: /tutorials/intro
---

# 5 分钟跑起来

本教程带你从零启动 GameDraft 游戏与编辑器。

:::note 文档建设状态
本页是教程分区的**占位入口**（第 4 阶段内容）。完整的端到端教程——从环境准备到第一次内容编辑——将在第 4 阶段补充。下面先给出核心启动命令。
:::

## 前置：初始化环境

首次运行前，需要初始化项目 Python 环境与依赖：

```bash
./bootstrap.sh
```

这会建立 `.tools/venv`，安装 DVC，并检查 Node 20+。

## 启动游戏

```bash
./dev.sh dev      # 起游戏（等价 npm run dev，Vite 开发服）
```

浏览器打开 Vite 提示的本地地址（通常 `http://localhost:5173`）。

## 启动编辑器

```bash
./dev.sh editor   # 桌面主编辑器
./dev.sh console  # 或 Web 控制台（启动器）
```

详见 [编辑器总览](../editors/overview) 与 [启动架构](../editors/launch-architecture)。

## 接下来

- [编辑器手册](../editors/overview)
- [工具速查表](../editors/tool-matrix)

> 🚧 完整教程（改一段对白、导一张立绘等端到端流程）将在**第 4 阶段**补充。
