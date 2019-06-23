import React, { Component } from 'react'
import Input from "./input"
export default class 
 extends Component {
     state={
         data:'',
         value:true
     }
    render() {
        return (
            <div>
            <Input addfn={(val)=>{
                this.addfn(val)
            }}/>
            <ul>
                       {
                          this.state.data&& this.state.data.map((it,index)=>
                           <li key={index}>{it.name}</li>
                           )
                       }
                    </ul>
            </div>
        )
    }
    addfn(val){
    //    this.setState({data:1})
        this.setState({data:val})
        // console.log(val,"val")
    }
}
