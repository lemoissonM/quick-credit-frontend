/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

process.env.NODE_ENV = 'production';

const DIST_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
    }),
  ],
  module: {
    rules: [
      {
		  test: /\.(js|jsx)$/,
		  exclude: /node_modules/,
		  use: ['babel-loader', 'eslint-loader']
      },
      {
		  test: /\.css$/i,
		  use: ['style-loader', 'css-loader'],
      },
      {
		  test: /\.less$/,
		  use: [
          'style-loader',
          'css-loader',
          'less-loader',
		  ],
      },
      {
		  test: /\.(png|svg|jpg|jpeg|gif)$/,
		  use: [
          'file-loader',
		  ],
      },
	  ]
  },
};
