// const path = require('path');

// const pathToInlineSvg = path.resolve(__dirname, '../src/images');

// module.exports = config => {
//   const rules = config.config.module.rules;

//   // modify storybook's file-loader rule to avoid conflicts with svgr
//   // const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
//   // fileLoaderRule.exclude = pathToInlineSvg;
//   const svgWorkaround = config.config.module.rules.find(rule => rule.test.test('.svg'));
//   svgWorkaround.exclude = /\.svg$/;
//   //   const svgLoader = config.config.module.rules
//   //   .find((r) => r.loader && r.loader.indexOf('svg-url-loader') !== -1);
//   // svgLoader.query = {noquotes: true};
//   config.config.module.rules.push(
//     {
//       test: /\.(ts|tsx)$/,
//       use: [
//         {
//           loader: require.resolve('babel-loader'),
//         },
//         {
//           loader: require.resolve('ts-loader'),
//         },
//         {
//           loader: require.resolve('react-docgen-typescript-loader'),
//         },
//       ],
//     },
//     {
//       test: /\.(css|sass|scss)$/,
//       use: [
//         {
//           loader: require.resolve('style-loader'),
//         },
//         {
//           loader: require.resolve('css-loader'),
//         },
//         {
//           loader: require.resolve('sass-loader'),
//           options: {
//             sourceMap: true,
//           },
//         },
//       ],
//     },
//     {
//       test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//       loader: 'file-loader',
//       options: {
//         name: '[name].[ext]',
//       },
//     },
//   );
//   config.config.resolve.extensions.push('.ts', '.tsx');
//   return config.config;
// };

const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = async ({config}) => {
  config.entry.push(path.join(__dirname, '../dist/hnds.js'));
  fs.readdirSync(path.join(__dirname, '../dist/collection/components')).map(function(file) {
    jsFilePath = path.join(__dirname, `../dist/collection/components/${file}/${file}.js`);
    try {
      if (fs.existsSync(jsFilePath)) {
        config.entry.push(jsFilePath);
      }
    } catch (err) {
      console.error(err);
    }

    cssFilePath = path.join(__dirname, `../dist/collection/components/${file}/${file}.css`);
    try {
      if (fs.existsSync(cssFilePath)) {
        config.entry.push(cssFilePath);
      }
    } catch (err) {
      console.error(err);
    }
  });

  config.plugins.push(
    new CopyPlugin([
      {
        from: '**/*',
        to: './',
        context: 'dist',
      },
    ]),
  );

  config.plugins.push(new WriteFilePlugin());

  return config;
};
