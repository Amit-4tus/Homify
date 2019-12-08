import httpService from './HttpService'
export default {
    getReviews,
    addReview,
    getReviewById
};

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/review' : '//localhost:3000/review';
const axios = require('axios');


function getReviewById(id) {
    return httpService.get(`api/review/${id}`)
};
async function addReview(review) {

    review.createdAt= new Date().toLocaleDateString();
    const newReview=await httpService.post(`api/review`, review)
    return newReview
}

function getReviews() {
    return httpService.get('review')
}







