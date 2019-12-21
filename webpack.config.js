const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }), 
    new WebpackPwaManifest({
      name: '리액트 메모',
      short_name: '메모',
      description: "리액트로 제작한 웹앱입니다.",
      background_color: "#ffffff",
      crossorigin: 'use-credentials',
      theme_color: '#eeeeee',
      icons: [{
        src: path.resolve('src/assets/Icon.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    }),
    new GenerateSW({
      include: [/\.html$/, /\.js$/]
    })
  ]
}