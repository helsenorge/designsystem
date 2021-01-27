const path = require('path');
/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Helsenorge Design System',
    description: 'Design System all the things!',
    author: '@helsenorge',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typescript',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {default: path.resolve('./src/layouts/Page.tsx')},
        extensions: ['.mdx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/cms-pages`, // mdx-filer som skal benytte page template må ligge her (https://github.com/gatsbyjs/gatsby/issues/24164)
        name: 'templatePages',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@shared': path.resolve(__dirname, 'src/shared'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: path.resolve(__dirname, `src/images/favicon.svg`),
        name: 'helsenorge-design-system',
        short_name: 'starter',
        start_url: '/',
        background_color: '#3A0B53',
        theme_color: '#3A0B53',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.tsx`,
        customizeWebpackConfig: (config) => {
          config.resolve.symlinks = false;
        },
      },
    },
  ],
};
