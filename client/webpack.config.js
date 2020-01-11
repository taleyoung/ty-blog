const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const clientPath = path.resolve(__dirname, "src");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: path.resolve(clientPath, "index.tsx")
  },
  output: {
    publicPath: "/",
    path: path.resolve(process.cwd(), "dist"),
    filename: "src/[name].js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_mudules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(png|jpg|gif｜jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/img"
            }
          }
        ]
      },
      {
        test: /\.(css|less|scss)$/,
        exclude: /node_modules/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              minimize: true,
              localIdentName: "[local]_[hash:base64:5]",
              sass: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    //配置路径别名，让webpack帮我们找路径
    alias: {
      "@src": clientPath,
      "@assets": path.resolve(clientPath, "assets"),
      "@pages": path.resolve(clientPath, "pages"),
      "@redux": path.resolve(clientPath, "redux"),
      "@components": path.resolve(clientPath, "components"),
      "@routes": path.resolve(clientPath, "routes"),
      "@utils": path.resolve(clientPath, "utils"),
      "@config": path.resolve(clientPath, "config")
    },
    extensions: [".tsx", ".ts", ".js", ".d.ts"]
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), "dist"), //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    host: "127.0.0.1",
    port: 7000,
    hot: true,
    inline: true, //实时刷新
    // hot: true, //Enable webpack's Hot Module Replacement feature
    compress: true, //Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    stats: "errors-only", //To show only errors in your bundle
    open: true, //When open is enabled, the dev server will open the browser.
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001",
        changeOrigin: true
      }
    } //重定向
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(process.cwd(), "public/index.html"),
      filename: "index.html"
      // favicon: path.resolve(process.cwd(), "assets/image/favicon.ico")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "127.0.0.1",
      analyzerPort: 8888,
      reportFilename: "report.html",
      defaultSizes: "parsed",
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null,
      logLevel: "info"
    })
  ]
};
