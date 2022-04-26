import path from 'path';

module.exports = config => {
  const excludedFonts = config.config.module.rules.filter(rule => !rule.test.source.includes('woff'));
  config.config.module.rules = excludedFonts;
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
      loader: require.resolve('file-loader'),
    }
  );
  config.config.resolve.extensions.push('.ts', '.tsx');
  return config.config;
};
