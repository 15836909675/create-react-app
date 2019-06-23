import loadable from "react-loadable"
import React from "react"
function  Loing() {
    return <h3>loading</h3>
}
export const home=loadable({
    loading:Loing,
    loader:()=>import("../../views/home")
})
export const index=loadable({
    loading:Loing,
    loader:()=>import("../../views/homes/index")
})
export const loding=loadable({
    loading:Loing,
    loader:()=>import("../../views/longind.jsx")
})
export const set=loadable({
    loading:Loing,
    loader:()=>import("../../views/homes/set")
})
export const order=loadable({
    loading:Loing,
    loader:()=>import("../../views/homes/order")
})