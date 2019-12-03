import httpService from './HttpService'
export default {
    getReviews,
    addReview,
    getReviewById
};

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/review' : '//localhost:3000/review';
const axios = require('axios');


//server

function getReviewById(id) {
    return httpService.get(`api/review/${id}`)
};
//server
async function addReview(review) {

    // review.user.userName="me"
    review.createdAt= new Date().toLocaleDateString();
    const newReview=await httpService.post(`api/review`, review)
    return newReview
}


function getReviews() {
    return httpService.get('review')
}

// async function addReview(review) {

//     review._id = makeId()
//     review.id=makeId()
//     review.user.userName="me"
//     review.createdAt= new Date().toLocaleDateString();
//     console.log(review)
//     const newReview=await httpService.post(`review`, review)
//     return newReview
// }

// function getReviewById(id) {
//     return httpService.get(`review?houseId=${id}`)
// };





