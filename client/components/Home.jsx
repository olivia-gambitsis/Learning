
import React from 'react'
import { connect } from 'react-redux'



class Home extends React.Component {

  
  render(){
    return(
      <div className='home'>
        <div className='title'>
          <h1>Home</h1>
       </div>
      </div>
    )
  }
}

export default connect()(Home)


