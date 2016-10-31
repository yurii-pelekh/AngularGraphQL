const
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill', path.join(__dirname, 'src/client', 'app/app.js')]
    },

    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },

    watch: false,

    watchOptions: {
        aggregateTimeout: 100
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.js$/, exclude: /(node_modules)/, loaders: ['ng-annotate', 'babel-loader'] }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            inject: 'body',
            hash: true
        })
    ]
};