export function callApi({method="get", url, params, data}){
    return {
        isSuccess : true,
        data,
        resultCode : '00',
        resultMessage : 'success'
    }
}