const path = require('path');
const pkg = require('./package.json');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DtsBundlerWebpackPlugin = require('dtsbundler-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, pkg.source),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'lib'),
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
    new BundleAnalyzerPlugin()
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
            loader: 'svg-react-loader'
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
};
