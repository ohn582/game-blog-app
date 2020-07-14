import React, { Component } from 'react'
import '../App.css';
import GameItem from '../components/GameItem'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { fetchGames } from '../actions/index'


// import { addNewTodo } from '../actions/index'

class Game extends Component {

    componentDidMount() {
        this.props.fetchGames()
    }

    constructor(props) { 
        super(props);   
        this.state = {  
            game: []
        };
    }


    render() {
        const games = this.props.games.map((game, i) => <GameItem key={i} game={game} />)



        // debugger
        return (
            <div>
                <div className="wrapper">{games}</div>
                <Form handleOnSubmit={this.addNewTodo} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(Game)



