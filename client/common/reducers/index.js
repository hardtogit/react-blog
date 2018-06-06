import { combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import userInfo from './userInfo'
import infoData from './infoData'
const rootReducer = combineReducers({
        routerReducer,
        userInfo,
        infoData,
});
export default rootReducer
