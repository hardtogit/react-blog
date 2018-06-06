import * as types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceUserInfo(userInfo) {
    return {
        type: types.REPLACE_USER_INFO,
        userInfo
    }
}

function clearUserInfo() {
    return {type: types.CLEAR_USER_INFO}
}

function fetchUserInfo() {
    return dispatch => {
        utils.ajax({
            url: '/mobile_api/user/info',
            type: 'get'
        }).then(res => {
            dispatch(replaceUserInfo(res))
        })
    }
}
function fetchData(...args) {
    const {type,params}=args


    return dispatch=>{


    }
}





export default {
    fetchUserInfo,
    clearUserInfo
}
