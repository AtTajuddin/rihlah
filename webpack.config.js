// https://youtu.be/9c3dBhvtt6o?t=374
const path = require('path');
// const postCSSPlugins = [
//   require('postcss-import'),
//   require('postcss-mixins'),
//   require('postcss-simple-vars'),
//   require('postcss-nested'),
//   require('autoprefixer'),
// ];

module.exports = {
  mode: 'development',
  entry: './app/assets/scripts/App.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundled.js',
    publicPath: '/',
  },
  // coba aja buka https://webpack.js.org/configuration/dev-server/
  devtool: 'source-map',
  // devServer: {
  //   onBeforeSetupMiddleware: function (devServer) {
  //     // devServer.open = ['./app/**/*.html'];
  //     //ini gagal  server._watch ('./app/**/*.html');
  //   },
  //   static: {
  //     directory: path.join(__dirname, 'app'),
  //   },
  //   port: 3000,
  //   open: true,
  //   hot: true,
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, 'app'),
      staticOptions: {},
      // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
      // Can be:
      // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
      publicPath: '/',
      // Can be:
      // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
      // Can be:
      // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
      watch: true,
    },
    port: 3000,
    open: true,
    hot: true,
  },
  // watch: true, //ada devServer yg watch jg
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          // dibawah ini diganti ke postcss.config.js
          // {
          //   loader: 'postcss-loader',
          //   options: { postcssOptions: { plugins: postCSSPlugins } },
          // },
        ],
      },
    ],
  },
};
