import HttpService from './HttpService'

export default {
    login,
    logout,
    signup,
}

async function login(userCred) {
    const user = await HttpService.post('api/auth/login', userCred)
    return _handleLogin(user)
}

async function signup(userCred) {
    const user = await HttpService.post('api/auth/signup', userCred)
    return _handleLogin(user)
}

async function logout() {
    await HttpService.post('api/auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    if (user !== undefined) {
        sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user;
}