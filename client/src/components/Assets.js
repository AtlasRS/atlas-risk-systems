import React, { Component } from 'react';
import { connect } from "react-redux";
import car from '../images/car.svg';
import Ionicon from 'react-ionicons';

class Assets extends Component {
  renderAssetList() {
    return this.props.assets.map(asset => {
      return (
        <tr key={asset.vin}>
          <td>
            {asset.entity}
          </td>
          <td>
            {asset.type}
          </td>
          <td>
            {asset.make} {asset.model}
          </td>
          <td>
            {asset.vin}
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
    if (this.props.assets == '') {
      return (
        <div className='placeholder'>
          <img src={car} alt={"car"} className='placeholder-image'/>
          <div className="m-t-2">
            <a href='/assets/new' className='btn primary'>
              Add Your First Asset
            </a>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='pull-left'>
          <h1>My Assets</h1>
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
                <th>Location/Entity</th>
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
    assets: state.assets
  };
}

export default connect(mapStateToProps)(Assets);
