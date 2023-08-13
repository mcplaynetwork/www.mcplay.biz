// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MCPlayNetwork',
  tagline: 'ルールに縛られずじっくり遊べるMinecraft: Java Editionマルチプレイサーバ',
  url: 'https://www.mcplay.biz',
  baseUrl: '/',
  onBrokenLinks: 'log', //'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mcplaynetwork',
  projectName: 'docs',

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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mcplaynetwork/docs/edit/master/',
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            to: 'discord',
            label: 'Discordサーバ',
            position: 'right',
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
                to: 'vanilla',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
