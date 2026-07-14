---
id: anim-preview
title: anim_preview 动画预览
sidebar_position: 6
slug: /editors/asset-domain/anim-preview
---

# anim_preview 动画预览

游戏一致的精灵动画预览,并实时发现工程内全部动画(复用游戏 `src/rendering`)。

| 属性 | 值 |
|---|---|
| 模块 | `tools.anim_preview` |
| 形态 | 独立 Web 应用(Vite dev + 浏览器,PixiJS) |
| 启动 | `./dev.sh anim-preview` |
| 文档状态 | 🔴 无(启动写在 `__main__.py` docstring) |

## 用途

以与游戏一致的方式预览精灵动画,并实时发现工程内的全部动画。渲染复用游戏自身的 `src/rendering`,所见即游戏内所得。

## 启动

```bash
./dev.sh anim-preview
# 等价:npm run dev:anim-preview(端口 5199)

# 可带参数:
python -m tools.anim_preview --char 官差枪_anim --state run --no-open --port 5199
```

## 关键事实

- 🔴 无 README;启动说明写在 `__main__.py` 顶部 docstring。
- 也收录在 dev_console 里,按钮标签"动画预览"。
- 是几个"独立 Web 工具"之一:Python 起本地服→自动开浏览器。

## 相关

- [工具速查表](../tool-matrix)
- [主编辑器](../main-editor/overview)
