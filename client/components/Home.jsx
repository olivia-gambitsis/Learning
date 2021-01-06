
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Learn from './Learn'



class Home extends React.Component {

  
  render(){
    return(
     
      <div className='home'>
        <div className='title'>
          <h1>Home</h1>  
       </div>
       <div className='start-learning'>
          <h4>CLick <Link to={'/learn'}>HERE</Link> To Start Learning!</h4>
          <Learn/>
       </div>
      </div>
      
    )
  }
}

export default connect()(Home)


