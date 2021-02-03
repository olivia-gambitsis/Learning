
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Learn from './Learn'
import Nav from './Nav'
import Landing from './Landing'





class App extends React.Component {

  
  render(){
    return(
      <div>
        <Route path ='/' component={Nav}/>
        <Route exact path = '/' component={Landing}/>
        <Route exact path ='/learn' component={Learn}/>
      </div>
    )

  }
}
function mapStateToProps (globalState) {
  return {
    isAuthenticated: globalState.isAuthenticated
  }
}

export default connect(mapStateToProps)(App)


