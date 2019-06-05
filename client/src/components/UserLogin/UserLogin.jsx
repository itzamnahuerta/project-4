import React, { Component } from 'react'
import { login }  from '../../services/ApiService'


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

    render() {
        return (
            <div className="log-in">
                <div id="log-in-text"> login </div>
            </div>
        )
    }
}
