const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.s(a|c)ss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.tsx?$/, exclude: /node_modules/, use: ["babel-loader"] },
            { enforce: "pre", test: /\.js$/, use: ["source-map-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 8080
    }
};