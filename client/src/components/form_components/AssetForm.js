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
  { component: 'input', label: 'Name', type: 'text', name: 'asset_name' },
  { component: 'input', label: 'Description', type: 'text', name: 'asset_description' },
  { component: 'input', label: 'Street Address', type: 'text', name: 'address_1' },
  { component: 'input', label: 'Address Continued', type: 'text', name: 'address_2' },
  { component: 'select', label: 'City', type: 'text', name: 'city' },
  { component: 'select', label: 'State', type: 'text', name: 'state' },
  { component: 'input', label: 'Zip/Postal Code', type: 'text', name: 'postal_code' },
  { component: 'select', label: 'Country', type: 'text', name: 'country' },
  { component: 'select', label: 'Vehicle Type', type: 'text', name: 'vehicle_type' },
  { component: 'input', label: 'VIN', type: 'text', name: 'vin_number' },
  { component: 'select', label: 'Year', type: 'text', name: 'year' },
  { component: 'select', label: 'Make', type: 'text', name: 'make' },
  { component: 'input', label: 'Model', type: 'text', name: 'model' },
  { component: 'input', label: 'Gross Weight', type: 'text', name: 'gross_weight' },
  { component: 'select', label: 'Operating Radius (Miles)', type: 'text', name: 'operating_radius' },
];

class AssetForm extends Component {

  renderFields() {
    return _.map(FIELDS, ({ component, label, type, name }) => {

      if(component === 'input'){
        return <Field key={name} component={FieldsInput} label={label} type={type} name={name} />
      }
      else {
        return <Field key={name} component={FieldsSelect} entities={this.props.entities} label={label} type={type} name={name} />
      }
    })
  }

  handleFormSubmit = (values) => {
    let entityID;
    // flag for checking if on current entity/assets or my assets (all assets)
    let onEntity = false;
    // handle submitting an asset from all assets page.
    if (this.props.myAssets === true) {
      entityID = this.props.entitiesIDList.filter(currEntity => {
        if (values.entity === currEntity.name){
          return currEntity.id;
        }
      })
      values._entity = entityID[0].id;
      values.entity_name = entityID[0].name;
    }
    // handle submitting an asset from a selected entity.
    else {
      onEntity = true;
      values._entity = this.props.entityID;
      values.entity_name = this.props.entityName;
      entityID = this.props.entityID
    }
    this.props.postAsset(values, entityID, onEntity, this.props.history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
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

function mapStateToProps(state) {
  return {
    entities: state.entities.entities,
    entityName: state.entities.current_entity.entity_name,
    entityID: state.entities.current_entity.id,
    entitiesIDList: state.entities.entitiesID,
    myAssets: state.entities.myAssets
  }
}

AssetForm = connect(mapStateToProps, actions)(withRouter(AssetForm));
AssetForm = reduxForm({
 form: 'assetForm'
})(AssetForm);
export default AssetForm;
