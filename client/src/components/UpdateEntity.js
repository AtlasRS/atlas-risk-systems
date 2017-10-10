import React from 'react';
import { connect } from 'react-redux';
import * as entityActions from '../actions/entity';
import UpdateEntityForm from './form_components/UpdateEntityForm';

class UpdateEntity extends React.Component {

  render() {
    return (
      <div>
        <div className='container m-t-2'>
          <div className='card'>
            <UpdateEntityForm />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, entityActions)(UpdateEntity);
