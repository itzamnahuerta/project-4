import setToken from './SetToken'

const authService = {
    isAuthenticated: () => {
        const token = setToken.fetchToken('token');
        if(!token){
            return false
        }
        return true
    }
}

export default authService