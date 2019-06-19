const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,"./src/index.html"),
      filename:"index.html"
    }),
    new vueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.(jpg|jpeg|png|gif)$/,use:'url-loader?name=[hash:8]-[name].[ext]'},
      {test:/\.(ttf|eot|avg|woff|woff2|svg)$/,use:'url-loader'},
      {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
      {test:/\.vue$/,use:"vue-loader"}
    ]
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  }
};    