/*
  设置代理
 */
var request = require('request');
import Router from 'koa-router';
let c2k = require('koa-connect');
const proxy = require('http-proxy-middleware');
const router = new Router({prefix: '/mobile_api'})
router.get('/*',c2k(proxy({
    target: "http://napi.bao.cn/",
    changeOrigin:true,
    pathRewrite:{
        '^/mobile_api/*':'/'
    },
    logLevel: 'debug'
})));
export default router
