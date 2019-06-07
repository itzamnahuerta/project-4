import Axios from 'axios';
// import setToken from './SetToken.js';
import authService from './AuthService';
const JwtToken = 'token';
const BASE_URL = 'http://localhost:3000';

const api = Axios.create({
    baseURL : BASE_URL,
    headers : {
        'Authorization': `Bearer ${JwtToken}`,
        'Access-Control-Allow-Origin': '*'
    }
});

export const login = async (data) => {
    try {
        const resp = await api.post('/auth/login', data);
        localStorage.setItem('token', resp.data.user.token)
        localStorage.setItem('userID',resp.data.user.id)
        localStorage.setItem('email', resp.data.user.email)
        // console.log('the data',resp.data.user) this works
        return resp.data.user
    } catch (error) {
        throw error
    }
}

export const logout = async () => {
    try {
        authService.isAuthenticated()
        const resp = await api.get('/logout');
        sessionStorage.clear();
        return resp
    } catch (error) {
        throw error
    }
}

// export const signup = async (data) => {
//     try {
//         const resp = await api.post('/auth/signup', data)
//         const {data:{token, user}} = resp;
//         setToken.setToken(token);
//         return user
//     } catch (error) {
//         throw error
//     }
// }

export const getUser = async (data) => {
    try {
        const user_id = localStorage.getItem('userID')
        const resp = await api.get(`/users/${user_id}`);
        // console.log('~~~~~ this is what i need',resp.data)
        return resp.data;
    } catch (error){
        throw error
    }
}

export const updateUserProfile = async (data) => {
    try{
        
        console.log('dataaaa~~~~~~~~~d',data)
        // return resp
    }catch(error){
        throw error
    }
}


// localstorage for id 
export const pushUser = async (id, data) => {
    try {
        const resp = api.put(`auth/users/${id}`, data);
        return resp
    } catch (error) {
        throw error
    }
}