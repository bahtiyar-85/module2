const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

const isDev = process.env.NODE__ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    if(isProd){
        const config = {
            minimizer : [
                new TerserWebpackPlugin(),
                new CssMinimizerPlugin()
            ]
        }  
        return config;
    }
}

module.exports = {
    mode: 'development',
    entry:'./src/app.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5100,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: './src/pug/pages/main.pug',
        }),
        new HTMLWebpackPlugin({
            filename: "trening.html",
            template: './src/pug/pages/trening.pug',
        }),
        new HTMLWebpackPlugin({
            filename: "marketing.html",
            template: './src/pug/pages/marketing.pug',
        }),
        new HTMLWebpackPlugin({
            filename: "startup.html",
            template: './src/pug/pages/startup.pug',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/images/icons",
                    to: "./images/icons"
                },
            ]
        }),
         new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
    optimization: optimization()
}