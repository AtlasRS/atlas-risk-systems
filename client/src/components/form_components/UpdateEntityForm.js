import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/entity';
import FieldsInput from './FieldsInput';
import FieldsSelect from './FieldsSelect';
import { withRouter } from 'react-router-dom';

const FIELDS = [
  { component: 'input', label: 'Legal Name', type: 'text', name: 'legal_name' },
  { component: 'input', label: 'DBA', type: 'text', name: 'do_business_as' },
  { component: 'input', label: 'Street Address', type: 'text', name: 'address_1' },
  { component: 'input', label: 'Address Continued', type: 'text', name: 'address_2' },
  { component: 'select', label: 'City', type: 'text', name: 'city' },
  { component: 'select', label: 'State', type: 'text', name: 'state' },
  { component: 'input', label: 'Zip/Postal Code', type: 'text', name: 'postal_code' },
  { component: 'select', label: 'Country', type: 'text', name: 'country' }
];

class UpdateEntityForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ component, label, type, name }) => {

      if(component === 'input'){
        return <Field key={name} component={FieldsInput} label={label} type={type} name={name} />
      }
      else {
        return <Field key={name} component={FieldsSelect} label={label} type={type} name={name} />
      }
    })
  }

  handleFormSubmit = (values) => {
    this.props.updateEntity(values, this.props.userID, this.props.history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
        <h1>Update Entity</h1>
        {this.renderFields()}
        <div className='pull-right'>
          <button type='submit' className='btn primary'>Save</button>
        </div>
        <div className='clearfix' />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.auth.user._id,
    entity: state.modal.entity
  };
}

UpdateEntityForm = connect(mapStateToProps, actions)(withRouter(UpdateEntityForm));
UpdateEntityForm = reduxForm({
 form: 'updateEntityForm'
})(UpdateEntityForm);
export default UpdateEntityForm;
