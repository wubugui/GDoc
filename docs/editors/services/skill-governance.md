---
id: skill-governance
title: skill_workflow_governance Skill/Workflow 治理台
sidebar_position: 2
slug: /editors/services/skill-governance
---

# skill_workflow_governance Skill/Workflow 治理台

扫描项目里的 skill、workflow 与 agent 入口,生成报告并打开 dashboard,给"哪些能力散在哪、状态如何"一个统一视图。

| 属性 | 值 |
|---|---|
| 模块 | `tools.skill_workflow_governance` |
| 形态 | CLI + dashboard.html + MCP server |
| 启动 | `./dev.sh skill-governance`(= `tools.skill_workflow_governance.console`) |
| 文档状态 | 🟢 有详细 README |

## 用途

治理台会遍历项目,扫描其中的 skill、workflow 和 agent 入口,汇总成一份报告,并打开 dashboard 供查看。目的是把散落各处的自动化能力集中盘点,便于治理。

## 启动

```bash
./dev.sh skill-governance
# 等价:tools.skill_workflow_governance.console
# 也可在 dev_console 里点按钮"Skill/Workflow 治理"打开
```

## 关键事实

- 🟢 有详细 README。
- dev_console 里有对应按钮:**"Skill/Workflow 治理"**。
- 产出 `dashboard.html` 报告。
- 也提供 **MCP server**,供 agent 直接调用。

## 相关

- [工具速查表](../tool-matrix)
- [启动架构](../launch-architecture)
