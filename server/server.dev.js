// Provide custom regenerator runtime and core-js
const lessParser = require('postcss-less').parse;
require('babel-polyfill')

// Node babel source map support
require('source-map-support').install()

// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
})

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})
require('css-modules-require-hook')({
    extensions: '.less',
    processorOpts: {parser: lessParser},
});
// Image require hook
require('asset-require-hook')({
    name: '/[hash].[ext]',
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})

const app = require('./app.js'),
    convert = require('koa-convert'),
    webpack = require('webpack'),
    fs = require('fs'),
    path = require('path'),
    devMiddleware = require('koa-webpack-dev-middleware'),
    hotMiddleware = require('koa-webpack-hot-middleware'),
    request=require('request'),
    views = require('koa-views'),
    router = require('./routes'),
    clientRoute = require('./middlewares/clientRoute'),
    config = require('../build/webpack.dev.config'),
    port = process.env.port || 3000,
    compiler = webpack(config)

// Webpack hook event to write html file into `/views/dev` from `/views/tpl` due to server render
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key)
            data = assets[key].source()
            fs.writeFileSync(file, data)
        }
    })
    callback()
})

app.use(views(path.resolve(__dirname, '../views/dev'), {map: {html: 'ejs'}}))
app.use(clientRoute)
// app.use(function*() {
//     var data = yield  new Promise((resolve) => {resolve({data:'ssss'})});
//     //以下是异步回调部分
//     this.body = data.toString();
// })
app.use(router.routes())
app.use(router.allowedMethods())
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
app.use(convert(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.listen(port)
