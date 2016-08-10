const webpack = require('webpack')
const base = require('../../../webpack/webpack.base.config')
const paths = base.vars.paths
const hot = base.vars.hot

module.exports = {
  entry: {
    app: [hot, `${paths.entry}/app`]
  },
  output: {
    path: paths.built,
    publicPath: 'http://localhost:3000/built/',
    filename: '[name].js',
  },
  plugins: [
    base.plugins.envDev,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    ...base.plugins.dllReference(),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.sass({
        sourceMap: true,
      }),
      base.loaders.postcss({
        sourceMap: true,
      }),
      base.loaders.babel,
      base.loaders.ts({
        isHot: true
      })
    ]
  },
  sassLoader: base.loaderConfig.sassLoader,
  postcss: base.loaderConfig.postcss(),
  resolve: base.resolve
}