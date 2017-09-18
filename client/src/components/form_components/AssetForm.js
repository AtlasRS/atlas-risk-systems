import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Fields from './Fields';
import { withRouter } from 'react-router-dom';

const FIELDS = [
  { label: 'Type', type: 'text', name: 'asset_type_id' },
  { label: 'Description', type: 'text', name: 'asset_description' },
  { label: 'Street Address', type: 'text', name: 'address_1' },
  { label: 'Address Continued', type: 'text', name: 'address_2' },
  { label: 'City', type: 'text', name: 'city' },
  { label: 'State', type: 'text', name: 'state' },
  { label: 'Country', type: 'text', name: 'country' },
  { label: 'Zip/Postal Code', type: 'text', name: 'postal_code' },
  { label: 'Vehicle Type', type: 'text', name: 'vehicle_type' },
  { label: 'VIN', type: 'text', name: 'vin_number' },
  { label: 'Year', type: 'text', name: 'year' },
  { label: 'Make', type: 'text', name: 'make' },
  { label: 'Model', type: 'text', name: 'model' },
  { label: 'Operating Radius', type: 'text', name: 'operating_radius' },
  { label: 'Entity', type: 'text', name: 'entity_id' }
];

class AssetForm extends Component {
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
