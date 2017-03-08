var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "scripts.min.js"
  },
  module: {
        rules: [
           {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
           {test: /\.html$/, use: "file-loader?name=[name].[ext]" }
        ]
  },
};