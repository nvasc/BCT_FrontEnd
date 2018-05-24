import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true,
    filename: '[name].entry.js'
  },
  debug: true,
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname,'/app/app.module.js'),   
    vendor: ['angular','angular-ui-router'],
  },
  module: {
    loaders: [ {
      test: /\.(eot|woff|woff2|svg|ttf|png|gif|jpg)([\?]?.*)$/, 
      loader: 'file-loader?name=[name].[ext]', 
    } ]
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Dev BCT',
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
});