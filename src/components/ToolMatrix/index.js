import React from 'react';
import Link from '@docusaurus/Link';
import toolData from '@site/src/data/tools.json';

const README_META = {
  green: {emoji: '🟢', label: '有手册'},
  yellow: {emoji: '🟡', label: '部分'},
  red: {emoji: '🔴', label: '待补'},
};

/** 展示用中文名：优先 alias，否则 name。 */
function displayName(tool) {
  return tool.alias || tool.name;
}

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

function ToolNameCell({tool}) {
  const label = displayName(tool);
  if (tool.doc) {
    return (
      <Link to={`/docs/editors/${tool.doc}`}>
        <strong>{label}</strong>
      </Link>
    );
  }
  return <strong>{label}</strong>;
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
            <th>怎么开</th>
            <th>文档</th>
          </tr>
        </thead>
        <tbody>
          {group.tools.map((t) => (
            <tr key={t.name}>
              <td>
                <ToolNameCell tool={t} />
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

/** 按文档状态统计。 */
export function ReadmeStats() {
  const buckets = {green: [], yellow: [], red: []};
  for (const g of toolData.groups) {
    for (const t of g.tools) {
      (buckets[t.readme] || buckets.red).push(displayName(t));
    }
  }
  const row = (status) => {
    const meta = README_META[status];
    const names = buckets[status];
    return (
      <li key={status}>
        {meta.emoji} <strong>{meta.label}</strong>({names.length} 个):
        {names.join('、')}
      </li>
    );
  };
  return <ul>{['green', 'yellow', 'red'].map(row)}</ul>;
}
