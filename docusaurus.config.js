// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MCPlayNetwork',
  tagline: 'ルールに縛られずじっくり遊べるMinecraft: Java Editionマルチプレイサーバ',
  favicon: 'img/favicon.ico',

  url: 'https://www.mcplay.biz',
  baseUrl: '/',

  organizationName: 'mcplaynetwork',
  projectName: 'www.mcplay.biz',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/mcplaynetwork/www.mcplay.biz/edit/master/',
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: false,
          blogSidebarCount: 5,
          postsPerPage: 1,
          blogSidebarTitle: "最新記事",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // FIXME: Social card image を設定する
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MCPlayNetwork',
        logo: {
          alt: 'MCPlayNetwork',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'ホーム',
            exact: true,
          },
          {
            to: 'news',
            position: 'left',
            label: 'ニュース',
          },
          {
            to: 'rules',
            position: 'left',
            label: 'ルール',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'vanilla',
            label: 'バニラサーバ',
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'slimefun',
          //   label: '工業サーバ',
          // },
          {
            to: '/discord',
            label: 'Discordサーバ',
            position: 'right',
            target: '_blank',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'サイトマップ',
            items: [
              {
                label: 'ホーム',
                to: '/',
              },
              {
                label: 'ルール',
                to: 'rules',
              },
              {
                label: 'バニラサーバ',
                to: 'vanilla/intro',
              },
              // {
              //   label: 'Slimefun',
              //   to: 'slimefun',
              // },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discordサーバ',
                to: 'discord',
              },
              {
                label: 'X (Twitter)',
                href: 'https://twitter.com/mcplaynetwork',
              }
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mcplaynetwork',
              },
              {
                to: 'contact',
                label: 'お問い合わせ',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} MCPlayNetwork. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        // FIXME: デフォルトのモードを light にする
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
