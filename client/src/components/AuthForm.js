import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Signup from './Signup';
import Login from './Login';

class AuthForm extends Component {
  render() {
    return (
      <div id='authform-container'>
        <BrowserRouter>
          <div id="authform-wrapper">
            <h2>Atlas Risk Systems</h2>
            <Route exact path='/auth/signup' component={Signup} />
            <Route exact path='/auth/login' component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(AuthForm);
