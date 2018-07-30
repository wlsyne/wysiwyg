const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const ENV = process.env.NODE_ENV === 'develop';
const cssFileName = 'css/[name].css';
const extractSass = new ExtractTextWebpackPlugin({
    filename: cssFileName
});
// const copy = new CopyWebpackPlugin([{
//     from: './js/libs',
//     to: './js/libs'
// }, ])
const files = ['demo1'];
let entry = {};
let views = [];
for (let i = 0; i < files.length; i++) {
    let arr = [files[i]];
    views.push(new HtmlWebpackPlugin({
        title: process.env.NODE_ENV,
        template: `./views/${files[i]}.html`,
        filename: `./views/${files[i]}.html`,
        chunks: arr
    }));
    entry[files[i]] = `./js/${files[i]}.js`;
}
module.exports = {
    entry,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2', ],
                    plugins: ['transform-runtime']
                }
            }
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: !ENV
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: ENV ?
                        '../images/[name].[ext]' :
                        'images/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [extractSass].concat(views)
};