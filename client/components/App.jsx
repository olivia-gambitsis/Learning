
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {fetchUser} from '../actions/index'

import Learn from './Learn'
import Nav from './Nav'
import Landing from './Landing'
import Profile from './Profile'






const App = (props) => {


  useEffect(() => {
    props.dispatch(fetchUser())
  })

  //keeps user logged in when page refreshes. 
  
  
  
    return(
      <div className='app'>
        <Router>
            <Route path ='/' component={Nav}/>
            <Route exact path = '/' component={Landing}/>
            <Route exact path ='/learn' component={Learn}/>
            <Route exact path = '/profile' component={Profile}/>
        </Router>
      </div>
    )

  
}
function mapStateToProps (globalState) {
  return {
    isAuthenticated: globalState.isAuthenticated
  }
}

export default connect(mapStateToProps)(App)


