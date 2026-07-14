import React from 'react';
import toolData from '@site/src/data/tools.json';

// 单一数据源:所有工具事实来自 src/data/tools.json。
// 表格、计数、图例全部由它渲染 —— 加/删工具只改那一个 JSON,
// 全站数字(总数、分组数)自动同步,不再散落硬编码。

const README_META = {
  green: {emoji: '🟢', label: '详细'},
  yellow: {emoji: '🟡', label: '部分'},
  red: {emoji: '🔴', label: '无'},
};

/** 工具总数(所有分组去重后的条目数)。 */
export function toolCount() {
  return toolData.groups.reduce((n, g) => n + g.tools.length, 0);
}

/** 内联展示工具总数,供正文引用:<ToolCount /> 个编辑器/工具。 */
export function ToolCount() {
  return <>{toolCount()}</>;
}

function ReadmeCell({status, note}) {
  const meta = README_META[status] || README_META.red;
  return (
    <span>
      {meta.emoji} {meta.label}
      {note ? <span style={{opacity: 0.75}}> —— {note}</span> : null}
    </span>
  );
}

function GroupTable({group}) {
  return (
    <>
      <h2 id={group.slug || undefined}>{group.name}</h2>
      <table>
        <thead>
          <tr>
            <th>工具</th>
            <th>形态</th>
            <th>启动</th>
            <th>文档状态</th>
          </tr>
        </thead>
        <tbody>
          {group.tools.map((t) => (
            <tr key={t.name}>
              <td>
                <strong>{t.name}</strong>
                {t.alias ? <span style={{opacity: 0.7}}> {t.alias}</span> : null}
              </td>
              <td>{t.form}</td>
              <td>
                <code>{t.launch}</code>
              </td>
              <td>
                <ReadmeCell status={t.readme} note={t.note} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/** 完整工具矩阵(按域分组的多张表)。 */
export default function ToolMatrix() {
  return (
    <div>
      {toolData.groups.map((g) => (
        <GroupTable key={g.name} group={g} />
      ))}
    </div>
  );
}

/** 按文档状态统计:🟢/🟡/🔴 各多少个,并列出工具名。 */
export function ReadmeStats() {
  const buckets = {green: [], yellow: [], red: []};
  for (const g of toolData.groups) {
    for (const t of g.tools) {
      (buckets[t.readme] || buckets.red).push(t.name);
    }
  }
  const row = (status) => {
    const meta = README_META[status];
    const names = buckets[status];
    return (
      <li key={status}>
        {meta.emoji} <strong>{meta.label}文档</strong>({names.length} 个):
        {names.join('、')}
      </li>
    );
  };
  return <ul>{['green', 'yellow', 'red'].map(row)}</ul>;
}
