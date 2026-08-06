// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FREE-WILi 2',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  // Served at the root of its own domain. static/CNAME claims it on GitHub
  // Pages; organizationName/projectName still name the repo the deploy
  // workflow publishes from.
  url: 'https://docs.freewili.com',
  baseUrl: '/',
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
          // Explicit, not relied-upon-by-default: docs/_pending.md is the
          // generator's internal editorial worklist (menus/panels nobody has
          // classified in productdocs.json yet) and must never be a live
          // page. Docusaurus's own default `exclude` already skips `_*`
          // files, so this is currently redundant - which is exactly the
          // problem (finding M6): a future change to `exclude` (e.g. someone
          // narrowing it for an unrelated reason) could silently start
          // publishing it with no test catching that. This list is
          // Docusaurus's own documented default, restated here on purpose so
          // _pending.md's exclusion doesn't depend on nobody ever touching
          // this option.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
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
