import React, { Component } from 'react'
import { Redirect, Link  } from 'react-router-dom';
import { getUser } from '../../services/ApiService';
import {pushUser} from  '../../services/ApiService';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            updateUser:[],
            first_name: '',
            last_name: '',
            email: '',
            isUpdated: false,
            isError: false
        }
    }

    getUserFromDB = async () => {
        const user = await getUser();
        this.setState({user});
        return user
    }

    async componentDidMount() {
        try{
            this.setState({isUpdated:false, error:false});
            const user = await getUser();
            this.setState({user, updateUser: user})
        }catch(error) {
            throw error
        }
    }
    
    render() {
        return (
            <div className="user-profile">
                <h1> i can breathe and think, what am i?</h1>
                <div className="f1"> 
                <form> 

                </form> 
                </div> 
                <div className="f2"> 
                
                </div> 
                <div className="f3"> 
                
                </div> 
                <div className="f4"> 
                
                </div> 
            </div>
        )
    }
}
