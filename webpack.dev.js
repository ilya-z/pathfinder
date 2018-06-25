const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');


module.exports = merge(common, {
    entry: {
        app: path.join(__dirname, './src/js/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: false,
        hot: true,
        host: '0.0.0.0',
        inline: true,
        progress: true,
        port: 3000
    },
    mode: 'development',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
