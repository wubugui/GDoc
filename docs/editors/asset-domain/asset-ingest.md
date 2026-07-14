---
id: asset-ingest
title: asset_ingest 分类导入
sidebar_position: 2
slug: /editors/asset-domain/asset-ingest
---

# asset_ingest 分类导入

把外部素材分类导入到工程目录结构里(资源入库)。

| 属性 | 值 |
|---|---|
| 模块 | `tools.asset_ingest.main` |
| 形态 | PySide6 桌面 |
| 启动 | `./dev.sh asset-ingest` |
| 文档状态 | 🔴 无(docstring 仅一句) |

## 用途

把工程外的素材按分类导入到工程既定的目录结构里,完成资源入库。是"资源浏览/入库"这对工具里的**入库**一端,与 `asset_browser`(浏览)配对使用。

## 启动

```bash
./dev.sh asset-ingest
# 等价:python -m tools.asset_ingest.main
```

## 关键事实

- 主窗口类 `IngestWindow`(`tools/asset_ingest/ingest_window.py`)。
- 入口 docstring 仅"启动素材入库工具(PySide6)";🔴 无 README。
- 也收录在 dev_console 里,按钮标签"资源入库"。
- 与 `asset_browser` 是浏览/入库的一对。

## 相关

- [asset_browser 资源浏览器](./asset-browser)
- [工具速查表](../tool-matrix)
- [主编辑器](../main-editor/overview)
