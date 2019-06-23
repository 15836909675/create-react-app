import React, { Component } from 'react'
// import Header from "./header"
import Router from "./router/index"
import {Provider} from "react-redux"
import store from "./store/index"
export default class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <Router />
      </Provider>
    )
  }
  
}
