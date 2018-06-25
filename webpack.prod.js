const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: false
        })
    ],
    mode: 'production',
    optimization: {
        minimize: true,
        sideEffects: false
    }
});
