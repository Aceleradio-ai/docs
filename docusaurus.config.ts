import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aceleradio.AI',
  tagline: 'Do pop ao metal, só depende do pedal 🚗🎵',
  favicon: 'img/favicon.ico',

  url: 'https://aceleradioai.com.br',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Aceleradio.AI',
      logo: {
        alt: 'Logo Aceleradio.AI',
        src: 'img/logo_sem_texto_sem_fundo.png',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'custom-github-icon',
          'aria-label': 'Repositório no GitHub',
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
              label: 'Tudo que você precisa saber!',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Integrantes',
          items: [
            {
              label: 'Cauê Marchi Foyth',
              href: 'https://www.linkedin.com/in/caue-foyth-6a3474227/',
            },
            {
              label: 'Gabriel Henrique Wondracek',
              href: 'https://www.linkedin.com/in/gabriel-wondracek-57a876214/',
            },
            {
              label: 'Gabriel Moratelli Carmargo de Gomes',
              href: 'https://www.linkedin.com/in/gabriel-moratelli-2014a8212/',
            },
            {
              label: 'José Silveira',
              href: 'https://www.linkedin.com/in/jos%C3%A9-silveira-0805b8266/',
            },
            {
              label: 'Paulo César Ferreira do Amarante',
              href: 'https://www.linkedin.com/in/paulo-amarante/',
            },
          ],
        },
        {
          title: 'Links Úteis',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aceleradio.AI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
