import * as actionTypes from '../constants/actionTypes'
import Immutable from 'immutable'
const defaultState = Immutable.Map();
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.FETCH_SUCCESS:
            return state.setIn([action.key,'data'],Immutable.fromJS(action.data))
            break;
        default:
            return state

    }
}