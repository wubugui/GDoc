---
id: dev-godot-port
title: Godot 移植工作流
sidebar_position: 3
slug: /dev/godot-port
description: 双壳 parity 对齐、视觉 SSIM 门禁、原生导出。
---

# Godot 移植工作流

GameDraft 的 Godot 移植壳（`godot_port/`，Godot 4 + GDScript）负责把 TypeScript/Pixi 权威源逐项复刻，并与权威源做 **parity（行为一致性）对齐**。

---

## 核心原则

Godot 壳与 TypeScript 权威源**读取同一套 JSON 和媒体数据**，**禁止维护第二份内容数据**。内容（对白、场景、任务、物品……）只在权威源侧编辑一次，两壳共用。

parity 不是"看起来差不多"——表现层用 **SSIM 门禁**做无损截图比对，逻辑/数据层用**契约审计**做逐字段、逐能力核对。

:::warning
改动权威源后，**重跑 parity 审计验证两壳一致**，再认定移植完成。
:::

---

## 当前 parity 状态

### 逻辑 / 数据强 parity（0 字段差异）

| 维度 | 状态 |
|---|---|
| 逻辑 / 事件 / 存档 / 固定时钟 | **0 字段差异** |

### 登记能力 strict coverage（0 missing）

| 能力 | 覆盖 |
|---|---|
| Action | 101 / 101 |
| Condition | 9 / 9 |
| 图对话节点 | 7 / 7 |
| Cutscene present | 16 / 16 |

### 测试覆盖

| 维度 | 数量 |
|---|---|
| 过场 | 20 个测试 |
| 场景 | 27 个测试 |
| 动画 manifest | 36 个测试 |
| 小游戏 | 四类 |
| 场景真实玩家路径 | 22 条 |
| 双向真实存档往返 | 均有测试 |

### 资源与导出

- **747 个共享文件**按 hash 重建导出镜像。
- **macOS universal 包**已真实启动。
- **Windows x86_64 包**已完成校验。

---

## 如何运行 Godot

### 编辑器

任选其一：

```bash
# 命令行直接打开编辑器
/Applications/Godot.app/Contents/MacOS/Godot --editor --path godot_port
```

或在 Godot Project Manager 中导入 `godot_port/project.godot`，然后：

- **F5** 运行整个项目
- **F6** 运行当前场景

### 游戏内操作

| 按键 | 动作 |
|---|---|
| WASD / 方向键 | 移动 |
| Shift | 奔跑 |
| E / 空格 | 互动 |
| F5 | 快速保存 |
| F6 | 快速读取 |

### 无界面回归

```bash
python3 godot_port/tools/run_tests.py
npm run test:godot-visual-parity   # 视觉 parity 全量门禁
```

---

## parity 工具链

工具位于 `godot_port/tools/`。

### 审计脚本（Python）

| 脚本 | 说明 |
|---|---|
| `audit_architecture_parity.py` | 架构 parity 审计 |
| `audit_runtime_coverage.py` | 运行时覆盖审计 |
| `audit_dialogue_graphs.py` | 对话图审计 |
| `audit_scene_routes.py` | 场景路由审计 |
| `audit_content_warnings.py` | 内容警告审计 |
| `audit_temporary_bypasses.py` | 临时旁路审计 |
| `build_runtime_contracts.py` | 构建运行时契约 |
| `build_resource_graph.py` | 构建资源图 |
| `build_exports.py` | 构建导出 |
| `parity_runner.py` | parity 运行器 |
| `run_tests.py` | 测试运行器 |

### 视觉 parity 扫描（Node mjs）

| 脚本 | 说明 |
|---|---|
| `visual_parity_runner.mjs` | 视觉 parity 总运行器（带 `--require-thresholds`） |
| `visual_scene_sweep.mjs` | 场景静态扫描 |
| `visual_fade_sweep.mjs` | fade 关键帧扫描 |
| `visual_dialogue_sweep.mjs` | 对话推进态扫描 |
| `visual_minigame_sweep.mjs` | 小游戏运行态扫描 |

---

## parity 产物

产物位于 `godot_port/compatibility/`。

| 文件 | 说明 |
|---|---|
| `architecture-contract.json` | 架构契约 |
| `authoritative-contract.json` | 权威源契约 |
| `capabilities.json` | 能力登记 |
| `code-translation-contract.json` | 代码翻译契约 |
| `runtime-command-contract.json` | 运行时命令契约 |
| `runtime-snapshot-schema.json` | 运行时快照 schema |
| `scene-field-contract.json` | 场景字段契约 |
| `data-catalog-ownership.json` | 数据目录归属 |
| `content-warning-classification.json` | 内容警告分类 |
| `dialogue-graph-audit.json` | 对话图审计结果 |
| `parity-last-report.json` | 最近一次 parity 报告（约 274KB，含 snapshots / differences / equivalent） |

---

## 视觉 SSIM 门禁

表现层的 parity 由 **SSIM（结构相似性）门禁**保障，而非肉眼比对。每个场景/状态对两壳各产一张无损截图，计算 SSIM 并对照阈值判定通过。

| 门禁 | 内容 |
|---|---|
| 场景静态装载态 | 27 个场景 |
| `fadeWorldFromBlack` | 五个 alpha 关键帧 |
| 对话推进态 | 6 组真实推进 |
| 小游戏运行态 | 四类小游戏 |

---

## 原生导出

| 平台 | 包 | 状态 |
|---|---|---|
| macOS | universal | 已真实启动 |
| Windows | x86_64 | 已完成校验 |

导出镜像由 747 个共享文件按 hash 重建，确保两壳使用的媒体完全一致。

---

## 接下来

- [项目架构总览](./architecture) —— 双壳结构与 parity 契约定位
- [命令清单](./commands) —— `test:godot-visual-parity` 等测试命令速查
