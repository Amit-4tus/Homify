import httpService from './HttpService'
export default {
    getOrders,
    addOrder,
    getOrderById,
    updateOrder
};

// const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/order' : '//localhost:3000/order';
const axios = require('axios');

function getOrders(id,query) {
    return httpService.get(`api/order/${query}/${id}/`)
};
function updateOrder(order) {
    return httpService.put(`api/order/${order._id}`, order)
}

async function addOrder(order) {

    order.createdAt= new Date().toLocaleDateString();
    const newOrder=await httpService.post(`api/order`, order)
    return newOrder
}

function getOrderById(id) {
    return httpService.get(`api/order/${id}`)
};

