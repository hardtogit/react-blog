import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({prefix: '/user'})

router.get('/getUserInfo',function(ctx) {



    ctx.body = {
        name: 'Chikara Chandsd',
        gender: 'male',
        age: 20
    }
} )

export default router
