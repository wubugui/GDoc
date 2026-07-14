---
id: main-editor-run-preview
title: 边改边看：运行预览
sidebar_position: 3
slug: /editors/main-editor/run-preview
description: 在主编辑器里直接跑游戏，改完对白、场景、任务立刻验证。
---

# 边改边看：运行预览

改雾津的内容，最怕「册子上写得挺美，进游戏却不对」。运行预览让你在主编辑器里**直接跑游戏**——左边改，右边看，不用来回切窗口。

## 打开运行预览

1. 启动主编辑器：`./dev.sh editor`
2. 左侧导航树滚到最底下，展开 **运行与预览**
3. 点 **Game**

右边编辑区会变成一块**内嵌游戏画面**——跟你在浏览器里跑的是同一套游戏，只是嵌在主编辑器窗口里。

<div style={{margin: '1.5rem 0'}}>
<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="运行预览位置示意" style={{width: '100%', height: 'auto'}}>
  <rect x="30" y="20" width="180" height="260" rx="8" fill="#161d1c" stroke="#5a8a86" strokeWidth="1.5" />
  <text x="120" y="50" textAnchor="middle" fill="#8a7a5c" fontSize="12">… 其它面板 …</text>
  <rect x="50" y="200" width="140" height="60" rx="6" fill="#1f1810" stroke="#e0a44e" strokeWidth="2" />
  <text x="120" y="228" textAnchor="middle" fill="#e0a44e" fontSize="13" fontFamily="serif">运行与预览</text>
  <text x="120" y="248" textAnchor="middle" fill="#f0e7d2" fontSize="13">→ Game</text>
  <path d="M220,140 L280,140" stroke="#8a7a5c" strokeWidth="2" markerEnd="url(#rp)" />
  <rect x="290" y="30" width="500" height="240" rx="8" fill="#0d0b09" stroke="#3a2f20" strokeWidth="1.5" />
  <text x="540" y="160" textAnchor="middle" fill="#c9bda1" fontSize="16" fontFamily="serif">内嵌游戏画面</text>
  <defs><marker id="rp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#8a7a5c"/></marker></defs>
</svg>
</div>

---

## 一键运行

| 操作 | 快捷键 | 发生什么 |
|---|---|---|
| **运行（内嵌）** | `F5` | 先自动保存，再启动游戏，画面嵌在 Game 页里 |
| **独立窗口预览** | `Ctrl+F5` | 另开一个窗口跑游戏，方便双屏对照 |
| **停止** | `Shift+F5` | 关掉正在跑的游戏进程 |

:::tip[推荐工作流]
改一句对白 → `Ctrl+S` 保存 → `F5` 运行 → 在游戏里走到关二狗面前触发对话 → 不对就 `Alt+←` 回图对话继续改。这套循环就是日常编纂节奏。
:::

---

## 边改边看的实际节奏

下面用雾津里改城隍庙对白举例，走完一整圈：

```mermaid
flowchart LR
    A[图对话里改台词] --> B[Ctrl+S 保存]
    B --> C[F5 运行预览]
    C --> D[走进城隍庙触发对白]
    D --> E{效果对吗?}
    E -->|不对| A
    E -->|对了| F[继续编下一段]
```

1. **叙事编排 → 图对话**：找到关二狗相关对白图，改 `line` 节点的文字。
2. **`Ctrl+S`**：保存图对话面板。
3. **`F5`**：编辑器先存盘，再拉起游戏。切到左侧 **运行与预览 → Game** 看画面。
4. 用键盘或鼠标操作角色，走到触发对白的 **[热区](../../reference/glossary)**，确认文字、立绘、选项都对了。
5. 不对就 `Shift+F5` 停掉，`Alt+←` 回到图对话继续改，再 `F5`。

---

## 内嵌预览 vs 独立窗口 vs 浏览器

三种看法，按场景选：

| 方式 | 怎么开 | 什么时候用 |
|---|---|---|
| **内嵌预览** | `F5`，看 Game 页 | 日常最顺手，改完立刻看 |
| **独立窗口** | `Ctrl+F5` | 双屏：一屏编辑器、一屏游戏 |
| **浏览器里跑** | `./dev.sh game start` | 已经开着游戏、不想重启编辑器时 |

内嵌预览和浏览器跑的是**同一份游戏数据**。你在主编辑器里保存后，预览会读到最新内容。

---

## 常见问题

**按了 F5 没反应？**

- 先确认左侧选的是 **运行与预览 → Game**，或等游戏进程在状态栏显示已启动。
- 若提示环境未就绪，回游戏仓库根目录跑一遍 `./bootstrap.sh`。

**改了内容，游戏里还是旧的？**

- 确认对应面板已 `Ctrl+S` 保存。`F5` 会再存一遍，但别的面板若没存，那些改动不会进游戏。
- 停掉预览（`Shift+F5`）再 `F5` 重开。

**预览里操作卡顿？**

- 开发服第一次启动要几秒，属正常。复杂场景可先用独立窗口（`Ctrl+F5`）减轻编辑器负担。

---

## 接下来

- **[主编辑器怎么逛](./basics)** —— 保存、撤销、面板切换
- **[怎么编排动作](../concepts/actions)** —— 对白结束后「给物品」「切场景」等
- **[教程：用运行预览验证改动](../../tutorials/preview-verify)** —— 端到端练一遍
- **[出问题怎么办](../../tutorials/troubleshooting)** —— 改了没生效等排查
