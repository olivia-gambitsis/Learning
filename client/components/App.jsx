
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from './Home'
import Learn from './Learn'
import Nav from './Nav'
import Register from './Register'

import firebase from 'firebase/app'
import Login from './Login'





class App extends React.Component {

  
  render(){
    return(
      <div>
        <Route path ='/' component={Nav}/>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/learn' component={Learn}/>
        <Route path ='/' component={Register}/>
        <Route path = '/' component={Login}/>
      </div>
    )

  }
}

export default connect()(App)


