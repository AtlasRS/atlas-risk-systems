import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import car from '../images/car.svg';
import Ionicon from 'react-ionicons';

class EntityAssets extends Component {
  renderAssetList() {
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
          <td>
            <Ionicon icon="ion-chevron-right" color="#222" fontSize="10px" className='ion'/>
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
            <Link to='/assets/new' className='btn primary'>
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
          <a href='/assets/new' className='pull-right btn primary'>
            Add New Asset
          </a>
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
              {this.renderAssetList()}
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
    entityName: state.entities.current_entity
  };
}

export default connect(mapStateToProps)(EntityAssets);
