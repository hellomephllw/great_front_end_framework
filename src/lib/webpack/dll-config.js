/**
 * Created by liliwen on 2017/4/18.
 */
'use strict';
global.rootPath = require('path').resolve('./');
const webpack = require('webpack');

const config = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom'
        ]
    },
    devtool: '#source-map',
    output: {
        path: `${rootPath}/assets`,
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: `${rootPath}/assets/[name]-manifest.json`,
            name: '[name]_[hash]'
        })
    ]
};

if (process.env.NODE_ENV == 'production') {
    //生产环境和测试环境压缩dll代码
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        })
    );
}

module.exports = config;