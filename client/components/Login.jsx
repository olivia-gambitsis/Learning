import React from 'react'
import firebase from 'firebase/app'
import {login} from '../actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



class Login extends React.Component {
    state={
        email:'',
        password:'',
        userName: ''
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    handleSubmit =(e) =>{
        e.preventDefault()
        console.log(this.state)
       
        
        this.props.dispatch(login(this.state.email, this.state.password))
        this.props.history.push("/profile")
   
    }
 


    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        id='emailLogin'
                        placeholder='email' 
                        name='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <input type="password" 
                        id='passwordLogin'
                        placeholder='password'
                        name='password'
                        onChange={this.handleChange}
                        value={this.state.password}

                    />
                    <input type="submit"
                        className='button'
                        value='Login'
                    />
                </form>
                <Link to={'/profile'}>profile page</Link>
                
            </div>
        )
    } 
}


export default connect()(Login)
