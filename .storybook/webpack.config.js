const path = require('path');

module.exports = (config) => {
  config.config.module.rules.push(
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
      test: /\.(css|sass|scss)$/,
      use: [
        {
          loader: require.resolve('style-loader')
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[local]'
          }
        },
        {
          loader: require.resolve('sass-loader')
        }
      ]
    },
  );
  config.config.resolve.extensions.push('.ts', '.tsx');
  return config.config;
};
