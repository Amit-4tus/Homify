import socket from '../services/SocketService.js'


export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        sendMsg(context, hostId) {
            socket.emit('order details', hostId)
        },

     


    }
}