import React, { Component } from 'react';
import Subheader from './Subheader'
import { connect } from 'react-redux';
import * as actions from '../actions';
import AssetForm from './form_components/AssetForm';

class AssetNew extends Component {

  render() {

    return (
      <div>
        <Subheader entityName={this.props.entityName} entityID={this.props.entityID} myAssets={this.props.myAssets} />
        <div className='container m-t-2'>
          <div className='card'>
            <AssetForm />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    entityName: state.entities.current_entity.entity_name,
    entityID: state.entities.current_entity.id,
    myAssets: state.entities.myAssets
  }
}

export default connect(mapStateToProps, actions)(AssetNew);
