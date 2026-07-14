<p align="center">
  <img src="static/img/social-card.png" alt="GameDraft · 雾津" width="680">
</p>

<h1 align="center">GameDraft</h1>

<p align="center"><b>一座在油灯与浓雾里，一笔一笔编纂出来的中式民俗恐怖游戏，以及它背后那整套自研编辑器。</b></p>

<p align="center">
  📖 <a href="https://wubugui.github.io/GDoc/"><b>在线文档</b></a> &nbsp;·&nbsp;
  🏮 <a href="https://wubugui.github.io/GDoc/docs/editors/overview">编辑器手册</a> &nbsp;·&nbsp;
  🎓 <a href="https://wubugui.github.io/GDoc/docs/tutorials/intro">5 分钟跑起来</a> &nbsp;·&nbsp;
  🧭 <a href="https://wubugui.github.io/GDoc/docs/editors/tool-matrix">工具速查</a>
</p>

---

## 雾津

雾津是座临江的山城，终年不散的雾里，青石崖壁上凿满了洞窟、栈道与崖墓，江水墨绿，一到夜里，家家户户只剩一盏油灯。

关二狗披着一身不合身的道袍，进城来寻他走失的狗——**二狗**。可他越往里走，雾越浓：城隍庙夜里有人叫魂，义庄停着不肯闭眼的尸，枯井边的土地庙供着路祭的酒肉，阎王岭山口的雾里，有冷东西从林边伸出来缠住脚踝……真道士**李天狗**比叫花子还破，一声断喝、一道桃木符光，才把煞散开。

这是一个关于**规矩、鬼神与人心**的故事——糖画转盘、扎纸铺子、水边的小把戏散落其间，一口重庆话贯穿始终。

## GameDraft 是什么

**GameDraft 是这座游戏背后的一整套自研编辑器与工具链。**

"编一座游戏"被拆成一件件趁手的活：场景与世界、对白与过场、任务与规矩、物品与商店、小游戏，一直到抠图、动画、视差、光照、文案、叙事模拟——**20+ 件工具**，各司其职。日常你只需记住两扇门：**改内容开主编辑器，犯迷糊开 Web 控制台**。

游戏本体是**双技术栈并行**：TypeScript + PixiJS 作权威实现，Godot 4 作移植壳，两者以 parity 契约对齐；外加 Python 治理/编辑器工具链与 DVC/OSS 资源管线。

## 文档里有什么

| 分区 | 讲什么 |
|---|---|
| **[编辑器手册](https://wubugui.github.io/GDoc/docs/editors/overview)** | 主角。20+ 件编辑器/工具怎么用——主编辑器 30 块面板、生产工作台、各专项工具，以及做内容前必读的**危险区**。 |
| **[开发文档](https://wubugui.github.io/GDoc/docs/dev/architecture)** | 双壳结构、Godot 移植工作流、常用命令、资源管线。 |
| **[教程](https://wubugui.github.io/GDoc/docs/tutorials/intro)** | 从零跑起来：起游戏、开编辑器、逛一圈主编辑器。 |
| **[参考](https://wubugui.github.io/GDoc/docs/reference/authoring-surface)** | 逐面板的"能改什么 / 哪里会丢数据 / 哪里 GUI 够不着"。 |

> 本仓库是 GameDraft 的**文档站**（与游戏代码物理隔离，内容自包含）。想看某件工具怎么用，直接去[在线文档](https://wubugui.github.io/GDoc/)。

<details>
<summary>本地预览与部署（写文档的人才需要）</summary>

```bash
npm install        # 装依赖(需 Node ≥ 20)
npm run start      # 本地起开发服,热重载
npm run build      # 产出静态站到 build/
```

站点部署在 GitHub Pages（源码 `main` / 产物 `gh-pages`）。改完文档重新部署：

```bash
git push                                       # 源码 → main
GIT_USER=wubugui USE_SSH=false npm run deploy   # 构建 → gh-pages,约 30 秒生效
```

技术栈：Docusaurus 3 · 本地中文搜索（无需 Algolia）· Mermaid · 装饰美术以游戏原画为原型用 libtv 生成。
</details>
