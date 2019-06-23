import React, { Component } from 'react'

export default class input extends Component {
    state={
        value:"",
        data:[
            {name:'1'},
            {name:'12'},
            {name:'123'},
            {name:'1234'},
            {name:'12345'}
        ]
    }
    render() {
        return (
            <div className="input" >
                    <input type="text" value={this.state.value} onChange={(e)=>{
                this.input(e)
            }}/>
                    
            </div>
        )
    }
    input(e){
      let {data,value}= this.state
     
      this.setState({value:e.target.value})
       let con= data.filter(it=>
         it.name.includes(e.target.value)
       )
     this.props.addfn(con)
    }
    componentDidMount(){

    }
}
