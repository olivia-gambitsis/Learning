
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from './Home'
import Learn from './Learn'
import Nav from './Nav'


class App extends React.Component {

  
  render(){
    return(
      <div>
        <Route path ='/' component={Nav}/>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/learn' component={Learn}/>
      </div>
    )

  }
}

export default connect()(App)


