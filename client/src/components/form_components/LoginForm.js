// LoginForm shows the login form for user to input login credentials
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Fields from './Fields';
import { withRouter } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
import validatePassword from '../../utils/validatePassword';

const FIELDS = [
  { label: 'Email', type: 'email', name: 'email', errorMsg: '*You must provide a valid email' },
  { label: 'Password', type: 'password', name: 'password', errorMsg: '*You must provide a valid password' }
];

class LoginForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, type, name }) => {
      return <Field key={name} component={Fields} label={label} type={type} name={name} />
    })
  }

  renderAlert() {
    if(this.props.errorMsg) {
      return (
        <div>
          {this.props.errorMsg}
        </div>
      )
    }
  }

  handleFormSubmit({ email, password }, history) {
    this.props.loginUser({ email, password }, history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderFields()}
        {this.renderAlert()}
        <div className='pull-right'>
          <button type='submit' className='btn primary'>Login</button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmail(values.email || '');
  errors.password = validatePassword(values.password || '');

  _.each(FIELDS, ({ name, errorMsg }) => {
    if (!values[name]) errors[name] = errorMsg;
  });

  return errors;
}

// function mapStateToProps(state) {
//   return { errorMsg: state.auth.error }
// }

LoginForm = connect(null, actions)(LoginForm);
LoginForm = reduxForm({
 form: 'loginForm'
})(LoginForm);
export default LoginForm;
