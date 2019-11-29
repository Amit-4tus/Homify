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
        }
       
    },
    actions: {
      
        async loadReviews(context, id) {
            const reviews = await reviewService.getReviewById(id)
            context.commit({ type: 'setReviewToSHow', reviews })
            return reviews
        },
        async addHouse(context, {newHouse}) {
            const house = await houseService.addItem(newHouse)
            return house;
        },
       
        
    }
}