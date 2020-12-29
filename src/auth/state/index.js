import { AuthStatus } from "../../common/constant"
import { createReducer } from "../../common/redux-helper"

export const Types = {
    FetchLogin: 'auth/FetchLogin',
    SetUser: 'auth/SetUser'
}

export const actions = {
    fetchLogin:(name, password) => ({
        type: Types.FetchLogin,
        name,
        password
    }),
    setUser : (name) => ({
        type: Types.SetUser,
        name
    })
}

const INITIAL_STATE = {
    name : '',
    status: undefined
}

const authReducer = createReducer(INITIAL_STATE, {
    [Types.SetUser] : (state, action) => {
        state.name = action.name;
        state.status = action.name ? AuthStatus.Login : AuthStatus.NotLogin;
    }
})

export default authReducer