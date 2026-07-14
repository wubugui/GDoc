---
id: asset-browser
title: asset_browser 资源浏览器
sidebar_position: 1
slug: /editors/asset-domain/asset-browser
---

# asset_browser 资源浏览器

浏览、拖拽、查看入库记录的资源内容浏览器。

| 属性 | 值 |
|---|---|
| 模块 | `tools.asset_browser.main` |
| 形态 | PySide6 桌面 |
| 启动 | `./dev.sh asset-browser` |
| 文档状态 | 🔴 无(docstring 仅一句) |

## 用途

以内容浏览器的方式浏览工程资源:拖拽取用、查看入库记录。是"资源浏览/入库"这对工具里的**浏览**一端,与 `asset_ingest`(入库)配对使用。

## 启动

```bash
./dev.sh asset-browser
# 等价:python -m tools.asset_browser.main
```

## 关键事实

- 主窗口类 `BrowserWindow`(`tools/asset_browser/browser_window.py`)。
- 入口 docstring 仅"启动资源浏览器(PySide6)";🔴 无 README。
- 也收录在 dev_console 里,按钮标签"资源浏览器"。
- 与 `asset_ingest` 是浏览/入库的一对。

## 相关

- [asset_ingest 分类导入](./asset-ingest)
- [工具速查表](../tool-matrix)
- [主编辑器](../main-editor/overview)
