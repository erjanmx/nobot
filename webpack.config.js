module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "public/js/bundle.js"
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
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true // disables Hot Reload
        }
      }
    ]
  }
};
