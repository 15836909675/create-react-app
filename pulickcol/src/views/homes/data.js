const type=(type)=>{
    switch(type){
        case 0: {
            return "未处理"
        }
        case 1: {
            return "补全中"
        }
        case 2: {
            return "已处理"
        }
        case 3 : {
            return "返佣中"
        }
        case 4 : {
            return "无状态"
        }
       default :
       return 
    }

}
// console.log(type("1"))
const anddata=(data)=>{
    // console.log(data,"---->")
  return data&&data.filter(it=>it.handleState=type(it.handleState)) 
}
// console.log()
export default anddata