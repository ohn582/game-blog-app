import React, { Component } from 'react'
import '../App.css';
import Game from '../container/Game'

class List extends Component {
    render() {
        return (
            <div>
                <h1>Select:</h1>
                <Game />
            </div>
        )
    }
}



export default List;