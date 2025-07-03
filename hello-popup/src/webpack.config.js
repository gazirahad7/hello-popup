const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const JS_DIR = path.resolve(__dirname, 'js');
const CSS_DIR = path.resolve(__dirname, 'css');
const OUTPUT_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    admin: path.join(JS_DIR, 'admin.js'),
    popup: path.join(JS_DIR, 'popup.js'),
    guide: path.join(JS_DIR, 'guide.js'),

   // style: './assets/css/style.scss'
  },
  output: {
    path: OUTPUT_DIR,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' // Optional if you want Babel
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
    //   filename: 'style.css'

    filename: 'css/[name].css',

    })
  ],
  watchOptions: {
    ignored: /node_modules/
  }
};
