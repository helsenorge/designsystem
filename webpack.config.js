/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const pkg = require('./package.json');

const webpack = require('webpack');
const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, pkg.source),
  devtool: 'source-map',
  mode: process.env['NODE_ENV'],
  output: {
    library: '@helsenorge/designsystem',
    path: path.resolve(__dirname),
    filename: './dist/index.js',
    umdNamedDefine: true,
    libraryTarget: 'umd',
    globalObject: '(typeof self !== "undefined" ? self : this)'
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          // {
          //   loader: 'style-loader'
          MiniCssExtractWebpackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]'
            }
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: issuerForJsTsFiles,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: getBabelPresets(
                getDefaultBabelPresetOptions(
                  true,
                  isDev
                ),
                undefined
              ),
            },
          },
          {
            loader: '@svgr/webpack',
            options: { babel: false },
          },
          {
            loader: 'file-loader',
            options: getFileLoaderOptions(
              appDir,
              isDev,
              false
            ),
          },
        ],
      },
      // For everything else, we use file-loader only
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: issuerForNonJsTsFiles,
        use: [
          {
            loader: 'file-loader',
            options: getFileLoaderOptions(
              appDir,
              isDev,
              true
            ),
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
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
  plugins: [
    new ProgressBarPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractWebpackPlugin({
      filename: 'dist/helsenorge-designsystem.min.css'
    })
  ]
};
