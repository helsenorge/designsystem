// .storybook/main.js
const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    const excludedFonts = config.module.rules.filter((rule) => !rule.test.source.includes('woff'));
    config.module.rules = excludedFonts;
    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
            },
          },
          {
            loader: require.resolve('resolve-url-loader'),
          },
          {
            loader: require.resolve('sass-loader'),
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            query: {
              name: '[name].[ext]',
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    // Return the altered config
    return config;
  },
  stories: ['../**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
  ],
};
