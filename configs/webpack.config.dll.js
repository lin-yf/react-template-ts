const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const resolveApp = require('./paths');
const baseConfig = require('./webpack.config.base');
const { dependencies } = require('../package.json');

module.exports = merge(baseConfig, {
  context: path.join(__dirname, '..'),
  devtool: 'eval',

  mode: 'development',

  /**
   * Use `module` from `webpack.config.renderer.dev.js`
   */
  module: require('./webpack.config.dev').default.module,

  entry: {
    renderer: Object.keys(dependencies || {}),
  },

  output: {
    library: 'renderer',
    path: resolveApp('dist'),
    filename: '[name].dev.dll.js',
    libraryTarget: 'var',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(resolveApp('dist'), '[name].json'),
      name: '[name]',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: path.join(__dirname, '..', 'app'),
        output: {
          path: path.join(__dirname, '..', 'dll'),
        },
      },
    }),
  ],
});
