import types from '../constants/actionTypes'
import Immutable from 'immutable'
const defaultState = Immutable.Map();
function userInfo(state = defaultState, action) {
    console.log(state)
    switch (action.type) {
        case types.GET_USER_INFO:
            console.log(state)
            return state
        default:
            return state
    }
}

export default userInfo
