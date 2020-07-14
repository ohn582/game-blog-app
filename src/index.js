import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))


//Everything inside the provider, can get acess to the store, witch gives the acess through connect to state & dispatched. This is an initial set up 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
