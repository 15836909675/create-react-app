const reducer=(state={
    data:[]
},action)=>{
    let newstate=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "DATAer":
        newstate.data=action.data
    return newstate   
         default :
         return state
    }
}
export default reducer