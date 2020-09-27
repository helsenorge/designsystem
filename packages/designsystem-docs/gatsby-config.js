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
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
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
      },
    },
  ],
};
