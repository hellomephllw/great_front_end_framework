/**
 * Created by liliwen on 2017/4/8.
 */
'use strict';
global.rootPath = require('path').resolve('./');
const
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * webpack配置
 */
const config = {
    /**入口配置*/
    entry: {
        common: `${rootPath}/src/common/lib/commonCss.js`,
        index: [`${rootPath}/src/index.js`]
    },
    /**输出路径配置*/
    output: {
        path: `${rootPath}/assets/`,
        filename: '[name].[chunkhash:5].js',
        publicPath: "/assets/",
        chunkFilename: '[name].[chunkhash:5].js'
    },
    /**模块加载器配置*/
    module: {
        rules: [
            //scripts
            {
                test: /\.js[x]?/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'}
                ]
            },
            //css
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            //sass
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //images
            {
                test: /\.(png|jp[e]?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '10240',
                            name: '/images/[name].[hash:5].[ext]'
                        }
                    }
                ]
            },
            //fonts
            {
                test: /\.(woff[2]?|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '10240',
                            name: '/fonts/[name].[hash:5].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    /**插件配置*/
    plugins: [
        //编译html
        new HtmlWebpackPlugin({
            template: `${rootPath}/src/index.html`,//指定视图
            filename: `${rootPath}/assets/index.html`,//指定输出位置
            chunks: ['common', 'index']//为视图指定js和css，名字在entry中选一个或多个
        }),
        //dll
        new webpack.DllReferencePlugin({
            context: rootPath,
            manifest: require(`${rootPath}/assets/vendor-manifest.json`)
        }),
        //把dll加入html
        new AddAssetHtmlPlugin({
            filepath: require.resolve(`${rootPath}/assets/vendor.dll.js`),
            includeSourcemap: true,
            hash: true
        }),
        //提出css公共部分
        new webpack.optimize.CommonsChunkPlugin({
            filename: '[name].[hash:5].js',
            name: ['common'],
            minChunks: Infinity
        }),
        //将css提出js
        new ExtractTextPlugin('[name].[contenthash:5].css'),
        //清空输出目录
        new CleanWebpackPlugin(['assets'], {
            root: `${rootPath}/public`,
            verbose: true,
            dry: false,
            exclude: ['vendor.dll.js', 'vendor.dll.js.map', 'vendor-manifest.json']
        })
    ],
    /**import/require引入文件方式配置*/
    resolve: {
        extensions: ['.js', '.jsx']
    },
};

module.exports = config;