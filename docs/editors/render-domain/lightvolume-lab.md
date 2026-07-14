---
id: lightvolume-lab
title: lightvolume_lab 光照体积烘焙
sidebar_position: 2
slug: /editors/render-domain/lightvolume-lab
---

# lightvolume_lab 光照体积烘焙

由深度图烘焙辐照度体积(irradiance volume)的独立 Web 工具，并提供 quad 预览。

| 属性 | 值 |
|---|---|
| 模块 | `tools.lightvolume_lab` |
| 形态 | 独立 Web(仓库根起静态服 + 浏览器,也可双击 `index.html` 走 file://) |
| 启动 | `./dev.sh lightvol` |
| 文档状态 | 🔴 无 README(启动写在 `__main__.py` docstring) |

## 用途

读取深度图并烘焙辐照度体积(irradiance volume),配 quad 预览查看效果。与 `scene_depth_editor` 配套——前者产出深度,本工具据此烘焙光照。

## 启动

```bash
./dev.sh lightvol
# 指定场景:
./dev.sh lightvol -- --scene mountain_pass
# 不自动开浏览器并指定端口:
./dev.sh lightvol -- --no-open --port 8099
```

## 关键事实

- 🔴 无 README,启动说明写在 `__main__.py` 的 docstring 里。
- 目录极简,仅 `__init__.py` / `__main__.py` / `index.html`。
- 从仓库根起静态服 + 浏览器,也可直接双击 `index.html` 走 `file://`。
- 与 `scene_depth_editor` 配套:前者产出深度图,本工具据此烘焙光照。

## 相关

- [scene_depth_editor 场景深度重建](./scene-depth-editor)
- [工具速查表](../tool-matrix)
