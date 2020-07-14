import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './components/Home'


class App extends Component { // name your components with an uppercase letter in react or else it will not reconize them
  render() {
    return (
      <Router>
        <div>
          <h1>Welcome to Game App</h1>
          <Route path="/home" component={Home} />
          <Link to="/home" className='home'>Home</Link>
        </div>
      </Router>
    )
  }
}

export default App;


