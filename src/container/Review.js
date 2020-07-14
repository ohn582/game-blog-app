import React, { Component } from 'react';
import '../App.css';
import ReviewItem from '../components/ReviewItem'
import ReviewForm from '../components/ReviewForm'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/index'

class Review extends Component {

    componentDidMount() { // this is where all of our fetch happens
        this.props.fetchReviews()
    }

    constructor(props) {
        super(props);
        this.state = {
            review: []
        }
    }


    render() {
        // console.log(this.props.review)
        const reviews = this.props.reviews.map((review, i) => <ReviewItem key={i} review={review} />) //you can keep the same attributes
        // console.log(reviews)
        return (
            <div>
                <div className="wrapper">{reviews}</div>
                <ReviewForm handleOnSubmit={this.addNewReview} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps, { fetchReviews })(Review);

