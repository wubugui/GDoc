---
id: image-resizer
title: image_resizer 图片缩放/镜像
sidebar_position: 3
slug: /editors/asset-domain/image-resizer
---

# image_resizer 图片缩放/镜像

独立的**非破坏性**图片缩放/镜像工具:等比缩放、水平/垂直对称、导出副本,不改动源文件。

| 属性 | 值 |
|---|---|
| 模块 | `tools.image_resizer` |
| 形态 | PySide6 桌面 |
| 启动 | `./dev.sh image-resizer` |
| 文档状态 | 🔴 无(工具极简单,一句 docstring) |

## 用途

对单张/多张图片做等比缩放与水平、垂直镜像,导出为副本。工具刻意保持"非破坏性"——不覆盖源图,方便反复试。

## 启动

```bash
./dev.sh image-resizer
# 等价:python -m tools.image_resizer
```

## 关键事实

- 非破坏性:所有操作导出为**副本**,源文件不动。
- 也可从主编辑器 `Tools → External tools` 菜单拉起。

## 相关

- [工具速查表](../tool-matrix)
- [主编辑器](../main-editor/overview)
