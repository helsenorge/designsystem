const path = require('path');

module.exports = (config, mode) => {
  const svgWorkaround = config.config.module.rules.find(rule => rule.test.test('.svg'));
  svgWorkaround.exclude = /\.svg$/;
  config.config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('svg-react-loader')
        }
      ]
    },
    {
      test: /\.module.scss$/,
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
  );
  config.config.resolve.extensions.push('.ts', '.tsx');
  return config.config;
};
