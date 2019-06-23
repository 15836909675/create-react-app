import cookie from "js-cookie"
const format=(data)=>{
    return Object.entries(data).map(it=>{
            return `${it[0]}=${typeof it[1]=="object"?JSON.stringify(it[1]):it[1]}`
    }).join('&')
}

const request=(url,method,data)=>{
    const baseOptions={
        method,
        headers:{
        'content-type':"application/x-www-form-urlencoded;charset=utf-8",
        "authorization":cookie.get("sessionId")
        }
    }
    // let options={
    //     ...baseOptions
    // }
    if(method==="GET"){
        // console.log(data,"adsd")
        url=`${url}${format(data) ? "?" +format(data):''}`
    }else{
        baseOptions.body=format(data);
    }
    baseOptions.method=method;
    // console.log(baseOptions)
    return fetch(url,baseOptions).then(response=>{
        if(response.ok){
            return response.json()
        }else{
            return Promise.reject(response)
        }
    })
}
export default {
    get(url,data={}){
        return request(url,"GET",data)
    },
    post(url,data){
        // console.log(data)
        return request(url,"POST",data)
    }
}