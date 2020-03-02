import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//for our redux app to be able to make changes to our app
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {reducers} from './reducers/reducers.js';

//to be able to route between different pages
import {BrowserRouter as Router} from 'react-router-dom';

//apply middleware : Middleware in Redux is very common and gives us a chance to do a few different things with the data passing from action creators to the reducers
//thunk is anther word for a function that is returned by another function
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

