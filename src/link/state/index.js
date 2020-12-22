import {
    createReducer,
    createAction,
    appendValueReducer
} from '../../common/redux-helper'

export const Types = {
    appendValue: 'link/AppendValue',
}

export const actions = {
    appendValue: createAction(Types.appendValue),
}

const INITIAL_STATE = {
    links: []
}

const linkReducer = createReducer(INITIAL_STATE, {
    [Types.appendValue]: appendValueReducer
})

export default linkReducer