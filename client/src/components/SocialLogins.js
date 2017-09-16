import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Ionicon from 'react-ionicons';


class SocialLogins extends Component {

  handleGoogleAuth() {
    this.props.googleAuth();
  }

  render() {
    return (
      <div>
        <div className='btn-group'>
          <div onClick={this.handleGoogleAuth.bind(this)} className='btn primary' style={{backgroundColor: '#E04827'}}>
            <Ionicon icon="ion-social-google" color="white" className='ion'/> Login with Google
          </div>
          <a href='/auth/google' className='btn primary' style={{backgroundColor: '#267DE2'}}>
            <Ionicon icon="ion-social-linkedin" color="white" className='ion'/> Login with LinkedIn
          </a>
        </div>
        <div className='clearfix' />
      </div>
    );
  }
}

export default connect(null, actions)(SocialLogins);
