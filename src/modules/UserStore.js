import UserService from '../services/UserService.js'

// var localLoggedinUser = null;
// if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

export default {
    state: {
        // loggedinUser : localLoggedinUser,
        loggedinUser : null,
        currUser: {},
        users: []
    },

    getters: {
        users(state) {
            return state.users;
        },
        currUser(state) {
            return state.currUser;
        },

         loggedinUser(state) {
             return state.loggedinUser
         }
     },
    mutations: {
        // setUser(state, {user}) {
        //     state.loggedinUser = user;
        // },
        setCurrUser(state, {currUser}) {
            console.log(currUser)
            state.currUser = currUser;
        },
       setUsers(state, {users}) {
            state.users = users;
        },
//         removeUser(state, {userId}) {
//             state.users = state.users.filter(user => user._id !== userId)
//         },
    },
    actions: {
//         async login(context, {userCred}) {
//             const user = await UserService.login(userCred);
//             context.commit({type: 'setUser', user})
//             return user;
//         },
//         async signup(context, {userCred}) {
//             const user = await UserService.signup(userCred)
//             context.commit({type: 'setUser', user})
//             return user;
            
//         },
//         async logout(context) {
//             await UserService.logout()
//             context.commit({type: 'setUsers', users: []})
//             context.commit({type: 'setUser', user: null})
//         },
        async loadUsers(context) {
            const users = await UserService.getUsers('user');
            context.commit({type: 'setUsers', users})
        },
        async getUserById(context, userId) { 
            const currUser = await UserService.getById(userId);
            context.commit({type: 'setCurrUser', currUser})
            return currUser;
        },
//         async removeUser(context, {userId}) {
//             await UserService.remove(userId);
//             context.commit({type: 'removeUser', userId})
//         },
//         async updateUser(context, {user}) {
//             user = await UserService.update(user);
//             context.commit({type: 'setUser', user})
//         }
    }
}


