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

function getItemById(id) {
    return httpService.get(`house?_id=${id}`)
};

function deleteItem(id) {
    return axios.delete(BASE_URL + id)
        .then(res => res);
};

function addItem(item) {
    return axios.post(BASE_URL, item)
        .then(res => res.data)
};

function updateItem(item) {
    return axios.put(BASE_URL + item._id, item)
        .then(res => res.data)
}