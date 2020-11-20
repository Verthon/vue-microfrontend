const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  target: "web",
  entry: path.resolve(__dirname, "./src/main.js"),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        shared: "shared@http://localhost:3002/remoteEntry.js",
        nested: "nested@http://localhost:3003/remoteEntry.js",
      },
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "silent",
    quiet: true,
    hot: true,
    open: true,
    port: 3001,
    contentBase: path.resolve(process.cwd(), "public"),
    contentBasePublicPath: "/",
  },
};
