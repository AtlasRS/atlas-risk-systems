import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FieldsInput from './FieldsInput';
import FieldsSelect from './FieldsSelect';
import { withRouter } from 'react-router-dom';

const FIELDS = [
  { component: 'input', label: 'Name', type: 'text', name: 'entity_name' },
];

class EntityForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ component, label, type, name }) => {

      if(component == 'input'){
        return <Field key={name} component={FieldsInput} label={label} type={type} name={name} />
      }
      else {
        return <Field key={name} component={FieldsSelect} label={label} type={type} name={name} />
      }
    })
  }

  handleFormSubmit({ first_name, last_name, email, password }, history) {
    this.props.signupUser({ first_name, last_name, email, password }, history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
        <h1>Add Entity</h1>
        {this.renderFields()}
        <div className='pull-right'>
          <button type='submit' className='btn primary'>Save</button>
        </div>
        <div className='clearfix' />
      </form>
    );
  }
}

EntityForm = connect(null, actions)(EntityForm);
EntityForm = reduxForm({
 form: 'entityForm'
})(EntityForm);
export default EntityForm;
