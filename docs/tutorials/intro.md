---
id: tutorials-intro
title: 5 分钟跑起来
sidebar_position: 1
slug: /tutorials/intro
description: 从零开始：跑起来游戏、打开编辑器、完成第一次内容编辑（改一段对白、导一张立绘）。
---

# 5 分钟跑起来

本教程带你从零启动 GameDraft 游戏，打开编辑器，并完成两次真实的内容编辑——**改一段对白**和**导入一张立绘**。全程可照做。

---

## 前置：环境要求

- **Node.js ≥ 20**（推荐 20 LTS）
- **Python 3.11+**（由 bootstrap 建独立 venv，不污染系统）
- 已克隆 GameDraft 游戏仓库（下文以 `~/AIWork/GameDraft/` 为例）

:::tip[文档站与游戏项目的关系]
本文档站（`GameDraft-docs`）是独立项目，**不含游戏代码**。所有命令都要在你的**游戏仓库根目录**（`~/AIWork/GameDraft/`）下运行，不是在文档站里运行。
:::

---

## 第 1 步：初始化环境（只做一次）

首次运行前，在**游戏仓库根目录**初始化 Python 环境与依赖：

```bash
cd ~/AIWork/GameDraft
./bootstrap.sh
```

这会用系统 Python 在 `.tools/venv` 建独立虚拟环境，安装 DVC（用于大文件资源管理）。之后所有 `./dev.sh` 命令都用这个 venv，不碰你的系统 Python。

:::danger[没跑 bootstrap 会怎样]
后面任何 `./dev.sh <task>` 都会报 `Project Python runtime missing`。见到这个提示，回来先跑 `./bootstrap.sh`。
:::

如果资源（图片/音频等大文件）还没拉取，继续：

```bash
./dev.sh pull           # git pull + DVC pull,拉取大文件资源
```

---

## 第 2 步：启动游戏

```bash
./dev.sh game start     # 起 Vite 开发服(等价 npm run dev)
```

:::note[命令形式]
起游戏是 `./dev.sh game start`（`game` 有子命令 `start` / `stop`），**不是** `./dev.sh dev`。
停止：`./dev.sh game stop`。
:::

浏览器打开 Vite 提示的本地地址（通常 `http://localhost:5173`），就能看到游戏在跑。改动游戏数据后，Vite 热重载会自动刷新。

<details>
<summary>端口被占用？</summary>

Vite 默认用 5173。若被占用会自动顺延到 5174、5175……看终端输出的实际地址即可。
</details>

---

## 第 3 步：打开主编辑器

```bash
./dev.sh editor         # 桌面主编辑器(内容创作核心)
```

打开后你会看到：左侧是**导航树**（30 个编辑面板，按物理世界 / 叙事编排 / 规则与经济 / 注册表 / 资源本地化分组），右侧是当前选中面板的编辑区。

另一个入口是 **Web 控制台**（`./dev.sh console`）——一站式启动器，列了全部工具按钮，还能起游戏、构建、跑测试。不知道用哪个工具时，从这里找。详见 [Web 控制台](../editors/web-console)。

:::danger[动手改之前先读这一页]
主编辑器保存时部分结构会**整体重建**，手写塞在 JSON 里的自定义字段可能被抹掉。第一次做内容前，务必先看 [可编辑内容面 / 危险区](../reference/authoring-surface)——它讲清哪里安全、哪里会丢数据、哪里 GUI 改不到。
:::

---

## 第 4 步：端到端实战 —— 改一段对白

这是你最常做的事：找到某段 NPC 对白，改它的文字，然后在游戏里看到效果。

### 4.1 在主编辑器里找到对白

1. 主编辑器左侧导航树 → **叙事编排 → 图对话**，打开图对话编辑器。
2. 图对话编辑器顶部有一个**图选择器**，列出所有对白图（数据在 `public/assets/dialogues/graphs/*.json`）。
3. 选一个图，画布上会显示节点图。

对白图的节点类型有 7 种，最常见的是：

| 节点类型 | 作用 |
|---|---|
| `line` | 一句台词（speaker + text） |
| `choice` | 玩家选项分支 |
| `switch` | 按条件分支 |
| `runActions` | 执行动作 |
| `end` | 结束对话 |

