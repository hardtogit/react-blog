/*
  设置代理
 */
var request = require('request');
import Router from 'koa-router'
const router = new Router({prefix: '/mobile_api'})
// router.get('/*',function* (ctx) {
//     // request('http://www.baidu.com', function (error, response, body) {
//     //     if (!error && response.statusCode == 200) {
//     //         console.log(body) // Show the HTML for the baidu homepage.
//     //     }
//     // })
//     // ctx.respond = false
//     console.log('sss')
//     ctx.body ={
//         a:'sss'
//     }
//     var  options = {
//         method: 'get',
//         url: 'http://napi.bao.cn/user/info',
//         form: {},
//         headers: ctx.request.header
//     };
//     var promise= new Promise((resolve)=>{request(options, function (err, res, body) {
//         if (err) {
//             // ctx.body=err
//             resolve({err})
//         }else {
//             // ctx.body=body
//             resolve({body})
//         }
//     })})
//     const {body, err}=yield call(promise)
//     ctx.body ={
//         a:'sss'
//     }
//
// } )


router.get('/*',function* (ctx,next) {
return new Promise(function(resolve, reject) {//关键啊，文档中居然没有
    setTimeout(function() {
        ctx.body = {message: 'Hello'};         //这就是我遇到的问题啊。异步中的ctx.body赋值。
        resolve(next());
    }, 1);
});
}, function(ctx, next) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            ctx.body.message += ' World';
            resolve(next());
        }, 1);
    });
}, function(ctx, next) {
    ctx.body.message += '!';
});
export default router
