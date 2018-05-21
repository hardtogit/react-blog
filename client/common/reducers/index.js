import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import userInfo from './userInfo'

const rootReducer = combineReducers({
    routing: routerReducer,
    userInfo
})

export default rootReducer
