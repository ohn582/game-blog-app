import React, { Component } from 'react'
import '../App.css';
import { addNewTodo } from '../actions/index'
import { connect } from 'react-redux'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            developer: "",
            info: ""
        }
    }

    handleOnSubmit = e => {
        // debugger
        e.preventDefault();
        this.props.addNewTodo(this.state);
        this.setState({
            title: "",
            developer: "",
            info: ""
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
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h1>Create a Game</h1>
                <label className="in">Title:</label>
                <br />
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange} /> {/*we need to trigger onChange method*/}
                <br />
                <label className="in">Developer:</label>
                <br />
                <textarea type='text' name='developer' value={this.state.developer} onChange={this.handleChange} />
                <br />
                <label className="in">Info:</label>
                <br />
                <textarea type='text' name='info' value={this.state.info} onChange={this.handleChange} />
                <br />
                <button type='submit' value="Create" className='create'>Create</button>
            </form>    
        );
    }
}

export default connect(null, { addNewTodo })(Form);