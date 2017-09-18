import React from 'react';
import Subheader from './Subheader'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AssetForm from './form_components/AssetForm';

class AssetNew extends React.Component {

  render() {

    return (
      <div>
        <Subheader />
        <div className='container m-t-2'>
          <div className='card'>
            <AssetForm />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(AssetNew);
