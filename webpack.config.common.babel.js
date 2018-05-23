import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';


module.exports = new WebpackConfig().merge({  
  context:  path.join(__dirname,'/app'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      }
    ],
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!'    
    },{
        test: /\.json$/,
        loader: 'json-loader'
    }, {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]'
    }, {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015&plugins[]=angularjs-annotate',
        exclude: /node_modules/
    }]
  },
  plugins: [
   
    //new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // Specify the common bundle's name.
    //}),
   
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery"
    })
  ]
})
