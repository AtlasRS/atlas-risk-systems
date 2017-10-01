import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Subheader extends Component {
  renderSubheader() {
    if (this.props.myAssets === true) {
      return (
      <div className='subheader'>
        <Link to='/assets'>
          Assets
        </Link> / Add Asset
      </div>
      )
    }
    return (
      <div className='subheader'>
        <Link to={`/entity/assets/:${this.props.entityID}`} className=''>
          {this.props.entityName}
        </Link> / Add Asset
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderSubheader()}
      </div>
    );
  }
}

export default Subheader;
