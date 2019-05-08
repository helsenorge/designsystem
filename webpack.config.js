import {resolve,join} from 'path'
import * as pkg from './package.json';

import {DtsBundlerWebpackPlugin} from 'dtsbundler-webpack-plugin';
import {MiniCssExtractPlugin} from 'mini-css-extract-plugin';

module.exports = {
  entry: join(__dirname, pkg.source),
  devtool: 'inline-source-map',
  output: {
    path: resolve(__dirname, 'lib'),
    filename: pkg.main,
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new DtsBundlerWebpackPlugin({
      out: 'index.d.ts',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-react-loader',
          },
        ],
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
    ],
  },
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
