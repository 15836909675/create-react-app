import React from "react"
import {BrowserRouter} from "react-router-dom"
import Routerd from "./routerSettings"
import Rouin from "./rouerviews"
function Router() {
   
    return <BrowserRouter>
        {
            < Rouin data={Routerd}/>
        }
    </BrowserRouter>
  }
  export default Router