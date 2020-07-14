
import React, { Component } from 'react'
import '../App.css';
import { addNewReview } from '../actions/index'
import { connect } from 'react-redux'

class ReviewForm extends Component {
    // debugger
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            content: "",
            game_id: ""
        }
    }

    handleOnSubmit = e => {
        // debugger
        e.preventDefault();
        this.props.addNewReview(this.state);
        this.setState({
            name: "",
            content: "",
            game_id: ""
        })
    };

    handleChange = e => {
        e.preventDefault();
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // debugger
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label className="in">Name:</label>
                <br />
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                <br />
                <label className="in">Review:</label>
                <br />
                <textarea type='text' name='content' value={this.state.content} onChange={this.handleChange} />
                <br />
                <label className="in"> Game #:</label>
                <br />
                <input type='number' name='game_id' value={this.state.game_id} onChange={this.handleChange} />
                <br />
                <button type='submit' value="Create a Review" className='create'>Create</button>
            </form>
        )
    }
}


export default connect(null, { addNewReview })(ReviewForm);

//controlled components: will accept a value as a property and it triggers a callback method that's going to enact something on it.
//uncontrolled components: don't hold state. you have to manually get the value every time you want to interact with it( this is the same thing as out vanilla javascript, you have to go out and get the value that we are actually getting from our form)
