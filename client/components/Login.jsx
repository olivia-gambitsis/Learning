import React, { Component } from 'react'
import firebase from 'firebase/app'
import {login} from '../actions/index'
import {connect} from 'react-redux'

export class Login extends Component {
    state={
        email:'',
        password:'',
        userName: ''
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }

    handleSubmit =(e) =>{
        e.preventDefault()
        console.log(this.state)
        this.props.dispatch(login(this.state.email, this.state.password)) 
    }
 


    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        id='email'
                        placeholder='email' 
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <input type="password" 
                        id='password'
                        placeholder='password'
                        onChange={this.handleChange}
                        value={this.state.password}

                    />
                    <input type="submit"
                        className='button'
                        value='Login'
                    />
                </form>
                
            </div>
        )
    } 
}


export default connect()(Login)
