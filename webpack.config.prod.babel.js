import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

var folderOutput = 'Scripts';
var destinationPath = 'D:/Sources/WEB_ORG/03_SOURCECODE/ASC.BCT_ORG.BACKEND/' + 
'ASC.BCT_ORG.SOLUTION/ASC.Presentation/BCT_ORG.WEB_APP_API';
var pathResource = '&outputPath=../Scripts/&publicPath=Scripts/';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    path: path.join(destinationPath, folderOutput),
    filename: 'main.bundle.js'
  },
  entry : path.join(__dirname,'/app/app.module.js'),
  module: {
    loaders: [ {
      test: /\.(eot|woff|woff2|svg|ttf|png|gif|jpg)([\?]?.*)$/, 
      loader: 'file-loader?name=[hash].[ext]' + pathResource, 
    } ]
  },
  plugins: [
    new CleanWebpackPlugin([ folderOutput ], {
      root: destinationPath,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Bộ Công Thương',
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
})