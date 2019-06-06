import React, { Component } from 'react'
import { getUser } from '../../services/ApiService';
import { Link, Redirect  } from 'react-router-dom';
import { logout } from '../../services/ApiService';
import authService from '../../services/AuthService';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            isOpen : false,
            isAuthenticated : props.authenticate,
            isMenuClicked: false,
        }
    }

    async componentDidMount() {     
        // await getUser()
    }

    handleSignOut = async (e) => {
        e.preventDefault()
        // await logout()
    }


    render() {
        return (
            <div className="dashboard">
                <h1> I AM THE DASHBAORD </h1>
            </div>
        )
    }
}
