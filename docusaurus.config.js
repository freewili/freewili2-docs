// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FREE-WILi 2',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://freewili.github.io',
  baseUrl: '/freewili2-docs/',
  organizationName: 'freewili',
  projectName: 'freewili2-docs',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // .md renders as CommonMark: generated pages carry firmware help text with
  // raw < and { that MDX would reject. .mdx still gets full MDX.
  markdown: { format: 'detect' },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { hashed: true, indexBlog: false, docsRouteBasePath: '/' },
    ],
  ],

  themeConfig: {
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
    navbar: {
      title: 'FREE-WILi 2',
      items: [],
    },
    // copyright omitted (not set to ''): Docusaurus 3.10.x validates
    // footer.copyright with Joi.string(), which rejects an empty string but
    // allows the key to be absent. Task 2 adds real copyright text.
    footer: { style: 'dark', links: [] },
  },
};

module.exports = config;
