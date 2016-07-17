const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    app: ['./src/client/entry/app'],
    console: ['./src/client/entry/console'],
  },
  output: {
    path: path.join(__dirname, 'assets/built'),
    // filename: '[name].[chunkhash].js',
    filename: '[name].js',
    publicPath: '/built/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ManifestPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
          'resolve-url',
          // 'postcss?sourceMap'
          'sass?sourceMap'
        ]
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
  postcss: () => {
    return [require('postcss-cssnext'), require('postcss-import')]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/client')]
  },
  resolve: {
    root: path.resolve('./src/client'),
    alias: {
      styles: path.join(__dirname, 'src/client/shared/scss'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
