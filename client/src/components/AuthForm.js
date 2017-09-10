import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Signup from './Signup';
import Login from './Login';

class AuthForm extends Component {
  render() {
    return (
      <div className='container m-t-2'>
        <div className='card' style={{maxWidth: '500px'}}>
          <BrowserRouter>
            <div>
              <Route exact path='/auth/signup' component={Signup} />
              <Route exact path='/auth/login' component={Login} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(AuthForm);
