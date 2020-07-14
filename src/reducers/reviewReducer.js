export default (state = [], action) => {
    switch (action.type) {
        case "SET_REVIEWS":
            return [...action.payload]
        case "ADD_REVIEW":
            return [...state, action.payload]
        case "REMOVE_REVIEW":
            let newReviews = state.filter(review => review.id !== action.payload)
            return [...newReviews]
        default:
            return state
    }
}
