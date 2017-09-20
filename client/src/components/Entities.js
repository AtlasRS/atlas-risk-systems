import React, { Component } from 'react';
import { connect } from "react-redux";
import entity from '../images/entity.svg';
import Ionicon from 'react-ionicons';

class Entities extends Component {
  renderEntityList() {
    return this.props.entities.map(entity => {
      return (
        <tr key={entity.name}>
          <td>
            {entity.name}
          </td>
          <td>
            {entity.city}, {entity.state}
          </td>
          <td>
            <Ionicon icon="ion-chevron-right" color="#222" fontSize="10px" className='ion'/>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (this.props.entities == '') {
      return (
        <div className='placeholder'>
          <img src={entity} alt={"entity"} className='placeholder-image'/>
          <div className="m-t-2">
            <a href='/entities/new' className='btn primary'>
              Add Your First Entity
            </a>
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
          <a href='/entities/new' className='pull-right btn primary'>
            Add New Entity
          </a>
        </div>
        <div className='clearfix' />

        <div className="card card-block">
          <table className="table table-striped m-t-1">
            <thead>
              <tr>
                <th style={{width: '25%'}}>Name</th>
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
    entities: state.entities
  };
}

export default connect(mapStateToProps)(Entities);

