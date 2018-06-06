import * as types from '../constants/actionTypes'
import Immutable from 'immutable'
const defaultState = Immutable.Map();
function userInfo(state = defaultState, action) {
    switch (action.type) {
        case types.REPLACE_USER_INFO:
            return state.setIn(['data'],Immutable.fromJS(action.userInfo));
        default:
            return state
    }
}

export default userInfo
