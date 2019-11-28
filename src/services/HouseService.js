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

function getItemById(_id) {
    return axios.get(`${BASE_URL}?_id=${_id}`)
        .then(res => res.data)
        .then(items => items.find(item => item._id === +_id));
};

function deleteItem(_id) {
    return axios.delete(BASE_URL + _id)
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