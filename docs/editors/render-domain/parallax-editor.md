---
id: parallax-editor
title: parallax_editor 视差场景编辑器
sidebar_position: 3
slug: /editors/render-domain/parallax-editor
---

# parallax_editor 视差场景编辑器

过场视差场景的可视化编辑器——编辑图层 / 关键帧 / 轨迹并存入 `parallax_scenes.json`。

| 属性 | 值 |
|---|---|
| 模块 | `tools.parallax_editor` |
| 形态 | 独立 Web(Vite dev + 浏览器,复用游戏 Pixi 渲染) |
| 启动 | `./dev.sh parallax-editor` |
| 文档状态 | 🔴 无 README(启动在 `__main__.py` docstring) |

## 用途

可视化编辑过场视差场景的图层、关键帧与轨迹,复用游戏 Pixi 渲染保证所见即所得,结果存入 `parallax_scenes.json`。

## 启动

```bash
./dev.sh parallax-editor
# 等价命令(端口 5205):
npm run dev:parallax-editor
# 指定场景:
python -m tools.parallax_editor --scene shenxianding_02_demo
# 不自动开浏览器并指定端口:
python -m tools.parallax_editor --no-open --port 5205
```

## 关键事实

- 🔴 无 README,启动说明写在 `__main__.py` 的 docstring 里。
- 复用游戏 Pixi 渲染,默认端口 5205。
- 同端口已在跑则**复用不重复起服**。
- 主编辑器 `Tools → External tools` 与过场 `present:parallaxScene` 步的按钮都走本模块。

## 相关

- [主编辑器 · 概览](../main-editor/overview)
- [工具速查表](../tool-matrix)
