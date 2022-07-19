const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import("webpack").Configuration} */
const config = {
  entry: './src-todos/index.ts',
  output: {
    clean: true,
    filename: 'main.[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src-todos/index.html',
    }),
  ],
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
};

module.exports = config;
