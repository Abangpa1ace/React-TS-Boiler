const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    name: "webpack-test",
    mode: "development",
    devtool: "eval",
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
      rules: [
        // "babel-loader",
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    entry: "./src/index.tsx",
    output: {
      filename: "app.js",
      path: path.join(__dirname, "dist"),
      publicPath: "/dist/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      contentBase: path.resolve(__dirname, "./dist"),
      compress: true,
      hot: true,
      port: 3001,
      liveReload: true,
      open: true,
      historyApiFallback: true,
    },
  };
};
