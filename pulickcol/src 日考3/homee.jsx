import React, { Component } from 'react'
import Router from './router/router.view';

// import React, { Component } from 'react'
import {Route} from "react-router-dom"
import "./style/style.css"
export default class homee extends Component {
    state={
        ind:0,
        data:[
            {
                name:"推荐",
                path:"/home"
            },
            {
                name:"影片",
                path:"/hot"
            },
            {
                name:"影院",
                path:"/mony"
            },
            {
                name:"动态",
                path:"/logind"
            },
        ]
    }
    render() {
        return (
            <div>
                    {/* <router-link >asdas</router-link> */}
              <header className="header">
              {
                  this.state.data.map((it,key)=>
                  <p key={key} className={this.state.ind==key?'action':''} onClick={()=>{
                        this.setState({ind:key})
                        this.props.history.push(it.path)
                  }}>{it.name}</p>
                  )
              }  
            </header>  
            <main>
            {console.log(this.props)}    
            <Router data={this.props.data}/>    
        </main> 
            </div>
        )
    }
}
