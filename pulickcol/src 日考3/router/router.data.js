import home from "../views/home"
import hot from "../views/hot"
import mony from "../views/monry"
import logind from "../views/logind"
import homerr from "../homee"
const route=[
    
    {
        path:"/home",
        component:homerr,
       
        child:[
            {
                path:"/home",          
                component:home
            },
            {
                path:"/hot",
                component:hot
            },
            {
                path:"/mony",
                component:mony
            },
            {
                path:"/logind",
                component:logind
            }
        ]
    },
    {
        path:"/",
        redirect:"/home",
    },
  

]
export default route