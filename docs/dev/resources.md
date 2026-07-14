---
id: dev-resources
title: 资源管线
sidebar_position: 4
slug: /dev/resources
description: DVC + 阿里云 OSS 大文件资源管理。
---

# 资源管线

GameDraft 的大文件（图片 / 音频 / 动画 / 视频等）由 **DVC** 版本管理，远程托管在**阿里云 OSS**。Git 只跟踪代码、JSON 数据和小型文本；媒体大文件走 DVC，避免仓库膨胀。

---

## 为什么用 DVC

| 问题 | DVC 的作用 |
|---|---|
| 图片 / 音频 / 动画是大文件，直接进 Git 会让仓库极速膨胀、克隆缓慢 | 大文件存 OSS，Git 只保留 `.dvc` 指针（hash + size） |
| 需要按版本还原某次提交时的媒体状态 | `.dvc` 指针随 Git 提交走，`dvc checkout` 即可还原对应版本 |
| 多人 / 多机协作需要共享同一份媒体 | 统一从 OSS 远程 pull/push，内容按 hash 校验 |

---

## 远程配置

`.dvc/config` 中的远程配置：

| 项 | 值 |
|---|---|
| remote | `aliyun_oss` |
| url | `oss://gamedraft-assets/gamedraft/dvc` |
| oss_endpoint | `https://oss-cn-shanghai.aliyuncs.com` |

---

## 三类资源结构

GameDraft 的资源按用途分为三类：

| 类别 | 路径 | 角色 | DVC 管理 |
|---|---|---|---|
| **运行时资源** | `public/resources/runtime/` | 游戏运行时直接读取（两壳共用） | `public/resources/runtime/` 下媒体由 DVC 跟踪 |
| **编辑器工程数据** | `resources/editor_projects/` | 编辑器工程数据（`editor_data` 等） | `resources/editor_projects.dvc` |
| **第三方原始素材归档** | `resources/vendor_archives/` | 第三方原始素材归档 | `resources/vendor_archives.dvc` |

### 运行时资源目录细分

`public/resources/runtime/` 下：

| 子目录 | 内容 |
|---|---|
| `images/` | `backgrounds` / `characters` / `corpses` / `dialogue_portraits` / `illustrations` / `inspect` / `maps` / `minigames` / `npcs` / `parallax` |
| `audio/` | 音频 |
| `animation/` | 动画 |

---

## 日常流程

资源管线的日常操作封装在 `./dev.sh` 中（详见 [命令清单](./commands)）。

| 步骤 | 命令 | 说明 |
|---|---|---|
| 1. 拉取 | `./dev.sh pull` | git pull + DVC pull（同步代码与媒体） |
| 2. 编辑 | 编辑 `runtime/` 等目录下的文件 | 正常添加 / 修改资源 |
| 3. 提交 | `./dev.sh commit` | dvc add + git add/commit（媒体进 DVC，指针进 Git） |
| 4. 推送 | `./dev.sh push` | DVC push + git push（媒体上 OSS，代码上 Git） |

:::tip
`pull` / `commit` / `push` 三个命令都是"all"语义：`pull` 即 `pull-all`、`commit` 即 `commit-all`、`push` 即 `push-all`，一条命令同时处理 Git 与 DVC。
:::

---

## 凭据配置

OSS 凭据存放在：

| 文件 | 说明 |
|---|---|
| `config/bootstrap-oss.json` | OSS 凭据配置（被 `.gitignore` 忽略，不会提交） |

首次配置远程可用：

```bash
./dev.sh configure-oss --prefix gamedraft/dvc --endpoint https://oss-cn-hangzhou.aliyuncs.com
```

:::warning
`config/bootstrap-oss.json` 已被 `.gitignore` 忽略，**切勿**将凭据提交到仓库。
:::

---

## asset_ingest 与资源管线的关系

[asset-ingest](../editors/asset-domain/asset-ingest) 工具负责资源**入库**：把外部原始素材处理（切片 / 重采样 / 命名归一）后，放入 `public/resources/runtime/` 对应的子目录。入库后的文件即进入 DVC 管理的运行时资源流，随后用 `./dev.sh commit` / `./dev.sh push` 提交推送。

简言之：**asset-ingest 决定文件去哪个目录，DVC 决定文件怎么版本化与托管。**

---

## 接下来

- [命令清单](./commands) —— `pull` / `commit` / `push` / `configure-oss` 速查
- [asset-ingest 工具](../editors/asset-domain/asset-ingest) —— 资源入库流程
- [项目架构总览](./architecture) —— DVC/OSS 在整体架构中的位置
