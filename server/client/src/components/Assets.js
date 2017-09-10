import React from 'react'

class Assets extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='pull-left'>
          <h1>My Assets</h1>
        </div>
        <div className='pull-right'>
          <a href='/assets/new' className='pull-right btn'>
            Add New Asset
          </a>
        </div>
      </div>
    )
  }
}

export default Assets;
