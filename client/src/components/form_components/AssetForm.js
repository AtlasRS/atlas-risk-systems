import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FieldsInput from './FieldsInput';
import FieldsSelect from './FieldsSelect';
import { withRouter } from 'react-router-dom';

const FIELDS = [
  { component: 'select', label: 'Type', type: 'text', name: 'asset_type_id' },
  { component: 'input', label: 'Description', type: 'text', name: 'asset_description' },
  { component: 'input', label: 'Street Address', type: 'text', name: 'address_1' },
  { component: 'input', label: 'Address Continued', type: 'text', name: 'address_2' },
  { component: 'input', label: 'City', type: 'text', name: 'city' },
  { component: 'input', label: 'State', type: 'text', name: 'state' },
  { component: 'input', label: 'Zip/Postal Code', type: 'text', name: 'postal_code' },
  { component: 'input', label: 'Country', type: 'text', name: 'country' },
  
  { component: 'input', label: 'Vehicle Type', type: 'text', name: 'vehicle_type' },
  { component: 'input', label: 'VIN', type: 'text', name: 'vin_number' },
  { component: 'input', label: 'Year', type: 'text', name: 'year' },
  { component: 'input', label: 'Make', type: 'text', name: 'make' },
  { component: 'input', label: 'Model', type: 'text', name: 'model' },
  { component: 'input', label: 'Operating Radius', type: 'text', name: 'operating_radius' },
  { component: 'input', label: 'Entity', type: 'text', name: 'entity_id' }
];

class AssetForm extends Component {
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
        <h1>Add Asset</h1>
        {this.renderFields()}
        <div className='pull-right'>
          <button type='submit' className='btn primary'>Save</button>
        </div>
        <div className='clearfix' />
      </form>
    );
  }
}

AssetForm = connect(null, actions)(AssetForm);
AssetForm = reduxForm({
 form: 'assetForm'
})(AssetForm);
export default AssetForm;
