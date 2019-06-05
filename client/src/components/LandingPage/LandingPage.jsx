import React, { Component } from 'react';
import UserLogin from '../UserLogin/UserLogin';
import RequestInvite from '../RequestInvite/RequestInivte'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <UserLogin/>
                <RequestInvite />
            </div>
        )
    }
}
