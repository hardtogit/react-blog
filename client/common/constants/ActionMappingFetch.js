import * as actionTypes from './ActionTypes'
import Fetch from '../reqest/fetch'
export default{
    [actionTypes.LOGIN]:{
        apiFn:Fetch.login
    }
}