const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');

module.exports = (env) => {
  console.log('env!', env)

  dotenv.config();
  dotenv.config({
    path: `${env}.env`
  })

  return {
    name: "webpack-test",
    mode: "development",
    devtool: "eval",
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
      rules: [
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
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new webpack.EnvironmentPlugin([
        'COMMON_VAR', 'ENV_VAR',
      ]),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),

    ],
    devServer: {
      hot: true,
      port: 3001,
      open: true,
      historyApiFallback: true,
    },
  };
};
