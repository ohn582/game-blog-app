import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import List from '../components/List'
import About from '../components/About'
// import Form from '../components/Form'



class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/markets" component={List} />
                    <Link to="/markets" className='list'>Go to List</Link>
                    <br />
                    <Route path="/about" component={About} />
                    <Link to="/about" className='list'>Go to About</Link>
                </div>
            </Router>
        )
    }

}

export default Home;