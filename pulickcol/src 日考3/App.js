import React, { Component } from 'react'
import Router from "./router/index"
export default class 
 extends Component {
    render() {
        return (
            <div>
                
                <Router />
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
