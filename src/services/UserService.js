import HttpService from './HttpService'

export default {
    login,
    logout,
    signup,
    // getUsers,
    // getById,
    // remove,
    // update
}

// function getById(id) {
//     return HttpService.get(`user?_id=${id}`)
// }

// function remove(userId) {
//     return HttpService.delete(`user/${userId}`)
// }

// function update(user) {
//     return HttpService.put(`user/${user._id}`, user)
// }

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
    console.log(user)
    if (user !== undefined) {

        sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user;
}