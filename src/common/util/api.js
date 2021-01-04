import { message } from "antd"
import axios from "axios"
import { API_HOST } from "../constant"

export function callApi({method="get", url, params, data}){
    return axios({
        url,
        method,
        baseURL : API_HOST,
        params,
        data,
        widthCredentials: true
    }).then(response => {
        const {resultCode, resultMessage} = response.data
        if(resultCode < 0) {
            message.error(resultMessage)
        }
        return {
            isSuccess : resultCode === ResultCode.Success,
            data,
            resultCode : '00',
            resultMessage : 'success'
        }
    })
}

export const ResultCode = {
    Success : 0
}