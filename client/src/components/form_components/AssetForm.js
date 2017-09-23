import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/assets';
import FieldsInput from './FieldsInput';
import FieldsSelect from './FieldsSelect';

const FIELDS = [
  { component: 'select', label: 'Entity', type: 'text', name: 'entity' },
  { component: 'input', label: 'Description', type: 'text', name: 'asset_description' },
  { component: 'input', label: 'Street Address', type: 'text', name: 'address_1' },
  { component: 'input', label: 'Address Continued', type: 'text', name: 'address_2' },
  { component: 'select', label: 'City', type: 'text', name: 'city' },
  { component: 'select', label: 'State', type: 'text', name: 'state' },
  { component: 'input', label: 'Zip/Postal Code', type: 'text', name: 'postal_code' },
/*  { component: 'select', label: 'Country', type: 'text', name: 'country' },*/
  { component: 'select', label: 'Vehicle Type', type: 'text', name: 'vehicle_type' },
  { component: 'input', label: 'VIN', type: 'text', name: 'vin_number' },
  { component: 'select', label: 'Year', type: 'text', name: 'year' },
  { component: 'select', label: 'Make', type: 'text', name: 'make' },
  { component: 'input', label: 'Model', type: 'text', name: 'model' },
  { component: 'select', label: 'Operating Radius (Miles)', type: 'text', name: 'operating_radius' },
];

class AssetForm extends Component {
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

  handleFormSubmit(values) {
    console.log("VALUES FROM ASSET FORM", values);
    this.props.postAsset(values, this.props.history);
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

// function mapStateToProps(state) {
//   return { entityID: this.state.entity._id }
// }

AssetForm = connect(null, actions)(withRouter(AssetForm));
AssetForm = reduxForm({
 form: 'assetForm'
})(AssetForm);
export default AssetForm;
