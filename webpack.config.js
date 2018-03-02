const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: PATHS.source + '/js/main.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      chunks: ['index']
    })
  ]
}