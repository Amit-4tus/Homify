import httpService from './HttpService'
export default {
    getItems,
    getItemById,
    deleteItem,
    addItem,
    updateItem,
    getItemsByHost
};

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/house' : '//localhost:3000/house';
const axios = require('axios');




function addItem(item) {
    return httpService.post(`api/house`, item)
}
function getItems(filter) {
    if(filter.date) return httpService.get(`api/house/query/${filter.txt}/${filter.date}`)
    return httpService.get(`api/house/query/${filter.txt}`)

}
function getItemsByHost(id) {
    return httpService.get(`api/house/host/${id}`)
}
function getItemById(id) {

    return httpService.get(`api/house/${id}`)
}
function deleteItem(id) {
    return httpService.delete(`api/house/${id}`)
}

function updateItem(item) {
    return httpService.put(`api/house/${item._id}`, item)
}



