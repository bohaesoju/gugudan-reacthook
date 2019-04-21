const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './client',
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 5% in KR'], //browsers list
                    },
                    debug: true,
                }], '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            }
        }]
    },

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
};