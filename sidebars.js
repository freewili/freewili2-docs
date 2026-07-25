// Hand-written navigation spine. Plan 2 adds the generated Menus & Commands
// and On-Device Apps categories, sourced from sidebars.generated.js.
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
  ],
};

module.exports = sidebars;
