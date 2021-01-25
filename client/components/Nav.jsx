import React from 'react'
import { connect } from 'react-redux'
//import {Link} from 'react-router-dom'
import {logout} from '../actions/index'



class Nav extends React.Component {

  
  render(){
    return(
      <>
      <button id='signOut' onClick={logout()}>Logout</button>
      </>
    )

  }
}

export default connect()(Nav)





