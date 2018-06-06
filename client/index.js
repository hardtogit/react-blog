import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from './routes'
import MyProvitor from './common/components/MyProvitor'
import actions from './common/actions/index'
import configureStore from './common/store/configureStore'
import 'antd/dist/antd.css'
const store=configureStore(window.REDUX_STATE);
match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <MyProvitor actions={actions}>
            <Router {...renderProps}/>
            </MyProvitor>
        </Provider>,
        document.getElementById('root')
    )
});
