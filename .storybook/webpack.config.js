const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/images');

module.exports = config => {
  const rules = config.config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  // const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
  // fileLoaderRule.exclude = pathToInlineSvg;
  const svgWorkaround = config.config.module.rules.find(rule => rule.test.test('.svg'));
  svgWorkaround.exclude = /\.svg$/;
  //   const svgLoader = config.config.module.rules
  //   .find((r) => r.loader && r.loader.indexOf('svg-url-loader') !== -1);
  // svgLoader.query = {noquotes: true};
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
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
        },
        {
          loader: require.resolve('resolve-url-loader'),
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(svg|woff(2))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'fonts/[name].[ext]',
      },
    },
  );
  config.config.resolve.extensions.push('.ts', '.tsx');
  return config.config;
};
