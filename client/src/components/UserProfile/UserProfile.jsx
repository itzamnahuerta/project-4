import React, { Component } from 'react'
import { Redirect, Link  } from 'react-router-dom';
import { getUser } from '../../services/ApiService';
import {updateUserProfile} from  '../../services/ApiService';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            // updateUser:[],
            first_name: '',
            last_name: '',
            email: '',
            password:'',
            bio: '',
            // skills: [], 
            // interests: [],
            isUpdated: false,
            isError: false
        }
    }

    async componentDidMount() {
        try{
            const user = await getUser();
            console.log(user)
            this.setState({user:user.users, isUpdated:false, error:false});

        }catch(error) {
            throw error
        }
    }

    onChange = async (e) => {
        e.preventDefault();
        const {name, value} = e.target
        await this.setState(prevState => {
            let newUser = prevState.user
            newUser[name] = value
            return newUser
        })
    }

    handleUpdateUser = async (e) => {
        e.preventDefault();
        const {user} = this.state;
        console.log(user)
        try{
            const updateUser = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
            }
            const newUser = await updateUserProfile(updateUser)
            this.setState({isUpdated:true, user: updateUser})
            // loadingicon is true and 
            return newUser
        }catch(error){
            throw error
        }
    }

    render() {
        const {user, isUpdated} = this.state;
        // if(isUpdated === true){
        //     return <Redirect to='/' />
        // }
        return (
            <div className="user-profile">
                <div className="f1"> 
                    <form 
                        onChange={this.onChange} 
                        onSubmit={this.handleUpdateUser}
                    > 
                        <label> Edit Basic Information</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            placeholder="First Name" 
                            defaultValue={user.first_name}
                            
                        />
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            placeholder="Last Name" 
                            defaultValue={user.last_name}
                            
                        />
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 

                        />
                        <button type="submit"> Save </button>

                        <label>Describe yo beautiful self </label>
                        <input type="text" name="bio" id="bio" placeholder="Bio" />
                        <button> Save </button>
                        
                        <label> Interview </label> 
                        <label> When was the last time you laughed? </label> 
                        <input type="text" name="interview" id="interview-q1" placeholder="interview" />
                        <button> Save </button>

                    </form> 
                </div> 
            </div>
        )
    }
}
