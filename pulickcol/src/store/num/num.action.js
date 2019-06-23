import request from "../../unit/request"
export const addfn=(typer)=>{
    return dispatch=>{
       dispatch({
        type:"DATA",
        typer
       })
    }
}
export const  handleClick = () => {
    return dispatch=>{
         dispatch({
             type:"INDE",
     })
    }
   };
  export const addfner=(type)=>{
    return dispath=>{
        request.get("/api/list",{order:type}).then(re=>{
            console.log(re)
            dispath({
                type:"INDE",
                data:re.data
            })
        })  
    }
}
export const  findsizi = (pige,sizi) => {
    return dispatch=>{
         dispatch({
             type:"PICE",
             pige,
             sizi
     })
    }
   }
   export const  splice = (index) => {
    return dispatch=>{
         dispatch({
             type:"INDEX",
             index   
     })
    }
   }
   export const  But = (obj) => {
       console.log(obj,"obj")
    return dispatch=>{
         dispatch({
             type:"BUTTON",
            obj
     })
    }
   }