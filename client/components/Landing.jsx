import React from 'react'
import Login from './Login'
import { Register } from './Register'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'



function Landing(props) {
    return (
        <div className='home'>
            {props.isAuthenticated ?
                <div className='start-learning'>
                    <h4>Click <Link to={'/learn'}>HERE</Link> To Start Learning!</h4>
                </div> :
                <div>
                    <h1>Welcome!</h1>
                    <Login />
                    <Register />
                </div>
            }
        </div>
    )
}


function mapStateToProps(globalState) {
    return {
        isAuthenticated: globalState.isAuthenticated
    }
}

export default connect(mapStateToProps)(Landing)

