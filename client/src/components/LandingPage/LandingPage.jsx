import React, { Component } from 'react';
import UserLogin from '../UserLogin/UserLogin';
import RequestInvite from '../RequestInvite/RequestInivte'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="flex-container"> 
                    <UserLogin className="ul-box"/>
                    <RequestInvite className="req-box"/>
                </div>
                <div className="app-name"> .SYMBIOSIS.</div>
            </div>
        )
    }
}
