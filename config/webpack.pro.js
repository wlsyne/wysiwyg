process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const root = require('./webpack.util');
module.exports = webpackMerge(common, {
    output: {
        path: root('dist'),
        filename: 'js/[name].js'
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
        mangle: {
            toplevel: true,
            keep_fnames: true
        },
        compress: {
            dead_code: true,
            sequences: true,
            unsafe: true,
            unused: true,
            hoist_funs: true
        }
    })]
});
