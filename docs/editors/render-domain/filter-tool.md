---
id: filter-tool
title: filter_tool 滤镜工具
sidebar_position: 4
slug: /editors/render-domain/filter-tool
---

# filter_tool 滤镜工具

Python + PIL 实现的 **ColorMatrix 滤镜工具**:可视化调参并导出与游戏 `FilterLoader` 完全一致的滤镜 JSON。

| 属性 | 值 |
|---|---|
| 模块 | `tools.filter_tool` |
| 形态 | Tkinter(PIL)桌面 |
| 启动 | `./dev.sh filter-tool` |
| 文档状态 | 🟢 有 README |

## 用途

调 ColorMatrix 色彩滤镜并存为预制,产出给游戏运行时用。所见即所得,导出 JSON 与游戏加载格式一致,改完即可进游戏。

## 启动

```bash
./dev.sh filter-tool
# 也可:python -m tools.filter_tool  或  npm run filter-tool
```

## 关键事实

- 输出到 `public/assets/data/filters/{id}.json`;`id` = 文件名(只读)。
- 自定义预制存 `tools/filter_tool/custom_presets.json`。
- 与主编辑器 **Filters** 面板**共用** `data/filters` 目录——两边看到同一批滤镜。

## 相关

- [主编辑器 · Filters 面板](../main-editor/overview)
- [工具速查表](../tool-matrix)
