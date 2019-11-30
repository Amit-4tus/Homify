import httpService from './HttpService'
export default {
    getOrders,
    addOrder,
    getOrderById
};

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/order' : '//localhost:3000/order';
const axios = require('axios');

function getOrders() {
    return httpService.get('order')
};

async function addOrder(order) {

    order._id = makeId()
    order.id=makeId()
    // order.user.userName="me"
    order.createdAt= new Date().toLocaleDateString();
    const newOrder=await httpService.post(`order`, order)
    return newOrder
}

function getOrderById(id) {
    return httpService.get(`order?_id=${id}`)
};

function makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}