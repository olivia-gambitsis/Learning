import React, { Component } from 'react'
import firebase from 'firebase/app'
import {register, setUser} from '../actions/index'
import {connect} from 'react-redux'



export class Register extends Component {
    state={
        email:'',
        password:'',
        userName: '',
        confirmPassword:''
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }

    handleSubmit =(e) =>{
        e.preventDefault()
        console.log(this.state)
        if(this.state.password === this.state.confirmPassword){
            this.props.dispatch(register(this.state.email, this.state.password))
          
        }else{
            alert ('your passwords do not match, please try again')
        }
    }
 


    render() {
        return (
            <div>
                <h1>Register</h1>
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
                    <input type="password" 
                        id='confirmPassword'
                        placeholder='confirm password'
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                    />
                    <input type="text" 
                        id='userName'
                        placeholder='userName'
                        onChange={this.handleChange}
                        value={this.state.userName}
                    />
                    <input type="submit"
                        className='button'
                        value='Register'
                    />
                </form>
                
            </div>
        )
    } 
}



export default connect()(Register)
  