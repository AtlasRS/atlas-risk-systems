// LoginForm shows the login form for user to input login credentials
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FieldsInput from './FieldsInput';
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
      return <Field key={name} component={FieldsInput} label={label} type={type} name={name} />
    })
  }

  renderAlert() {
    if(this.props.auth) {
      return (
        <div>
          {this.props.auth.error}
        </div>
      )
    }
  }

  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password }, this.props.history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
        {/* {this.renderAlert()} */}
        {this.renderFields()}
        <div className='pull-right'>
          <button type='submit' className='btn primary'>Login</button>
        </div>
        <div className='clearfix' />
      </form>
    );
  }
}

// eslint-disable-next-line
function validate(values) {
  const errors = {};

  errors.email = validateEmail(values.email || '');
  errors.password = validatePassword(values.password || '');

  _.each(FIELDS, ({ name, errorMsg }) => {
    if (!values[name]) errors[name] = errorMsg;
  });

  return errors;
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

LoginForm = connect(mapStateToProps, actions)(withRouter(LoginForm));
LoginForm = reduxForm({
 form: 'loginForm'
})(LoginForm);
export default LoginForm;
