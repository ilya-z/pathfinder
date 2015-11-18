var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var RELEASE = (process.argv.indexOf('--release') !== -1);

module.exports = {
    context: path.join(__dirname, '/src'),
    entry:  [
                "./js/app.js",
                "bootstrap-sass!../bootstrap-sass.config.js"
            ],
    output: {
        path: path.join(__dirname, RELEASE ? '/bin-release' : '/bin-debug'),
        filename: "js/bundle.js"
    },
    module: {
        loaders: [
            { test: path.join(__dirname, '/src/js'), query: { presets: 'es2015'}, loader: "babel"},
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff&name=/assets/fonts/[hash].[ext]" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff&name=/assets/fonts/[hash].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream&name=/assets/fonts/[hash].[ext]" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file?name=/assets/fonts/[hash].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml&name=/assets/fonts/[hash].[ext]" }

        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/assets/html/index.template.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('assets/css/style.css'),
        new webpack.DefinePlugin({
            DEBUG: !RELEASE
        })
    ],
    stats: {
        colors: true
    }
};