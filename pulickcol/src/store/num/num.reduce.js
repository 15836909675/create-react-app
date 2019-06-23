import dataer from "../../views/homes/data"
const  num=(state={data:[],res:[],reser:[]},action)=>{
    let newstate=JSON.parse(JSON.stringify(state))
        switch(action.type){
            case "DATA":
             {   const obj={
                    ...action.typer
                }
                
               let con= newstate.res.findIndex(it=>it.name==action.typer.name)
               if(con=="-1"){
                newstate.res.unshift(obj)
               }else{
                 let res=newstate.res[con]
                 newstate.res.splice(con,1)
                 newstate.res.unshift(res)  
               }}
                return newstate
               case "INDE":
                newstate.data=dataer(action.data)
                newstate.reser=action.data
                newstate.dataer=action.data.splice(0,10)
                   return newstate
                   case "PICE":
                    let {pige,sizi}=action
                   const con=state.data.filter((it,index)=>
                       {
                       return (pige-1)*sizi<=index&&pige*sizi>index
                       }
                    )
                    newstate.dataer=con
                       return newstate
                       case "INDEX":
                  {  let {index}=action
                   newstate.res.splice(index,1)
                   if(newstate.res.length<=0){
                    newstate.dataer=[]
                }
                }
                       return newstate
                       case "BUTTON":
                            // &&action.select==it.type&&action.selectpl==it.serviceName
                            // it.handleState==action.type
                            let {obj}=action
                        const conent= newstate.data.filter(it=>{
                            return it.handleState==obj.type
                           })
                           newstate.dataer=conent
                           newstate.reser=conent
                        return newstate
                default :
                return state;
        }
 
}
export default num