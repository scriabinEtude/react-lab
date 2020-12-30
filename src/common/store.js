import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import linkReducer from '../link/state'
import authReducer from '../auth/state'

import authSaga from '../auth/state/saga'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    link: linkReducer,
    auth: authReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    )
)

sagaMiddleware.run(authSaga)

export default store