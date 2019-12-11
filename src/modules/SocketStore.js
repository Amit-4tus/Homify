import socket from '../services/SocketService.js'

export default {
    actions: {
        sendMsg(context, hostId) {
            socket.emit('order details', hostId)
        },
    }
}