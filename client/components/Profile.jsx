import React from 'react'
import {connect} from 'react-redux'

function Profile() {
    return (
        <div>
            <h2>Hello</h2>
            
        </div>
    )
}


function mapStateToProps (globalState) {
    return {
      isAuthenticated: globalState.isAuthenticated,
      user: globalState.user
    }
  }
  
  export default connect(mapStateToProps)(Profile)
  