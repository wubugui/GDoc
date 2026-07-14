---
id: dev-commands
title: 常用工作流命令
sidebar_position: 3
slug: /dev/commands
description: ./dev.sh 任务名与用途——用户与协作者视角，不含实现细节。
---

# 常用工作流命令

:::note
在 **GameDraft 游戏仓库根目录**执行。完整列表：`./dev.sh --help`。
:::

`./dev.sh` 是统一任务入口：环境、资源、起游戏、开编辑器、同步远程，都从这里进。

---

## 环境与首次搭建

| 命令 | 干什么 |
|---|---|
| `./bootstrap.sh` | 首次初始化 Python 环境与基础依赖（`bootstrap.sh` 与 `dev.sh` 配套） |
| `./dev.sh bootstrap` | 初始化或清理 game/editor 本地环境 |
| `./dev.sh install-deps` | 安装第三方依赖 |
| `./dev.sh init-runtime` | 同步游戏运行时资源到本地 |
| `./dev.sh init-editor` | 同步编辑器工程资源到本地 |

新人顺序：`./bootstrap.sh` → `./dev.sh pull` → `./dev.sh game start`。

---

## 游戏运行

| 命令 | 干什么 |
|---|---|
| `./dev.sh game start` | 启动开发服务器，浏览器里玩权威源版本 |
| `./dev.sh game stop` | 停止开发服务器 |

等价快捷：`npm run dev`（仍建议在协作文档里统一写 `./dev.sh game start`）。

---

## 编辑器与工具

| 命令 | 干什么 |
|---|---|
| `./dev.sh editor` | 主编辑器——改场景、对话、任务等 |
| `./dev.sh console` | Web 控制台——仪表盘式起游戏/构建/测试 |
| `./dev.sh workbench` | 生产工作台——验收、质检、素材任务 |
| `./dev.sh asset-browser` | 资源浏览器 |
| `./dev.sh asset-ingest` | 资源入库 |
| `./dev.sh image-resizer` | 图片缩放 |
| `./dev.sh dialogue-graph` | 图对话（独立入口时使用） |
| `./dev.sh anim-preview` | 动画预览 |
| `./dev.sh parallax-editor` | 视差编辑 |
| `./dev.sh filter-tool` | 画面滤镜 |
| `./dev.sh lightvol` | 光照体积 |
| `./dev.sh chronicle-sim-v2` | 编年史模拟 v2 |
| `./dev.sh chronicle-sim` | 编年史模拟 |
| `./dev.sh validate-data` | 数据校验 |
| `./dev.sh json-lang` | JSON 语言服务（补全与报错） |
| `./dev.sh skill-governance` | 治理台 |
| `./dev.sh chronicle-week` | 编年史周报类工具 |
| `./dev.sh agent-canvas-os` | Agent Canvas OS（独立仓库） |
| `./dev.sh acos-agent` | Agent Canvas OS 代理入口 |

各工具「点哪里、改什么」见 [编辑器手册](../editors/overview) 与 [工具速查表](../editors/tool-matrix)。

---

## 资源管线

| 命令 | 干什么 |
|---|---|
| `./dev.sh configure-oss` | 首次配置 DVC 远程 OSS |
| `./dev.sh pull` | git pull + DVC pull（代码与大文件一起同步） |
| `./dev.sh commit` | 媒体 dvc add + git commit（改了大文件后提交） |
| `./dev.sh push` | DVC push + git push（推远程） |

日常闭环：**pull → 改资源 → commit → push**。详见 [资源管线](./asset-pipeline)。

---

## 测试与构建（常用 npm）

开发向测试仍通过 npm 封装；在仓库根目录：

| 命令 | 干什么 |
|---|---|
| `npm test` | TypeScript 单元测试 |
| `npm run build` | 生产构建 |
| `npm run test:godot-visual-parity` | Godot 视觉 parity 全量门禁 |
| `npm run test:godot-scene-visuals` | 场景视觉扫描 |
| `npm run test:godot-dialogue-visuals` | 对话视觉扫描 |
| `npm run test:godot-minigame-visuals` | 小游戏视觉扫描 |

Godot 无界面回归与导出流程见 [Godot 移植工作流](./godot-port)。

---

## 接下来

- [项目总览](./overview)
- [资源管线](./asset-pipeline)
- [参与与提交流程](./contributing)
