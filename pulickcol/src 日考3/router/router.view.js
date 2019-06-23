import React from "react"
import {Redirect,Switch,Route} from "react-router-dom";
function router({data}){
        let res=data.filter(it=>!it.redirect)
        let con=data.filter(it=>it.redirect).map((it,key)=>
        <Redirect key={key} from={it.path} to={it.redirect}></Redirect>
        )
        return (
            <Switch>
                {
                    res.map((it,key)=>
                        <Route key={key} path={it.path} render={(props)=>{
                               return <it.component {...props} data={it.child}> </it.component>     
                        }}/>
                    ).concat(con)
                }
               
            </Switch>
        )
       
}
export default router