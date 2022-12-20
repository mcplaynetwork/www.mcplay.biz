// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MCPlayNetwork Docs',
  tagline: 'Minecraft Java Edition multiplayer server documentation website for MCPlayNetwork players',
  url: 'https://mc-docs.pages.dev',
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
        blog: false,
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
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'ホーム',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'vanilla',
            label: 'バニラサーバー',
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'slimefun',
          //   label: '工業サーバー',
          // },
          {
            href: 'https://github.com/mcplaynetwork/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Vailla',
                to: '/vanilla/',
              },
              {
                label: 'Slimefun',
                to: '/slimefun/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.io/mcplaynetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mcplaynetwork',
              }
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Main site',
                to: 'https://www.mcplay.biz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mcplaynetwork',
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
