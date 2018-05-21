// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function (dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./pages/admin/userFrom/index'))
                }, 'userFrom')

            }
        },
        childRoutes: [
        //     {
        //     path: 'explore',
        //     getComponent(nextState, callback) {
        //         require.ensure([], require => {
        //             callback(null, require('./explore/containers/App'))
        //         }, 'explore')
        //     }
        // }
        ]
    }]
}

export default routes
