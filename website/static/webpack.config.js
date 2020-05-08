const webpack = require('webpack');
const resolve = require('path').resolve;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = {
 devtool: false,
 entry: [__dirname + '/js/index.jsx'],
 plugins: [
      // new CleanWebpackPlugin(),
      // new BundleAnalyzerPlugin(),
      // new HtmlWebpackPlugin({
      //   title: 'Output Management'
      // })
    ],
 optimization: {
      minimizer: [new UglifyJsPlugin()],
 },
 output:{
      path: resolve('../public/'),
      // path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: resolve('../public/')
      // publicPath: '/'
 },
 resolve: {
  extensions: ['.js','.jsx','.css']
 },
 module: {
  rules: [
  {
   test: /\.jsx?/,
   loader: 'babel-loader',
   exclude: /node_modules/,
  },
  {
   test: /\.css$/,
   loader: 'style-loader!css-loader?modules'
 },
 {
  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader?limit=8192',
  options: {
         name: '[path][name].[ext]',
       },
 }]
 },
 mode: 'production'
};
module.exports = config;
