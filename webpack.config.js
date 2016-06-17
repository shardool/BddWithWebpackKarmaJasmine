'use strict';
module.exports = {
    entry: ['./sut/main.js'],
    output: {
        path: 'home/builds',
        publicPath: 'home/builds',
        filename: 'wilma.js'
    },
    watch: true,
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'jshint-loader'
        }]
    }

};