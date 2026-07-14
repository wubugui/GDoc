---
id: chronicle-sim-v3
title: chronicle_sim_v3 编年史模拟器 v3
sidebar_position: 2
slug: /editors/sim-domain/chronicle-sim-v3
---

# chronicle_sim_v3 编年史模拟器 v3

图驱动的编年史模拟器(CLI,程序名 `csim`)。

| 属性 | 值 |
|---|---|
| 模块 | `tools.chronicle_sim_v3` |
| 形态 | 命令行 CLI(typer) |
| 启动 | `./dev.sh chronicle-sim` |
| 文档状态 | 🔴 无 README(有 typer help) |

:::caution
task 名 `chronicle-sim`(不带版本号)指向的是 **v3**,不是 v2。要跑 v2 请用 `chronicle-sim-v2`。
:::

## 用途

以图为核心驱动编年史推演,通过 typer CLI(程序名 `csim`)运行。

## 启动

```bash
./dev.sh chronicle-sim   # 注意:task 名映射到 v3
# 也可:
python -m tools.chronicle_sim_v3
```

## 关键事实

- 🔴 无 README,仅有 typer help:"ChronicleSim v3 — 图驱动的编年史模拟器(CLI)"。
- 入口 `tools/chronicle_sim_v3/cli/main.py`(`app = typer.Typer(name="csim", ...)`)。
- 有 18 类节点需从代码提炼,手册待补。

## 相关

- [chronicle_sim_v2 编年史模拟器 v2](./chronicle-sim-v2)
- [工具速查表](../tool-matrix)
