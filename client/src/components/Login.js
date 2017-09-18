import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import SocialLogins from './SocialLogins'
import LoginForm from './form_components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className='container m-t-2'>
        <div className='card' style={{maxWidth: '500px'}}>
          <div>
            <h2>Login</h2>
            <SocialLogins />
            <p>Or Login with Email</p>
            <LoginForm />
            <div className='clearfix' />
          </div>
        </div>
      </div>

    );
  }
}

export default connect(null, actions)(Login);
