const path = require('path');
const webpack = require('webpack');


module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  mode: 'development',
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

}