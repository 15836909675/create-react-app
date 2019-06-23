import React, { Component } from 'react'
import request from "../unit/request"
import {connect} from "react-redux"
import Home from "../views/home"
const islogin=(home)=>{
       
  class num extends Component {
    state={
        flag:false,
        info:''
    }
            render(){return  <>
               { this.state.flag&&<Home {...this.props} info={this.state.info}/>}
            </>}
            componentDidMount(){
                // console.log(cookie.get("sessionId"))
                request.get("/api/islogin").then(re=>{
                   
                    if(re.code==0){
                    
                        this.setState({flag:true,info:re.info})
                    }
                }).catch(re=>{
                
                    if(re.status=="401"){
                        this.props.history.push("/loagind")
                    }
                })
            }
            componentWillMount(){
               
            }
}
return connect(state=>{
    return {
        res:state.num.res
    }
})(num)
}   

export default islogin