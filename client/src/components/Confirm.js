import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './form_components/LoginForm';

class Confirm extends Component {
  renderConfirmAccount() {
    if (this.props.match.params.token) {
      return (
        <div>
          <h2>Account Verified</h2>
          <p>Please Login</p>
          <LoginForm />
          <div className='clearfix' />
        </div>
      );
    }
    return (
      <div>
        <h2>Verify Account</h2>
        <p>{this.props.message}</p>
        <div className='clearfix' />
      </div>
    );
  }

  render() {
    return (
      <div className='container m-t-2'>
        <div className='card' style={{maxWidth: '500px'}}>
          {this.renderConfirmAccount()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.msg
  }
}

export default connect(mapStateToProps)(Confirm);
