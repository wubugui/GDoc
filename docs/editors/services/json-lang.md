---
id: json-lang
title: json_lang JSON 即语言
sidebar_position: 1
slug: /editors/services/json-lang
---

# json_lang JSON 即语言

"JSON = 语言"工具链——从权威代码与真实数据重算 JSON Schema，让 VS Code / Cursor 把散落的配置 JSON 当成一门有校验、有补全、有旁注的语言来编辑。

| 属性 | 值 |
|---|---|
| 模块 | `tools.json_lang` |
| 形态 | CLI + LSP server(纯 stdlib,走 stdio)+ VS Code 扩展 |
| 启动 | `./dev.sh json-lang`(= `tools.json_lang.build`) |
| 文档状态 | 🟢 有详尽 README(`tools/json_lang/README.md`) |

## 用途

把"JSON"从死数据升格为一门语言。工具链以**权威代码 + 真实数据**为准重算 JSON Schema,再供 VS Code / Cursor 消费,从而拿到:

- 动作 / 条件的校验;
- ID 引用把真实枚举**烤入** schema;
- 跨字段收窄(一个字段的取值会约束另一个字段);
- 中文旁注;
- 补全脚手架。

Schema 的来源是代码与数据本身,而非手写维护,所以它始终跟着工程走。

## 启动

```bash
./dev.sh json-lang
# 等价:tools.json_lang.build,负责构建 schema

# find-all-references:查某个 id 的全部引用点
python3 tools/json_lang/refs.py <id>

# 常驻"语言大脑":LSP server(纯 stdlib,走 stdio)
python3 tools/json_lang/lsp_server.py

# 图级连边检查
python3 tools/json_lang/lsp_server.py --lint
```

## 关键事实

- 🟢 有详尽 README:`tools/json_lang/README.md`。
- `python3 tools/json_lang/refs.py <id>` 做 find-all-references(查引用)。
- `tools/json_lang/lsp_server.py` 是常驻的"语言大脑"(LSP server)。
- `--lint` 做图级连边检查。
- 主编辑器内嵌预览的 **LSP overlay** 会把**未保存**的编辑实时同步给它,所见即改。

## 相关

- [主编辑器 · 概览](../main-editor/overview)
- [工具速查表](../tool-matrix)
