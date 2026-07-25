// Hand-written navigation spine. Plan 2 adds the generated Menus & Commands
// and Panels categories, sourced from sidebars.generated.js.
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'start-here/what-is-freewili2',
        'start-here/quick-start',
        'start-here/screen-and-buttons',
        'start-here/connecting',
        'start-here/firmware-update',
      ],
    },
    {
      type: 'category',
      label: 'Files & Apps',
      items: [
        'files-and-apps/index',
        'files-and-apps/transferring-files',
        'files-and-apps/running-apps',
        'files-and-apps/app-marketplace',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
      items: [
        'hardware/index',
        'hardware/pinout',
        'hardware/connectors',
        'hardware/orca-modules',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      items: [
        'help/index',
        'help/troubleshooting',
        'help/recovery-mode',
        'help/faq',
      ],
    },
  ],
};

module.exports = sidebars;
