/**
 * Created by liliwen on 2017/4/8.
 */
'use strict';
global.rootPath = require('path').resolve('./');
const
    webpack = require('webpack'),
    webpackConfig = require(`${rootPath}/src/lib/webpack/dev-config`),
    jsonServer = require(`${rootPath}/src/lib/json-server`),
    express = require('express'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    history = require('connect-history-api-fallback');

/**参数配置*/
const port = 3030;

//构建应用服务器
const app = express();

/**
 * 在入口js注入HMR
 * HMR detail disc address: https://www.npmjs.com/package/webpack-hot-middleware
 * note:有一个坑，必须加入reload=true这对参数
 */
webpackConfig.entry.webIndex.unshift('webpack-hot-middleware/client?reload=true&noInfo=true');

/**
 * webpackDevMiddleware整合react router必须配置该中间件
 */
app.use(history({index: `/assets/webIndex.html`}));

/**
 * 加入webpack开发服务器中间件
 * devServer detail disc address: https://github.com/webpack/webpack-dev-middleware
 */
//构建webpack编译器
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
}));

/**加入HMR中间件*/
app.use(webpackHotMiddleware(compiler));

/**加入json服务：json文件模式*/
jsonServer.buildJsonFileMode().forEach(jsonFileMappingObj => {
    app.all(`/api${jsonFileMappingObj.getUrl()}`, (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(jsonFileMappingObj.getJson());
    });
});

/**开启服务*/
app.listen(port);
console.log(`dev server is starting up on port ${port}！`);