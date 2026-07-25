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

  // Non-blocking Google Fonts load, matching freewili.com's own <head>:
  // preconnect early, then load the stylesheet with the
  // media="print" / onload="this.media='all'" trick so the CSSOM doesn't
  // block on Google's CSS + woff2 round trip.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        media: 'print',
        onload: "this.media='all'",
        href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap',
      },
    },
  ],

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
    image: 'img/social-card.png',
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
    navbar: {
      title: '',
      logo: {
        alt: 'FREE-WILi',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
        href: 'https://www.freewili.com',
        target: '_self',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { href: 'https://www.freewili.com', label: 'freewili.com', position: 'right' },
        { href: 'https://freewili.com/onewili/', label: 'Developer API', position: 'right' },
        { href: 'https://discord.com/invite/XJRBUCX62z', label: 'Discord', position: 'right' },
        {
          href: 'https://shop.freewili.com/products/free-wili-2',
          label: 'Buy',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'freewili.com', href: 'https://www.freewili.com' },
            { label: 'Shop', href: 'https://shop.freewili.com/products/free-wili-2' },
            { label: 'Orca Modules', href: 'https://www.freewili.com/explore-orcas.html' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'OneWili API', href: 'https://freewili.com/onewili/' },
            { label: 'Python Library', href: 'https://freewili.github.io/freewili-python/index.html' },
            { label: 'GitHub', href: 'https://github.com/freewili' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/invite/XJRBUCX62z' },
            { label: 'YouTube', href: 'https://www.youtube.com/@FREE-WiLi' },
          ],
        },
      ],
      copyright: '© 2026 FREE-WILi LLC · Open hardware',
    },
  },
};

module.exports = config;
