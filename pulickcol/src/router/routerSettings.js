// import home from "../views/home"
// import loagind from "../views/longind"
import islogin from "../views/islogin"
import {home,loding,set,index,order} from "./login/index"

const routes = [
    {
        path:"/home",
        Component:islogin(home),
        
        child:[
            {
                path:"/home/set",
                Component:set
            },
            {
                path:"/home/index",
                Component:index
            },
            {
                path:"/home/order/:type",
                Component:order
            }
        ]
    },                
    {
        path:'/loagind',
        Component:loding
    },
    {
        path:"/",
        redirect:"/home/index"
    },
    

]

export default routes;