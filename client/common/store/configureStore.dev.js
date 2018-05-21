import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import { composeWithDevTools } from 'redux-devtools-extension';
export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(),
        compose(
          applyMiddleware(thunk),
          DevTools.instrument()
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')

            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
