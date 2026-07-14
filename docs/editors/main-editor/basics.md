---
id: main-editor-basics
title: 主编辑器怎么逛
sidebar_position: 2
slug: /editors/main-editor/basics
description: 会开关面板、保存、撤销、前进后退——在主编辑器里从容走动。
---

# 主编辑器怎么逛

主编辑器像雾津书案上一本厚册子：左边是目录，右边是你要改的那一页。这一页只讲**怎么在册子里走动**——开哪块面板、怎么存、怎么反悔、怎么像浏览器一样来回翻。

## 先认三块地方

<div style={{margin: '1.5rem 0'}}>
<svg viewBox="0 0 820 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="主编辑器界面示意" style={{width: '100%', height: 'auto'}}>
  <rect x="10" y="10" width="800" height="40" rx="6" fill="#1f1810" stroke="#e0a44e" strokeWidth="1.5" />
  <text x="410" y="36" textAnchor="middle" fill="#f0e7d2" fontSize="16" fontFamily="serif">菜单栏 — 文件 · 视图 · 运行 · 工具 …</text>
  <rect x="10" y="60" width="200" height="250" rx="6" fill="#161d1c" stroke="#5a8a86" strokeWidth="1.5" />
  <text x="110" y="90" textAnchor="middle" fill="#e0a44e" fontSize="15" fontFamily="serif">左侧导航树</text>
  <text x="110" y="115" textAnchor="middle" fill="#c9bda1" fontSize="12">物理世界</text>
  <text x="110" y="135" textAnchor="middle" fill="#c9bda1" fontSize="12">叙事编排</text>
  <text x="110" y="155" textAnchor="middle" fill="#c9bda1" fontSize="12">规则与经济</text>
  <text x="110" y="175" textAnchor="middle" fill="#c9bda1" fontSize="12">注册与扩展</text>
  <text x="110" y="195" textAnchor="middle" fill="#c9bda1" fontSize="12">资源与本地化</text>
  <text x="110" y="225" textAnchor="middle" fill="#8a7a5c" fontSize="11">运行与预览 → Game</text>
  <rect x="220" y="60" width="590" height="250" rx="6" fill="#1a1712" stroke="#3a2f20" strokeWidth="1.5" />
  <text x="515" y="100" textAnchor="middle" fill="#e0a44e" fontSize="15" fontFamily="serif">右侧编辑区</text>
  <text x="515" y="130" textAnchor="middle" fill="#c9bda1" fontSize="13">点左边哪项，右边就显示那块面板</text>
  <rect x="10" y="320" width="800" height="30" rx="6" fill="#12100e" stroke="#3a2f20" strokeWidth="1" />
  <text x="410" y="340" textAnchor="middle" fill="#8a7a5c" fontSize="13">状态栏 — 当前文件、保存状态</text>
</svg>
</div>

| 区域 | 你用它干什么 |
|---|---|
| **左侧导航树** | 在 30 块面板和「运行与预览」之间切换 |
| **右侧编辑区** | 改当前面板里的内容 |
| **菜单栏** | 保存、撤销、起外部工具、运行预览等全局操作 |

想先摸清每块面板管什么，去看 **[主编辑器总览](./overview)**。

---

## 开关面板

1. 在左侧导航树里**点一项**，右边立刻切到对应面板。
2. 导航按五大组折叠排列——**物理世界**、**叙事编排**、**规则与经济**、**注册与扩展**、**资源与本地化**。组名左边的小三角可以展开/收起。
3. 最底下还有 **运行与预览 → Game**，用来边改边看游戏（详见 **[运行预览](./run-preview)**）。

:::tip[雾津小例子]
你要改关二狗在城隍庙门口的第一句对白：左侧展开 **叙事编排 → 图对话**，选对应对白图，右边就会出现节点画布。
:::

---

## 保存

改完记得落笔存档，不然预览和游戏里看到的还是旧内容。

| 操作 | 快捷键 | 作用 |
|---|---|---|
| 保存当前面板 | `Ctrl+S` | 只把**当前这一块**的改动写进工程 |
| 保存全部 | `Ctrl+Shift+S` | 把所有已改但未存的面板一次性写入 |

保存时，状态栏会提示是否还有未保存的编辑。准备按 `F5` 跑预览前，编辑器也会先帮你存一遍。

:::danger[保存前先看危险区]
有些地方的保存会**整段重写**——你在编辑器界面里没填过、却偷偷塞进数据里的额外内容，一保存就没了。动手改内容前，花两分钟读 **[危险区](../concepts/danger-zone)**。
:::

---

## 撤销与重做

写错了可以反悔，跟常见写作软件一样：

| 操作 | 快捷键 |
|---|---|
| 撤销 | `Ctrl+Z` |
| 重做 | `Ctrl+Y` 或 `Ctrl+Shift+Z` |

撤销只管**当前面板里**的编辑历史。切到别的面板再回来，各面板各自记着自己的撤销栈。

---

## 前进与后退（像浏览器翻页）

主编辑器支持**浏览器式导航**：你在面板之间跳来跳去，可以沿访问记录往回走、再往前走。

| 操作 | 快捷键 | 效果 |
|---|---|---|
| 后退 | `Alt+←` | 回到上一个你打开过的面板 |
| 前进 | `Alt+→` | 从后退记录里再往前走 |

典型用法：你在 **场景** 里摆好了 NPC，切到 **图对话** 改他的台词，改完按 `Alt+←` 立刻回到场景核对位置——不用在导航树里重新找。

<div style={{margin: '1.5rem 0'}}>
<svg viewBox="0 0 640 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="面板导航示意" style={{width: '100%', height: 'auto'}}>
  <rect x="20" y="40" width="100" height="40" rx="8" fill="#1f1810" stroke="#e0a44e" strokeWidth="1.5" />
  <text x="70" y="66" textAnchor="middle" fill="#f0e7d2" fontSize="13">场景</text>
  <path d="M130,60 L170,60" stroke="#8a7a5c" strokeWidth="2" markerEnd="url(#arr)" />
  <rect x="180" y="40" width="100" height="40" rx="8" fill="#1f1810" stroke="#5a8a86" strokeWidth="1.5" />
  <text x="230" y="66" textAnchor="middle" fill="#f0e7d2" fontSize="13">图对话</text>
  <path d="M290,60 L330,60" stroke="#8a7a5c" strokeWidth="2" />
  <text x="360" y="66" fill="#c9bda1" fontSize="12">Alt+← 回到场景</text>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#8a7a5c"/></marker></defs>
</svg>
</div>

---

## 视图与搜索

菜单 **视图** 里可以调整界面细节（例如字号、布局）。左侧导航树顶部通常有**过滤框**——面板多了以后，输入「任务」「音频」之类关键词可以快速定位。

---

## 接下来

- **[主编辑器总览](./overview)** —— 30 块面板各管什么
- **[运行预览](./run-preview)** —— 边改边看游戏
- **[危险区](../concepts/danger-zone)** —— 哪里保存会丢东西
- **[快捷键大全](../../reference/shortcuts)** —— 完整按键表（参考区）
