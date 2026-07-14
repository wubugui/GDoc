// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GameDraft 文档',
  tagline: 'GameDraft 编辑器与开发文档',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // 部署到 GitHub Pages(项目站点):https://wubugui.github.io/GDoc/
  url: 'https://wubugui.github.io',
  // 项目站点的路径前缀 = 仓库名。GDoc 仓库 → '/GDoc/'。
  baseUrl: '/GDoc/',

  // GitHub Pages 部署所需:组织/用户名 + 仓库名 + 构建产物推送的分支。
  // `npm run deploy` 会据此把 build/ 推到 gh-pages 分支。
  organizationName: 'wubugui',
  projectName: 'GDoc',
  deploymentBranch: 'gh-pages',

  // 显式声明 URL 规范化策略,避免不同托管商行为不一致导致 301 链与索引重复。
  // false = 页面 URL 不带尾斜杠(/GDoc/docs/editors/overview)。
  trailingSlash: false,

  // 断裂链接处理分环境:
  // - 本地增量写作(默认)只警告,不打断心流;
  // - CI/部署构建(CI=1)直接抛错,在上线前拦住死链。
  onBrokenLinks: process.env.CI ? 'throw' : 'warn',
  onBrokenAnchors: process.env.CI ? 'throw' : 'warn',

  // 即使不用国际化,也用这个字段设置 html lang。中文站点用 'zh-Hans'。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // Mermaid 支持 + 断裂 markdown 链接分环境(本地警告、CI 抛错)。
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: process.env.CI ? 'throw' : 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // "编辑此页" 链接。推到 Git 远程后,把仓库地址填进环境变量
          // EDIT_URL_BASE(如 https://github.com/<org>/GameDraft-docs/edit/main/)
          // 即自动开启;未设置时(本地/尚无远程)保持关闭,不显示无效链接。
          editUrl: process.env.EDIT_URL_BASE || undefined,
        },
        blog: false, // 本次不启用博客
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 本地中文搜索(无需 Algolia 申请)。
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // 中文分词
        language: ['zh', 'en'],
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 社交分享卡片(og:image / twitter:image)。分享链接到微信/Twitter 时显示。
      image: 'img/social-card.png',
      colorMode: {
        // 游戏是夜色民俗恐怖调性,默认给"油灯夜档"暗色;仍可切到"符纸日档"亮色。
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      // 全站"建设中"提示,承担唯一的阶段状态声明(单一数据源)。
      // 进入下一阶段时只改这一处;用户可点 × 关闭(按 id 记忆)。
      announcementBar: {
        id: 'build-stage-complete', // 换阶段时改 id,让关过的用户重新看到
        content:
          '🏮 雾津折子已铺满 —— 编辑器手册(20+ 工具)、开发文档、教程、玩家手册俱已点灯。持续增补中。',
        backgroundColor: '#1a140d',
        textColor: '#e0a44e',
        isCloseable: true,
      },
      navbar: {
        title: 'GameDraft 文档',
        logo: {
          alt: 'GameDraft',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          {
            type: 'docSidebar',
            sidebarId: 'editorSidebar',
            position: 'left',
            label: '编辑器手册',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devSidebar',
            position: 'left',
            label: '开发文档',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: '参考',
          },
          // 玩家手册是第 5 阶段内容,当前仅占位,先不放进主导航
          // (仍可通过站内搜索或 /docs/player/intro 直达)。上线时再取消注释。
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/tutorials/intro',
              },
              {
                label: '编辑器手册',
                to: '/docs/editors/overview',
              },
              {
                label: '开发文档',
                to: '/docs/dev/architecture',
              },
            ],
          },
          {
            title: '参考',
            items: [
              {
                label: '工具速查表',
                to: '/docs/editors/tool-matrix',
              },
              {
                label: '启动架构',
                to: '/docs/editors/launch-architecture',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GameDraft. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
