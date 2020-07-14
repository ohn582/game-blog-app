import { combineReducers } from 'redux'
import games from './gameReducer'
import reviews from './reviewReducer'

export default combineReducers({
    games,
    reviews
})

