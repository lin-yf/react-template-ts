const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { spawn, execSync } = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { resolveApp, proxySetup } = require('./paths');
const baseConfig = require('./webpack.config.base');

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/`;

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    require.resolve('../src/index.tsx'),
  ],

  output: {
    path: resolveApp('dist'),
    publicPath: `/`,
    filename: 'bundle.dev.js',
  },
  module: {
    rules: [],
  },
  resolve: {
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
    }),
  ],
  node: {
    __dirname: false,
    __filename: true,
  },
  infrastructureLogging: {
    level: 'warn',
  },
  devServer: {
    port,
    publicPath,
    compress: true,
    inline: true,
    lazy: false,
    hot: true,
    quiet: false,
    overlay: {
      errors: true,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    before(app) {
      if (fs.existsSync(proxySetup)) {
        // This registers user provided middleware for proxy reasons
        require(proxySetup)(app)
      }
    }
  },
});
