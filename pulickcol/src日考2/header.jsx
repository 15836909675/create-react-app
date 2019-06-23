import React, { Component } from 'react'
import "./style/style.css"
import data from "./mock"
export default class header extends Component {
    state={
        data:data
    }
    render() {
        let {list}=this.state.data
        console.log(list)
        return (
            
            <div className="item">
               <div className="box">
               {
                    list.map((it,index)=>
                <dl key={index}>
                <dd className="dd">
                    <span>立即抢购</span>
                </dd>
                <dt><img src={it.img} alt=""/></dt>
                <dd>${it.pice}</dd>
                </dl>
                    )
                }
               </div>
            </div>
        )
    }
}
