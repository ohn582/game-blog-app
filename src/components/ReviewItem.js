import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeReview } from '../actions/index'

const ReviewItem = ({ review, removeReview }) => {
    // debugger
    return (
        <Router>
            <>
                <Route path={`/reviews/${review.game_id}`}>
                    <div className='box'>
                        <h4>{review.name}</h4>
                        <p>{review.content}</p>
                        <button onClick={() => removeReview(review.id)} className='clear'>Delete</button>
                    </div>
                </Route>
            </>
        </Router>
    )
}

export default connect(null, { removeReview })(ReviewItem)