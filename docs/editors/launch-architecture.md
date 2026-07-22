---
id: launch-architecture
title: 工具打开方式
sidebar_position: 2
slug: /editors/launch-architecture
description: 每个工具用什么命令或按钮打开——纯操作速查，不讲实现。
---

# 工具打开方式

这一页只回答一件事：**我想用某件工具，该怎么打开？** 下面全是你可以亲手敲的命令或点的按钮，没有实现细节。

:::info[更完整的对照表]
全工具用途、形态与文档状态，见 **[工具速查表](./tool-matrix)**。参考区 **[工具打开方式速查](../reference/open-tools)** 与本文同步。
:::

---

## 两扇常用门

| 工具 | 命令 |
|---|---|
| **主编辑器**（改内容） | `./dev.sh editor` |
| **Web 控制台**（工具箱） | `./dev.sh console` |

Web 控制台里再点按钮，效果等同对应命令；**并非**所有 `dev.sh` 任务都有按钮。

---

## 按命令打开（`./dev.sh <任务名>`）

在游戏仓库根目录执行：

| 任务名 | 打开什么 |
|---|---|
| `editor` | 主编辑器 |
| `console` | Web 控制台 |
| `workbench` | 生产工作台 |
| `dialogue-graph` | 图对话编辑器（独立窗口） |
| `asset-browser` | 资源浏览器 |
| `asset-ingest` | 资源入库 |
| `image-resizer` | 图片缩放 |
| `filter-tool` | 滤镜工具 |
| `lightvol` | 光照体积实验室 |
| `char-lighting` | 角色照明实验室 |
| `anim-preview` | 动画资源工作台 |
| `parallax-editor` | 视差编辑器 |
| `chronicle-sim-v2` | 编年史模拟 v2 |
| `chronicle-sim` | 编年史模拟 v3 |
| `chronicle-week` | 编年史周模拟 helper |
| `skill-governance` | 治理台 |
| `json-lang` | JSON 语言服务 |
| `validate-data` | 数据校验 |
| `agent-canvas-os` | Agent Canvas OS |
| `acos-agent` | Agent Canvas OS 代理循环 |

---

## 游戏、构建、测试

| 你想… | 命令 / 位置 |
|---|---|
| 起游戏（浏览器） | `./dev.sh game start` 或 Web 控制台 **游戏 dev 开关** |
| 停游戏 | `./dev.sh game stop` 或控制台里关 |
| 主编辑器内嵌预览 | 主编辑器里 `F5`（见 **[运行预览](./main-editor/run-preview)**） |
| 打正式包 | Web 控制台 **构建** |
| 跑自动化测试 | Web 控制台 **测试** |

---

## 从主编辑器菜单开

下列工具**没有**控制台按钮，或你已在主编辑器里时更方便从菜单进：

**工具 → 外部工具** 中常见项：

| 菜单项 | 说明 |
|---|---|
| 通用图编辑器 | 通用节点图 |
| 图对话编辑器 | 独立窗口版图对话 |
| 场景深度 | 场景遮挡与深度 |
| 滤镜工具 | 画面滤镜 |
| 图片缩放 | 批量改图 |
| 文案管理 | 文案维护 |
| 视频转图集 | 视频转动画图集 |
| 生产工作台 | 生产向验收台 |
| 视差编辑器 | 视差场景 |

---

## 从 Web 控制台按钮开

控制台常见按钮覆盖主编辑器、工作台、图对话、资源、缩放、滤镜、光照体积、**角色照明实验室**、动画工作台、视差、编年史、治理台、**Agent Canvas OS**，以及游戏开关 / 构建 / 测试 / 场景快捷入口。

没有按钮、仍可用命令：`validate-data`、`json-lang`、`chronicle-week`、`acos-agent`。

用法见 **[Web 控制台](./concepts/web-console)**。

---

## 第一次打不开？

| 现象 | 怎么办 |
|---|---|
| 提示缺 Python / 虚拟环境 | 仓库根目录跑 `./bootstrap.sh` |
| 任务名不对 | 对照上表连字符写法 |
| 浏览器页空白 | 看终端打印的端口，换浏览器或关掉旧进程再开 |

更多排查见 **[出问题怎么办](../tutorials/troubleshooting)**。
