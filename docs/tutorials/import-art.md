---
id: tutorials-import-art
title: 导入一张素材
sidebar_position: 12
slug: /tutorials/import-art
description: 把电脑里一张立绘或背景图，按分类放进游戏资源库，再在编辑器里引用。
---

# 导入一张素材

你手头有一张雾津用的图——关二狗的立绘、茶馆背景、音效文件——得先**入库**，游戏和编辑器才认。这一页走标准流程：**分类导入 → 主编辑器引用 → 运行预览确认**。

---

## 读完你能做到什么

- 用**分类导入**把外部图片放进游戏资源库
- 选对分类（立绘、背景、头像、音频等）
- 在主编辑器里把图挂到对的应用途（对话、场景、档案等）
- 在游戏里看到图显示正常

---

## 第 1 步：打开分类导入

在游戏仓库根目录：

```bash
./dev.sh asset-ingest
```

也可以 `./dev.sh console` 打开 Web 控制台，点「资源入库」按钮——效果一样。

窗口里会看到若干**预设分类**，每张图必须归到一类，系统才知道放进资源库的哪个位置。

| 分类 | 典型用途 |
|---|---|
| 游戏 / 立绘 | NPC 对话大图、插图 |
| 游戏 / 背景 | 场景背景图 |
| 游戏 / 角色头像 | 对话框小头像 |
| 游戏 / 音频 | 音效、语音片段 |

:::tip[立绘可以分子文件夹]
只有「立绘」分类允许按角色建子文件夹，方便归类。其它分类不要自建子目录。
:::

---

## 第 2 步：拖入并导入

1. 把图片文件**拖进**导入窗口（或点浏览选取）
2. 选中对应**分类**
3. 默认是**复制**进资源库；若勾选「移动」，原位置的文件会被移走
4. 点导入，等完成提示

导入成功后，图已经在游戏**运行时资源**里，编辑器挑图时能从列表里看到。

### 操作示意

<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="分类导入操作示意" style={{width:'100%', height:'auto'}}>
  <rect width="640" height="360" fill="#1a1510" rx="8"/>
  <text x="320" y="32" textAnchor="middle" fill="#e0a44e" fontSize="16" fontFamily="serif">分类导入</text>
  <rect x="40" y="52" width="260" height="200" fill="#231c14" stroke="#5a8a86" strokeWidth="2" strokeDasharray="8 6" rx="8"/>
  <text x="170" y="150" textAnchor="middle" fill="#8a7a5c" fontSize="13">拖入图片文件</text>
  <rect x="340" y="52" width="260" height="200" fill="#1f1810" stroke="#3a2f20" rx="8"/>
  <text x="360" y="80" fill="#c9bda1" fontSize="12">选分类：</text>
  <rect x="360" y="90" width="220" height="26" fill="#2a2218" stroke="#e0a44e" rx="4"/>
  <text x="470" y="108" textAnchor="middle" fill="#f0e7d2" fontSize="11">游戏 / 立绘</text>
  <rect x="360" y="200" width="120" height="36" fill="#3a2f20" stroke="#e0a44e" rx="6"/>
  <text x="420" y="223" textAnchor="middle" fill="#e0a44e" fontSize="12">导入</text>
  <rect x="40" y="270" width="560" height="70" fill="#161d1c" stroke="#3a2f20" rx="6"/>
  <text x="320" y="300" textAnchor="middle" fill="#c9bda1" fontSize="12">导入后 → 主编辑器里引用 → F5 预览</text>
</svg>

---

## 第 3 步：在主编辑器里引用

```bash
./dev.sh editor
```

图进库以后，**在哪引用取决于用途**：

| 你想干什么 | 去哪改 |
|---|---|
| NPC 说话时旁边出立绘 | **场景**面板 → 选中 NPC → 立绘相关项 |
| 过场或对话里弹出一张图 | 图对话或过场面板 → 动作里选「显示图片」 |
| 档案、见闻录里插图 | **档案**面板 → 富文本里插入图片（有专用按钮） |

> **[热区](../reference/glossary)**：场景里玩家能走近互动的区域；立绘多半挂在 NPC 或热区上，不是随便丢在场景顶层。

图片在资源库里有一个**短名**——编辑器列表里显示的路径名，运行时靠它找文件。选图时从下拉列表挑即可，不必手打路径。

---

## 第 4 步：运行预览

**F5** 起运行预览，走到会显示这张图的位置：

- 立绘：触发对应对话，看侧边图对不对、裁切是否正常
- 背景：走进场景，看比例与色调
- 档案：打开对应条目，看图是否在正文里

图糊了或太大？可再用 `./dev.sh image-resizer` 做缩放，或重新导一张合适尺寸的。详见 [图片缩放工具](../editors/asset-domain/image-resizer)。

---

## 流程示意

```mermaid
flowchart LR
  A[外部图片] --> B[./dev.sh asset-ingest]
  B --> C[选分类 · 导入]
  C --> D[./dev.sh editor · 引用]
  D --> E[F5 运行预览]
```

---

## 雾津小例子

美术给你一张**李天狗**新表情立绘，要在他和关二狗斗嘴时出现：

1. `./dev.sh asset-ingest`，分类选「游戏 / 立绘」，可放进立绘子文件夹里标清角色名
2. 主编辑器 → **场景**或**角色登记**，把李天狗的立绘指到新图
3. 图对话里若有专用立绘切换动作，一并改掉
4. **F5** 进游戏，触发那段斗嘴，确认新表情亮出来

图进了库、挂对了人，戏才接得上。

---

## 接下来读什么

| 页面 | 内容 |
|---|---|
| [分类导入工具](../editors/asset-domain/asset-ingest) | 入库细节 |
| [资源浏览器](../editors/asset-domain/asset-browser) | 翻已有素材 |
| [怎么写带引用的文本](../editors/main-editor/shared-rich-text) | 正文里插图、插名字 |
| [把视频做成角色动画](./video-to-anim) | 动起来的角色素材 |
