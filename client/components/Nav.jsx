import React from 'react'
import { connect } from 'react-redux'
//import {Link} from 'react-router-dom'
import {logout} from '../actions/index'



class Nav extends React.Component {

  logUserOut = () =>{
    this.props.dispatch(logout())
    this.props.history.push('/')
  }

  
  render(){
    return(
      <>
       {this.props.isAuthenticated &&  <button id='signOut' onClick={this.logUserOut}>Logout</button>}
      </>
    )

  }
}

function mapStateToProps (globalState) {
  return {
    isAuthenticated: globalState.isAuthenticated
  }
}

export default connect(mapStateToProps)(Nav)








