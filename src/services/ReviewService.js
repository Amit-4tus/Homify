import httpService from './HttpService'
export default {
    getReviews,
    addReview,
    getReviewById
};

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/review' : '//localhost:3000/review';
const axios = require('axios');

function getReviews() {
    return httpService.get('review')
};

function addReview(review) {

    item._id = makeId()
    return httpService.post(`review`, review)
}

function getReviewById(id) {
    return httpService.get(`review?houseId=${id}`)
};





function makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}