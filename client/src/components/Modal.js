import React, { Component } from 'react';
import { connect } from "react-redux";
import * as entityActions from '../actions/entity';
import UpdateEntity from './UpdateEntity';

class Modal extends Component {
  handleUpdateEntity = () => {
    this.props.updateEntity()
  }

  render() {
    return(
      <div className='modal'>
        <UpdateEntity />
        <button className='btn primary' onClick={this.handleUpdateEntity}>
          Submit
        </button>
      </div>
    )
  }
}

export default connect(null, entityActions)(Modal);
