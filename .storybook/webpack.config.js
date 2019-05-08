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
      test: /\.(css|sass|scss)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
  );
  config.config.resolve.extensions.push('.ts', '.tsx');
  return config.config;
};
