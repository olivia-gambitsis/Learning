
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'



class Home extends React.Component {

  
  render(){
    return(
      <div className="home-background">
      <div className='home'>
        <div className='title'>
          <h1>Home</h1>  
       </div>
       <div className='start-learning'>
          <h4>CLick <Link to={'/learn'}>HERE</Link> To Start Learning!</h4>
       </div>
      </div>
      </div>
    )
  }
}

export default connect()(Home)


