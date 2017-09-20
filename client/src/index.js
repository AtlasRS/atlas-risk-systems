import './styles/App.css';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { AUTH_USER } from './actions/types';

import App from './components/App';
import reducers from './reducers';

window.authenticateCallback = token => {
  console.log("TOKEN", token);
  localStorage.setItem('token', token);
};

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));
const token = localStorage.token;
// If there is a token consider the user to be logged in.
if (token) store.dispatch({ type: AUTH_USER });

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
