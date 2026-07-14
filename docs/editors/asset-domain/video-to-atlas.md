---
id: video-to-atlas
title: video_to_atlas 视频→图集
sidebar_position: 4
slug: /editors/asset-domain/video-to-atlas
---

# video_to_atlas 视频→图集

从视频按时间区间抽帧、管理多视频子帧库与动画序列,导出 native 等大单元格图集 `atlas.png` + `.anim.json`。

| 属性 | 值 |
|---|---|
| 模块 | `tools.video_to_atlas` |
| 形态 | PySide6 桌面 |
| 启动 | `.tools/venv/bin/python -m tools.video_to_atlas` |
| 文档状态 | 🟢 有详细 README |

## 用途

对视频按时间区间抽帧,管理多个视频的子帧库与动画序列,最终导出为 native 等大单元格图集 `atlas.png` 及配套 `.anim.json`。是手动抽帧拼图集的工具。

## 启动

```bash
.tools/venv/bin/python -m tools.video_to_atlas
# 未登记 dev.sh / dev_console,只能 python -m 或经主编辑器菜单
```

## 关键事实

- 🟢 有详细 README(`tools/video_to_atlas/README.md`,含模块结构表)。
- 工作区持久化为 `.vtaw` 目录。
- 主编辑器"动画浏览"面板里的 `anim.json` 是**只读**的;要重打图集就用本工具。
- **未登记** dev.sh / dev_console;是主编辑器 `Tools → External tools` 的一员。

## 相关

- [animation_pipeline 动画后处理](./animation-pipeline)
- [工具速查表](../tool-matrix)
- [主编辑器(动画浏览面板)](../main-editor/overview)
