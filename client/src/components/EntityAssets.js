import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import car from '../images/car.svg';
import Ionicon from 'react-ionicons';
import * as assetActions from '../actions/assets';
import * as modalActions from '../actions/modal';

class EntityAssets extends Component {

  handleAssetModal = event => {
    const assetID = event.currentTarget.attributes.getNamedItem('data-assetID').value;
    const asset = this.props.entityAssets.find(asset => {
      if (asset._id === assetID) return asset;
    })
    this.props.assetModal(asset);
  }

  handleDeleteAsset = event => {
    const element = event.currentTarget;
    const assetID = element.attributes.getNamedItem('data-assetID').value;
    this.props.deleteAsset(assetID, this.props.history);
  }


  renderEntityAssetList() {
    return this.props.entityAssets.map(asset => {
      return (
        <tr key={asset.vin_number}>
          <td>
            {asset.asset_name}
          </td>
          <td>
            {asset.asset_description}
          </td>
          <td>
            {asset.address_1}
          </td>
          <td>
            {asset.type}
          </td>
          <td>
            {asset.make} {asset.model}
          </td>
          <td>
            {asset.vin_number}
          </td>
          <td>
            {asset.expires}
          </td>
          <td>
            {asset.insured}
          </td>
          <td data-assetID={asset._id} className='td-icon' onClick={this.handleAssetModal}>
            <Ionicon icon="ion-edit" color="#222" fontSize="15px" className='ion' />
          </td>
          <td data-assetID={asset._id} className='td-icon' onClick={this.handleDeleteAsset}>
            <Ionicon icon="ion-trash-b" color="#222" fontSize="15px" className='ion'/>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (this.props.entityAssets.length === 0) {
      return (
        <div className='placeholder'>
          <img src={car} alt={"car"} className='placeholder-image'/>
          <div className="m-t-2">
            <Link to={`/entity/assets/new/:${this.props.entityID}`} className='btn primary'>
              Add First Asset to {this.props.entityName}
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='pull-left'>
          <h1>{this.props.entityName} Assets</h1>
        </div>
        <div className='pull-right'>
          <Link to='/assets/new' className='pull-right btn primary'>
            Add New Asset
          </Link>
        </div>
        <div className='clearfix' />

        <div className="card card-block">
          <table className="table table-striped m-t-1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Discription</th>
                <th>Location</th>
                <th>Type</th>
                <th>Make/Model</th>
                <th>VIN</th>
                <th>Expires</th>
                <th>Insured?</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderEntityAssetList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    entityAssets: state.entities.entity_assets,
    entityName: state.entities.current_entity.entity_name,
    entityID: state.entities.current_entity.id
  };
}

export default connect(mapStateToProps, Object.assign(assetActions, modalActions))(EntityAssets);
