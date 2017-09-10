import React from 'react'
import AssetForm from './AssetForm'
import Subheader from './Subheader'

class AssetNew extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <div>
        <Subheader />
        <div className='container m-t-2'>
          <div className='card'>
            <AssetForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    )
  }
}

export default AssetNew;
