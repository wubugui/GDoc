---
id: dev-commands
title: 命令清单
sidebar_position: 2
slug: /dev/commands
description: 全部 ./dev.sh 子命令与 npm scripts 速查。
---

# 命令清单

:::note
所有命令在**游戏仓库根目录**（`~/AIWork/GameDraft/`）执行。`./dev.sh` 是统一任务入口，封装了环境初始化、资源管线、游戏运行、编辑器/工具启动等全部日常操作。
:::

完整子命令清单可运行 `./dev.sh --help` 查看。

---

## 环境初始化命令

| 命令 | 说明 |
|---|---|
| `./dev.sh bootstrap` | 初始化 game/editor，或清理本地环境 |
| `./dev.sh install-deps` | 安装第三方依赖 |
| `./dev.sh init-runtime` | 同步游戏运行时资源（runtime） |
| `./dev.sh init-editor` | 同步编辑器工程资源（editor projects） |

---

## 游戏运行 / 构建命令

| 命令 | 说明 |
|---|---|
| `./dev.sh game start` | 启动 Vite 开发服务器（起游戏） |
| `./dev.sh game stop` | 停止 Vite 开发服务器 |

:::tip
`game` 是一个带子命令的命令组，必须跟上 `start` 或 `stop`。
:::

---

## 编辑器 / 工具启动命令

以下命令各启动一个编辑器或工具。它们对应 [启动架构](../editors/launch-architecture) 页中 `TOOL_MODULES` 声明的工具模块——`dev.sh` → `tools.dev` → 工具本体构成三层调用链。

| 命令 | 说明 |
|---|---|
| `./dev.sh console` | 启动 console |
| `./dev.sh editor` | 启动 editor |
| `./dev.sh asset-browser` | 启动 asset-browser（资源浏览器） |
| `./dev.sh asset-ingest` | 启动 asset-ingest（资源入库） |
| `./dev.sh image-resizer` | 启动 image-resizer |
| `./dev.sh dialogue-graph` | 启动 dialogue-graph（对话图） |
| `./dev.sh workbench` | 启动 workbench |
| `./dev.sh chronicle-sim-v2` | 启动 chronicle-sim-v2 |
| `./dev.sh chronicle-sim` | 启动 chronicle-sim |
| `./dev.sh filter-tool` | 启动 filter-tool |
| `./dev.sh lightvol` | 启动 lightvol |
| `./dev.sh anim-preview` | 启动 anim-preview |
| `./dev.sh parallax-editor` | 启动 parallax-editor |
| `./dev.sh skill-governance` | 启动 skill-governance |
| `./dev.sh validate-data` | 启动 validate-data |
| `./dev.sh json-lang` | 启动 json-lang |
| `./dev.sh chronicle-week` | 启动 chronicle-week |
| `./dev.sh agent-canvas-os` | 启动 Agent Canvas OS（独立仓库） |
| `./dev.sh acos-agent` | 启动 Agent Canvas OS（独立仓库） |

---

## 资源管线命令

DVC + 阿里云 OSS 大文件管理。详见 [资源管线](./resources)。

| 命令 | 说明 |
|---|---|
| `./dev.sh configure-oss` | 配置 DVC OSS 远程 |
| `./dev.sh pull` | git pull + DVC pull（pull-all） |
| `./dev.sh push` | DVC push + git push（push-all） |
| `./dev.sh commit` | dvc add + git add/commit（commit-all） |

---

## 测试命令

| 命令 | 说明 |
|---|---|
| `npm test` | vitest run（TypeScript 单元测试） |
| `npm run test:godot-visual-parity` | `node godot_port/tools/visual_parity_runner.mjs --require-thresholds`（视觉 parity 全量门禁） |
| `npm run test:godot-scene-visuals` | 场景视觉 parity 扫描 |
| `npm run test:godot-fade-visuals` | fade 视觉 parity 扫描 |
| `npm run test:godot-dialogue-visuals` | 对话视觉 parity 扫描 |
| `npm run test:godot-minigame-visuals` | 小游戏视觉 parity 扫描 |

:::info
Godot 侧无界面回归另可运行 `python3 godot_port/tools/run_tests.py`，详见 [Godot 移植工作流](./godot-port)。
:::

---

## npm scripts

| 命令 | 说明 |
|---|---|
| `npm run dev` | vite（起游戏，等价 `./dev.sh game start`） |
| `npm run build` | `tsc && vite build && npm run build:narrative-editor` |
| `npm run dev:narrative-editor` | 启动 narrative-editor（Web 工具） |
| `npm run dev:anim-preview` | 启动 anim-preview（Web 工具） |
| `npm run dev:parallax-editor` | 启动 parallax-editor（Web 工具） |
| `npm run filter-tool` | 走 `scripts/pytool.cjs` 启动 filter-tool |
| `npm run planner:gui` | 走 `scripts/pytool.cjs` 启动 planner GUI |

---

## 接下来

- [启动架构](../editors/launch-architecture) —— `dev.sh` → `tools.dev` → 工具本体的三层链与 `TOOL_MODULES` 声明
- [资源管线](./resources) —— DVC/OSS 大文件管理的配置与日常流程
- [Godot 移植工作流](./godot-port) —— parity 审计与视觉门禁
