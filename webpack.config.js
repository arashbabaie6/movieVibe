const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    alias: {
      public: path.resolve(__dirname, "public"),
      components: path.resolve(__dirname, "src/components"),
      axiosHelper: path.resolve(__dirname, "src/configs/axios.config.js"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
