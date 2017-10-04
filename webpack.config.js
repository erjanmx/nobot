module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js"
  },

  watch: true,

  // Automatically reload the page when compilation is done.
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
}