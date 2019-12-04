import React, { Component } from 'react'

class VendorGeo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }, newState => console.log(newState)), 
      err => console.log(err)
    );
    console.log("Here is the lat: " + this.state.latitude);
    console.log("Here is the long: " + this.state.longitude);
  }

  render() {
    return (
      <div>
        <button onClick={this.position} className='Filter'>Go Live</button>
      </div>
    );
  }
}

export default VendorGeo;