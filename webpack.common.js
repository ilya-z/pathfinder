const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RELEASE = (process.argv.indexOf('--release') !== -1);

module.exports = {
    entry: {
        'app': './src/js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/assets/html/index.template.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            DEBUG: !RELEASE
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
