---
id: chronicle-sim-v2
title: chronicle_sim_v2 编年史模拟器 v2
sidebar_position: 1
slug: /editors/sim-domain/chronicle-sim-v2
---

# chronicle_sim_v2 编年史模拟器 v2

编年史模拟器 v2——"文件即数据库" + Cline CLI 驱动的多 Agent 叙事沙盒。

| 属性 | 值 |
|---|---|
| 模块 | `tools.chronicle_sim_v2` |
| 形态 | PySide6 GUI + CLI 周模拟 |
| 启动 | `./dev.sh chronicle-sim-v2` |
| 文档状态 | 🟡 有 README(偏运维) |

## 用途

以"文件即数据库"为存储,借 Cline CLI 驱动多 Agent 推进叙事,构成可周迭代的编年史沙盒。GUI 用于交互,命令行用于批量周模拟。

## 启动

```bash
# GUI:
./dev.sh chronicle-sim-v2
# 命令行周模拟:
PYTHONPATH="$PWD" .tools/venv/bin/python tools/chronicle_sim_v2/scripts/run_simulation_once.py <run_dir> --week 1
# 等价封装:
./dev.sh chronicle-week ...
```

## 关键事实

- 🟡 有 README(`tools/chronicle_sim_v2/README.md`,偏运维)。
- 依赖 Node 20+ 与 `cline`。
- GUI 主窗为 `gui/main_window.py:MainWindow`。
- **task 名易混**:`chronicle-sim-v2` → v2,而 `chronicle-sim`(不带版本号)→ v3。

## 相关

- [chronicle_sim_v3 编年史模拟器 v3](./chronicle-sim-v3)
- [工具速查表](../tool-matrix)
