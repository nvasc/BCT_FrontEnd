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
      inject: 'body',
      contentTo: 'aHR0cDovL2xvY2FsaG9zdDo1MjA4MS8=', //= 'http://localhost:52081/',
      audience: 'f75a3bfeb3c64f489fc80ae155287918', //Cao Nhat
      //audience: 'c78eae44ec354db98e68a1052d7b91f1', //Cap Truong
      secret: 'Kj5isbpJ9pgs9RWJKqOzPdtDrmkpteIWSdM3pAKB_8g',// Cao nhất
      //secret: 't2iKCoOEUrmhEhz1MNWosgWZVQJGc4wi77Pu2qE3Ncc', // Cap Truong
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
});