module.exports = {
  entry: "./src/client/app.js",
  output: {
    filename: "src/server/public/js/bundle.js"
  },

  devServer: {
    inline: true
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
