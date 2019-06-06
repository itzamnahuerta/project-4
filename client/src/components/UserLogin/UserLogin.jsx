import React, { Component } from 'react'
import { login }  from '../../services/ApiService';
import { Redirect  } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

export default class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            error : false,
            isAuthenticated : false,
            email: '',
            password: ''
        }
    }
    handleFormChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({
            [fieldName] : value,
            error: false
        })
    }
    handleLogin = async () => {
        const {email, password} = this.state;
        try {   
            await login({email,password});
            localStorage.setItem('email', email)
            this.setState({
                isAuthenticated: true,
                email: '',
                password: '',
                error: false
            })
        } catch (error) {
            this.setState({
                error:true,
                email: '',
                password: ''
            })
            throw error
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.handleLogin();
    }

    toggleErrorModal = () => {
        this.setState({error:false})
    }

    render() {
        const {email, password, error, isAuthenticated} = this.state;
        if(isAuthenticated === true && error !== true){
            return <Redirect to='/Dashboard' component={Dashboard}/>
        }
        const errorModal = error === true ? <div className="error-modal"><h3>Try again</h3></div> : <div className="no-error"></div>

        return (
            <div>
                <div className="login-form">
                    <div className="login-text"> login </div>
                    {errorModal}
                    <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit} ref="">
                        <input type="text" name='email' value={email} placeholder="Email" />
                        <input type="password" name='password' value={password} placeholder="Password"/>
                        <button type="submit" className="sign-in-btn"> > </button>
                    </form> 
                </div>
            </div> 

        )
    }
}
