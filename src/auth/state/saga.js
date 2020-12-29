import { all, call, put, takeLeading } from 'redux-saga/effects'
import { callApi } from "../../common/util/api"
import { Types, actions } from './index'

function* fetchLogin({name, password}){
    
    console.log('fetchLogin')
    const {isSuccess, data} = yield call(callApi, {
        url: '/auth/login',
        method: 'post',
        data:{
            name,
            password
        }
    })

    

    if(isSuccess && data) {
        yield put(actions.setUser(data.name))
    }
}

export default function* (){
    yield all([
        takeLeading(
            Types.fetchLogin,
            fetchLogin
        )
    ])
}