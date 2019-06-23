import React from "react";
import { Redirect, Switch, Route } from "react-router-dom"
function Router({ data = [] }) {
    // console.log(data, "------>")
    let res = data.filter(it => !it.redirect)
    let num = data.filter(it => it.redirect).map((it, index) =>
        <Redirect key={index} from={it.path} to={it.redirect}></Redirect>
    )
    return (
        <Switch>
            {
                res.map((it, index) =>
                    <Route path={it.path} key={index} render={(props) => {
                        return <it.Component {...props} data={it.child}></it.Component>
                    }} />
                ).concat(num)
            }

        </Switch>
    )
}
export default Router