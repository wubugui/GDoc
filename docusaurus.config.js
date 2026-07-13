// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GameDraft 文档',
  tagline: 'GameDraft 编辑器与开发文档',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // 生产环境的站点 url。部署到 Cloudflare Pages 后改为你的实际域名。
  // 例如自定义域名 https://docs.gamedraft.dev,或 Cloudflare 默认 *.pages.dev
  url: 'https://gamedraft-docs.pages.dev',
  // 站点服务的 /<baseUrl>/ 路径前缀。
  // Cloudflare Pages 用自定义域名或项目根路径时填 '/'。
  baseUrl: '/',

  // 增量写作时,断裂链接只警告不阻断构建。
  onBrokenLinks: 'warn',

  // 即使不用国际化,也用这个字段设置 html lang。中文站点用 'zh-Hans'。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // Mermaid 支持 + 增量写作时断裂 markdown 链接只警告。
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
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
          // 去掉默认的 "edit this page" 链接(指向外部仓库无意义)。
          // 推到自己的 Git 仓库后再按需改回。
          editUrl: undefined,
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
      colorMode: {
        respectPrefersColorScheme: true,
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
          {
            type: 'docSidebar',
            sidebarId: 'playerSidebar',
            position: 'left',
            label: '玩家手册',
          },
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
