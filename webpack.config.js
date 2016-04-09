const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src/');

const config = {
  entry: [
    APP_DIR + '/index.jsx',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(APP_DIR, './scss')],
  },
  devServer: {
    contentBase: './build',
    hot: true,
    inline: true,
    open: true,
    proxy: [{
      path: /\/api(.*)/, // any call to a url with api will be forwarded to your backend server
      target: '', // insert your backend server url here
      rewrite: (req) => {req.url = req.url.substring(4);},
      secure: false,
    }],
  },
};

module.exports = config;
