import React from "react"
import {BrowserRouter} from "react-router-dom";
import Route from "./router.view"
import data from "./router.data"
function Router(){
    return (
        <BrowserRouter>
            {
                <Route data={data}/>
            }
        </BrowserRouter>
    )
}
export default Router