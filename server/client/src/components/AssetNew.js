import React from 'react'
import AssetForm from './AssetForm'

class AssetNew extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <AssetForm onSubmit={this.submit} />
    )
  }
}

export default AssetNew;
