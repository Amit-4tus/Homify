import reviewService from '../services/ReviewService'

export default {
    strict: true,

    state: {
        reviewToShow: []
    },

    getters: {
        reviewToSHow(state) {
            return state.reviewToShow;
        }
    },

    mutations: {
        setReviewToSHow(state, reviewsToShow) {
            state.reviewToShow = reviewsToShow.reviews;
        },
        addReview(state, { newReview }) {
            state.reviewToShow.push(newReview);
        }
    },

    actions: {
        async loadReviews(context, id) {
            const reviews = await reviewService.getReviewById(id)
            context.commit({ type: 'setReviewToSHow', reviews })
            return reviews
        },
        async addReview(context, review) {
            const newReview = await reviewService.addReview(review)
            context.commit({ type: 'addReview', newReview })
            return newReview
        }
    }
}