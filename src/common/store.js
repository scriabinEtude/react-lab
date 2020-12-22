import { combineReducers, createStore } from 'redux';

import linkReducer from '../link/state'

const reducer = combineReducers({
    link: linkReducer,
})

const store = createStore(
    reducer,
)

export default store