import httpService from './HttpService'
export default {
    getItems,
    getItemById,
    deleteItem,
    addItem,
    updateItem,
};

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/house' : '//localhost:3000/house';
const axios = require('axios');

function getItems() {
    return httpService.get('house')
};

function addItem(item) {
    item._id=makeId()
    return httpService.post(`house`, item)
}

function getItemById(id) {
    return httpService.get(`house?_id=${id}`)
};

function updateItem(item) {
    return httpService.put(`house/${item.id}`,item)
}
function deleteItem(id) {
    return httpService.delete(`house/${id}`,)
}

function makeId(length=3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}