### 4.2 改文字

1. 在画布上点一个 `line` 节点。
2. 右侧检查器里修改 `text` 字段（富文本，可插 `[tag:...]` 引用）。
3. 改完按 **`Ctrl+S`** 保存当前编辑器，或 **`Ctrl+Shift+S`** 保存全部。

:::warning[重建区]
被编辑器打开编辑过的对话节点，保存时会**从头重建**——你手写塞在节点 JSON 里的未知字段会被丢掉。所以节点里**只填编辑器认识的字段**，别手写塞自定义键。
:::

### 4.3 在游戏里看效果

1. 按 **`F5`**——主编辑器会先保存，再起游戏（内嵌 WebEngine 预览）。
2. 在游戏里触发那段对话，确认改动生效。

<details>
<summary>不想用内嵌预览？</summary>

- `Ctrl+F5`：独立窗口预览（不嵌在编辑器里）
- `Shift+F5`：停止运行
- 或者你已经在第 2 步用 `./dev.sh game start` 起了游戏，直接切到那个浏览器窗口看（Vite 热重载）。
</details>

---

## 第 5 步：端到端实战 —— 导入一张立绘

把一张外部图片变成游戏可用的立绘，标准流程是：**asset_ingest 入库 → 主编辑器引用 → 游戏验证**。

### 5.1 用 asset_ingest 分类入库

```bash
./dev.sh asset-ingest    # 分类导入窗口
```

asset_ingest 有 6 个预设分类，把图片拖进去后选对应分类即可：

| 分类 | 目标路径 |
|---|---|
| 游戏 / 立绘 | `public/resources/runtime/images/illustrations` |
| 游戏 / 背景 | `public/resources/runtime/images/backgrounds` |
| 游戏 / 角色头像 | `public/resources/runtime/images/characters` |
| 游戏 / 音频 | `public/resources/runtime/audio` |

把你的立绘图片拖进窗口，选「游戏 / 立绘」，点导入（默认复制；勾选「移动」则从原位置移走）。

:::tip[立绘分类支持子目录]
只有「立绘」分类允许建子目录（按角色归类很方便）。其它分类不支持子目录。
:::

### 5.2 在主编辑器里引用

入库后，这张立绘就在游戏的资源路径里了。具体在哪里引用，取决于用途：

- **NPC 对话立绘**：主编辑器 → Scene 场景 → 选中 NPC → `portraitSlug` / `dialogueCameraZoom`
- **过场展示图**：图对话 `runActions` 里用 `setHotspotDisplayImage`，或过场 `showImg` 步
- **档案插图**：Archive 档案编辑器的富文本里用 `[img:短名]`（档案编辑器有插图按钮）

:::info[什么是"短名"？]
图片资源的"短名"是相对 runtime 媒体根的路径，例如 `images/illustrations/npc_blind_li.png`。运行时和校验器都按短名识别。详见 [可编辑内容面](../reference/authoring-surface)。
:::

### 5.3 在游戏里看效果

`F5` 起游戏，触发引用了这张立绘的场景/对话/过场，确认显示正常。

---

## 日常命令速查

| 命令 | 作用 |
|---|---|
| `./dev.sh game start` | 起游戏（Vite 开发服） |
| `./dev.sh game stop` | 停游戏 |
| `./dev.sh editor` | 主编辑器 |
| `./dev.sh console` | Web 控制台（启动器） |
| `./dev.sh asset-ingest` | 资源分类导入 |
| `./dev.sh pull` | 拉取资源（git + DVC） |
| `./dev.sh push` | 推送资源（DVC + git） |
| `./dev.sh validate-data` | 校验游戏数据 |

完整命令表见 [开发文档 → 命令清单](../dev/commands)。

---

## 接下来

- [编辑器总览](../editors/overview) —— 20+ 工具的心智地图
- [主编辑器总览](../editors/main-editor/overview) —— 30 面板 + 3 通用控件
- [工具速查表](../editors/tool-matrix) —— 查任意工具的启动命令
- [可编辑内容面 / 危险区](../reference/authoring-surface) —— 做内容前必读
