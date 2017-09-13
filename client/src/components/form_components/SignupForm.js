// Signup form shows the login form for user to input login credentials
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
  { label: 'First Name', type: 'text', name: 'first_name', errorMsg: '*You must provide a First Name' },
  { label: 'Last Name', type: 'text', name: 'last_name', errorMsg: '*You must provide a Last Name' },
  { label: 'Email', type: 'email', name: 'email', errorMsg: '*You must provide a valid email' },
  { label: 'Password', type: 'password', name: 'password', errorMsg: '*You must provide a valid password' },
  { label: 'Verify Password', type: 'password', name: 'verify_password', errorMsg: '*You must verify your password' }
];

class SignupForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, type, name }) => {
      return <Field key={name} component={Fields} label={label} type={type} name={name} />
    })
  }

  handleFormSubmit({ first_name, last_name, email, password }, history) {
    this.props.signupUser({ first_name, last_name, email, password }, history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderFields()}
        <div className='pull-right'>
          <button type='submit' className='btn primary'>Sign Up</button>
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


export default reduxForm({
  validate,
  form: 'signupForm'
}, null, actions)(withRouter(SignupForm));
