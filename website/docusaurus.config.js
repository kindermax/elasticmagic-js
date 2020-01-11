module.exports = {
  title: 'Elasticmagic',
  tagline: 'JavaScript/TypeScript ORM and query builder for Elasticsearch',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elasticmagic',
      logo: {
        alt: 'Elasticmagic Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/getting_started', label: 'Getting Started', position: 'right'},
        {to: 'docs/api', label: 'API', position: 'right'},
        {to: 'docs/faq', label: 'FAQ', position: 'right'},
        {
          href: 'https://github.com/kindritskyiMax/elasticmagic-js',
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
              label: 'Getting Started',
              to: 'docs/getting_started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/elasticmagic-js',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kindritskyiMax/elasticmagic-js',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elasticmagic, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
