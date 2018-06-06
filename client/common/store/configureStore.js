import {applyMiddleware, compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import Immutable from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
    console.log(preloadedState)
    for (var key in preloadedState) {
        preloadedState[key]=Immutable.fromJS(preloadedState[key]);
    }
    let store;
    if(preloadedState){
         store = createStore(
            rootReducer,
            preloadedState,
            compose(
                applyMiddleware(thunk),
                composeWithDevTools()
            ),
        );
    }else{
         store = createStore(
            rootReducer,
            applyMiddleware(thunk),
        );
    }
    return store
}
