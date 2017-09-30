import React from 'react';
import { Link } from 'react-router-dom';

const Subheader = (props) => {
  return (
    <div className='subheader'>
      <Link to={`/entity/assets/:${props.entityID}`} className=''>
        {props.entityName}
      </Link> / Add Asset
    </div>
  );
}

export default Subheader;
