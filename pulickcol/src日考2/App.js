import React, { Component } from 'react'
import "./style/style.css"
import Header from "./header"
export default class 
 extends Component {
    
     
     state={
         shi:'',
         fen:"",
         miao:""
     }
    render() {
        let {shi,miao,fen}=this.state
        return (
            <div className="warper">
            <div className="header">
                <p>剧本场结束：时 {fen}分 {miao}秒</p>
            </div>
                <Header />
            </div>
        )
    }
    componentWillReceiveProps(prove,next){
     
    }
    componentDidMount(){
      
       
        
        // console.log(con)
        // console.log(fen.toFixed(0),miao.toFixed(0))
        let that=this
       setInterval(()=>{
        let timeend=new Date(2019,6,19,12)*1
        console.log(timeend)
        let time=new Date()*1

        let con=timeend-time
       let shi=con
        let fen=con/1000/60%60
        let miao=con/1000%60
        that.setState({shi,fen:fen.toFixed(0),miao:miao.toFixed(0)})
       },1000)
    }
   
    componentDidUpdate(){
        // console.log(this.state.miao)
        // this.setState({miao:1})
    }
}
