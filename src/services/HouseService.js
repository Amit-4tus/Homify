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


// function getItems() {
//     return httpService.get('house')
// }

// function addItem(item) {
//     item._id=makeId()
//     return httpService.post(`house`, item)
// }


//server
function addItem(item) {

    return httpService.post(`api/house`, item)
}
//server
function getItems(filter) {
   
    return httpService.get(`api/house/query/${filter.txt}`)
}
//server
function getItemById(id) {

    return httpService.get(`api/house/${id}`)
}
//server
function deleteItem(id) {
    return httpService.delete(`api/house/${id}`)
}
// function getItemById(id) {
//     return httpService.get(`house?_id=${id}`)
// }
//server
function updateItem(item) {
    return httpService.put(`api/house/${item._id}`, item)
}

// function updateItem(item) {
//     return httpService.put(`house/${item.id}`,item)
// }
// function deleteItem(id) {
//     return httpService.delete(`house/${id}`,)
// }

