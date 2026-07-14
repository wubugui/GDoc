---
id: animation-pipeline
title: animation_pipeline 动画后处理
sidebar_position: 5
slug: /editors/asset-domain/animation-pipeline
---

# animation_pipeline 动画后处理

把角色各状态"稳定化视频"转成游戏可载入的 `atlas.png` + `anim.json`,带 QA 门控。

| 属性 | 值 |
|---|---|
| 模块 | `tools.animation_pipeline.produce` |
| 形态 | 命令行 CLI(无 GUI) |
| 启动 | `python -m tools.animation_pipeline.produce ...` |
| 文档状态 | 🟢 有详尽 README |

## 用途

把角色各状态的"稳定化视频"自动转成游戏可直接载入的 `atlas.png` + `anim.json`,并带 QA 门控。这是"视频→游戏动画"管线的**后处理半段**;生成半段在 libtv 批处理脚本里。

## 启动

```bash
python -m tools.animation_pipeline.produce \
  --clips-dir <dir> --out <dir> --world-w 115 --world-h 150
```

## 关键事实

- 🟢 有详尽 README(`tools/animation_pipeline/README.md`,含抠像 matting 方法 bake-off 数据表)。
- 入口 docstring 在 `animation_pipeline/produce.py`。
- **未登记** dev.sh / dev_console。
- 与 `video_to_atlas` 的区别:本工具是"视频→游戏动画"的自动化管线,`video_to_atlas` 是手动抽帧拼图集工具。

## 相关

- [video_to_atlas 视频→图集](./video-to-atlas)
- [工具速查表](../tool-matrix)
- [主编辑器](../main-editor/overview)
