const path = require("path");
const resolve = (file) => path.resolve(__dirname, file);
// import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: resolve("./loaders/relace-loader.js"),
          options: {
            text: "是ADI呀"
          }
        }
      }
    ]
  },
  // plugins: [new CleanWebpackPlugin()],
  resolveLoader: {
    modules: [resolve("node_modules"), resolve("loaders")]
  }
};
