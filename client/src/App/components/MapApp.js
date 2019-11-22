import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { InfoWindow, Marker } from 'google-maps-react';
// import vendorSeed from '../../../../scripts/seedDB'

import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Maps';
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      vendorName:{}
    };
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    
  
    render() {
      return (
        
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={"my location"} />
          <Marker onClick = {this.onMarkerClick} name={"cd"}
position={{lat: 32.715736, lng: -117.161087}} />
<Marker onClick = {this.onMarkerClick} name={'here'}
position={{lat: 32.7560, lng: -117.161087}} />
<Marker onClick = {this.onMarkerClick} name={'here'}
position={{lat: 32.842674, lng: -117.257767}} />

 
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcVj1DhyIDz72KxCdYdlyYfeYn01e_SAw'
})(MapContainer);