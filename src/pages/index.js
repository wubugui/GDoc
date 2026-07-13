import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// 首页三个入口卡片(顺序即左→右展示)。
// to 路径对应 docs/<分区>/<文件> 渲染后的 docId。
const SECTIONS = [
  {
    title: '编辑器手册',
    emoji: '🛠️',
    desc: 'GameDraft 的 20 个编辑器/工具怎么用——主编辑器、生产工作台、各专项编辑器。',
    to: '/docs/editors/overview',
    primary: true,
  },
  {
    title: '开发文档',
    emoji: '🏗️',
    desc: '项目双壳结构、Godot 移植工作流、命令清单、资源管线——给开发者的进阶文档。',
    to: '/docs/dev/architecture',
  },
  {
    title: '教程',
    emoji: '🎓',
    desc: '从零开始:5 分钟跑起来游戏、打开编辑器、完成第一次内容编辑。',
    to: '/docs/tutorials/intro',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/editors/overview">
            进入编辑器手册 🛠️
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionCard({title, emoji, desc, to, primary}) {
  return (
    <div className={clsx('col col--4', styles.sectionCard)}>
      <Link to={to} className={clsx('card', styles.cardLink, primary && styles.cardPrimary)}>
        <div className="card__header">
          <Heading as="h3">
            <span className={styles.cardEmoji}>{emoji}</span> {title}
          </Heading>
        </div>
        <div className="card__body">
          <p>{desc}</p>
        </div>
        <div className="card__footer">
          <span className={clsx('button', primary ? 'button--primary' : 'button--secondary', 'button--sm')}>
            查看 →
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="GameDraft 编辑器使用手册与开发文档">
      <HomepageHeader />
      <main>
        <section className={styles.sections}>
          <div className="container">
            <div className="row">
              {SECTIONS.map((s) => (
                <SectionCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.introNote}>
          <div className="container">
            <div className={clsx('alert', 'alert--info')} role="note">
              <Heading as="h4">📖 关于本站</Heading>
              <p>
                这是 GameDraft 项目的文档站,内容优先级:<strong>编辑器使用手册 &gt; 开发文档 &gt; 玩家手册</strong>。
                文档站是独立项目,与游戏代码物理隔离。本站内容持续建设中,
                按阶段逐步补充——目前是<strong>第 1 阶段(脚手架 + 部署链路 + 基础速查)</strong>。
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
