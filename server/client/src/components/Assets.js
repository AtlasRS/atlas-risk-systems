import React from 'react'
import car from '../images/car.svg';

class Assets extends React.Component {
  render() {
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

        <div className='placeholder'>
          <img src={car} alt={"car"} className='placeholder-image'/>
          <p>
            No assets yet...add an asset!
          </p>
        </div>
      </div>
    )
  }
}

export default Assets;
