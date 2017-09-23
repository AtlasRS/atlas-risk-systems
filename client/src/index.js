import './styles/App.css';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './configureStore';
import { AUTH_USER } from './actions/types';

const token = localStorage.token;
if (token) store.dispatch({ type: AUTH_USER }); // If there is a token consider the user to be logged in.

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path='/' component={App} />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
