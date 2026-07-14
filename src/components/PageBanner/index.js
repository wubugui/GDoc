import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * 折子横幅:文档页顶部的氛围题图。
 * 用游戏本身的美术,给每页一个"入戏"的开场。
 *   <PageBanner img="/img/banner-editors.jpg" title="编辑器手册" subtitle="……" />
 */
export default function PageBanner({img, title, subtitle, height}) {
  const url = useBaseUrl(img);
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(9,7,4,.86), rgba(9,7,4,.25) 55%, rgba(9,7,4,.55)), url(${url})`,
        minHeight: height || 200,
      }}>
      <div className={styles.inner}>
        {title ? <div className={styles.title}>{title}</div> : null}
        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
      </div>
    </div>
  );
}
