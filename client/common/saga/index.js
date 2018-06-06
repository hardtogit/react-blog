import {call,put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga'
import * as actionTypes from '../constants/ActionTypes'
import actionMappingFetch from '../constants/ActionMappingFetch'
function * fetchData(action) {
    const args = action.params ? action.params : [];
    try{
        const {response,error} =yield call(actionMappingFetch[action.type].apiFn,...args);
        console.log(response)
        if(response){
            yield put ({
                type:actionTypes.FETCH_SUCCESS,
                data:response,
                key:action.type
            })
        }

    }catch (e) {

    }
}

 export default function* watchFetchData(){
    console.log('2')
    yield* takeEvery('*',fetchData)

}
