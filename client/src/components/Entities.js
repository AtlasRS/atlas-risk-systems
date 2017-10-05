import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../actions/entity';
import entity from '../images/entity.svg';
import Ionicon from 'react-ionicons';


class Entities extends Component {

  handleOnClick = event => {
    const element = event.currentTarget;
    const legalname = element.attributes.getNamedItem('data-legalname').value;
    this.props.displayEntityAssets(element.id, legalname, this.props.assets, this.props.history);
  }

  renderEntityList() {
    return this.props.entities.map(entity => {
      return (
        <tr key={entity._id}>
          <td>
            {entity.legal_name}
          </td>
          <td>
            {entity.city}, {entity.state}
          </td>
          <td id={entity._id} className='td-icon' data-legalname={entity.legal_name} onClick={this.handleOnClick}>
            <Ionicon icon="ion-navicon-round" color="#222" fontSize="15px" className='ion'/>
          </td>
          <td className='td-icon icon-plus'>
            <Ionicon icon="ion-plus-round" color="#222" fontSize="15px" className='ion'/>
          </td>
          <td className='td-icon'>
            <Ionicon icon="ion-edit" color="#222" fontSize="15px" className='ion'/>
          </td>
          <td className='td-icon'>
            <Ionicon icon="ion-trash-b" color="#222" fontSize="15px" className='ion'/>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (!this.props.entities || this.props.entities.length === 0) {
      return (
        <div className='placeholder'>
          <img src={entity} alt={"entity"} className='placeholder-image'/>
          <div className="m-t-2">
            <Link to='/entities/new' className='btn primary'>
              Add Your First Entity
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='pull-left'>
          <h1>My Entities</h1>
        </div>
        <div className='pull-right'>
          <Link to='/entities/new' className='pull-right btn primary'>
            Add New Entity
          </Link>
        </div>
        <div className='clearfix' />

        <div className="card card-block">
          <table className="table table-striped m-t-1">
            <thead>
              <tr>
                <th style={{width: '25%'}}>Legal Name</th>
                <th>Location</th>
                <th style={{width: '20px'}}></th>
              </tr>
            </thead>
            <tbody>
              {this.renderEntityList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    entities: state.entities.entities,
    assets: state.assets.assets
  };
}

export default connect(mapStateToProps, actions)(withRouter(Entities));
